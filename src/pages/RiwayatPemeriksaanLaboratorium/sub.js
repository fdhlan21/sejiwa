import { View, Text, ScrollView, TouchableNativeFeedback } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../utils'
import { MyGap, MyHeader } from '../../components'

export default function SubRiwayatPemeriksaanLaboratorium({navigation}) {
  return (
    <View style={{
        flex:1,
        backgroundColor:colors.white
    }}>
        <MyHeader title="Hasil Pemeriksaan Laboratorium"/>

        <ScrollView>
            <View style={{
                padding:20,
                flexDirection:'column'

            }}>

                {/* GULA */}
            <TouchableNativeFeedback onPress={() => navigation.navigate("Gula")}>
                <View style={{
                    padding:10,
                    backgroundColor:colors.primary,
                    borderRadius:12,

                }}>
                    <Text style={{
                        textAlign:'center',
                        color:colors.white,
                        fontFamily:fonts.primary[500],
                        fontSize:30
                    }}>Gula</Text>
                </View>
            </TouchableNativeFeedback>

            <MyGap jarak={20}/>

     {/* ProfilLupid */}
     <TouchableNativeFeedback onPress={() => navigation.navigate("ProfilLupid")}>
                <View style={{
                    padding:10,
                    backgroundColor:colors.primary,
                    borderRadius:12,

                }}>
                    <Text style={{
                        textAlign:'center',
                        color:colors.white,
                        fontFamily:fonts.primary[500],
                        fontSize:30
                    }}>Profil Lipid</Text>
                </View>
            </TouchableNativeFeedback>

            <MyGap jarak={20}/>

                 {/* Lain Lain */}
                 <TouchableNativeFeedback onPress={() => navigation.navigate("LainLain")}>
                <View style={{
                    padding:10,
                    backgroundColor:colors.primary,
                    borderRadius:12,

                }}>
                    <Text style={{
                        textAlign:'center',
                        color:colors.white,
                        fontFamily:fonts.primary[500],
                        fontSize:30
                    }}>Lain-lain</Text>
                </View>
            </TouchableNativeFeedback>

            <MyGap jarak={20}/>
            </View>
        </ScrollView>
    </View>
  )
}