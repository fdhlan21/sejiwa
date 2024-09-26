import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { colors } from '../../../utils'
import { MyButton, MyGap, MyHeader, MyInput } from '../../../components'

export default function IbuBersalin({navigation}) {
  return (
    <View style={{flex:1, backgroundColor:colors.white}}>
    <MyHeader title="Ibu Bersalin"/>

    <ScrollView>
        <View style={{padding:20}}>
            <MyInput label="Taksiran Persalinan"/>
            <MyGap jarak={20}/>

            <MyInput label="Fasyankes"/>
            <MyGap jarak={20}/>

            
            <MyInput label="Rujukan"/>
            <MyGap jarak={20}/>

            <MyInput label="Inisiasi Menyusui Dini"/>
            <MyGap jarak={20}/>

            <MyButton title="Simpan"/>
        </View>
    </ScrollView>
    </View>
  )
}