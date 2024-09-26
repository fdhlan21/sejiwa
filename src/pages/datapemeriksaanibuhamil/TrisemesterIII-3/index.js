import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../../utils'
import { MyButton, MyCalendar, MyGap, MyHeader, MyInput, MyPicker } from '../../../components'

export default function TrisemesterIII3({navigation}) {
    const handleBack = () => {
        navigation.navigate("")
    }
  return (
    <View style={{flex:1, backgroundColor:colors.white}}>
      <MyHeader title="Ibu Hamil"/>

      <ScrollView>
        <View style={{padding:10}}>

      <View style={{padding:10}}>
      <MyPicker label="Trimester " data={[
            {label: 'Trimester  III - 3', value: 'Trimester  III - 3'}
        ]}/>

        <MyGap jarak={20}/>

      </View>

<View style={{padding:10, backgroundColor:colors.card}}>
        <MyCalendar label="Tanggal Periksa" />

        <MyGap jarak={20}/>

        <MyInput label="Tempat Periksa"/>
</View>

        <MyGap jarak={20}/>

        <View style={{padding:10}}>
        <MyInput keyboardType="numeric" label="Timbang BB"/>


<MyGap jarak={20}/>

<MyInput keyboardType="numeric" label="Ukur Lingkar Lengan Atas"/>

<MyGap jarak={20}/>

<MyInput keyboardType="numeric" label="Tekanan Darah"/>

<MyGap jarak={20}/>

<MyInput keyboardType="numeric" label="Periksa Tinggi Rahim"/>

<MyGap jarak={20}/>

<MyInput keyboardType="numeric" label="Periksa Letak & Denyut Jantung Janin"/>

<MyGap jarak={20}/>

<MyInput label="Status & Imunisasi Tetanus"/>

<MyGap jarak={20}/>

<MyInput label="Konseling"/>

<MyGap jarak={20}/>
<MyInput label="Skrining Dokter"/>


<MyGap jarak={20}/>
<MyInput label="Tablet Tambah Darah "/>


<MyGap jarak={20}/>
<MyInput label="Test Lab Protein Urine"/>

<MyGap jarak={20}/>
<MyInput label="Test Lab Gula Darah"/>



<MyGap jarak={20}/>
<Text style={{fontFamily:fonts.primary[600], textAlign:'left', color:colors.tekscolor, fontSize:15}}>Hasil Pemeriksaan Triple Elminiasi :</Text>


<MyGap jarak={20}/>
<MyInput label="Sifilis"/>


<MyGap jarak={20}/>
<MyInput label="HIV"/>


<MyGap jarak={20}/>
<MyInput label="Hepatitis B"/>


<MyGap jarak={20}/>
<MyInput label="Tata Laksana Kasus"/>

<MyGap jarak={20}/>
<MyButton title="Simpan"/>


        </View>
       







        </View>

      </ScrollView>


    </View>
  )
}