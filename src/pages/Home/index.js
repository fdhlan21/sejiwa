import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Image,
  Animated,
  ImageBackground,
  TouchableWithoutFeedback,
  TouchableOpacity,
  SafeAreaView,
  ScrollView
} from 'react-native';
import { MyButton, MyCalendar, MyGap, MyHeader, MyInput, MyPicker } from '../../components';
import { MyDimensi, colors, fonts, windowHeight, windowWidth, Color } from '../../utils';
import { MYAPP, apiURL, api_token, getData, storeData, getdataPasien } from '../../utils/localStorage';
import { BackgroundImage } from 'react-native-elements/dist/config';
import { color } from 'react-native-reanimated';
import axios from 'axios';
import moment from 'moment';
import { useToast } from 'react-native-toast-notifications';
import MyLoading from '../../components/MyLoading';
import MyCarouser from '../../components/MyCarouser';
import { Icon } from 'react-native-elements';


const MyMenu = ({ onPress, img, label, backgroundColor, desc }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={{
        justifyContent: 'center',
        alignItems: 'center',
        width: windowWidth / 4,
        height: windowWidth / 4,
      }}>
        <View style={{
          backgroundColor: backgroundColor,
          borderRadius: 12,
          width: windowWidth / 4,
          height: windowWidth / 4,
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center'

        }}>
          <Image source={img} style={{
            width: windowWidth / 5, height: windowWidth / 5,
          }} />
        </View>
        <Text style={{
          marginTop: 10,
          color: colors.black,
          ...fonts.caption,
          textAlign: 'center',
          maxWidth: '85%'
        }}>{label}</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default function Home({ navigation, route }) {
  const [dataPasien, setDataPasien] = useState(null); // State untuk menyimpan data pasien
  const [user, setUser] = useState({});

  const __getUser = async () => {
    const u = await getData('user');
    setUser(u);
    await __getDataPasien(u.id); // Ambil data pasien setelah mendapatkan user
  };

  const __getDataPasien = async (userId) => {
    try {
      const response = await axios.post(getdataPasien, {
        id: userId,
      });
      setDataPasien(response.data); // Set data pasien jika ada
    } catch (error) {
      console.error("Error fetching patient data:", error);
      setDataPasien(null); // Jika gagal mengambil data, set ke null
    }
  };


  useEffect(() => {
    __getUser();
    console.log("Tes cuy")
  }, [])

  const handleIdentitasPasienPress = () => {
    if (!dataPasien) {
      // Tampilkan pesan jika data pasien tidak ada
      showMessage({
        type: "default",
        message: "Anda belum mengisi data pasien.",
        backgroundColor: colors.danger,
      });
    } else {
      // Navigasi ke halaman identitas pasien jika data ada
      navigation.navigate('IdentitasPasien');
    }
  };
  return (
    <ImageBackground source={require('../../assets/bghome.png')} style={{
      flex: 1,
      backgroundColor: colors.white,
      width: "100%",
      height: "100%"
    }}>

      <ScrollView>
        <View style={{padding:10}}>
          {/* HEADER */}
          <View style={{
            padding:10,
            flexDirection:"row",
            justifyContent:"space-between",
            alignItems:"center"
          }}>

          {/* WELCOME TEKS */}
          <View>
            <Text style={{
              fontFamily:fonts.primary[800],
              color:colors.primary,
              fontSize:15
            }}>
            Selamat datang, <Text>{user.username}</Text>
            </Text>
          </View>

          {/* logo */}
          <View>
            <Image style={{
              width:72,
              height:48
            }} source={require('../../assets/logohome.png')}/>
          </View>
          </View>
          {/* END HEADER */}


          {/* SLIDER */}
          <View style={{
            alignItems:"center"
          }}>
            <Image style={{
              width:338,
              height:224
            }} source={require('../../assets/slider_1.png')}/>
          </View>
          {/* END SLIDER */}



          {/* MENU */}
          <View style={{
            padding:10
          }}>

          {/* MENU IDENTITAS PASIEN */}
            <View>
              <TouchableWithoutFeedback onPress={() =>  navigation.navigate('DataPasien')}>
                <View style={{padding:10, backgroundColor:colors.background, borderRadius:30, borderWidth:5,
                borderColor:Color.blueGray[500], flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
                  <View>
                    <Text style={{fontFamily:fonts.primary[700], color:colors.primary, fontSize:35,}}>Identitas{'\n'}
                    Pasien</Text>
                  </View>

                  <View>
                    <Image style={{width:114, height:114, }} source={require('../../assets/icon_identitas_pasien.png')}/>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </View>
            {/* MENU IDENTITAS PASIEN */}
            <MyGap jarak={20}/>
            {/* MENU EDUKASI */}

            <View>
              <TouchableWithoutFeedback onPress={() => navigation.navigate("Edukasi")}>
                <View style={{padding:10, backgroundColor:colors.background, borderRadius:30, borderWidth:5,
                borderColor:Color.blueGray[500], flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
                  <View>
                    <Text style={{fontFamily:fonts.primary[700], color:colors.primary, fontSize:35,}}>Edukasi</Text>
                  </View>

                  

                  <View>
                    <Image style={{width:101, height:101, }} source={require('../../assets/icon_menu_edukasi.png')}/>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </View>
            
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({})