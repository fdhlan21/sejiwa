import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableNativeFeedback, Image, TextInput, TouchableWithoutFeedback } from 'react-native';

import { FileUpload, MyButton, MyCalendar, MyFileUploader, MyGap, MyHeader, MyInput } from '../../components';
import { colors, fonts } from '../../utils';

export default function RiwayatPemeriksaanRadiologis({ navigation }) {

    const handleFileChange = (file) => {
        // Tangani file yang dipilih di sini
        console.log('File yang dipilih:', file);
      };

  // State untuk mengatur tampilan
  const [isInputMode, setIsInputMode] = useState(false);
  const [gulaValue, setGulaValue] = useState('');

  const handleAddPress = () => {
    // Mengubah tampilan menjadi mode input
    setIsInputMode(true);
  };

  const handleSavePress = () => {
    // Di sini Anda dapat menambahkan logika untuk menyimpan data gula
    console.log('Nilai Gula:', gulaValue);

    // Kembali ke tampilan awal setelah menyimpan data
    setIsInputMode(false);
  };

  const handleBackPress = () => {
    // Kembali ke tampilan awal dalam mode yang sama
    setIsInputMode(false);
  };    

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <MyHeader title="Riwayat Pemeriksaan Radiologis" />

      {isInputMode ? (
        // Tampilan untuk input gula
        <View>
        <ScrollView>
          <View style={{ padding: 20 }}>

            <MyInput label="Judul"/>

            <MyGap jarak={10}/>

            <FileUpload
            label="Upload File"
            onFileSelected={(file) => console.log('File yang dipilih:', file)}
                />


            <MyGap/>

          </View>
        </ScrollView>
        <View style={{
            padding:20
        }}>
            <MyButton title="Simpan"/>
                <MyGap jarak={20}/>
            <TouchableWithoutFeedback onPress={handleBackPress}>
                <View style={{
                    padding:10,
                    borderWidth:1,
                    borderRadius:10,
                    borderColor:colors.danger
                }}>
                    <Text style={{
                        fontFamily:fonts.primary[500],
                        textAlign:'center',
                        color:colors.danger
                    }}>Kembali</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
        </View>
        
      ) : (
        // Tampilan awal dengan tombol Add
        <>
          <ScrollView>
            <View style={{ padding: 20 }}>
              {/* Konten lainnya di sini */}
            </View>
          </ScrollView>
          <View style={{ padding: 10 }}>
            <TouchableNativeFeedback onPress={handleAddPress}>
              <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                <Image
                  style={{ width: 68, height: 68 }}
                  source={require('../../assets/add.png')}
                />
              </View>
            </TouchableNativeFeedback>
          </View>
        </>
      )}
    </View>
  );
}
