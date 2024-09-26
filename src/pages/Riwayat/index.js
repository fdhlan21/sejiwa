import { View, Text, ScrollView } from 'react-native'
import React from 'react'

import { SafeAreaView } from 'react-native'
import { MyGap, MyHeader } from '../../components'
import { Color, colors, fonts } from '../../utils'

export default function Riwayat({navigation}) {
  return (
    <SafeAreaView style={{flex:1, backgroundColor:colors.white}}>
        <MyHeader title="Riwayat"/>

        <ScrollView>
            <View style={{padding:10}}>

                <View style={{borderWidth:1, borderColor:Color.blueGray[500],
                borderRadius:10, padding:10
                }}>
                    <View style={{flexDirection:"row", justifyContent:'space-between',
                    
                    }}>
                        <View style={{justifyContent:"center"}}>
                            <Text style={{fontFamily:fonts.primary[600], color:Color.blueGray[400], }}>HJB00001160824</Text>
                        </View>

                        <View style={{padding:10, backgroundColor:colors.tertiary, borderRadius:5}}>
                            <Text style={{fontFamily:fonts.primary[300], color:colors.primary, fontSize:10}}>Proses Cetak</Text>
                        </View>
                    </View>


                    <View>
                        <Text style={{fontFamily:fonts.primary[600], color:colors.primary, fontSize:30, }}>Print Hijab</Text>

                        <Text style={{fontFamily:fonts.primary[300], color:colors.primary, fontSize:12}}>Kain : Voal</Text>
                        <Text style={{fontFamily:fonts.primary[300], color:colors.primary, fontSize:12}}>Ukuran : 110x 110 cm</Text>
                        <Text style={{fontFamily:fonts.primary[300], color:colors.primary, fontSize:12}}>Desain : Sudah ada</Text>
                    </View>

                    <View style={{flexDirection:"row", justifyContent:"flex-end"}}>
                        <Text style={{fontFamily:fonts.primary[400], color:Color.blueGray[400]}}>13 Agustus 2024</Text>
                    </View> 
                </View>

                    <MyGap jarak={20}/>



                    <View style={{borderWidth:1, borderColor:Color.blueGray[500],
                borderRadius:10, padding:10
                }}>
                    <View style={{flexDirection:"row", justifyContent:'space-between',
                    
                    }}>
                        <View style={{justifyContent:"center"}}>
                            <Text style={{fontFamily:fonts.primary[600], color:Color.blueGray[400], }}>JERS00001160824  </Text>
                        </View>

                        <View style={{padding:10, backgroundColor:colors.tertiary, borderRadius:5}}>
                            <Text style={{fontFamily:fonts.primary[300], color:colors.primary, fontSize:10}}>Acc Design</Text>
                        </View>
                    </View>


                    <View>
                        <Text style={{fontFamily:fonts.primary[600], color:colors.primary, fontSize:30, }}>Print Jersey</Text>

                        <Text style={{fontFamily:fonts.primary[300], color:colors.primary, fontSize:12}}>Kain : Jersey</Text>
                        <Text style={{fontFamily:fonts.primary[300], color:colors.primary, fontSize:12}}>Ukuran : S - M</Text>
                        <Text style={{fontFamily:fonts.primary[300], color:colors.primary, fontSize:12}}>Desain : Belum ada</Text>
                    </View>

                    <View style={{flexDirection:"row", justifyContent:"flex-end"}}>
                        <Text style={{fontFamily:fonts.primary[400], color:Color.blueGray[400]}}>13 Agustus 2024</Text>
                    </View> 
                </View>

            </View>
        </ScrollView>
    </SafeAreaView>
  )
}