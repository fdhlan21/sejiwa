import { View, Text, ScrollView, Image, TouchableNativeFeedback, Linking } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../utils'
import { MyHeader } from '../../components'

export default function TentangAplikasi({navigation}) {
    const openLink = (url) => {
        Linking.openURL(url).catch(err => console.error("Failed to open URL:", err));
      };
  return (
    <View style={{flex:1, backgroundColor:colors.white}}>
        <MyHeader title="Tentang Aplikasi"/>

        <ScrollView>
            <View style={{padding:10}}>
                <View style={{padding:10}}>
                    <Text style={{fontFamily:fonts.primary[400], textAlign:"justify", color:colors.primary}}>
                     Ketika kamu ingin menjadi <Text style={{ fontWeight:'bold'}}>sehat atau kebugaran</Text>, tentu saja butuh informasi dan edukasi terkait layanan kesehatan yang tepat, terjangkau dengan menyesuaikan keadaanmu secara mandiri.  Disisi lain pemerintah juga berupaya meningkatkan derajat kesehatan masyarakat secara langsung melalui strategi peran termasuk Professional Keperawatan karena dengan Asuhan Keperawatan yang handal dapat mendukung kesehatan dan kebugaran masyarakat.{'\n'}
{'\n'}
Aplikasi  Hallo Perawat <Text style={{fontSize:14, fontWeight:'bold', color:colors.secondary}}>“Gulaha</Text> <Text style={{fontSize:14, fontWeight:'bold'}}>Care”</Text>   hadir menjadi teman besti terbaik dalam memutuskan kamu untuk meningkatkan Kesehatan dan kebugaranmu. {'\n'}
{'\n'}
Tim kami merupakan perawat ahli dan terampil berpengalaman dalam bidang Manajemen, Keperawatan Medikal Bedah, Ibu&Anak, Jiwa dan Gawat darurat&bencana yang siap bersama memberikan Solusi asuhan keperawatan.{'\n'}
{'\n'}
Moto kami adalah: menjadi pendamping setia menuju sehat bahagia.

Ayo bergabung dengan kami Hallo Perawat <Text style={{fontSize:14, fontWeight:'bold', color:colors.secondary}}>“Gulaha</Text> <Text style={{fontSize:14, fontWeight:'bold'}}>Care”</Text> , karena sehat itu Bahagia.

                    </Text>

                    <View style={{flexDirection:"row", justifyContent:"space-around", marginTop:10,}}>
                    {/* LINK YT */}
                            <View style={{alignItems:'center', justifyContent:"center"}}>
                                <TouchableNativeFeedback onPress={() => openLink("https://www.youtube.com/@kajiankeperawatan6993")}>
                                 <View>
                                 <Image style={{width:52, height:52}} source={require("../../assets/youtube.png")}/>
                                 <Text style={{fontFamily:fonts.primary[600], fontSize:12, color:colors.primary, textAlign:"center"}}>Klik Disini</Text>
                                 </View>
                                  
                                </TouchableNativeFeedback>
                            </View>

                            {/* LOGO */}
                            <View style={{ padding:10}}>
                                <Image style={{width:180, height:86}} source={require("../../assets/logo.png")}/>
                            </View>


                              {/* LINK IG */}
                              <View style={{justifyContent:'center', alignItems:"center"}}>
                                <TouchableNativeFeedback onPress={() => openLink("https://www.instagram.com/halloperawat?igsh=YzljYTk1ODg3Zg==")}>
                                  <View>
                                  <Image style={{width:52, height:52}} source={require("../../assets/instagram.png")}/>
                                  <Text style={{fontFamily:fonts.primary[600], fontSize:12, color:colors.primary, textAlign:"center"}}>Klik Disini</Text>
                                  </View>
                                </TouchableNativeFeedback>
                            </View>

                    </View>
                </View> 
            </View>
        </ScrollView>
    </View>
  )
}