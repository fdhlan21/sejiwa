import { View, Text } from 'react-native'
import React from 'react'
import { colors } from '../../utils'
import { MyHeader } from '../../components'

export default function VideoMateri({navigation}) {
    const handleBack = () => {
        navigation.goBack();
    }
  return (
    <View style={{flex:1, backgroundColor:colors.white}}>
      <MyHeader onPress={handleBack} title="Video Materi"/>
    </View>
  )
}