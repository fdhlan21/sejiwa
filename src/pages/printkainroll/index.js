import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../../utils'
import { MyButton, MyGap, MyHeader, MyImageUpload, MyInput, MyPicker, MyRadio } from '../../components'
import MyMenu from '../../components/MyMenu';
import { fonts } from 'react-native-elements/dist/config';

export default function PrintKainRoll({navigation}) {
  const [imageUri, setImageUri] = useState(null);
    const [selectedKain, setSelectedKain] = useState('');
    const [radioValue, setRadioValue] = useState('');
    const [selectedDesain, setSelectedDesain] = useState('');
    const [designDetails, setDesignDetails] = useState(''); // State for additional input



       const pickImage = () => {
      const options = {
          mediaType: 'photo',
          maxWidth: 300,
          maxHeight: 550,
          quality: 1,
          includeBase64: false, // Jangan gunakan base64 di sini
      };
    
      launchImageLibrary(options, (response) => {
          if (response.didCancel) {
              console.log('Pengguna membatalkan pemilihan gambar');
          } else if (response.error) {
              console.log('Error:', response.error);
          } else if (response.customButton) {
              console.log('Tombol kustom ditekan:', response.customButton);
          } else {
              // Mendapatkan path file gambar yang dipilih
              const imageUri = response.assets ? response.assets[0]?.uri : null;
    
              if (imageUri) {
                  // Mengonversi gambar ke base64
                  RNFS.readFile(imageUri, 'base64')
                      .then((base64data) => {
                          // Menyimpan base64 dalam state form
                          setForm({ ...form, foto: base64data });
                          alert('Gambar Profile Berhasil di Unggah');
                      })
                      .catch((error) => {
                          console.error('Terjadi Kesalahan', error);
                      });
              }
          }
      });
    };
    
    
  
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <View style={{ flex: 1 }}>
        <MyHeader title="Print Kain Roll" />

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
                <View style={{left:30, top: -20}}>
                  <MyRadio label1='Armani' label2='Ceruti'/>
                </View>
                <MyGap jarak={20} />
              </View>
            )}

            <MyGap jarak={20} />

            {/* Ukuran Baju Jersey */}
            <MyPicker
              label="Ukuran Kain"
              data={[
                { label: "Pilih disini", value: " " },
                { label: "10 meter", value: "10meter" },
                { label: "20 meter", value: "20meter" },
                { label: "Dst", value: "dst" },
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
  )
}