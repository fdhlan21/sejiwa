import { View, Text, TouchableNativeFeedback, Image, Linking } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../utils'
import { ScrollView } from 'react-native'
import { MyGap, MyHeader } from '../../components'

export default function InfoLayananKesehatan({navigation}) {

  // Fungsi untuk membuka Google Maps
  const openMapsLink = (url) => {
    Linking.openURL(url);

  };

  const handleCallPress = (phoneNumber) => {
    const phoneUrl = `tel:${phoneNumber}`;
    Linking.openURL(phoneUrl)
      .catch(err => console.error('Error occurred while trying to open the phone dialer', err));
  };

  return (
    <View style={{flex:1, backgroundColor:colors.white}}>
        <MyHeader title="Info Layanan Kesahatan"/>
        <ScrollView>
            <View style={{padding:10}}>

            {/* RSIA ANDINA */}
                <View>
                    <View style={{padding:10,  borderRadius:10, borderWidth:1,
                    borderColor:'#e1e1e1', flexDirection:"row", justifyContent:"space-around"}}>  
                        <View style={{flexDirection:"row"}}>
                            <View style={{alignItems:"center", justifyContent:"center", left:-20}}>
                            <Image style={{
                                width:57,
                                height:57,
                              
                            }} source={require("../../assets/icon_rsandina.png")}/>
                            </View>
                        </View>
                        
                        <View  style={{left: -20}}>
                            <Text style={{fontFamily:fonts.primary[600], fontSize:20, color:colors.primary,}}>RSIA Andina</Text>
                            <View style={{flexDirection:'row'}}>
                                <Image style={{width:10, height:10, alignItems:'center', alignSelf:"center", marginRight:5, 
                                top: -2}} source={require("../../assets/icon_jam_outline.png")}/>
                                <Text style={{fontSize:14, fontFamily:fonts.primary[400], color:colors.primary,}}>24 Jam</Text>
                            </View>

                            <View style={{flexDirection:'row'}}>
                                <Image style={{width:10, height:10, alignItems:'center', alignSelf:"center", marginRight:5, 
                                top: -2}} source={require("../../assets/icon_telepon_outline.png")}/>
                                <Text style={{fontSize:14, fontFamily:fonts.primary[400], color:colors.primary,}}>0813-4079-9796</Text>
                            </View>

                            <View>
                                <Text style={{fontFamily:fonts.primary[400], color:colors.success, fontSize:14}}>Umum & BPJS</Text>
                            </View>
                        </View>

                        <View style={{flexDirection:"row", justifyContent:'space-around',}}>
                                   <View style={{justifyContent:'center', alignItems:"center", flexDirection:"row"}}>
                                    <TouchableNativeFeedback onPress={() => openMapsLink('https://maps.app.goo.gl/Qsu9aT7RRxh9nx1N6')}>
                                    <Image style={{width:16, height:22,  marginRight:10}} source={require("../../assets/icon_mappoint.png")}/>
                                    </TouchableNativeFeedback>
                              
                                    <TouchableNativeFeedback  onPress={() => handleCallPress('081340799796')}> 
                                    <Image style={{width:16, height:22, }} source={require("../../assets/icon_telepon_fill.png")}/>
                                    </TouchableNativeFeedback>
                                   </View>
                        </View>
                    </View>
                </View>

                {/* END RSIA ANDINA */}

                <MyGap jarak={20}/>

                                    {/* RS PRIMA */}
                <View>
                    <View style={{padding:10,  borderRadius:10, borderWidth:1,
                    borderColor:'#e1e1e1', flexDirection:"row", justifyContent:"space-around"}}>  
                        <View style={{flexDirection:"row"}}>
                            <View style={{alignItems:"center", justifyContent:"center", left: -20}}>
                            <Image style={{
                                width:61,
                                height:28,
                              
                            }} source={require("../../assets/icon_rsprima.png")}/>
                            </View>
                        </View>
                        
                        <View style={{left: -20}}>
                            <Text style={{fontFamily:fonts.primary[600], fontSize:20, color:colors.primary}}>RS Prima</Text>
                            <View style={{flexDirection:'row'}}>
                                <Image style={{width:10, height:10, alignItems:'center', alignSelf:"center", marginRight:5, 
                                top: -2}} source={require("../../assets/icon_jam_outline.png")}/>
                                <Text style={{fontSize:14, fontFamily:fonts.primary[400], color:colors.primary,}}>24 Jam</Text>
                            </View>

                            <View style={{flexDirection:'row'}}>
                                <Image style={{width:10, height:10, alignItems:'center', alignSelf:"center", marginRight:5, 
                                top: -2}} source={require("../../assets/icon_telepon_outline.png")}/>
                                <Text style={{fontSize:14, fontFamily:fonts.primary[400], color:colors.primary,}}>0813-4079-9796</Text>
                            </View>

                            <View>
                                <Text style={{fontFamily:fonts.primary[400], color:colors.success, fontSize:14}}>Umum & BPJS</Text>
                            </View>
                        </View>

                        <View style={{flexDirection:"row", justifyContent:'space-around',}}>
                                   <View style={{justifyContent:'center', alignItems:"center", flexDirection:"row"}}>
                                    <TouchableNativeFeedback onPress={() => openMapsLink('https://maps.app.goo.gl/TFeAKtFudEkoWXJbA')}>
                                    <Image style={{width:16, height:22,  marginRight:10}} source={require("../../assets/icon_mappoint.png")}/>
                                    </TouchableNativeFeedback>
                              
                                    <TouchableNativeFeedback  onPress={() => handleCallPress('082191011124')}>
                                    <Image style={{width:16, height:22, }} source={require("../../assets/icon_telepon_fill.png")}/>
                                    </TouchableNativeFeedback>
                                   </View>
                        </View>
                    </View>
                </View>

                {/* END RS PRIMA */}

                                    <MyGap jarak={20}/>


                                    {/* RS BHAYANGKARA */}
                                    <View>
                    <View style={{padding:10,  borderRadius:10, borderWidth:1,
                    borderColor:'#e1e1e1', flexDirection:"row", justifyContent:"space-around"}}>  
                        <View style={{flexDirection:"row"}}>
                            <View style={{alignItems:"center", justifyContent:"center", left : -15}}>
                            <Image style={{
                                width:57,
                                height:60,
                              
                            }} source={require("../../assets/icon_rsbhayangkara.png")}/>
                            </View>
                        </View>
                        
                        <View>
                            <Text style={{fontFamily:fonts.primary[600], fontSize:20, color:colors.primary}}>RS Bhayangkara</Text>
                            <View style={{flexDirection:'row'}}>
                                <Image style={{width:10, height:10, alignItems:'center', alignSelf:"center", marginRight:5, 
                                top: -2}} source={require("../../assets/icon_jam_outline.png")}/>
                                <Text style={{fontSize:14, fontFamily:fonts.primary[400], color:colors.primary,}}>24 Jam</Text>
                            </View>

                            <View style={{flexDirection:'row'}}>
                                <Image style={{width:10, height:10, alignItems:'center', alignSelf:"center", marginRight:5, 
                                top: -2}} source={require("../../assets/icon_telepon_outline.png")}/>
                                <Text style={{fontSize:14, fontFamily:fonts.primary[400], color:colors.primary,}}>0813-4079-9796</Text>
                            </View>

                            <View>
                                <Text style={{fontFamily:fonts.primary[400], color:colors.success, fontSize:14}}>Umum & BPJS</Text>
                            </View>
                        </View>

                        <View style={{flexDirection:"row", justifyContent:'space-around',}}>
                                   <View style={{justifyContent:'center', alignItems:"center", flexDirection:"row"}}>
                                    <TouchableNativeFeedback onPress={() => openMapsLink('https://maps.app.goo.gl/WsdRFwTqFuXRrBPb6')}>
                                    <Image style={{width:16, height:22,  marginRight:10}} source={require("../../assets/icon_mappoint.png")}/>
                                    </TouchableNativeFeedback>
                              
                                    <TouchableNativeFeedback  onPress={() => handleCallPress('09213121792')}>
                                    <Image style={{width:16, height:22, }} source={require("../../assets/icon_telepon_fill.png")}/>
                                    </TouchableNativeFeedback>
                                   </View>
                        </View>
                    </View>
                </View>

                {/* END RS PRIMA */}



                <MyGap jarak={20}/>


{/* RS TNI-AD TERNATE */}
<View>
<View style={{padding:10,  borderRadius:10, borderWidth:1,
borderColor:'#e1e1e1', flexDirection:"row", justifyContent:"space-around"}}>  
<View style={{flexDirection:"row"}}>
<View style={{alignItems:"center", justifyContent:"center", left: -10}}>
<Image style={{
width:59,
height:50,

}} source={require("../../assets/icon_rstniadternate.png")}/>
</View>
</View>

<View>
<Text style={{fontFamily:fonts.primary[600], fontSize:20, color:colors.primary}}>RS TNI-AD Ternate</Text>
<View style={{flexDirection:'row'}}>
<Image style={{width:10, height:10, alignItems:'center', alignSelf:"center", marginRight:5, 
top: -2}} source={require("../../assets/icon_jam_outline.png")}/>
<Text style={{fontSize:14, fontFamily:fonts.primary[400], color:colors.primary,}}>24 Jam</Text>
</View>

<View style={{flexDirection:'row'}}>
<Image style={{width:10, height:10, alignItems:'center', alignSelf:"center", marginRight:5, 
top: -2}} source={require("../../assets/icon_telepon_outline.png")}/>
<Text style={{fontSize:14, fontFamily:fonts.primary[400], color:colors.primary,}}>0853-4036-0515</Text>
</View>

<View>
<Text style={{fontFamily:fonts.primary[400], color:colors.success, fontSize:14}}>Umum & BPJS</Text>
</View>
</View>

<View style={{flexDirection:"row", justifyContent:'space-around',}}>
<View style={{justifyContent:'center', alignItems:"center", flexDirection:"row"}}>
<TouchableNativeFeedback onPress={() => openMapsLink('https://maps.app.goo.gl/EMBttZmyKf3vPaKQA')}>
<Image style={{width:16, height:22,  marginRight:10}} source={require("../../assets/icon_mappoint.png")}/>
</TouchableNativeFeedback>

<TouchableNativeFeedback  onPress={() => handleCallPress('085340360515')}>
<Image style={{width:16, height:22, }} source={require("../../assets/icon_telepon_fill.png")}/>
</TouchableNativeFeedback>
</View>
</View>
</View>
</View>

{/* END RS TNI-AD Ternate */}



<MyGap jarak={20}/>


{/* PUKESMAS KOTA */}
<View>
<View style={{padding:10,  borderRadius:10, borderWidth:1,
borderColor:'#e1e1e1', flexDirection:"row", justifyContent:"space-around"}}>  
<View style={{flexDirection:"row"}}>
<View style={{alignItems:"center", justifyContent:"center", left: -27}}>
<Image style={{
width:70,
height:70,

}} source={require("../../assets/icon_pukesmaskota.png")}/>
</View>
</View>

<View style={{left:-25}}>
<Text style={{fontFamily:fonts.primary[600], fontSize:20, color:colors.primary}}>Pukesmas Kota</Text>
<View style={{flexDirection:'row'}}>
<Image style={{width:10, height:10, alignItems:'center', alignSelf:"center", marginRight:5, 
top: -2}} source={require("../../assets/icon_jam_outline.png")}/>
<Text style={{fontSize:14, fontFamily:fonts.primary[400], color:colors.primary,}}>24 Jam</Text>
</View>



<View>
<Text style={{fontFamily:fonts.primary[400], color:colors.success, fontSize:14}}>Umum & BPJS</Text>
</View>
</View>

<View style={{flexDirection:"row", justifyContent:'space-around',}}>
<View style={{justifyContent:'center', alignItems:"center", flexDirection:"row"}}>
<TouchableNativeFeedback onPress={() => openMapsLink('https://maps.app.goo.gl/z6V1mtUqLoMFchuMA')}>
<Image style={{width:16, height:22,  marginRight:10}} source={require("../../assets/icon_mappoint.png")}/>
</TouchableNativeFeedback>


</View>
</View>
</View>
</View>

{/* END KLINIK KOTA*/}


<MyGap jarak={20}/>

{/* KLINIK AZURA */}
<View>
<View style={{padding:10,  borderRadius:10, borderWidth:1,
borderColor:'#e1e1e1', flexDirection:"row", justifyContent:"space-around"}}>  
<View style={{flexDirection:"row"}}>
<View style={{alignItems:"center", justifyContent:"center", left:-5}}>
<Image style={{
width:57,
height:57,

}} source={require("../../assets/icon_klinikazura.png")}/>
</View>
</View>

<View style={{left:15}}>
<Text style={{fontFamily:fonts.primary[600], fontSize:20, color:colors.primary}}>Klinik Utama Azzura</Text>
<View style={{flexDirection:'row'}}>
<Image style={{width:10, height:10, alignItems:'center', alignSelf:"center", marginRight:5, 
top: -2}} source={require("../../assets/icon_jam_outline.png")}/>
<Text style={{fontSize:14, fontFamily:fonts.primary[400], color:colors.primary,}}>Senin- Sabtu{'\n'}
09.00 – 22.00 WIT</Text>
</View>

<View style={{flexDirection:'row'}}>
<Image style={{width:10, height:10, alignItems:'center', alignSelf:"center", marginRight:5, 
top: -2}} source={require("../../assets/icon_telepon_outline.png")}/>
<Text style={{fontSize:14, fontFamily:fonts.primary[400], color:colors.primary,}}>081-1434-3797</Text>
</View>

<View>
<Text style={{fontFamily:fonts.primary[400], color:colors.success, fontSize:14}}>Umum & BPJS</Text>
</View>
</View>

<View style={{flexDirection:"row", justifyContent:'space-around',}}>
<View style={{justifyContent:'center', alignItems:"center", flexDirection:"row"}}>
<TouchableNativeFeedback onPress={() => openMapsLink('https://maps.app.goo.gl/DR3LRJCdntKpecXq7')}>
<Image style={{width:16, height:22,  marginRight:10}} source={require("../../assets/icon_mappoint.png")}/>
</TouchableNativeFeedback>

<TouchableNativeFeedback  onPress={() => handleCallPress('08114343797')}>
<Image style={{width:16, height:22, }} source={require("../../assets/icon_telepon_fill.png")}/>
</TouchableNativeFeedback>
</View>
</View>
</View>
</View>

{/* END  KLINIK AZURA */}

<MyGap jarak={20}/>

{/* KLINIK EKLES */}
<View>
<View style={{padding:10,  borderRadius:10, borderWidth:1,
borderColor:'#e1e1e1', flexDirection:"row", justifyContent:"space-around"}}>  
<View style={{flexDirection:"row"}}>
<View style={{alignItems:"center", justifyContent:"center", left: -15}}>
<Image style={{
width:57,
height:57,

}} source={require("../../assets/icon_eklesklinik.png")}/>
</View>
</View>

<View style={{left: -20}}>
<Text style={{fontFamily:fonts.primary[600], fontSize:20, color:colors.primary}}>Ekles klinik</Text>
<View style={{flexDirection:'row'}}>
<Image style={{width:10, height:10, alignItems:'center', alignSelf:"center", marginRight:5, 
top: -2}} source={require("../../assets/icon_jam_outline.png")}/>
<Text style={{fontSize:14, fontFamily:fonts.primary[400], color:colors.primary,}}>Senin – Minggu{'\n'}
10.00 – 21.00</Text>
</View>

<View style={{flexDirection:'row'}}>
<Image style={{width:10, height:10, alignItems:'center', alignSelf:"center", marginRight:5, 
top: -2}} source={require("../../assets/icon_telepon_outline.png")}/>
<Text style={{fontSize:14, fontFamily:fonts.primary[400], color:colors.primary,}}>0812-4426-7772</Text>
</View>

<View>
<Text style={{fontFamily:fonts.primary[400], color:colors.success, fontSize:14}}>Umum & BPJS</Text>
</View>
</View>

<View style={{flexDirection:"row", justifyContent:'space-around',}}>
<View style={{justifyContent:'center', alignItems:"center", flexDirection:"row"}}>
<TouchableNativeFeedback onPress={() => openMapsLink('https://maps.app.goo.gl/AAGuCwukrqKKvk5b8')}>
<Image style={{width:16, height:22,  marginRight:10}} source={require("../../assets/icon_mappoint.png")}/>
</TouchableNativeFeedback>

<TouchableNativeFeedback  onPress={() => handleCallPress('081244267772')}>
<Image style={{width:16, height:22, }} source={require("../../assets/icon_telepon_fill.png")}/>
</TouchableNativeFeedback>
</View>
</View>
</View>
</View>

{/* END  EKLES KLINIK */}


<MyGap jarak={20}/>

{/* KLINIK EKLES */}
<View>
<View style={{padding:10,  borderRadius:10, borderWidth:1,
borderColor:'#e1e1e1', flexDirection:"row", justifyContent:"space-around"}}>  
<View style={{flexDirection:"row"}}>
<View style={{alignItems:"center", justifyContent:"center", left: -12}}>
<Image style={{
width:65,
height:40,

}} source={require("../../assets/icon_fadentalcare.png")}/>
</View>
</View>

<View style={{left: -10}}>
<Text style={{fontFamily:fonts.primary[600], fontSize:20, color:colors.primary}}>Fa Dental Care</Text>
<View style={{flexDirection:'row'}}>
<Image style={{width:10, height:10, alignItems:'center', alignSelf:"center", marginRight:5, 
top: -2}} source={require("../../assets/icon_jam_outline.png")}/>
<Text style={{fontSize:14, fontFamily:fonts.primary[400], color:colors.primary,}}>Senin – Sabtu{'\n'}
15.00 – 21.00 WIT</Text>
</View>

<View style={{flexDirection:'row'}}>
<Image style={{width:10, height:10, alignItems:'center', alignSelf:"center", marginRight:5, 
top: -2}} source={require("../../assets/icon_telepon_outline.png")}/>
<Text style={{fontSize:14, fontFamily:fonts.primary[400], color:colors.primary,}}>0852-9897-1472</Text>
</View>

<View>
<Text style={{fontFamily:fonts.primary[400], color:colors.success, fontSize:14}}>Umum & BPJS</Text>
</View>
</View>

<View style={{flexDirection:"row", justifyContent:'space-around',}}>
<View style={{justifyContent:'center', alignItems:"center", flexDirection:"row"}}>
<TouchableNativeFeedback onPress={() => openMapsLink('https://maps.app.goo.gl/kvYvtb6t3cwNuumm8')}>
<Image style={{width:16, height:22,  marginRight:10}} source={require("../../assets/icon_mappoint.png")}/>
</TouchableNativeFeedback>

<TouchableNativeFeedback  onPress={() => handleCallPress('085298971472')}>
<Image style={{width:16, height:22, }} source={require("../../assets/icon_telepon_fill.png")}/>
</TouchableNativeFeedback>
</View>
</View>
</View>
</View>

{/* END  EKLES KLINIK */}




<MyGap jarak={20}/>

{/* KLINIK EKLES */}
<View>
<View style={{padding:10,  borderRadius:10, borderWidth:1,
borderColor:'#e1e1e1', flexDirection:"row", justifyContent:"space-around",}}>  
<View style={{flexDirection:"row"}}>
<View style={{alignItems:"center", justifyContent:"center", left: -10}}>
<Image style={{
width:65,
height:65,

}} source={require("../../assets/icon_ikradentalcare.png")}/>
</View>
</View>

<View>
<Text style={{fontFamily:fonts.primary[600], fontSize:20, color:colors.primary}}>Ikra Dental Care</Text>
<View style={{flexDirection:'row'}}>
<Image style={{width:10, height:10, alignItems:'center', alignSelf:"center", marginRight:5, 
top: -2}} source={require("../../assets/icon_jam_outline.png")}/>
<Text style={{fontSize:14, fontFamily:fonts.primary[400], color:colors.primary,}}>Senin – Sabtu{'\n'}  
16.00-21.00 WIT</Text>
</View>

<View style={{flexDirection:'row'}}>
<Image style={{width:10, height:10, alignItems:'center', alignSelf:"center", marginRight:5, 
top: -2}} source={require("../../assets/icon_telepon_outline.png")}/>
<Text style={{fontSize:14, fontFamily:fonts.primary[400], color:colors.primary,}}>0811-4312-987</Text>
</View>

<View>
<Text style={{fontFamily:fonts.primary[400], color:colors.success, fontSize:14}}>Umum & BPJS</Text>
</View>
</View>

<View style={{flexDirection:"row", justifyContent:'space-around',}}>
<View style={{justifyContent:'center', alignItems:"center", flexDirection:"row"}}>
<TouchableNativeFeedback onPress={() => openMapsLink('https://maps.app.goo.gl/u62S7bY1kGpkjNHYA')}>
<Image style={{width:16, height:22,  marginRight:10}} source={require("../../assets/icon_mappoint.png")}/>
</TouchableNativeFeedback>

<TouchableNativeFeedback  onPress={() => handleCallPress('08114312987')}>
<Image style={{width:16, height:22, }} source={require("../../assets/icon_telepon_fill.png")}/>
</TouchableNativeFeedback>
</View>
</View>
</View>
</View>

{/* END  EKLES KLINIK */}




<MyGap jarak={20}/>

{/* KLINIK EKLES */}
<View>
<View style={{padding:10,  borderRadius:10, borderWidth:1,
borderColor:'#e1e1e1', flexDirection:"row", justifyContent:"space-around"}}>  
<View style={{flexDirection:"row"}}>
<View style={{alignItems:"center", justifyContent:"center", left: -15}}>
<Image style={{
width:65,
height:65,

}} source={require("../../assets/icon_prodia.png")}/>
</View>
</View>

<View>
<Text style={{fontFamily:fonts.primary[600], fontSize:20, color:colors.primary}}>Prodia Ternate</Text>
<View style={{flexDirection:'row'}}>
<Image style={{width:10, height:10, alignItems:'center', alignSelf:"center", marginRight:5, 
top: -30}} source={require("../../assets/icon_jam_outline.png")}/>
<Text style={{fontSize:14, fontFamily:fonts.primary[400], color:colors.primary,}}>Senin – Jumat{'\n'}
08.00 – 19.00 WIT{'\n'}
{'\n'}
Sabtu{'\n'}
08.00 – 17.00 WIT</Text>
</View>

<View style={{flexDirection:'row'}}>
<Image style={{width:10, height:10, alignItems:'center', alignSelf:"center", marginRight:5, 
top: -2}} source={require("../../assets/icon_telepon_outline.png")}/>
<Text style={{fontSize:14, fontFamily:fonts.primary[400], color:colors.primary,}}>0822-2906-6889</Text>
</View>

<View>
<Text style={{fontFamily:fonts.primary[400], color:colors.success, fontSize:14}}>Umum & BPJS</Text>
</View>
</View>

<View style={{flexDirection:"row", justifyContent:'space-around',}}>
<View style={{justifyContent:'center', alignItems:"center", flexDirection:"row"}}>
<TouchableNativeFeedback onPress={() => openMapsLink('https://maps.app.goo.gl/WoKUKufR1SdzNiyX8')}>
<Image style={{width:16, height:22,  marginRight:10}} source={require("../../assets/icon_mappoint.png")}/>
</TouchableNativeFeedback>

<TouchableNativeFeedback  onPress={() => handleCallPress('082229066889')}>
<Image style={{width:16, height:22, }} source={require("../../assets/icon_telepon_fill.png")}/>
</TouchableNativeFeedback>
</View>
</View>
</View>
</View>

{/* END  EKLES KLINIK */}


<MyGap jarak={20}/>

{/* KLINIK EKLES */}
<View>
<View style={{padding:10,  borderRadius:10, borderWidth:1,
borderColor:'#e1e1e1', flexDirection:"row", justifyContent:"space-around"}}>  
<View style={{flexDirection:"row"}}>
<View style={{alignItems:"center", justifyContent:"center", left: -15}}>
<Image style={{
width:65,
height:65,

}} source={require("../../assets/icon_rsdarmaibu.png")}/>
</View>
</View>

<View>
<Text style={{fontFamily:fonts.primary[600], fontSize:20, color:colors.primary}}>Rumah Sakit{'\n'}Darma Ibu</Text>
<View style={{flexDirection:'row'}}>
<Image style={{width:10, height:10, alignItems:'center', alignSelf:"center", marginRight:5, 
top: 0}} source={require("../../assets/icon_jam_outline.png")}/>
<Text style={{fontSize:14, fontFamily:fonts.primary[400], color:colors.primary,}}>24 Jam</Text>
</View>

<View style={{flexDirection:'row'}}>
<Image style={{width:10, height:10, alignItems:'center', alignSelf:"center", marginRight:5, 
top: -2}} source={require("../../assets/icon_telepon_outline.png")}/>
<Text style={{fontSize:14, fontFamily:fonts.primary[400], color:colors.primary,}}>0921-3121-951</Text>
</View>

<View>
<Text style={{fontFamily:fonts.primary[400], color:colors.success, fontSize:14}}>Umum & BPJS</Text>
</View>
</View>

<View style={{flexDirection:"row", justifyContent:'space-around',}}>
<View style={{justifyContent:'center', alignItems:"center", flexDirection:"row"}}>
<TouchableNativeFeedback onPress={() => openMapsLink('https://maps.app.goo.gl/h9CHcMEucByDW35Z9')}>
<Image style={{width:16, height:22,  marginRight:10}} source={require("../../assets/icon_mappoint.png")}/>
</TouchableNativeFeedback>

<TouchableNativeFeedback  onPress={() => handleCallPress('09213121951')}>
<Image style={{width:16, height:22, }} source={require("../../assets/icon_telepon_fill.png")}/>
</TouchableNativeFeedback>
</View>
</View>
</View>
</View>

{/* END  EKLES KLINIK */}


<MyGap jarak={20}/>

{/* KLINIK EKLES */}
<View>
<View style={{padding:10,  borderRadius:10, borderWidth:1,
borderColor:'#e1e1e1', flexDirection:"row", justifyContent:"space-around"}}>  
<View style={{flexDirection:"row"}}>
<View style={{alignItems:"center", justifyContent:"center", left: -15}}>
<Image style={{
width:60,
height:60,

}} source={require("../../assets/icon_rsislam.png")}/>
</View>
</View>

<View style={{left:-20}}>
<Text style={{fontFamily:fonts.primary[600], fontSize:20, color:colors.primary}}>RS Islam</Text>
<View style={{flexDirection:'row'}}>
<Image style={{width:10, height:10, alignItems:'center', alignSelf:"center", marginRight:5, 
top: 0}} source={require("../../assets/icon_jam_outline.png")}/>
<Text style={{fontSize:14, fontFamily:fonts.primary[400], color:colors.primary,}}>24 Jam</Text>
</View>



<View>
<Text style={{fontFamily:fonts.primary[400], color:colors.success, fontSize:14}}>Umum & BPJS</Text>
</View>
</View>

<View style={{flexDirection:"row", justifyContent:'space-around',}}>
<View style={{justifyContent:'center', alignItems:"center", flexDirection:"row"}}>
<TouchableNativeFeedback onPress={() => openMapsLink('https://maps.app.goo.gl/ZBqEz7TigNkz8c846')}>
<Image style={{width:16, height:22,  marginRight:10}} source={require("../../assets/icon_mappoint.png")}/>
</TouchableNativeFeedback>



</View>
</View>
</View>
</View>

{/* END  EKLES KLINIK */}

<MyGap jarak={20}/>

{/* KLINIK EKLES */}
<View>
<View style={{padding:10,  borderRadius:10, borderWidth:1,
borderColor:'#e1e1e1', flexDirection:"row", justifyContent:"space-around"}}>  
<View style={{flexDirection:"row"}}>
<View style={{alignItems:"center", justifyContent:"center", left: -15}}>
<Image style={{
width:67,
height:67,

}} source={require("../../assets/icon_klinikpermatahati.png")}/>
</View>
</View>

<View style={{left:0}}>
<Text style={{fontFamily:fonts.primary[600], fontSize:20, color:colors.primary}}>Klinik Bersalin{'\n'}Permata Hati</Text>
<View style={{flexDirection:'row'}}>
<Image style={{width:10, height:10, alignItems:'center', alignSelf:"center", marginRight:5, 
top: 0}} source={require("../../assets/icon_jam_outline.png")}/>
<Text style={{fontSize:14, fontFamily:fonts.primary[400], color:colors.primary,}}>24 Jam</Text>
</View>


<View style={{flexDirection:'row'}}>
<Image style={{width:10, height:10, alignItems:'center', alignSelf:"center", marginRight:5, 
top: -2}} source={require("../../assets/icon_telepon_outline.png")}/>
<Text style={{fontSize:14, fontFamily:fonts.primary[400], color:colors.primary,}}>0921-3128-159</Text>
</View>

<View>
<Text style={{fontFamily:fonts.primary[400], color:colors.success, fontSize:14}}>Umum & BPJS</Text>
</View>
</View>

<View style={{flexDirection:"row", justifyContent:'space-around',}}>
<View style={{justifyContent:'center', alignItems:"center", flexDirection:"row"}}>
<TouchableNativeFeedback onPress={() => openMapsLink('https://maps.app.goo.gl/qJuPmRc89wEduUD66')}>
<Image style={{width:16, height:22,  marginRight:10}} source={require("../../assets/icon_mappoint.png")}/>
</TouchableNativeFeedback>


<TouchableNativeFeedback  onPress={() => handleCallPress('09213128159')}>
<Image style={{width:16, height:22, }} source={require("../../assets/icon_telepon_fill.png")}/>
</TouchableNativeFeedback>
</View>
</View>
</View>
</View>

{/* END  EKLES KLINIK */}




<MyGap jarak={20}/>

{/* KLINIK EKLES */}
<View>
<View style={{padding:10,  borderRadius:10, borderWidth:1,
borderColor:'#e1e1e1', flexDirection:"row", justifyContent:"space-around"}}>  
<View style={{flexDirection:"row"}}>
<View style={{alignItems:"center", justifyContent:"center", left: -15}}>
<Image style={{
width:67,
height:67,

}} source={require("../../assets/icon_pukesmassiko.png")}/>
</View>
</View>

<View style={{left:0}}>
<Text style={{fontFamily:fonts.primary[600], fontSize:20, color:colors.primary}}>Puskesmas{'\n'}Siko</Text>
<View style={{flexDirection:'row'}}>
<Image style={{width:10, height:10, alignItems:'center', alignSelf:"center", marginRight:5, 
top: 0}} source={require("../../assets/icon_jam_outline.png")}/>
<Text style={{fontSize:14, fontFamily:fonts.primary[400], color:colors.primary,}}>24 Jam</Text>
</View>


{/* <View style={{flexDirection:'row'}}>
<Image style={{width:10, height:10, alignItems:'center', alignSelf:"center", marginRight:5, 
top: -2}} source={require("../../assets/icon_telepon_outline.png")}/>
<Text style={{fontSize:14, fontFamily:fonts.primary[400], color:colors.primary,}}>0921-3128-159</Text>
</View> */}

<View>
<Text style={{fontFamily:fonts.primary[400], color:colors.success, fontSize:14}}>Umum & BPJS</Text>
</View>
</View>

<View style={{flexDirection:"row", justifyContent:'space-around',}}>
<View style={{justifyContent:'center', alignItems:"center", flexDirection:"row"}}>
<TouchableNativeFeedback onPress={() => openMapsLink('https://maps.app.goo.gl/epvdTF8iArBLzcDz7')}>
<Image style={{width:16, height:22,  marginRight:10}} source={require("../../assets/icon_mappoint.png")}/>
</TouchableNativeFeedback>

{/* 
<TouchableNativeFeedback  onPress={() => handleCallPress('09213128159')}>
<Image style={{width:16, height:22, }} source={require("../../assets/icon_telepon_fill.png")}/>
</TouchableNativeFeedback> */}
</View>
</View>
</View>
</View>

{/* END  EKLES KLINIK */}




<MyGap jarak={20}/>

{/* KLINIK EKLES */}
<View>
<View style={{padding:10,  borderRadius:10, borderWidth:1,
borderColor:'#e1e1e1', flexDirection:"row", justifyContent:"space-around"}}>  
<View style={{flexDirection:"row"}}>
<View style={{alignItems:"center", justifyContent:"center", left: -15}}>
<Image style={{
width:67,
height:67,

}} source={require("../../assets/icon_pukesmasjambula.png")}/>
</View>
</View>

<View style={{left:0}}>
<Text style={{fontFamily:fonts.primary[600], fontSize:20, color:colors.primary}}>Puskesmas{'\n'}Jambula</Text>
<View style={{flexDirection:'row'}}>
<Image style={{width:10, height:10, alignItems:'center', alignSelf:"center", marginRight:5, 
top: 0}} source={require("../../assets/icon_jam_outline.png")}/>
<Text style={{fontSize:14, fontFamily:fonts.primary[400], color:colors.primary,}}>24 Jam</Text>
</View>


{/* <View style={{flexDirection:'row'}}>
<Image style={{width:10, height:10, alignItems:'center', alignSelf:"center", marginRight:5, 
top: -2}} source={require("../../assets/icon_telepon_outline.png")}/>
<Text style={{fontSize:14, fontFamily:fonts.primary[400], color:colors.primary,}}>0921-3128-159</Text>
</View> */}

<View>
<Text style={{fontFamily:fonts.primary[400], color:colors.success, fontSize:14}}>Umum & BPJS</Text>
</View>
</View>

<View style={{flexDirection:"row", justifyContent:'space-around',}}>
<View style={{justifyContent:'center', alignItems:"center", flexDirection:"row"}}>
<TouchableNativeFeedback onPress={() => openMapsLink('https://maps.app.goo.gl/G9PTZ32xSiVX6mS57')}>
<Image style={{width:16, height:22,  marginRight:10}} source={require("../../assets/icon_mappoint.png")}/>
</TouchableNativeFeedback>

{/* 
<TouchableNativeFeedback  onPress={() => handleCallPress('09213128159')}>
<Image style={{width:16, height:22, }} source={require("../../assets/icon_telepon_fill.png")}/>
</TouchableNativeFeedback> */}
</View>
</View>
</View>
</View>

{/* END  EKLES KLINIK */}



<MyGap jarak={20}/>

{/* KLINIK EKLES */}
<View>
<View style={{padding:10,  borderRadius:10, borderWidth:1,
borderColor:'#e1e1e1', flexDirection:"row", justifyContent:"space-around"}}>  
<View style={{flexDirection:"row"}}>
<View style={{alignItems:"center", justifyContent:"center", left: -15}}>
<Image style={{
width:67,
height:67,

}} source={require("../../assets/icon_pukesmaskalumpang.png")}/>
</View>
</View>

<View style={{left:0}}>
<Text style={{fontFamily:fonts.primary[600], fontSize:20, color:colors.primary}}>Puskesmas{'\n'}Kalumpang</Text>
<View style={{flexDirection:'row'}}>
<Image style={{width:10, height:10, alignItems:'center', alignSelf:"center", marginRight:5, 
top: 0}} source={require("../../assets/icon_jam_outline.png")}/>
<Text style={{fontSize:14, fontFamily:fonts.primary[400], color:colors.primary,}}>24 Jam</Text>
</View>


{/* <View style={{flexDirection:'row'}}>
<Image style={{width:10, height:10, alignItems:'center', alignSelf:"center", marginRight:5, 
top: -2}} source={require("../../assets/icon_telepon_outline.png")}/>
<Text style={{fontSize:14, fontFamily:fonts.primary[400], color:colors.primary,}}>0921-3128-159</Text>
</View> */}

<View>
<Text style={{fontFamily:fonts.primary[400], color:colors.success, fontSize:14}}>Umum & BPJS</Text>
</View>
</View>

<View style={{flexDirection:"row", justifyContent:'space-around',}}>
<View style={{justifyContent:'center', alignItems:"center", flexDirection:"row"}}>
<TouchableNativeFeedback onPress={() => openMapsLink('https://maps.app.goo.gl/4bJQgxQ8oYdWViQe7')}>
<Image style={{width:16, height:22,  marginRight:10}} source={require("../../assets/icon_mappoint.png")}/>
</TouchableNativeFeedback>

{/* 
<TouchableNativeFeedback  onPress={() => handleCallPress('09213128159')}>
<Image style={{width:16, height:22, }} source={require("../../assets/icon_telepon_fill.png")}/>
</TouchableNativeFeedback> */}
</View>
</View>
</View>
</View>

{/* END  EKLES KLINIK */}


<MyGap jarak={20}/>

{/* KLINIK EKLES */}
<View>
<View style={{padding:10,  borderRadius:10, borderWidth:1,
borderColor:'#e1e1e1', flexDirection:"row", justifyContent:"space-around"}}>  
<View style={{flexDirection:"row"}}>
<View style={{alignItems:"center", justifyContent:"center", left: -15}}>
<Image style={{
width:67,
height:67,

}} source={require("../../assets/icon_pukesmaskalumata.png")}/>
</View>
</View>

<View style={{left:0}}>
<Text style={{fontFamily:fonts.primary[600], fontSize:20, color:colors.primary}}>Puskesmas{'\n'}Kalumata</Text>
<View style={{flexDirection:'row'}}>
<Image style={{width:10, height:10, alignItems:'center', alignSelf:"center", marginRight:5, 
top: 0}} source={require("../../assets/icon_jam_outline.png")}/>
<Text style={{fontSize:14, fontFamily:fonts.primary[400], color:colors.primary,}}>24 Jam</Text>
</View>


{/* <View style={{flexDirection:'row'}}>
<Image style={{width:10, height:10, alignItems:'center', alignSelf:"center", marginRight:5, 
top: -2}} source={require("../../assets/icon_telepon_outline.png")}/>
<Text style={{fontSize:14, fontFamily:fonts.primary[400], color:colors.primary,}}>0921-3128-159</Text>
</View> */}

<View>
<Text style={{fontFamily:fonts.primary[400], color:colors.success, fontSize:14}}>Umum & BPJS</Text>
</View>
</View>

<View style={{flexDirection:"row", justifyContent:'space-around',}}>
<View style={{justifyContent:'center', alignItems:"center", flexDirection:"row"}}>
<TouchableNativeFeedback onPress={() => openMapsLink('https://maps.app.goo.gl/XQkjh1JFJzRon1Ed7')}>
<Image style={{width:16, height:22,  marginRight:10}} source={require("../../assets/icon_mappoint.png")}/>
</TouchableNativeFeedback>

{/* 
<TouchableNativeFeedback  onPress={() => handleCallPress('09213128159')}>
<Image style={{width:16, height:22, }} source={require("../../assets/icon_telepon_fill.png")}/>
</TouchableNativeFeedback> */}
</View>
</View>
</View>
</View>

{/* END  EKLES KLINIK */}




<MyGap jarak={20}/>

{/* KLINIK EKLES */}
<View>
<View style={{padding:10,  borderRadius:10, borderWidth:1,
borderColor:'#e1e1e1', flexDirection:"row", justifyContent:"space-around"}}>  
<View style={{flexDirection:"row"}}>
<View style={{alignItems:"center", justifyContent:"center", left: -15}}>
<Image style={{
width:67,
height:67,

}} source={require("../../assets/icon_pukesmasgambesi.png")}/>
</View>
</View>

<View style={{left:0}}>
<Text style={{fontFamily:fonts.primary[600], fontSize:20, color:colors.primary}}>Puskesmas{'\n'}Gambesi</Text>
<View style={{flexDirection:'row'}}>
<Image style={{width:10, height:10, alignItems:'center', alignSelf:"center", marginRight:5, 
top: 0}} source={require("../../assets/icon_jam_outline.png")}/>
<Text style={{fontSize:14, fontFamily:fonts.primary[400], color:colors.primary,}}>24 Jam</Text>
</View>


{/* <View style={{flexDirection:'row'}}>
<Image style={{width:10, height:10, alignItems:'center', alignSelf:"center", marginRight:5, 
top: -2}} source={require("../../assets/icon_telepon_outline.png")}/>
<Text style={{fontSize:14, fontFamily:fonts.primary[400], color:colors.primary,}}>0921-3128-159</Text>
</View> */}

<View>
<Text style={{fontFamily:fonts.primary[400], color:colors.success, fontSize:14}}>Umum & BPJS</Text>
</View>
</View>

<View style={{flexDirection:"row", justifyContent:'space-around',}}>
<View style={{justifyContent:'center', alignItems:"center", flexDirection:"row"}}>
<TouchableNativeFeedback onPress={() => openMapsLink('https://maps.app.goo.gl/nZ16UGuhGcW9SPrDA')}>
<Image style={{width:16, height:22,  marginRight:10}} source={require("../../assets/icon_mappoint.png")}/>
</TouchableNativeFeedback>

{/* 
<TouchableNativeFeedback  onPress={() => handleCallPress('09213128159')}>
<Image style={{width:16, height:22, }} source={require("../../assets/icon_telepon_fill.png")}/>
</TouchableNativeFeedback> */}
</View>
</View>
</View>
</View>

{/* END  EKLES KLINIK */}



<MyGap jarak={20}/>

{/* KLINIK EKLES */}
<View>
<View style={{padding:10,  borderRadius:10, borderWidth:1,
borderColor:'#e1e1e1', flexDirection:"row", justifyContent:"space-around"}}>  
<View style={{flexDirection:"row"}}>
<View style={{alignItems:"center", justifyContent:"center", left: -15}}>
<Image style={{
width:67,
height:67,

}} source={require("../../assets/icon_pukesmastarausango.png")}/>
</View>
</View>

<View style={{left:0}}>
<Text style={{fontFamily:fonts.primary[600], fontSize:20, color:colors.primary}}>Puskesmas{'\n'}Tarau sango</Text>
<View style={{flexDirection:'row'}}>
<Image style={{width:10, height:10, alignItems:'center', alignSelf:"center", marginRight:5, 
top: 0}} source={require("../../assets/icon_jam_outline.png")}/>
<Text style={{fontSize:14, fontFamily:fonts.primary[400], color:colors.primary,}}>24 Jam</Text>
</View>


{/* <View style={{flexDirection:'row'}}>
<Image style={{width:10, height:10, alignItems:'center', alignSelf:"center", marginRight:5, 
top: -2}} source={require("../../assets/icon_telepon_outline.png")}/>
<Text style={{fontSize:14, fontFamily:fonts.primary[400], color:colors.primary,}}>0921-3128-159</Text>
</View> */}

<View>
<Text style={{fontFamily:fonts.primary[400], color:colors.success, fontSize:14}}>Umum & BPJS</Text>
</View>
</View>

<View style={{flexDirection:"row", justifyContent:'space-around',}}>
<View style={{justifyContent:'center', alignItems:"center", flexDirection:"row"}}>
<TouchableNativeFeedback onPress={() => openMapsLink('https://maps.app.goo.gl/yQi9iJ2T5zTCcW6Y8')}>
<Image style={{width:16, height:22,  marginRight:10}} source={require("../../assets/icon_mappoint.png")}/>
</TouchableNativeFeedback>

{/* 
<TouchableNativeFeedback  onPress={() => handleCallPress('09213128159')}>
<Image style={{width:16, height:22, }} source={require("../../assets/icon_telepon_fill.png")}/>
</TouchableNativeFeedback> */}
</View>
</View>
</View>
</View>

{/* END  EKLES KLINIK */}




<MyGap jarak={20}/>

{/* KLINIK EKLES */}
<View>
<View style={{padding:10,  borderRadius:10, borderWidth:1,
borderColor:'#e1e1e1', flexDirection:"row", justifyContent:"space-around"}}>  
<View style={{flexDirection:"row"}}>
<View style={{alignItems:"center", justifyContent:"center", left: -15}}>
<Image style={{
width:67,
height:67,

}} source={require("../../assets/icon_kimiafarmakalumpang.png")}/>
</View>
</View>

<View style={{left:0}}>
<Text style={{fontFamily:fonts.primary[600], fontSize:20, color:colors.primary}}>Apotek Kimia{'\n'}Farma Kalumpang</Text>
<View style={{flexDirection:'row'}}>
<Image style={{width:10, height:10, alignItems:'center', alignSelf:"center", marginRight:5, 
top: -10}} source={require("../../assets/icon_jam_outline.png")}/>
<Text style={{fontSize:14, fontFamily:fonts.primary[400], color:colors.primary,}}>Senin – Minggu{'\n'}
08.00 – 23. 00</Text>
</View>


<View style={{flexDirection:'row'}}>
<Image style={{width:10, height:10, alignItems:'center', alignSelf:"center", marginRight:5, 
top: -2}} source={require("../../assets/icon_telepon_outline.png")}/>
<Text style={{fontSize:14, fontFamily:fonts.primary[400], color:colors.primary,}}>0811-4300-5386</Text>
</View>

<View>
<Text style={{fontFamily:fonts.primary[400], color:colors.success, fontSize:14}}>Umum & BPJS</Text>
</View>
</View>

<View style={{flexDirection:"row", justifyContent:'space-around',}}>
<View style={{justifyContent:'center', alignItems:"center", flexDirection:"row"}}>
<TouchableNativeFeedback onPress={() => openMapsLink('https://maps.app.goo.gl/K2avEKsguS48ZrBe8')}>
<Image style={{width:16, height:22,  marginRight:10}} source={require("../../assets/icon_mappoint.png")}/>
</TouchableNativeFeedback>


<TouchableNativeFeedback  onPress={() => handleCallPress('081143005386')}>
<Image style={{width:16, height:22, }} source={require("../../assets/icon_telepon_fill.png")}/>
</TouchableNativeFeedback>
</View>
</View>
</View>
</View>

{/* END  EKLES KLINIK */}
            </View>
        </ScrollView>
    </View>
  )
}