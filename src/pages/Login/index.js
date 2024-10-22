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
  ScrollView,
  Alert
} from 'react-native';
import { MyButton, MyGap, MyInput, MyInputLogin } from '../../components';
import { MyDimensi, colors, fonts, windowHeight, windowWidth, Color } from '../../utils';
import { MYAPP, apiURL, api_token, getData, loginExpress, storeData } from '../../utils/localStorage';
import { BackgroundImage } from 'react-native-elements/dist/config';
import { color, set } from 'react-native-reanimated';
import axios from 'axios';
import MyLoading from '../../components/MyLoading';
import { useToast } from 'react-native-toast-notifications';
import { showMessage } from 'react-native-flash-message';

export default function Login({ navigation, route }) {
  const [loading, setLoading] = useState(false)
  const img = new Animated.Value(0.8);
  const card = new Animated.Value(50);
  const toast = useToast();


  const masuk = () => {
    if (kirim.username.length == 0 && kirim.password.length == 0) {
      showMessage({
        type:"default",
        color: colors.white,
        message: 'Username dan Password tidak boleh kosong!',
        backgroundColor: colors.danger,
    });

    } else if (kirim.username.length == 0) {
      showMessage({
        type:"default",
        color: colors.white,
        message: 'Tolong isi Username!',
        backgroundColor: colors.danger,
    });
    } else if (kirim.password.length == 0) {
      showMessage({
        type:"default",
        color: colors.white,
        message: 'Tolong isi Password!',
        backgroundColor: colors.danger,
    });
    } else {
    console.log(kirim);
    setLoading(true);
    axios
    .post(loginExpress, kirim)
    .then(response => {
      console.log(response.data);
      setLoading(false)

      if (response.status == 200) {
        storeData('user', response.data)
        console.log(response.data)
        navigation.replace("MainApp");
        Alert.alert(MYAPP, "Berhasil login!")
        
      } else {
        showMessage({
          type:"default",
          color: colors.white,
          message: 'Login gagal!',
          backgroundColor: colors.danger,
      });
      }
     })

     .catch(error => {
     setLoading(false)
     if (error.response) {
      console.error("Error response:", error.response.data)
      showMessage({
        type: "default",
        color: colors.white,
        message: error.response.data.message || 'Terjadi kesalahan saat login!',
        backgroundColor: colors.danger,
    });
     } else  if (error.request) {
      console.error("Error request:", error.request); // Tampilkan detail request jika tidak ada response
      showMessage({
          type: "default",
          color: colors.white,
          message: 'Tidak ada respon dari server!',
          backgroundColor: colors.danger,
      });
     } else {
      console.error("Error:", error.message); // Tampilkan pesan error umum
      showMessage({
          type: "default",
          color: colors.white,
          message: error.message || 'Terjadi kesalahan!',
          backgroundColor: colors.danger,
      });
     }
     })
    }
  }

  const [kirim, setKirim] = useState({
    api_token: api_token,
    username: '',
    password: '',
  })

  const [comp, setComp] = useState({})

  useEffect(() => {

    Animated.timing(img, {
      toValue: 1,
      duration: 750,
      useNativeDriver: true,
    }).start();
    Animated.timing(card, {
      toValue: 1,
      duration: 750,
      useNativeDriver: true,
    }).start();
    axios.post(apiURL + 'company').then(res => {
      setComp(res.data.data);
    })
  }, []);

  return (
    <SafeAreaView  style={{
      flex: 1,
      width:'100%',
      height:'100%', 
      padding:0,
      margin:0
    
    }}
    >
    
    <View style={{
      flex:1,
      width:'100%',
      height:'100%',
      backgroundColor:colors.background,

    }}>

{loading && <MyLoading />}

    <ScrollView>

    <ImageBackground style={{
      flex:1,
      width:'100%',
      height:232,
      top: -60
    }} source={require('../../assets/logi_motif.png')}>
    <View style={{
      padding:10, alignItems:'center', top: 150
    }}>
      <Image style={{
        width:67, 
        height:61
      }} source={require('../../assets/logo_default.png')}/>
    </View>
    </ImageBackground>

      <View style={{
        padding:10
      }}>


      <Text style={{fontFamily:fonts.primary[700], color:colors.primary, 
        textAlign:'center', fontSize:30, top: -55 }}>
        Masuk
      </Text>

        <View style={{
          padding:10,
          marginTop: 0
        }}>
          {/* FORM VIEW */}

          {/* USERNAME */}
          <MyInput value={kirim.username} onChangeText={(value) => setKirim({...kirim,username: value})} placeholder="Username" label="Username"/>

            <MyGap jarak={10}/>

            {/* Pasword */}
            <MyInput value={kirim.password} onChangeText={(value) => setKirim({...kirim,password: value})} placeholder="Password" label="Password" secureTextEntry={true}/>

            {/* Button */}
            <MyGap jarak={10}/>
            <MyButton onPress={masuk} title="Masuk"/>

            {/* Button Daftar */}
            <MyGap jarak={130}/>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Register')}>
              <View style={{padding:10}}>
                  <Text style={{
                    fontFamily:fonts.primary[600],
                    textAlign:"center",
                    color:Color.blueGray[500],
                    fontSize:13
                    
                  }}>Belum memiliki akun? Silakan <Text style={{
                    fontFamily:fonts.primary[800],
                    color:colors.primary
                  }}>Daftar</Text></Text>
              </View>
            </TouchableWithoutFeedback>
            
            <MyGap jarak={0}/>

            <TouchableWithoutFeedback>
              <View style={{alignItems:"center"}}>
                    <Text style={{fontFamily:fonts.primary[700], color:colors.primary, textAlignVertical:'center'}}>Lupa Kata Sandi</Text>
              </View>
            </TouchableWithoutFeedback>

        </View>

      </View>

    </ScrollView>


    </View>
  
    </ SafeAreaView>
  );
}

const styles = StyleSheet.create({});
