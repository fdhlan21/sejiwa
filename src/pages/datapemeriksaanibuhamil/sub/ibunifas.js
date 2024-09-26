import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../../utils'
import { MyButton, MyGap, MyHeader, MyInput, MyPicker } from '../../../components'

export default function IbuNifas({navigation}) {

    const handleValueChange = (value) => {
     
        switch (value) {
            case 'KF 1 (6 - 48 jam)':
              navigation.navigate('IbuNifasKF'); // Ganti dengan nama halaman yang sesuai
              break;
            case 'KF 2 (3 - 7 hari)':
              navigation.navigate('IbuNifasKF'); // Ganti dengan nama halaman yang sesuai
              break;
            case 'KF 3 (8 - 28 hari)':
              navigation.navigate('IbuNifasKF'); // Ganti dengan nama halaman yang sesuai
              break;
            case 'KF 4 (29 - 42 hari)':
              navigation.navigate('IbuNifasKF'); // Ganti dengan nama halaman yang sesuai
              break;
            default:
              break;
          }
    }
  return (
    <View style={{flex:1, backgroundColor:colors.white}}>
    <MyHeader title="Ibu Nifas"/>

    <ScrollView>
        <View style={{padding:20}}>
            <Text style={{fontFamily:fonts.primary[400], textAlign:"center", color:colors.tekscolor
            , fontSize:16}}>(6 jam - sampai 42 hari setelah bersalin)</Text>
            <MyGap jarak={20}/>
           <MyPicker label="KF" data={[
            {label: 'Pilih KF', value: ''},
            {label: 'KF 1 (6 - 48 jam)', value: 'KF 1 (6 - 48 jam)'},
            {label: 'KF 2 (3 - 7 hari)', value: 'KF 2 (3 - 7 hari)'},
            {label: 'KF 3 (8 - 28 hari)', value: 'KF 3 (8 - 28 hari)'},
            {label: 'KF 4 (29 - 42 hari)', value: 'KF 4 (29 - 42 hari)'},
           ]}
            onValueChange={handleValueChange}
           />
        </View>
    </ScrollView>
    </View>
  )
}