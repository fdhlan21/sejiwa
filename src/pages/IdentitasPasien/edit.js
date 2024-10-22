import { View, Text, SafeAreaView, ScrollView, TouchableWithoutFeedback, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { MyCalendar, MyGap, MyHeader, MyInput, MyPicker } from '../../components';
import { colors, fonts } from '../../utils';
import { storeData, getData, api_token, pasien } from '../../utils/localStorage';
import { showMessage } from 'react-native-flash-message';
import MyLoading from '../../components/MyLoading';
import axios from 'axios';


export default function addDataPasien({ navigation }) {
    const [kirim, setKirim] = useState({
        api_token: api_token,
        user_id: '', // Tambahkan user_id di state
        nama_lengkap: '',
        jenis_kelamin: 'perempuan',
        tanggal_lahir: new Date(),
        alamat_lengkap: '',
        diagnosis: '',
    });
    const [loading, setLoading] = useState(false); // Tambahkan state loading
    useEffect(() => {
        // Ambil user_id dari localStorage
        getData('user').then(user => {
            setKirim(prevState => ({ ...prevState, user_id: user.id })); // Simpan user_id di state
        });
    }, []);

    const handleDateChange = (date) => {
        console.log("Tanggal yang dipilih:", date);
        setKirim((prevState) => ({ ...prevState,  tanggal_lahir: date }));
    };

   const simpanDataPasien = () => {
        // Validasi input
        const requiredFields = ['nama_lengkap', 'alamat_lengkap', 'diagnosis'];
        const isAllFieldsFilled = requiredFields.every(field => kirim[field] && kirim[field].length > 0);

        if (!isAllFieldsFilled) {
            showMessage({
                type: "default",
                color: colors.white,
                message: 'Tolong isi semua field yang wajib!',
                backgroundColor: colors.danger,
            });
            return;
        }

        // Kirim data ke server
        axios
            .post(pasien, kirim)
            .then(response => {
                showMessage({
                    message: "Berhasil menambahkan pasien!",
                    type: "success",
                });
                navigation.replace("DataPasien");
            })
            .catch(err => {
                console.error(err.response?.data?.message);
                Alert.alert("Gagal", "Terjadi kesalahan saat menyimpan data pasien.");
            });
    };

    return (
        <SafeAreaView style={{ flex: 1, width: "100%", height: "100%" }}>
            <View>
                <MyHeader onPress={() => navigation.navigate("DataPasien")} title="Tambah Data Pasien" />
            </View>
            {loading && <MyLoading />}

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
                        label="Tanggal Lahir (Opsional)"
                        placeholder="Pilih Tanggal"
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
