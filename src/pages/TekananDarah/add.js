import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { colors } from '../../utils'
import { MyButton, MyCalendar, MyGap, MyHeader, MyInput, MyTimePicker } from '../../components'

export default function TambahTekananDarah({navigation}) {
  return (
    <View style={{
        flex:1,
        backgroundColor:colors.white
    }}>
    <MyHeader title="Tambah Tekanan Darah"/>
        <ScrollView>
            <View style={{
                padding:20,
                

            }}>
                <MyInput 
                label="Tekanan Darah Sistolik" 
                placeholder="Isi disini" 
                rightLabel="mmHg"

                />

                <MyGap jarak={10}/>


                <MyInput 
                label="Tekanan Darah Diastolik" 
                placeholder="Isi disini" 
                rightLabel="mmHg"

                />

                <MyGap jarak={10}/>

                <MyCalendar label="Tanggal" placeholder="Pilih tanggal"/>

                <MyGap jarak={10}/>

                <MyTimePicker label="Waktu"/>

                <MyGap jarak={20}/>
            </View>
        </ScrollView>

        <View style={{padding:20}}> 
            <MyButton title="Simpan"/>
        </View>
    </View>
  )
}