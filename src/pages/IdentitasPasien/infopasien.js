import { View, Text, ScrollView, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import { Color, colors, fonts } from '../../utils';
import { MyHeader } from '../../components';
import moment from 'moment';

export default function InfoPasien({ route, navigation }) {
  // Mengambil data pasien dari parameter navigasi
  const { pasien } = route.params;

  return (
    <View style={{
      flex: 1,
      backgroundColor: colors.background,
    }}>
      {/* Header */}
      <View>
        <MyHeader title="Data Pasien" />
      </View>
      
      <ScrollView>
        <View style={{ padding: 20 }}>
          <View style={styles.row}>
            <Text style={styles.label}>Nama Lengkap Pasien:</Text>
            <Text style={styles.value}>{pasien.nama_lengkap}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Jenis Kelamin:</Text>
            <Text style={styles.value}>{pasien.jenis_kelamin}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Tanggal Lahir:</Text>
            <Text style={styles.value}>{moment(pasien.tanggal_lahir).format('D MMMM YYYY')}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Alamat Lengkap:</Text>
            <Text style={styles.value}>{pasien.alamat_lengkap}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Diagnosis:</Text>
            <Text style={styles.value}>{pasien.diagnosis}</Text>
          </View>

       
        </View>
        
      </ScrollView>
      <View style={{
        padding:20
      }}>
<TouchableWithoutFeedback onPress={() => navigation.navigate("HomeRekamanData", { pasienId: pasien.id })}>
                        <View style={{
                            padding:10,
                            backgroundColor:colors.primary,
                            borderWidth:5,
                            borderColor:Color.blueGray[400],
                            borderRadius:30
                        }}>
                                <Text style={{
                                    fontFamily:fonts.primary[600],
                                    color:colors.white,
                                    fontSize:20,
                                    textAlign:'center'
                                }}>Rekaman / Data Saat Ini</Text>
                        </View>
                    </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    borderBottomWidth:0.5,
    padding:10,
    

  },
  label: {
    fontFamily: fonts.primary[600],
    fontSize: 15,
    color: colors.primary,
  },
  value: {
    fontFamily: fonts.primary[600],
    fontSize: 15,
    color: colors.primary,
  },
});
