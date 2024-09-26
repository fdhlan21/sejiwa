import { View, Text, ScrollView, TouchableWithoutFeedback, StyleSheet, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Color, colors, fonts } from '../../utils';
import { MyGap, MyHeader } from '../../components';
import { getData, getdataPasien } from '../../utils/localStorage';
import moment from 'moment';
import axios from 'axios';
import { showMessage } from 'react-native-flash-message';

export default function DataPasien({ navigation }) {
  const [dataPasien, setDataPasien] = useState(null);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});

  const __getUser = () => {
    getData('user').then(u => {
      if (u && u.id) {
        setUser(u);

        // Mengambil data pasien
        axios
          .post(getdataPasien, {
            id: u.id,
          })
          .then(res => {
            console.log("Data pasien yang diterima: ", res.data);
            setDataPasien(res.data);
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
      <MyHeader onPress={() => navigation.navigate("IdentitasPasien")} title="Data Pasien" />
      <ScrollView>
        <View style={{ padding: 20 }}>
          {dataPasien ? (
            <View style={{
              padding: 10,
              backgroundColor: colors.white,
              borderRadius: 20,
              borderWidth: 2,
              borderColor: Color.blueGray[500],
              marginTop: 20,
            }}>
              <Text style={{
                fontFamily: fonts.primary[600],
                fontSize: 12,
                color: colors.primary,
              }}>Nama Lengkap Pasien: {dataPasien.nama_lengkap}</Text>
              <MyGap jarak={10} />
              <Text style={{
                fontFamily: fonts.primary[600],
                fontSize: 12,
                color: colors.primary,
              }}>Jenis Kelamin: {dataPasien.jenis_kelamin}</Text>
              <MyGap jarak={10} />
              <Text style={{
                fontFamily: fonts.primary[600],
                fontSize: 12,
                color: colors.primary,
              }}>Tanggal Lahir: {moment(dataPasien.tanggal_lahir).format("YYYY-MM-DD")}</Text>
              <MyGap jarak={10} />
              <Text style={{
                fontFamily: fonts.primary[600],
                fontSize: 12,
                color: colors.primary,
              }}>Alamat Lengkap: {dataPasien.alamat_lengkap}</Text>
              <MyGap jarak={10} />
              <Text style={{
                fontFamily: fonts.primary[600],
                fontSize: 12,
                color: colors.primary,
              }}>Diagnosis: {dataPasien.diagnosis}</Text>
            </View>
          ) : (
            <Text style={{ fontFamily: fonts.primary[600], color: colors.primary }}>Belum ada data pasien.</Text>
          )}
        </View>
      </ScrollView>

      <View style={{ padding: 20 }}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('EditDataPasien')}>
          <View style={{
            padding: 10,
            backgroundColor: colors.primary,
            borderRadius: 50,
          }}>
            <Text style={{
              fontFamily: fonts.primary[600],
              textAlign: 'center',
              color: colors.white,
            }}>
              Edit Identitas Pasien
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  card: {
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});
