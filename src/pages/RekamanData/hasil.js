import { View, Text, ScrollView, ActivityIndicator, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Color, colors, fonts } from '../../utils';
import { MyCalendar, MyGap, MyHeader, MyRadio } from '../../components';
import axios from 'axios';
import { getData, getHasilRekamanDataPasien, getRekamanDataPasien, rekamanDataPasien } from '../../utils/localStorage';

export default function HasilRekamanData({ route, navigation }) {
    const { rekamanId } = route.params;  // Ambil ID rekaman dari parameter navigasi
    const [rekaman, setRekaman] = useState(null);
    const [loading, setLoading] = useState(true);
    const [userId, setUserId] = useState(null); // State untuk user_id

      // Mendapatkan user_id dari localStorage saat komponen di-mount
      useEffect(() => {
        getData('user').then(user => {
            if (user && user.id) {
                setUserId(user.id);  // Simpan user_id dari user yang login
                fetchRekamanData(user.id);  // Ambil data rekaman setelah user_id ditemukan
            } else {
                console.error('User ID not found');
            }
        }).catch(error => {
            console.error('Error getting user data:', error);
        });
    }, []);

    const fetchRekamanData = (userId) => {
        // Panggil API untuk mendapatkan hasil rekaman berdasarkan rekamanId dan userId
        axios.get(`${getHasilRekamanDataPasien}?rekaman_id=${rekamanId}&user_id=${userId}`)
            .then(response => {
                setRekaman(response.data);  // Simpan hasil rekaman di state
                setLoading(false);  // Matikan loading setelah data diambil
            })
            .catch(error => {
                console.error("Error fetching rekaman data:", error);
                setLoading(false);
            });
    };
    
    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.background }}>
                <ActivityIndicator size="large" color={colors.primary} />
            </View>
        );
    }

    if (!rekaman) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.background }}>
                <Text style={{ fontSize: 18, fontFamily: fonts.primary[600], color: colors.primary }}>Data rekaman tidak ditemukan.</Text>
            </View>
        );
    }

    return (
        <View style={{
            flex: 1,
            backgroundColor: colors.background,
        }}>
            <MyHeader onPress={() => navigation.goBack()} title="Hasil Rekaman Data" />
            <ScrollView>
                <View style={{ padding: 20 }}>
                    {/* 1. Gejala Psikotik yang Muncul */}
                    <Text style={{ fontFamily: fonts.primary[600], fontSize: 15, color: colors.primary }}>
                        1. Gejala Psikotik yang muncul
                    </Text>
                    <View style={{ paddingLeft: 10, paddingTop: 10 }}>
                        <MyRadio label="Menyendiri" selected={rekaman.gejala_psikotik.includes("Menyendiri")} disabled />
                        <MyRadio label="Sulit Tidur" selected={rekaman.gejala_psikotik.includes("Sulit Tidur")} disabled />
                        <MyRadio label="Cemas" selected={rekaman.gejala_psikotik.includes("Cemas")} disabled />
                        <MyRadio label="Kontak Mata Kurang" selected={rekaman.gejala_psikotik.includes("Kontak Mata Kurang")} disabled />
                        <MyRadio label="Gangguan Mood" selected={rekaman.gejala_psikotik.includes("Gangguan Mood")} disabled />
                    </View>

                    <MyGap jarak={10} />

                    {/* 2. Kepatuhan Minum Obat */}
                    <Text style={{ fontFamily: fonts.primary[600], fontSize: 15, color: colors.primary }}>
                        2. Kepatuhan Minum Obat
                    </Text>
                    <View style={{ paddingLeft: 10, paddingTop: 10 }}>
                        <MyRadio label="Selalu Minum Obat" selected={rekaman.kepatuhan_obat === "Selalu Minum Obat"} disabled />
                        <MyRadio label="Tidak Minum Obat" selected={rekaman.kepatuhan_obat === "Tidak Minum Obat"} disabled />
                    </View>

                    <MyGap jarak={10} />

                    {/* 3. Pernah Rawat Inap? */}
                    <Text style={{ fontFamily: fonts.primary[600], fontSize: 15, color: colors.primary }}>
                        3. Pernah Rawat Inap?
                    </Text>
                    <View style={{ paddingLeft: 10, paddingTop: 10 }}>
                        <MyRadio label="Ya" selected={rekaman.rawat_inap === "Ya"} disabled />
                        <MyRadio label="Tidak" selected={rekaman.rawat_inap === "Tidak"} disabled />

                        {/* Tampilkan MyCalendar jika jawabannya "Ya" */}
                        {rekaman.rawat_inap === "Ya" && rekaman.tanggal_rawat_inap && (
    <MyCalendar
        label="Tanggal Rawat Inap"
        selectedDate={new Date(rekaman.tanggal_rawat_inap)}  // Pastikan menggunakan Date object yang benar
        onDateChange={() => {}}  // Tidak perlu aksi, hanya menampilkan tanggal
        value={new Date(rekaman.tanggal_rawat_inap)}  // Gunakan tanggal dari database
        disabled={true}  // Calendar hanya untuk menampilkan, tidak bisa diubah
    />
)}

                    </View>

                    <MyGap jarak={10} />

                    {/* 4. Aktivitas Sehari-hari */}
                    <Text style={{ fontFamily: fonts.primary[600], fontSize: 15, color: colors.primary }}>
                        4. Aktivitas sehari-hari
                    </Text>
                   <View style={{
                    padding:10,
                    backgroundColor: colors.white,
                    borderWidth: 1,
                    borderRadius: 20,
                    borderColor: Color.blueGray[300],
                    height:50,
                    marginTop:10,
                    marginLeft:10
                   }}>
                   <Text style={{ fontFamily: fonts.primary[600], color: colors.primary, paddingLeft: 10, fontSize:15, paddingTop:5}}> 
                        {rekaman.aktivitas || 'Tidak ada aktivitas'}
                    </Text>
                   </View>

                    <MyGap jarak={10} />

                    {/* 5. Pola Makan */}
                    <Text style={{ fontFamily: fonts.primary[600], fontSize: 15, color: colors.primary }}>
                        5. Pola Makan
                    </Text>
                    <View style={{ paddingLeft: 10, paddingTop: 10 }}>
                        <MyRadio label="Sehari 3x" selected={rekaman.pola_makan.includes("Sehari 3x")} disabled />
                        <MyRadio label="Sehari 2x" selected={rekaman.pola_makan.includes("Sehari 2x")} disabled />
                        <MyRadio label="Kadang-kadang" selected={rekaman.pola_makan.includes("Kadang-kadang")} disabled />
                    </View>

                    <MyGap jarak={10} />

                    {/* Hasil */}
                    <Text style={{ fontFamily: fonts.primary[600], fontSize: 15, color: colors.primary }}>
                        Hasil
                    </Text>
                  <View style={{
                     padding:10,
                    backgroundColor: colors.white,
                    borderWidth: 1,
                    borderRadius: 20,
                    borderColor: Color.blueGray[300],
                    height:50,
                    marginTop:10,
                    marginLeft:10,
                  }}>
                  <Text style={{ fontFamily: fonts.primary[600], fontSize: 15, color: colors.primary, paddingLeft: 10, paddingTop:5}}>
                        {rekaman.hasil || 'Belum ada hasil'}
                    </Text>
                  </View>
                </View>
            </ScrollView>
        </View>

    );
}
