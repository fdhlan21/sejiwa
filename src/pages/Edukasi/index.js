import { View, Text, ScrollView, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../utils'
import { MyCarouser, MyGap, MyHeader } from '../../components'
import { Image } from 'react-native'

export default function Edukasi({navigation}) {
  return (
    <View style={{
        flex:1,
        backgroundColor:colors.background,
    }}>
     <View>
        <MyHeader onPress={() => navigation.navigate('MainApp')} title="Edukasi"/>
     </View>



     <ScrollView>

     <View style={{
        padding:20
     }}>

     {/* poster */}
     <View>
        <View>
            <Text style={{
                fontFamily:fonts.primary[600],
                fontSize:18,

            }}>Poster</Text>

            {/* MUNCUL POSTER */}
            <View style={{flexDirection:"row", justifyContent:"center"}}>
               
            <ScrollView horizontal={true}>

            <TouchableWithoutFeedback>
                <View>
                <Image style={{
                    width:163,
                    height:231,
                    marginRight:10
                }} source={require('../../assets/poster_satu.png')}/>
                </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback>
                <View>
                <Image style={{
                    width:163,
                    height:231,
                    marginRight:10
                }} source={require('../../assets/poster_DUA.png')}/>
                </View>
            </TouchableWithoutFeedback>

                     <TouchableWithoutFeedback>
                <View>
                <Image style={{
                    width:163,
                    height:231,
                    marginRight:10
                }} source={require('../../assets/poster_tiga.png')}/>
                </View>
            </TouchableWithoutFeedback>

                
            <TouchableWithoutFeedback>
                <View>
                <Image style={{
                    width:163,
                    height:231,
                    marginRight:10
                }} source={require('../../assets/poster_empat.png')}/>
                </View>
            </TouchableWithoutFeedback>


            <TouchableWithoutFeedback>
                <View>
                <Image style={{
                    width:163,
                    height:231,
                    marginRight:10
                }} source={require('../../assets/poster_lima.png')}/>
                </View>
            </TouchableWithoutFeedback>

                
            </ScrollView>

            </View>
        </View>
     </View>
     <MyGap jarak={50}/>

         {/* tips */}
         <View>
        <View>
            <Text style={{
                fontFamily:fonts.primary[600],
                fontSize:18,

            }}>Tips</Text>

            {/* MUNCUL POSTER */}
            <View style={{flexDirection:"row", justifyContent:"center"}}>

                
            <ScrollView horizontal={true}>

<TouchableWithoutFeedback>
    <View>
    <Image style={{
        width:163,
        height:231,
        marginRight:10
    }} source={require('../../assets/tips_satu.png')}/>
    </View>
</TouchableWithoutFeedback>

<TouchableWithoutFeedback>
    <View>
    <Image style={{
        width:163,
        height:231,
        marginRight:10
    }} source={require('../../assets/tips_dua.png')}/>
    </View>
</TouchableWithoutFeedback>

         <TouchableWithoutFeedback>
    <View>
    <Image style={{
        width:163,
        height:231,
        marginRight:10
    }} source={require('../../assets/tips_tiga.png')}/>
    </View>
</TouchableWithoutFeedback>

    
<TouchableWithoutFeedback>
    <View>
    <Image style={{
        width:163,
        height:231,
        marginRight:10
    }} source={require('../../assets/tips_empat.png')}/>
    </View>
</TouchableWithoutFeedback>


<TouchableWithoutFeedback>
    <View>
    <Image style={{
        width:163,
        height:231,
        marginRight:10
    }} source={require('../../assets/tips_lima.png')}/>
    </View>
</TouchableWithoutFeedback>

    
</ScrollView>



            </View>
        </View>
     </View>

     </View>

     </ScrollView>
    </View>
  )
}