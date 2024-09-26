import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../../../utils'
import { MyHeader, MyPicker } from '../../../components'
import { ScrollView } from 'react-native'

export default function IbuHamil({navigation}) {


    const handleValueChange = (value) => {
     


        switch (value) {
            case 'Trimester  I':
              navigation.navigate('TrisemesterI'); // Ganti dengan nama halaman yang sesuai
              break;
            case 'Trimester  II - 1':
              navigation.navigate('TrisemesterII1'); // Ganti dengan nama halaman yang sesuai
              break;
            case 'Trimester  II - 2':
              navigation.navigate('TrisemesterII2'); // Ganti dengan nama halaman yang sesuai
              break;
            case 'Trimester  III - 1':
              navigation.navigate('TrisemesterIII1'); // Ganti dengan nama halaman yang sesuai
              break;
            case 'Trimester  III - 2':
              navigation.navigate('TrisemesterIII2'); // Ganti dengan nama halaman yang sesuai
              break;
            case 'Trimester  III - 3':
              navigation.navigate('TrisemesterIII3'); // Ganti dengan nama halaman yang sesuai
              break;
            default:
              break;
          }
    }
  return (
    <View  style={{flex:1, backgroundColor:colors.white}}>
    <MyHeader title="Ibu Hamil"/>

    <ScrollView>
        <View style={{padding:10}}>
            <View>
                <MyPicker label="Trimester " data={[
                    { label: 'Pilih Trimester ', value: '' },
                    { label: 'Trimester  I', value: 'Trimester  I' },
                    { label: 'Trimester  II - 1', value: 'Trimester  II - 1' },
                    { label: 'Trimester  II - 2', value: 'Trimester  II - 2' },
                    { label: 'Trimester  III - 1', value: 'Trimester  III - 1' },
                    { label: 'Trimester  III - 2', value: 'Trimester  III - 2' },
                    { label: 'Trimester  III - 3', value: 'Trimester  III - 3' },
                ]}

                    onValueChange={handleValueChange}
                />
            </View>
        </View>
    </ScrollView>
    </View>
  )
}