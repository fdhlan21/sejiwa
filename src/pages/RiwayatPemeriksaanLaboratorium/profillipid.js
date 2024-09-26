import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableNativeFeedback, Image, TextInput, TouchableWithoutFeedback } from 'react-native';

import { MyButton, MyCalendar, MyGap, MyHeader, MyInput } from '../../components';
import { colors, fonts } from '../../utils';

export default function ProfilLipid({ navigation }) {
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
      <MyHeader title="Profil Lipid" />

      {isInputMode ? (
        // Tampilan untuk input gula
        <View>
        <ScrollView>
          <View style={{ padding: 20 }}>

            <MyInput label="Kolesterol Total" rightLabel="mg/dl"/>

            <MyGap jarak={10}/>

             <MyInput label="TG" rightLabel="mg/dl"/>

            <MyGap jarak={10}/>

             <MyInput label="HDL" rightLabel="mg/dl"/>

             
            <MyGap jarak={10}/>

             <MyInput label="LDL" rightLabel="mg/dl"/>

            <MyGap jarak={10}/>

            <MyCalendar label="Tanggal" />

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
