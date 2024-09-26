import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { colors, fonts } from '../../utils';
import { MyButton, MyGap, MyHeader, MyImageUpload, MyInput, MyPicker } from '../../components';

export default function PrintHijab({ navigation }) {
  const [selectedKain, setSelectedKain] = useState('');
  const [selectedDesain, setSelectedDesain] = useState('');

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <View style={{ flex: 1 }}>
        <MyHeader title="Print Hijab" />

        <ScrollView>
          <View style={{ padding: 20 }}>

            {/* KAIN */}
            <MyPicker
              label="Kain"
              data={[
                { label: "Pilih disini", value: " " },
                { label: "Tidak Bawa Kain", value: "Tidak Bawa Kain" },
                { label: "Bawa Kain Sendiri", value: "Bawa Kain Sendiri" },
              ]}
              value={selectedKain}
              onValueChange={(value) => setSelectedKain(value)}
            />

            {selectedKain === 'Tidak Bawa Kain' && (
              <View style={{ marginTop: 10 }}>
                <Text style={{
                  fontFamily: 'Poppins-Regular',
                  textAlign: 'center',
                  fontStyle: 'italic'
                }}>
               Kain yang digunakan adalah Voal
                </Text>
                <MyGap jarak={20} />
              </View>
            )}

            <MyGap jarak={20} />

            {/* Ukuran Baju Jersey */}
            <MyPicker
              label="Ukuran Baju Jersey"
              data={[
                { label: "Pilih disini", value: " " },
                { label: "110 x 110 cm", value: "110x110cm" },
                { label: "115 x 115", value: "115x115" },
                { label: "120 x 120", value: "120x120" },
              ]}
            />

            <MyGap jarak={20} />

            {/* DESAIN */}
            <MyPicker
              label="Desain"
              data={[
                { label: "Pilih disini", value: " " },
                { label: "Sudah ada desain", value: "Sudah ada desain" },
                { label: "Belum ada desain", value: "Belum ada desain" },
              ]}
              value={selectedDesain}
              onValueChange={(value) => setSelectedDesain(value)}
            />

            {/* Kondisi untuk menampilkan input berdasarkan pilihan kain dan desain */}
            {(selectedKain === 'Tidak Bawa Kain' || selectedKain === 'Bawa Kain Sendiri') && (
              <View style={{ marginTop: 20 }}>
                {selectedDesain === 'Sudah ada desain' && (
                  <>
                    {/* Upload File untuk desain */}
                    <MyImageUpload label="Upload Desain" />
                    <MyGap jarak={20} />

                    {/* Alamat Pengiriman */}
                    <MyPicker label="Provinsi" data={[{ label: 'Pilih disini', value: '' }]} />
                    <MyGap jarak={20} />
                    <MyPicker label="Kota/Kabupaten" data={[{ label: 'Pilih disini', value: '' }]} />
                    <MyGap jarak={20} />
                    <MyInput label="Kecamatan" placeholder="Isi disini" />
                    <MyGap jarak={20} />
                    <MyInput label="Kelurahan" placeholder="Isi disini" />
                    <MyGap jarak={20} />
                    <MyInput label="Alamat Lengkap" placeholder="Isi disini" />
                  </>
                )}

                {selectedDesain === 'Belum ada desain' && (
                  <>
                    {/* Jika belum ada desain, tampilkan input untuk detail desain */}
                    <MyPicker label="Provinsi" data={[{ label: 'Pilih disini', value: '' }]} />
                    <MyGap jarak={20} />
                    <MyPicker label="Kota/Kabupaten" data={[{ label: 'Pilih disini', value: '' }]} />
                    <MyGap jarak={20} />
                    <MyInput label="Kecamatan" placeholder="Isi disini" />
                    <MyGap jarak={20} />
                    <MyInput label="Alamat Lengkap" placeholder="Isi disini" />
                  </>
                )}
              </View>
            )}
          </View>
        </ScrollView>

        <View style={{ padding: 20 }}>
          <MyButton title="Buat Pesanan" colorText={colors.white} />
        </View>
      </View>
    </SafeAreaView>
  );
}
