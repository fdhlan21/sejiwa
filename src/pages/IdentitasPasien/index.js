import { View, Text, ScrollView, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { Color, colors, fonts } from '../../utils'
import { MyGap, MyHeader } from '../../components'

export default function IdentitasPasien({navigation}) {
  return (
    <View style={{
        flex:1,
        backgroundColor: colors.background,
    }}>

    <View>
        <MyHeader onPress={() => navigation.navigate("MainApp")} title="Identitas Pasien"/>
    </View>
        <ScrollView>
            <View style={{padding:10}}>
                {/* MENU */}

                {/* DATA PASEIN */}
                <View>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate('DataPasien')}>
                        <View style={{
                            padding:10,
                            backgroundColor:colors.primary,
                            borderWidth:5,
                            borderColor:Color.blueGray[400],
                            borderRadius:30
                        }}>
                                <Text style={{
                                    fontFamily:fonts.primary[600],
                                    color:colors.white,
                                    fontSize:20,
                                    textAlign:'center'
                                }}>Data Pasien</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                {/* END MENU DATA PASIEN */}
                <MyGap jarak={20}/>
                {/* REKAMAN / DATA SAAT INI */}
                <View>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate("HomeRekamanData")}>
                        <View style={{
                            padding:10,
                            backgroundColor:colors.primary,
                            borderWidth:5,
                            borderColor:Color.blueGray[400],
                            borderRadius:30
                        }}>
                                <Text style={{
                                    fontFamily:fonts.primary[600],
                                    color:colors.white,
                                    fontSize:20,
                                    textAlign:'center'
                                }}>Rekaman / Data Saat Ini</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        </ScrollView>
    </View>
  )
}