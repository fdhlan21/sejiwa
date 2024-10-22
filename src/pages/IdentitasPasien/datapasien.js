import { View, Text, ScrollView, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Color, colors, fonts } from '../../utils';
import { MyGap, MyHeader } from '../../components';
import { getData, getdataPasien } from '../../utils/localStorage';  // Menggunakan localStorage atau database lokal
import moment from 'moment';
import { Image } from 'react-native';
import axios from 'axios';

export default function DataPasien({ navigation }) {
  const [dataPasien, setDataPasien] = useState([]);  // Array untuk menampung banyak data pasien
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});

  const __getUser = () => {
    getData('user').then(u => {
      if (u && u.id) {
        setUser(u);

        // Memanggil API untuk mendapatkan data pasien berdasarkan user_id (akun kader yang sedang login)
        axios.post(getdataPasien, { user_id: u.id })  // Mengirimkan user_id untuk mendapatkan data pasien
          .then(res => {
            if (res.data && Array.isArray(res.data)) {
              setDataPasien(res.data);  // Pastikan setDataPasien menerima array dari server
            } else {
              setDataPasien([]);  // Jika tidak ada data pasien yang ditemukan
            }
            setLoading(false);
          })
          .catch(err => {
            console.error("Error fetching patient data:", err);
            setLoading(false);
          });
      } else {
        console.log("User data not found or user ID is undefined.");
        setLoading(false);
      }
    }).catch(err => {
      console.error("Error fetching user data:", err);
      setLoading(false);
    });
  };

  useEffect(() => {
    __getUser();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color={colors.primary} style={{ flex: 1 }} />;
  }

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <MyHeader onPress={() => navigation.navigate("MainApp")} title="Data Pasien" />
      <ScrollView>
        <View style={{ padding: 20 }}>
          {dataPasien.length > 0 ? (
            dataPasien.map((pasien, index) => (
              <TouchableOpacity
                key={index}  // Setiap item harus memiliki key unik
                style={styles.card}
                onPress={() => navigation.navigate("InfoPasien", { pasien })}
              >
                <View style={styles.cardContent}>
                  <Text style={styles.label}>Nama Lengkap Pasien:</Text>
                  <Text style={styles.value}>{pasien.nama_lengkap}</Text>
                </View>
                <MyGap jarak={5} />
                <View style={styles.cardContent}>
                  <Text style={styles.label}>Jenis Kelamin:</Text>
                  <Text style={styles.value}>{pasien.jenis_kelamin}</Text>
                </View>
                <MyGap jarak={5} />
                <View style={styles.cardContent}>
                  <Text style={styles.label}>Tanggal Lahir:</Text>
                  <Text style={styles.value}>{moment(pasien.tanggal_lahir).format("D MMMM YYYY")}</Text>
                </View>
                <MyGap jarak={5} />
                <View style={styles.cardContent}>
                  <Text style={styles.label}>Alamat Lengkap:</Text>
                  <Text style={styles.value}>{pasien.alamat_lengkap}</Text>
                </View>
                <MyGap jarak={5} />
                <View style={styles.cardContent}>
                  <Text style={styles.label}>Diagnosis:</Text>
                  <Text style={styles.value}>{pasien.diagnosis}</Text>
                </View>
              </TouchableOpacity>
            ))
          ) : (
            <Text style={{ fontFamily: fonts.primary[600], color: colors.primary }}>Belum ada data pasien.</Text>
          )}
        </View>
      </ScrollView>

      <View style={{ padding: 20, flexDirection: "row", justifyContent: "flex-end" }}>
        <TouchableOpacity onPress={() => navigation.navigate('addDataPasien')}>
          <Image style={styles.addButton} source={require('../../assets/add.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 15,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: Color.blueGray[500],
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontFamily: fonts.primary[600],
    fontSize: 14,
    color: colors.primary,
  },
  value: {
    fontFamily: fonts.primary[400],
    fontSize: 14,
    color: colors.primary,
  },
  addButton: {
    height: 70,
    width: 70,
  },
});
