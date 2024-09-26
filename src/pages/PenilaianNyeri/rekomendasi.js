import { View, Text, SafeAreaView, ImageBackground, ScrollView, Image } from 'react-native'
import React from 'react'
import { Color, colors, fonts } from '../../utils'
import { MyButton, MyHeader } from '../../components'

export default function Rekomendasi({route, navigation}) {
    //   Menerima score dari route params
      const totalScore = route.params?.totalScore ?? 0; // Default totalScore adalah 0


      // Fungsi untuk navigasi kembali ke halaman utama
    const handleBackToHome = () => {
        navigation.navigate('MainApp'); // Navigasi ke halaman utama
    };

  return (
  
        <ImageBackground style={{
            flex:1,
            width:'100%',
            height:"100%",
        }} source={require('../../assets/homebg.png')}>

{/* HEADER */}

        <MyHeader title="Rekomendasi Manajemen Nyeri pada Bayi"/>

        <ScrollView>

        <View style={{padding:20}}>
     
 {/* Tampilan untuk score 3-4 */}
 {totalScore <= 4 && totalScore > 2 && (
    <View style={{padding:10}}>
                       

                       <View>
                           <Text style={{
                               fontFamily:fonts.primary[600],
                               fontSize:20,
                               textAlign:'center',
                               color:colors.primary
                           }}>HASIL <Text style={{
                               color:'#FFCA42'
                           }}>Nyeri Sedang</Text></Text>
   
                           <Text style={{
                               fontFamily:fonts.primary[300],
                               color:colors.primary,
                               textAlign:'center',
   
                           }}>Skor 3-4 (Non Farmakologis/Tanpa Obat)</Text>
                       </View>
   
                       <View style={{
                           padding:10
                       }}>
                           <Image style={{
                               width:293,
                               height:195,
                               alignSelf:'center'
                           }} source={require('../../assets/image_skor-3-4satu.png')}/>
                       </View>
   
                       <View>
                           <Text style={{
                               fontFamily:fonts.primary[800],
                               fontSize:15,
                               color:colors.primary
                           }}>• Stimulasi dan pijatan :</Text>
                       </View>
   
                       <View style={{
                           marginTop:20
                       }}>
                       <Image style={{
                               width:190,
                               height:148,
                               alignSelf:'center'
                           }} source={require('../../assets/image_skor-3-4dua.png')}/>
   
                           <Text style={{
                               fontFamily:fonts.primary[300],
                               textAlign:'justify',
                               color:colors.primary,
                               marginTop:20,
                            width:304,
                            alignSelf:"center"
   
                           }}>
                           Pasien bayi/anak jauh lebih nyaman karena otot relaksasi, sensasi tidak nyeri memblokir menurunkan transmisi nyeri, 
                           menggosok kulit, punggung, dan bahu.
   
                           </Text>
   
                           <Text style={{
                               fontFamily:fonts.primary[800],
                               fontSize:15,
                               color:colors.primary,
                               marginTop:20
                           }}>• Kompres Es dan Panas :</Text>
   
   
                                 <Image style={{
                               width:190,
                               height:148,
                               alignSelf:'center',
                               marginTop:20,
                           }} source={require('../../assets/image_skor-3-4tiga.png')}/>

                           <Text style={{
                            fontFamily:fonts.primary[800],
                            color:colors.primary,
                            marginTop:20,
                            width:304,
                            alignSelf:"center"
                           }}>Es <Text style={{
                            fontFamily:fonts.primary[300]
                           }}> : menurunkan prostaglandin, sensitivitas reseptor nyeri kuat, & menghambat inflamasi.</Text> {'\n'}
                           Panas <Text style={{
                            fontFamily:fonts.primary[300]
                           }}> : melancarkan aliran darah, nyeri berkurang.</Text>
                            </Text>

                            <Text style={{
                               fontFamily:fonts.primary[800],
                               fontSize:15,
                               color:colors.primary,
                               marginTop:20
                           }}>• Distraksi : </Text>


                                <Image style={{
                               width:190,
                               height:148,
                               alignSelf:'center',
                               marginTop:20,
                           }} source={require('../../assets/image_skor-3-4empat.png')}/>

                           <Text style={{
                            fontFamily:fonts.primary[300],
                            textAlign:"justify",
                            fontSize:13,
                            color:colors.primary,
                            marginTop:20,
                            width:304,
                            alignSelf:"center"
                           }}>

                           Suatu metode yang digunakan untuk menghilangkan nyeri dengan cara mengalihkan perhatian pasien pada hal-hal
                            lain sehingga pasien akan lupa terhadap nyeri yang dialami (diberikan pengalihan mainan anak/bel berbunyi/bola, 
                            dan lain-lain).

                           </Text>


                           
                           <Text style={{
                               fontFamily:fonts.primary[800],
                               fontSize:15,
                               color:colors.primary,
                               marginTop:20
                           }}>• Non nutritive sucking :  </Text>



                                <Image style={{
                               width:190,
                               height:148,
                               alignSelf:'center',
                               marginTop:20,
                           }} source={require('../../assets/image_skor-3-4lima.png')}/>


                             <Text style={{
                            fontFamily:fonts.primary[300],
                            textAlign:"justify",
                            fontSize:13,
                            color:colors.primary,
                            marginTop:20,
                            width:304,
                            alignSelf:"center"
                           }}>

                            Adalah penggunaan manajemen nyeri non farmakologi dengan cara memberikan stimulasi oral (kempeng/pacifier) untuk anak 
                            bisa ngenyot, sangat cocok untuk anak yang masih berada pada fase oral, karena kepuasan anak ada di mulut.

                           </Text>


                           <Text style={{
                               fontFamily:fonts.primary[800],
                               fontSize:15,
                               color:colors.primary,
                               marginTop:20
                           }}>• Penggunaan Sukrosa/ASI : </Text>

                                <Image style={{
                               width:190,
                               height:148,
                               alignSelf:'center',
                               marginTop:20,
                           }} source={require('../../assets/image_skor-3-4enam.png')}/>


                            <Text style={{
                            fontFamily:fonts.primary[300],
                            textAlign:"justify",
                            fontSize:13,
                            color:colors.primary,
                            marginTop:20,
                            width:304,
                            alignSelf:"center"
                           }}>

                           Penggunaan sukrosa bisa sebagai bentuk distraksi atas nyeri yang dirasakan anak, adanya sensasi manis di mulutnya 
                           membuat anak merasa nyaman sehingga menurunkan sensasi tidak nyaman yang sedang dirasakan.


                           </Text>

                              
                           <Text style={{
                               fontFamily:fonts.primary[800],
                               fontSize:15,
                               color:colors.primary,
                               marginTop:20
                           }}>• Gedong/pembalutan dengan kain  :  </Text>

                                <Image style={{
                               width:190,
                               height:148,
                               alignSelf:'center',
                               marginTop:20,
                           }} source={require('../../assets/image_skor-3-4tujuh.png')}/>


                            <Text style={{
                            fontFamily:fonts.primary[300],
                            textAlign:"justify",
                            fontSize:13,
                            color:colors.primary,
                            marginTop:20,
                            width:304,
                            alignSelf:"center"
                           }}>

                 Gedong bisa sebagai manajemen nyeri non farmakologis karena dengan gedong membuat anak khususnya bayi merasa nyaman karena 
                 sensasi hangat, dan seperti berada dalam dekapan ibu.

                           </Text>
   
                       </View>
   
                      </View>
                )}

                  {/* Tampilan untuk score lebih dari 4 */}
                  {totalScore > 4 && (
                   
        <View style={{padding:10}}>
        <View>
                           <Text style={{
                               fontFamily:fonts.primary[600],
                               fontSize:20,
                               textAlign:'center',
                               color:colors.primary
                           }}>HASIL <Text style={{
                               color:'#FF0000'
                           }}>Nyeri Sedang</Text></Text>
   
                           <Text style={{
                               fontFamily:fonts.primary[300],
                               color:colors.primary,
                               textAlign:'center',
   
                           }}>Skor {'>'}4 (Farmakologis)</Text>

                            <View style={{
                           padding:10
                       }}>
                           <Image style={{
                               width:231,
                               height:288,
                               alignSelf:'center'
                           }} source={require('../../assets/image_skor-lebih4.png')}/>

                                <Text style={{
                               fontFamily:fonts.primary[300],
                               textAlign:'justify',
                               color:colors.primary,
                               marginTop:20,
                            width:304,
                            alignSelf:"center"
   
                           }}>
                       Kolaborasi dengan dokter, obat-obatan analgesia, narkotik per oral atau parenteral (IM, IV, SC) 
                       untuk mengurangi nyeri secara cepat.

   
                           </Text>
                       </View>
                       </View>
        </View>
                
                )}

                 {/* Tombol untuk kembali ke halaman utama */}
                 <MyButton 
                    title="Selesai" 
                    colorText={colors.white} 
                    onPress={handleBackToHome} 
                />
                
        </View>


        </ScrollView>



        </ImageBackground>
  )
}