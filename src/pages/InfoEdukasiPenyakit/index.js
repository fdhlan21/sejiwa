import { View, Text, ScrollView, TouchableNativeFeedback, Image } from 'react-native'
import React from 'react'
import { MyGap, MyHeader } from '../../components'
import { colors, fonts } from '../../utils'

export default function InfoEdukasiPenyakit({navigation}) {
  return (
    <View style={{flex:1, backgroundColor:colors.white}}>
        <MyHeader title="Info Edukasi Penyakit"/>
        <ScrollView>
            <View style={{padding:10}}>

                {/* KANKER */}
                <TouchableNativeFeedback onPress={() => navigation.navigate("InfoEdukasiPenyakitKanker")}>
                    <View style={{padding:10, backgroundColor:colors.myicon, borderRadius:10,
                    flexDirection:"row", justifyContent:'flex-start', paddingLeft:20}}>
                        <Image style={{width:48, height:48, marginRight:20}} source={require("../../assets/icon_kanker.png")}/>
                        <Text style={{fontFamily:fonts.primary[600], fontSize:28, color:colors.white}}>Kanker</Text>
                    </View>
                </TouchableNativeFeedback>
                {/* END KANKER */}

                <MyGap jarak={10}/>

                 {/* JANTUNG */}
                 <TouchableNativeFeedback onPress={() => navigation.navigate("InfoEdukasiPenyakitJantung")}>
                    <View style={{padding:10, backgroundColor:colors.myicon, borderRadius:10,
                    flexDirection:"row", justifyContent:'flex-start', paddingLeft:20}}>
                        <Image style={{width:47, height:48, marginRight:20}} source={require("../../assets/icon_jantung.png")}/>
                        <Text style={{fontFamily:fonts.primary[600], fontSize:28, color:colors.white}}>Jantung</Text>
                    </View>
                </TouchableNativeFeedback>
                {/* END JANTUNG */}

                <MyGap jarak={10}/>

                 {/* STROKE */}
                 <TouchableNativeFeedback onPress={() => navigation.navigate("InfoEdukasiPenyakitStroke")}>
                    <View style={{padding:10, backgroundColor:colors.myicon, borderRadius:10,
                    flexDirection:"row", justifyContent:'flex-start', paddingLeft:20}}>
                        <Image style={{width:48, height:48, marginRight:20}} source={require("../../assets/icon_stroke.png")}/>
                        <Text style={{fontFamily:fonts.primary[600], fontSize:28, color:colors.white}}>Stroke</Text>
                    </View>
                </TouchableNativeFeedback>
                {/* END STROKE */}


                <MyGap jarak={10}/>

                 {/* GINJAL */}
                 <TouchableNativeFeedback onPress={() => navigation.navigate("InfoEdukasiPenyakitGinjal")}>
                    <View style={{padding:10, backgroundColor:colors.myicon, borderRadius:10,
                    flexDirection:"row", justifyContent:'flex-start', paddingLeft:20}}>
                        <Image style={{width:48, height:48, marginRight:20}} source={require("../../assets/icon_ginjal.png")}/>
                        <Text style={{fontFamily:fonts.primary[600], fontSize:28, color:colors.white}}>Ginjal</Text>
                    </View>
                </TouchableNativeFeedback>
                {/* END GINJAL */}


                <MyGap jarak={10}/>

                         {/* DIABETES */}
                <TouchableNativeFeedback onPress={() => navigation.navigate("InfoEdukasiPenyakitDiabetes")}>
                    <View style={{padding:10, backgroundColor:colors.myicon, borderRadius:10,
                    flexDirection:"row", justifyContent:'flex-start', paddingLeft:20}}>
                        <Image style={{width:48, height:48, marginRight:20}} source={require("../../assets/icon_diabetes.png")}/>
                        <Text style={{fontFamily:fonts.primary[600], fontSize:28, color:colors.white}}>Diabetes</Text>
                    </View>
                </TouchableNativeFeedback>
                {/* END DIABETES */}

                <MyGap jarak={10}/>

                 {/* STUNTING */}
                 <TouchableNativeFeedback onPress={() => navigation.navigate("InfoEdukasiPenyakitStunting")}>
                    <View style={{padding:10, backgroundColor:colors.myicon, borderRadius:10,
                    flexDirection:"row", justifyContent:'flex-start', paddingLeft:20}}>
                        <Image style={{width:48, height:48, marginRight:20}} source={require("../../assets/icon_stunting.png")}/>
                        <Text style={{fontFamily:fonts.primary[600], fontSize:28, color:colors.white}}>Stunting</Text>
                    </View>
                </TouchableNativeFeedback>
                {/* END STUNTING */}

                <MyGap jarak={10}/>

            </View>
        </ScrollView>
    </View>
  )
}