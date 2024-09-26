import { View, Text, SafeAreaView, ScrollView, TouchableWithoutFeedback, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { MyCalendar, MyGap, MyHeader, MyInput, MyPicker } from '../../components';
import { colors, fonts } from '../../utils';
import { api_token, editPasien, getData, MYAPP, pasien, storeData, getdataPasien } from '../../utils/localStorage';
import axios from 'axios';
import { showMessage } from 'react-native-flash-message';

export default function EditDataPasien({ navigation }) {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [kirim, setKirim] = useState({
        user_id: '',
        api_token: api_token,
        nama_lengkap: '',
        jenis_kelamin: '',
        tanggal_lahir: '',
        alamat_lengkap: '',
        diagnosis: '',
    });

    useEffect(() => {
        const __getDataPasien = async () => {
            const user = await getData('user'); // Ambil data user yang benar
            if (user && user.id) {
                setKirim(prev => ({ ...prev, user_id: user.id })); // Set user_id
                try {
                    const response = await axios.post(getdataPasien, {
                        user_id: user.id, // Menggunakan user_id yang benar
                    });
                    console.log("Data pasien response:", response.data); // Logging untuk melihat respon

                    if (response.data) {
                        const dataPasien = response.data;
                        setKirim({
                            user_id: user.id, // Pastikan user_id juga di-set kembali
                            api_token: api_token,
                            nama_lengkap: dataPasien.nama_lengkap || '',
                            jenis_kelamin: dataPasien.jenis_kelamin || '',
                            tanggal_lahir: dataPasien.tanggal_lahir ? new Date(dataPasien.tanggal_lahir) : '',
                            alamat_lengkap: dataPasien.alamat_lengkap || '',
                            diagnosis: dataPasien.diagnosis || '',
                        });
                    }
                } catch (error) {
                    console.error("Error fetching patient data:", error);
                    showMessage({
                        type: "default",
                        message: 'Gagal mengambil data pasien.',
                        backgroundColor: colors.danger,
                    });
                }
            } else {
                console.error("User not found or invalid user ID.");
            }
        };
        __getDataPasien();
    }, []);

    const handleDateChange = date => {
        setKirim({ ...kirim, tanggal_lahir: date });
    };

    const simpanDataPasien = () => {
        if (Object.values(kirim).some(value => value.length === 0)) {
            showMessage({
                type: "default",
                color: colors.white,
                message: 'Tolong isi semua field!',
                backgroundColor: colors.danger,
            });
            return;
        }

        const payload = { ...kirim };
        axios
            .post(pasien, payload)
            .then(response => {
                console.log(response.data.message);
                if (response.status === 200) {
                    const successMessage = response.data.message.includes("berhasil diperbarui") ? "Data berhasil diperbarui!" : "Berhasil menambahkan pasien!";
                    showMessage({
                        type: "default",
                        color: colors.white,
                        message: successMessage,
                        backgroundColor: colors.success,
                    });
                    navigation.replace("DataPasien");
                    storeData('datapasien', response.data);
                }
            })
            .catch(err => {
                console.error(err.response.data.message);
                Alert.alert(MYAPP, "Terjadi Kesalahan");
            });
    };

    return (
        <SafeAreaView style={{ flex: 1, width: "100%", height: "100%" }}>
            <View>
                <MyHeader onPress={() => navigation.navigate("DataPasien")} title="Edit Data Pasien" />
            </View>

            <ScrollView>
                <View style={{ padding: 20 }}>
                    <MyInput
                        value={kirim.nama_lengkap}
                        onChangeText={(value) => setKirim({ ...kirim, nama_lengkap: value })}
                        label="Nama Lengkap Pasien"
                        placeholder="Isi Nama Lengkap"
                    />
                    <MyGap jarak={10} />

                    <MyPicker
                        data={[
                            { label: 'Perempuan', value: 'perempuan' },
                            { label: 'Laki-laki', value: 'laki-laki' }
                        ]}
                        label="Jenis Kelamin"
                        placeholder="Pilih Jenis Kelamin"
                        value={kirim.jenis_kelamin}
                        onValueChange={(value) => setKirim({ ...kirim, jenis_kelamin: value })}
                    />
                    <MyGap jarak={10} />

                    <MyCalendar
                        label="Tanggal Lahir"
                        placeholder="Pilih Tanggal"
                        date={kirim.tanggal_lahir || new Date()}
                        onDateChange={handleDateChange}
                        value={kirim.tanggal_lahir || new Date()}
                    />
                    <MyGap jarak={10} />

                    <MyInput
                        value={kirim.alamat_lengkap}
                        onChangeText={(value) => setKirim({ ...kirim, alamat_lengkap: value })}
                        label="Alamat Lengkap"
                        placeholder="Isi Alamat Lengkap"
                    />
                    <MyGap jarak={10} />

                    <MyInput
                        value={kirim.diagnosis}
                        onChangeText={(value) => setKirim({ ...kirim, diagnosis: value })}
                        label="Diagnosis Medis"
                        placeholder="Isi Diagnosis Medis"
                    />
                    <MyGap jarak={10} />
                </View>
            </ScrollView>

            <View style={{ padding: 20 }}>
                <TouchableWithoutFeedback onPress={simpanDataPasien}>
                    <View style={{ padding: 10, backgroundColor: colors.primary, borderRadius: 50 }}>
                        <Text style={{ fontFamily: fonts.primary[600], textAlign: 'center', color: colors.white }}>
                            Simpan
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </SafeAreaView>
    );
}
