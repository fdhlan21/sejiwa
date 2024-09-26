import { View, Text, Image, TouchableNativeFeedback } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../utils'
import { MyHeader } from '../../components'

export default function TanyaJawab({navigation}) {
    const handleBack = () => {
        navigation.goBack();
    }
  return (
    <View style={{flex:1, backgroundColor:colors.white}}>
      <MyHeader onPress={handleBack} title="Tanya Jawab"/>

      <View style={{padding:20, alignItems:'center', marginTop:100}}>
            <TouchableNativeFeedback>
                <View>
                    
                <Image style={{width:200, height:200}} source={require('../../assets/wa.png')}/>
                <Text style={{fontFamily:fonts.primary[600], fontSize:20, color:colors.tekscolor, marginTop:20}}>Silakan Hubungi Kami</Text>
                </View>
            </TouchableNativeFeedback>
      </View>
    </View>
  )
}