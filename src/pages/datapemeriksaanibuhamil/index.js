import { View, Text, ScrollView, TouchableNativeFeedback, Image } from 'react-native'
import React from 'react'
import { colors } from '../../utils'
import { MyHeader } from '../../components'

export default function DataPemeriksaanIbuHami({navigation}) {
  return (
    <View style={{flex:1, backgroundColor:colors.white}}>
     <MyHeader title="Data Hasil Pemeriksaan"/>
     <ScrollView>

     </ScrollView>

     <View style={{padding:20, flexDirection:'row', justifyContent:'flex-end', }}>
        <TouchableNativeFeedback onPress={() =>navigation.navigate("SubDataPemeriksaanIbuHamil")}>
            <View>
                <Image style={{width:63, height: 57, }} source={require("../../assets/add.png")}/>
            </View>
        </TouchableNativeFeedback>
     </View>
    </View>
  )
}