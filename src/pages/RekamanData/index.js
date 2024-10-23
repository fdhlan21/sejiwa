import { View, Text, ScrollView, TextInput, Alert, Image } from 'react-native';
import React, { useState } from 'react';
import { colors, fonts } from '../../utils';
import { MyGap, MyHeader, MyRadio, MyCalendar, MyPicker, MyInput } from '../../components';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import axios from 'axios';
import { showMessage } from 'react-native-flash-message';
import { getData, rekamanDataPasien } from '../../utils/localStorage';
import MyLoading from '../../components/MyLoading';
import { useEffect } from 'react';

export default function RekamanData({ route, navigation }) {
    const { pasienId } = route.params; // Ambil pasien ID dari parameter navigasi
    const [selectedGejala, setSelectedGejala] = useState([]);
    const [selectedKepatuhan, setSelectedKepatuhan] = useState(null);
    const [isRawatInap, setIsRawatInap] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [aktivitas, setAktivitas] = useState('');
    const [selectedPolaMakan, setSelectedPolaMakan] = useState('');  // Awalnya kosong
    const [selectedHasil, setSelectedHasil] = useState('Terkontrol');  // Set default nilai
    const [user, setUser] = useState(null); // Tambahkan state user
    
    const [loading, setLoading] = useState(false); // Tambahkan state loading

    const toggleGejala = (value) => {
        if (selectedGejala.includes(value)) {
            setSelectedGejala(selectedGejala.filter(item => item !== value));
        } else {
            setSelectedGejala([...selectedGejala, value]);
        }
    };

 
const handlePolaMakanChange = (value) => {
    setSelectedPolaMakan(value);  // Set langsung ke nilai yang dipilih
};

    // Ambil user dari local storage
    useEffect(() => {
        getData('user').then(u => {
            if (u) {
                setUser(u); // Simpan user ke state
                setLoading(false); // Matikan loading setelah user ditemukan
            } else {
                Alert.alert("Error", "Data pengguna tidak ditemukan");
                setLoading(false); // Matikan loading walaupun error
            }
        }).catch(err => {
            console.error("Error fetching user data:", err);
            setLoading(false);
        });
    }, []);

    const handleDateChange = (date) => {
        // Jika date adalah string, coba parsing ke objek Date
        if (typeof date === 'string') {
            const parsedDate = new Date(date); // Parsing string ke objek Date
            if (!isNaN(parsedDate)) {
                setSelectedDate(parsedDate);  // Simpan tanggal yang dikonversi
                console.log("Tanggal valid setelah dikonversi:", parsedDate);
            } else {
                console.error("Gagal mengonversi string ke Date:", date);
            }
        } else if (date instanceof Date && !isNaN(date)) {
            setSelectedDate(date);  // Simpan tanggal yang valid
        } else {
            console.error("Tanggal tidak valid:", date);
        }
    };
    
    

    const simpanRekamanData = () => {
        const tanggalRawatInapFinal = isRawatInap === "Ya" && !selectedDate ? new Date() : selectedDate;
        // Persiapkan data yang akan disimpan
        const rekamanData = {
            pasien_id: pasienId,
            user_id: user.id,
            gejala_psikotik: selectedGejala.join(', '),
            kepatuhan_obat: selectedKepatuhan,
            rawat_inap: isRawatInap,
            tanggal_rawat_inap: tanggalRawatInapFinal ? tanggalRawatInapFinal.toISOString().split('T')[0] : null,
            aktivitas: aktivitas,
            pola_makan: selectedPolaMakan,
            hasil: selectedHasil || 'Terkontrol',  // Pastikan hasil tidak null, default 'Terkontrol'
        };

        console.log("Data rekaman yang akan dikirim:", rekamanData);
        // Kirim data ke server
        setLoading(true);
        axios.post(rekamanDataPasien, rekamanData)
            .then(response => {
                console.log(response.data);
                showMessage({
                    message: "Rekaman data berhasil disimpan!",
                    type: "success",
                });
                // Lakukan navigasi ke halaman Home Rekaman Data
                navigation.replace('HomeRekamanData', { pasienId });
            })
            .catch(error => {
                setLoading(false);
                console.error("Error saving rekaman data:", error);
                Alert.alert("Gagal", "Terjadi kesalahan saat menyimpan data.");
            });
    };

    return (
        <View style={{
            flex: 1,
            backgroundColor: colors.background,
        }}>
            <View>
                <MyHeader onPress={() => navigation.navigate("HomeRekamanData")} title="Rekaman / Data Saat Ini" />
            </View>
            {loading && <MyLoading />}
            <ScrollView>
                <View style={{ padding: 20 }}>
                    {/* NOMOR 1 */}
                    <View>
                        <Text style={{
                            fontFamily: fonts.primary[400],
                            color: colors.primary,
                            fontSize: 15,
                        }}>1. Gejala Psikotik yang muncul</Text>
                        <View style={{ padding: 10 }}>
                            <MyRadio label="Menyendiri" selected={selectedGejala.includes("Menyendiri")} onPress={() => toggleGejala("Menyendiri")} />
                            <MyRadio label="Sulit Tidur" selected={selectedGejala.includes("Sulit Tidur")} onPress={() => toggleGejala("Sulit Tidur")} />
                            <MyRadio label="Cemas" selected={selectedGejala.includes("Cemas")} onPress={() => toggleGejala("Cemas")} />
                            <MyRadio label="Kontak Mata Kurang" selected={selectedGejala.includes("Kontak Mata Kurang")} onPress={() => toggleGejala("Kontak Mata Kurang")} />
                            <MyRadio label="Gangguan Mood" selected={selectedGejala.includes("Gangguan Mood")} onPress={() => toggleGejala("Gangguan Mood")} />
                        </View>
                    </View>

                    <MyGap jarak={10} />

                    {/* NOMOR 2 */}
                    <View>
                        <Text style={{
                            fontFamily: fonts.primary[400],
                            color: colors.primary,
                            fontSize: 15,
                        }}>2. Kepatuhan Minum Obat</Text>
                        <View style={{ padding: 10 }}>
                            <MyRadio label="Selalu Minum Obat" selected={selectedKepatuhan === "Selalu Minum Obat"} onPress={() => setSelectedKepatuhan("Selalu Minum Obat")} />
                            <MyRadio label="Tidak Minum Obat" selected={selectedKepatuhan === "Tidak Minum Obat"} onPress={() => setSelectedKepatuhan("Tidak Minum Obat")} />
                        </View>
                    </View>

                    <MyGap jarak={10} />

                    {/* NOMOR 3 */}
                    <View>
    <Text style={{
        fontFamily: fonts.primary[400],
        color: colors.primary,
        fontSize: 15,
    }}>3. Pernah Rawat Inap?</Text>
    <View style={{ padding: 10 }}>
        <MyRadio label="Ya" selected={isRawatInap === "Ya"} onPress={() => { 
            setIsRawatInap("Ya");
            setSelectedDate(null); // Set null saat pertama kali memilih "Ya" agar pengguna harus memilih tanggal
        }} />
        {isRawatInap === "Ya" && (
            <MyCalendar
                label="Pilih Tanggal Rawat Inap"
                selectedDate={selectedDate}
                onDateChange={(date) => handleDateChange(date)}  // Memastikan fungsi handleDateChange dipanggil
                value={selectedDate || new Date()}  // Gunakan selectedDate jika sudah dipilih, jika belum pakai tanggal saat ini
            />
        )}
        <MyRadio label="Tidak" selected={isRawatInap === "Tidak"} onPress={() => { 
            setIsRawatInap("Tidak");
            setSelectedDate(null);  // Reset selectedDate jika memilih "Tidak"
        }} />
    </View>
</View>


                    <MyGap jarak={10} />

                    {/* NOMOR 4 */}
                    <View>
                        <Text style={{
                            fontFamily: fonts.primary[400],
                            color: colors.primary,
                            fontSize: 15,
                        }}>4. Aktivitas sehari-hari</Text>
                        <MyInput placeholder="Isi Aktivitas Sehari-hari" value={aktivitas} onChangeText={setAktivitas} />
                    </View>

                    <MyGap jarak={10} />

                    {/* NOMOR 5 */}
                    <View>
    <Text style={{
        fontFamily: fonts.primary[400],
        color: colors.primary,
        fontSize: 15,
    }}>5. Pola Makan</Text>
    <View style={{ padding: 10 }}>
        {/* Radio-like functionality untuk Pola Makan */}
        <MyRadio
            label="Sehari 3x"
            selected={selectedPolaMakan === "Sehari 3x"}
            onPress={() => handlePolaMakanChange("Sehari 3x")}
        />
        <MyRadio
            label="Sehari 2x"
            selected={selectedPolaMakan === "Sehari 2x"}
            onPress={() => handlePolaMakanChange("Sehari 2x")}
        />
        <MyRadio
            label="Kadang-kadang"
            selected={selectedPolaMakan === "Kadang-kadang"}
            onPress={() => handlePolaMakanChange("Kadang-kadang")}
        />
    </View>
</View>


                    <MyGap jarak={10} />

                    {/* Hasil */}
                    <View>
                        <MyPicker
                            label="Hasil"
                            placeholder="Pilih Hasil"
                            data={[
                                { label: 'Terkontrol', value: 'Terkontrol' },
                                { label: 'Tidak Terkontrol', value: 'Tidak Terkontrol' }
                            ]}
                            value={selectedHasil}
                            onValueChange={(value) => setSelectedHasil(value)}
                        />
                    </View>

                    <MyGap jarak={10} />

                    <View style={{ padding: 10 }}>
                        <TouchableWithoutFeedback onPress={simpanRekamanData}>
                            <View style={{ padding: 20, backgroundColor: colors.primary, borderRadius: 50 }}>
                                <Text style={{ fontFamily: fonts.primary[700], fontSize: 15, textAlign: "center", color: colors.white }}>Simpan</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}
