import { View, Text, Image, TouchableNativeFeedback } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../utils'
import { MyHeader } from '../../components'

export default function Artikel({navigation}) {
    const handleBack = () => {
        navigation.goBack();
    }
  return (
    <View style={{flex:1, backgroundColor:colors.white}}>
      <MyHeader onPress={handleBack} title="Artikel"/>

      <View style={{padding:20, alignItems:'center', marginTop:100}}>
            
      </View>
    </View>
  )
}