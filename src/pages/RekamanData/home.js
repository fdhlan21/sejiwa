import { View, Text, ScrollView, Image, ActivityIndicator } from 'react-native';
import React, { useState, useEffect, useCallback } from 'react';
import { colors, fonts } from '../../utils';
import { MyGap, MyHeader } from '../../components';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import axios from 'axios';
import { getData, getRekamanDataPasien } from '../../utils/localStorage';
import { useFocusEffect } from '@react-navigation/native';  // Import useFocusEffect

export default function HomeRekamanData({ navigation, route }) {
    const { pasienId } = route.params; // Dapatkan ID pasien dari parameter
    const [rekamanData, setRekamanData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null); // Menyimpan data pengguna yang sedang login
    const formatTanggal = (tanggal) => {
        const bulan = [
            "Januari", "Februari", "Maret", "April", "Mei", "Juni",
            "Juli", "Agustus", "September", "Oktober", "November", "Desember"
        ];
    
        const dateObj = new Date(tanggal);
        const day = dateObj.getDate();
        const month = bulan[dateObj.getMonth()];
        const year = dateObj.getFullYear();
    
        return `${day} ${month} ${year}`;
    };
    
    // Fungsi untuk mengambil data rekaman
    const fetchRekamanData = useCallback(() => {
        setLoading(true); // Set loading true saat fetching data

        // Ambil data pengguna dari localStorage
        getData('user').then(userData => {
            if (userData) {
                setUser(userData); // Simpan data pengguna ke state
                // Ambil data rekaman berdasarkan pasienId dan user_id
                axios.get(`${getRekamanDataPasien}?pasien_id=${pasienId}&user_id=${userData.id}`)
                    .then(response => {
                        setRekamanData(response.data);  // Simpan data rekaman di state
                        setLoading(false);  // Matikan loading ketika data sudah diambil
                    })
                    .catch(error => {
                        console.error("Error fetching rekaman data:", error);
                        setLoading(false);
                    });
            } else {
                setLoading(false);
                console.log('No user data found');
            }
        }).catch(err => {
            setLoading(false);
            console.error("Error fetching user data:", err);
        });
    }, [pasienId]);

    // Panggil fetchRekamanData saat halaman ini fokus
    useFocusEffect(
        useCallback(() => {
            fetchRekamanData();
        }, [fetchRekamanData])
    );

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.background }}>
                <ActivityIndicator size="large" color={colors.primary} />
            </View>
        );
    }

    return (
        <View style={{
            flex: 1,
            backgroundColor: colors.background,
        }}>
            <View>
                <MyHeader onPress={() => navigation.navigate("InfoPasien")} title="Rekaman / Data Saat Ini" />
            </View>
            <ScrollView>
                <View style={{ padding: 10 }}>
                    {rekamanData.length > 0 ? (
                        rekamanData.map((rekaman, index) => (
                            <TouchableWithoutFeedback key={index} onPress={() => navigation.navigate("HasilRekamanData" , {rekamanId: rekaman.id})}>
                            <View style={{
                                backgroundColor: colors.white,
                                borderRadius: 10,
                                padding: 15,
                                marginBottom: 10,
                                shadowColor: '#000',
                                shadowOpacity: 0.1,
                                shadowOffset: { width: 0, height: 2 },
                                shadowRadius: 8,
                                elevation: 5,
                            }}>
                                <Text style={{ fontSize: 16, fontFamily: fonts.primary[600], color: colors.primary, marginBottom: 10 }}>
                                    Hasil Rekaman / Data Saat Ini :
                                </Text>
                                <Text style={{ fontSize: 24, fontFamily: fonts.primary[700], color: colors.primary, marginBottom: 10 }}>
                                    {rekaman.hasil === 'Terkontrol' ? 'Terkontrol' : 'Tidak Terkontrol'}
                                </Text>
                                <View style={{ alignItems: 'center', marginBottom: 10 }}>
                                    <Image
                                        source={rekaman.hasil === 'Terkontrol' ? require('../../assets/icon_done.png') : require('../../assets/not_done.png')}
                                        style={{ width: 50, height: 50 }}
                                    />
                                </View>
                                <Text style={{ fontSize: 14, fontFamily: fonts.primary[400], color: colors.gray }}>
    {formatTanggal(rekaman.created_at)}
</Text>




                            </View>
                            </TouchableWithoutFeedback>
                           
                        ))
                    ) : (
                        <Text style={{ fontSize: 16, fontFamily: fonts.primary[600], color: colors.primary, textAlign: 'center' }}>
                            Belum ada rekaman data untuk pasien ini.
                        </Text>
                    )}
                </View>
            </ScrollView>

            <View style={{
                padding: 20,
                flexDirection: 'row',
                justifyContent: "flex-end"
            }}>
                {/* Navigasi ke halaman RekamanData dengan membawa pasienId */}
                <TouchableWithoutFeedback onPress={() => navigation.navigate("RekamanData", { pasienId })}>
                    <View style={{ padding: 10 }}>
                        <Image style={{
                            width: 50,
                            height: 50
                        }} source={require('../../assets/add.png')} />
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </View>
    );
}
