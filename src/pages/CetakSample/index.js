import { View, Text, SafeAreaView, ScrollView, TouchableNativeFeedback } from 'react-native'
import React from 'react'
import { Color, colors, fonts } from '../../utils'
import { MyGap, MyHeader } from '../../components'
import { Image } from 'react-native'

export default function CetakSample({navigation}) {
  return (
    <SafeAreaView style={{flex:1,
    backgroundColor:colors.white,
    }}>
    <View>
            <View>
                <MyHeader title="Cetak Sample"/>
            </View>
        <ScrollView>
            <View style={{padding:20,}}>

{/* CETAK SAMPLE KAON ROLL */}
            <View>
                <TouchableNativeFeedback onPress={() => navigation.navigate('CetakSampleKainRoll')}>
                    <View style={{padding:10, backgroundColor:colors.primary, flexDirection:'row', borderRadius:10,
                    borderWidth:3, borderColor:Color.blueGray[300], justifyContent:'center'}}>
                      <View style={{marginRight:10}}>
                      <Image style={{width:30, height:30}} source={require('../../assets/icon_printkainroll.png')}/>
                      </View>
                        
                        <View style={{alignItems:'center', justifyContent:"center"}}>
                        <Text style={{
                            fontFamily:fonts.primary[600],
                            color:colors.white,
                            textAlign:"center", 
                          
                        }}>Cetak Sample Kain Roll</Text>
                        </View>
                    </View>
                </TouchableNativeFeedback>
            </View>

            <MyGap jarak={20}/>



{/* CETAK SAMPLE KAON ROLL */}
<View>
                <TouchableNativeFeedback onPress={() => navigation.navigate('CetakSampleHijab')}>
                    <View style={{padding:10, backgroundColor:colors.primary, flexDirection:'row', borderRadius:10,
                    borderWidth:3, borderColor:Color.blueGray[300], justifyContent:'center'}}>
                      <View style={{marginRight:10}}>
                      <Image style={{width:30, height:30}} source={require('../../assets/icon_printhijab.png')}/>
                      </View>
                        
                        <View style={{alignItems:'center', justifyContent:"center"}}>
                        <Text style={{
                            fontFamily:fonts.primary[600],
                            color:colors.white,
                            textAlign:"center", 
                          
                        }}>Cetak Sample Hijab</Text>
                        </View>
                    </View>
                </TouchableNativeFeedback>
            </View>

            <MyGap jarak={20}/>


{/* CETAK SAMPLE KAON ROLL */}
                        <View>
                <TouchableNativeFeedback onPress={() => navigation.navigate('CetakSampleHijab')}>
                    <View style={{padding:10, backgroundColor:colors.primary, flexDirection:'row', borderRadius:10,
                    borderWidth:3, borderColor:Color.blueGray[300], justifyContent:'center'}}>
                      <View style={{marginRight:10}}>
                      <Image style={{width:30, height:30}} source={require('../../assets/icon_printjersey.png')}/>
                      </View>
                        
                        <View style={{alignItems:'center', justifyContent:"center"}}>
                        <Text style={{
                            fontFamily:fonts.primary[600],
                            color:colors.white,
                            textAlign:"center", 
                          
                        }}>Cetak Sample Jersey</Text>
                        </View>
                    </View>
                </TouchableNativeFeedback>
            </View>

            <MyGap jarak={20}/>
            </View>
        </ScrollView>
    </View>
    </SafeAreaView>
  )
}