import { Image, ScrollView, StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../utils'
import { MyGap, MyHeader } from '../../components'

export default function InteraksiBersamaTim({navigation}) {
  return (
    <View style={{flex:1, backgroundColor:colors.white}}>
        <MyHeader title="Interaksi Bersama Tim"/>
      <ScrollView>
        <View style={{padding:10}}>

                <View style={{flexDirection:'row', alignItems:'center', justifyContent:"space-around"}}>
                    <TouchableNativeFeedback>
                       <View style={{padding:10, backgroundColor:colors.myicon, borderRadius:10, alignItems:"center", width:137}}>
                       <Image style={{width:67, height:67,alignSelf:"center", marginTop:20}} source={require("../../assets/wa.png")}/>

                       <Text style={{fontFamily:fonts.primary[600], color:colors.white, fontSize:13, 
                        marginTop:20}}>Wasis Nugroho</Text>
                           <Text style={{fontFamily:fonts.primary[200], color:colors.white, fontSize:10, 
                        }}>Perawat Medikal Bedah</Text>
                        
                       </View>
                    </TouchableNativeFeedback>


                    <TouchableNativeFeedback>
                       <View style={{padding:10, backgroundColor:colors.myicon, borderRadius:10, alignItems:"center", width:137}}>
                       <Image style={{width:67, height:67,alignSelf:"center", marginTop:20}} source={require("../../assets/wa.png")}/>

                       <Text style={{fontFamily:fonts.primary[600], color:colors.white, fontSize:13, 
                        marginTop:20}}>Sarina Hi Badar</Text>
                           <Text style={{fontFamily:fonts.primary[200], color:colors.white, fontSize:10, textAlign:"center"
                        }}>Perawat Keluarga, Masyarakat</Text>
                        
                       </View>
                    </TouchableNativeFeedback>
                </View>

                <MyGap jarak={20}/>


                <View style={{flexDirection:'row', alignItems:'center', justifyContent:"space-around"}}>
                    <TouchableNativeFeedback>
                       <View style={{padding:10, backgroundColor:colors.myicon, borderRadius:10, alignItems:"center", width:137}}>
                       <Image style={{width:67, height:67,alignSelf:"center", marginTop:20}} source={require("../../assets/wa.png")}/>

                       <Text style={{fontFamily:fonts.primary[600], color:colors.white, fontSize:13, 
                        marginTop:20}}>Rafik Nasir</Text>
                           <Text style={{fontFamily:fonts.primary[200], color:colors.white, fontSize:10, textAlign:"center"
                        }}>Perawat Komplementer&Herbal</Text>
                        
                       </View>
                    </TouchableNativeFeedback>


                    <TouchableNativeFeedback>
                       <View style={{padding:10, backgroundColor:colors.myicon, borderRadius:10, alignItems:"center", width:137}}>
                       <Image style={{width:67, height:67,alignSelf:"center", marginTop:20}} source={require("../../assets/wa.png")}/>

                       <Text style={{fontFamily:fonts.primary[600], color:colors.white, fontSize:13, 
                        marginTop:20}}>Riya Fitri</Text>
                           <Text style={{fontFamily:fonts.primary[200], color:colors.white, fontSize:10, textAlign:"center"
                        }}>Perawatan Kecantikan&kebugaran</Text>
                        
                       </View>
                    </TouchableNativeFeedback>
                </View>



                <MyGap jarak={20}/>


<View style={{flexDirection:'row', alignItems:'center', justifyContent:"space-around"}}>
    <TouchableNativeFeedback>
       <View style={{padding:10, backgroundColor:colors.myicon, borderRadius:10, alignItems:"center", width:137}}>
       <Image style={{width:67, height:67,alignSelf:"center", marginTop:20}} source={require("../../assets/wa.png")}/>

       <Text style={{fontFamily:fonts.primary[600], color:colors.white, fontSize:13, 
        marginTop:20}}>Kardi Harun</Text>
           <Text style={{fontFamily:fonts.primary[200], color:colors.white, fontSize:10, textAlign:"center"
        }}>Perawatan luka&Khitanan</Text>
        
       </View>
    </TouchableNativeFeedback>


    <TouchableNativeFeedback>
       <View style={{padding:10, backgroundColor:colors.myicon, borderRadius:10, alignItems:"center", width:137}}>
       <Image style={{width:67, height:67,alignSelf:"center", marginTop:20}} source={require("../../assets/wa.png")}/>

       <Text style={{fontFamily:fonts.primary[600], color:colors.white, fontSize:13, 
        marginTop:20}}>Supardi</Text>
           <Text style={{fontFamily:fonts.primary[200], color:colors.white, fontSize:10, textAlign:"center"
        }}>Perawat Edukasi</Text>
        
       </View>
    </TouchableNativeFeedback>
</View>

<MyGap jarak={20}/>


<View style={{flexDirection:'row', alignItems:'center', justifyContent:"flex-start", marginLeft:20}}>
    <TouchableNativeFeedback>
       <View style={{padding:10, backgroundColor:colors.myicon, borderRadius:10, alignItems:"center", width:137}}>
       <Image style={{width:67, height:67,alignSelf:"center", marginTop:20}} source={require("../../assets/wa.png")}/>

       <Text style={{fontFamily:fonts.primary[600], color:colors.white, fontSize:13, 
        marginTop:20}}>Nurdila Fajrianti</Text>
           <Text style={{fontFamily:fonts.primary[200], color:colors.white, fontSize:10, textAlign:"center"
        }}>Perawat Home Care</Text>
        
       </View>
    </TouchableNativeFeedback>


   
</View>

        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({})