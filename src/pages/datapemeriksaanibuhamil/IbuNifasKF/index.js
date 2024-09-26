import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../../utils'
import { MyButton, MyCalendar, MyGap, MyHeader, MyInput, MyPicker } from '../../../components'

export default function IbuNifasKF({navigation}) {
    const handleBack = () => {
        navigation.navigate("")
    }
  return (
    <View style={{flex:1, backgroundColor:colors.white}}>
      <MyHeader title="Ibu Nifas"/>

      <ScrollView>
        <View style={{padding:20}}>
        <Text style={{fontFamily:fonts.primary[400], textAlign:"center", color:colors.tekscolor
            , fontSize:16}}>(6 jam - sampai 42 hari setelah bersalin)</Text>
            <MyGap jarak={20}/>
        <MyPicker label="Trisemester" data={[
            {label: 'KF', value: 'KF'}
        ]}/>

        <MyGap jarak={20}/>

        <MyCalendar label="Tanggal Periksa" />

        <MyGap jarak={20}/>

        <MyInput label="Tempat Periksa"/>

        <MyGap jarak={20}/>

        <MyInput  label="Periksa Payudara (ASI)"/>

        <MyGap jarak={20}/>

        <MyInput label="Periksa Pendarahan"/>

        <MyGap jarak={20}/>

        <MyInput label="Periksa Jalan Lahir"/>

        <MyGap jarak={20}/>

        <MyInput  label="Vitamin A"/>

        <MyGap jarak={20}/>

        <MyInput  label="KB Pasca Persalinan"/>

        <MyGap jarak={20}/>

        <MyInput label="Konseling"/>

        <MyGap jarak={20}/>
        <MyInput label="Tata Laksana Kasus"/>


        <MyGap jarak={20}/>
        <MyButton title="Simpan"/>









        </View>

      </ScrollView>


    </View>
  )
}