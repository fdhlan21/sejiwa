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
    const [selectedPolaMakan, setSelectedPolaMakan] = useState([]);
    const [selectedHasil, setSelectedHasil] = useState('Terkontrol');  // Set default nilai
    const [showResult, setShowResult] = useState(false); // State untuk menampilkan hasil
    const [hasilKategori, setHasilKategori] = useState('');
    const [user, setUser] = useState(null); // Tambahkan state user
    
    const [loading, setLoading] = useState(false); // Tambahkan state loading

    const toggleGejala = (value) => {
        if (selectedGejala.includes(value)) {
            setSelectedGejala(selectedGejala.filter(item => item !== value));
        } else {
            setSelectedGejala([...selectedGejala, value]);
        }
    };

    const togglePolaMakan = (value) => {
        if (selectedPolaMakan.includes(value)) {
            setSelectedPolaMakan(selectedPolaMakan.filter(item => item !== value));
        } else {
            setSelectedPolaMakan([...selectedPolaMakan, value]);
        }
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
        console.log("Tanggal yang dipilih:", date);  // Debugging untuk memastikan tanggal dipilih
    
        // Jika date adalah string, konversi ke objek Date
        if (typeof date === 'string') {
            const parsedDate = new Date(date);
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
            // Format tanggal sebelum mengirim
            tanggal_rawat_inap: tanggalRawatInapFinal ? tanggalRawatInapFinal.toISOString().split('T')[0] : null,
            aktivitas: aktivitas,
            pola_makan: selectedPolaMakan.join(', '),
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

                // Set kategori hasil sesuai dengan pilihan (Terkontrol/Tidak Terkontrol)
                setHasilKategori(selectedHasil);
                setShowResult(true); // Menampilkan hasil
            })
            .catch(error => {
                setLoading(false);
                console.error("Error saving rekaman data:", error);
                Alert.alert("Gagal", "Terjadi kesalahan saat menyimpan data.");
            });
    };

    if (showResult) {
        return (
            <View style={{ flex: 1, backgroundColor: colors.background, padding: 10 }}>
                <ScrollView>
                    <Text style={{ fontSize: 20, fontFamily: fonts.primary[600], color: colors.primary, textAlign: "center", marginTop: 20 }}>
                        Kamu termasuk dalam kategori:
                    </Text>
                    <Text style={{ fontSize: 28, fontFamily: fonts.primary[700], color: colors.primary, textAlign: "center" }}>
                        {hasilKategori}  {/* Menampilkan hasil (Terkontrol/Tidak Terkontrol) */}
                    </Text>

                    <View style={{ padding: 20, alignItems: 'center', marginTop: '10%' }}>
                        {hasilKategori === 'Terkontrol' ? (
                            <Image style={{ width: 173, height: 173 }} source={require('../../assets/icon_done.png')} />
                        ) : (
                            <Image style={{ width: 173, height: 173 }} source={require('../../assets/not_done.png')} />
                        )}
                    </View>
                </ScrollView>

                <View style={{ padding: 20 }}>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate('HomeRekamanData')}>
                        <View style={{ padding: 10, backgroundColor: colors.primary, borderRadius: 50 }}>
                            <Text style={{ fontSize: 18, fontFamily: fonts.primary[600], color: colors.white, textAlign: 'center' }}>
                                Selesai
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        );
    }

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
                            <MyRadio label="Ya" selected={isRawatInap === "Ya"} onPress={() => { setIsRawatInap("Ya"); setSelectedDate(null); }} />
                            {isRawatInap === "Ya" && (
                                <MyCalendar
                                    label="Pilih Tanggal Rawat Inap"
                                    selectedDate={selectedDate}  // Nilai yang diambil dari state
                                    onDateChange={handleDateChange}  // Panggil fungsi saat tanggal berubah
                                    value={selectedDate || new Date()}  // Default ke tanggal yang dipilih atau tanggal sekarang
                                />
                            )}
                            <MyRadio label="Tidak" selected={isRawatInap === "Tidak"} onPress={() => { setIsRawatInap("Tidak"); setSelectedDate(null); }} />
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
                            <MyRadio label="Sehari 3x" selected={selectedPolaMakan.includes("Sehari 3x")} onPress={() => togglePolaMakan("Sehari 3x")} />
                            <MyRadio label="Sehari 2x" selected={selectedPolaMakan.includes("Sehari 2x")} onPress={() => togglePolaMakan("Sehari 2x")} />
                            <MyRadio label="Kadang-kadang" selected={selectedPolaMakan.includes("Kadang-kadang")} onPress={() => togglePolaMakan("Kadang-kadang")} />
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
