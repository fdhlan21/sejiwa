import { View, Text, Image, TouchableNativeFeedback } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../utils'
import { MyHeader } from '../../components'

export default function Kuesioner({navigation}) {
    const handleBack = () => {
        navigation.goBack();
    }
  return (
    <View style={{flex:1, backgroundColor:colors.white}}>
      <MyHeader onPress={handleBack} title="Kuesioner"/>

      <View style={{padding:20, alignItems:'center', marginTop:100}}>
      <TouchableNativeFeedback>
                <View>
                    
                <Image style={{width:267, height:267}} source={require('../../assets/icon_kuesioner.png')}/>
                <Text style={{fontFamily:fonts.primary[600], fontSize:20, color:colors.tekscolor, marginTop:20
                ,textAlign:'center'}}>Silakan isi kuesioner ini</Text>
                </View>
            </TouchableNativeFeedback>
      </View>
    </View>
  )
}