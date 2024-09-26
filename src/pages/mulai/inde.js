import { View, Text, ScrollView, ImageBackground, Image, TouchableNativeFeedback } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../utils'

export default function MulaiPage({navigation}) {
  return (
   <ImageBackground source={require('../../assets/bgsplash.png')} style={{
    flex:1,
    width:'100%',
    height:'100%',
   }}>
    <View style={{
        padding:20,

    }}>

        <View style={{alignItems:'center', marginTop:90}}>
            <Image style={{
                width:208,
                height:244,

            }} source={require("../../assets/logo.png")}/>
        </View>
        
        <View style={{marginTop: 300}}>
            <Text style={{
                fontFamily:fonts.primary[600],
                color:colors.primary,
                textAlign:"center",
                fontSize:17,
                fontStyle:"italic"

            }}>"Karena sehat dimulai dari Kita"</Text>

            <TouchableNativeFeedback onPress={() => navigation.navigate("MainApp")}>
                <View style={{
                    padding:10, 
                    backgroundColor:colors.primary, 
                    borderRadius:100,
                    flexDirection:"row",
                    justifyContent:'space-between',
                    marginTop:10,
                    height:50
                    
                    
                    }}>

                        <View style={{
                            justifyContent:"center"
                        }}>
                            <Image style={{
                                height:36,
                                width:36,

                            }} source={require('../../assets/right-arrow.png')}/>
                        </View>

                        <View style={{
                          top:-3,
                            justifyContent:"center"
                        }}>
                            <Text style={{
                                fontFamily:fonts.primary[600],
                                color:colors.white,
                                fontSize:25,

                                }}>Mulai</Text>
                        </View>


                        <View>
                            <Image style={{
                                height:36,
                                width:36,
                                tintColor:colors.primary,


                            }} source={require('../../assets/right-arrow.png')}/>
                        </View>


                </View>
            </TouchableNativeFeedback>
        </View>
    </View>
   </ImageBackground>
  )
}