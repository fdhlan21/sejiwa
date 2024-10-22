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
import { MyButton, MyCalendar, MyGap, MyHeader, MyInput, MyInputLogin, MyPicker, MyRadio } from '../../components';
import { MyDimensi, colors, fonts, windowHeight, windowWidth, Color } from '../../utils';
import { MYAPP, apiURL, api_token, getData, registerExpress, storeData } from '../../utils/localStorage';
import { BackgroundImage } from 'react-native-elements/dist/config';
import { color, set } from 'react-native-reanimated';
import axios from 'axios';
import moment from 'moment';
import { useToast } from 'react-native-toast-notifications';
import MyLoading from '../../components/MyLoading';
import { showMessage } from 'react-native-flash-message';

export default function Register({ navigation, route }) {
    const [loading, setLoading] = useState(false)
    const img = new Animated.Value(0.8);
    const card = new Animated.Value(50);
    const toast = useToast();
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
    const [kirim, setKirim] = useState({
        api_token: api_token,
        namalengkap: '',
        username: '',
        password: '',
        repassword: '',

    });

    const simpan = () => {
        if (kirim.namalengkap.length == 0 || kirim.username.length == 0 || kirim.password.length == 0 || kirim.repassword.length == 0) {
            showMessage({
                type:"default",
                color: colors.white,
                message: 'Tolong isi semua field!',
                backgroundColor: colors.danger,
            });
        } else if (kirim.namalengkap.length == 0) {
            showMessage({
                type:"default",
                color: colors.white,
                message: 'Tolong isi Nama Lengkap!',
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
        } else if (kirim.password !== kirim.repassword) {
            showMessage({
                type:"default",
                color: colors.white,
                message: 'Password tidak sama!',
                backgroundColor: colors.danger,
            });
        } else {
            console.log(kirim);
            setLoading(true);

            axios
            .post(registerExpress, kirim)
            .then(response => {
                setLoading(false)
                console.log(response.data)
                storeData('user', response.data)
                navigation.replace('Login');
                Alert.alert(MYAPP, "Registrasi Berhasil!")

            })
            .catch(error => {
                setLoading(false)
                console.error("Terjadi error saat registrasi",error.response)
                showMessage({
                    type:"default",
                    color: colors.white,
                    message: 'Username sudah terdaftar!',
                    backgroundColor: colors.danger,
                });
            })
        }

    };




    useEffect(() => {


        axios.post(apiURL + 'company').then(res => {
            setComp(res.data.data);
        })
    }, []);
    const [sama, setSama] = useState(true)

    const [usiaBayi, setUsiaBayi] = useState(0);

    
    // Fungsi untuk menghandle perubahan tanggal
    const handleTanggalLahirChange = (selectedDate) => {
        // Set tanggal lahir di state
        setKirim({ ...kirim, tanggal_lahir: selectedDate });

        // Hitung usia bayi berdasarkan tanggal yang dipilih
        const today = moment();
        const birthDate = moment(selectedDate);
        const usia = today.diff(birthDate, 'years');

        // Set usia bayi setelah tanggal dipilih
        setUsiaBayi(usia);
    };


    return (
        <SafeAreaView style={{
            flex: 1,
            width:'100%',
            height:'100%',
            backgroundColor:colors.white
        }}>
            {/* <MyHeader title="Daftar Akun" /> */}
        <View style={{
        backgroundColor:colors.background,
        flex:1
        }}>
{loading && <MyLoading />}
        <ScrollView>
            <ImageBackground style={{
                flex:1,
                width:"100%",
                height:232,
                top: -60
            }} source={require('../../assets/logi_motif.png')}>
                <View style={{padding:10, alignItems:'center', top: 150}}>
                    <Image style={{
                        width:67, 
                        height:61
                    }} source={require('../../assets/logo_default.png')}/>
                </View>
            </ImageBackground>


            <View style={{
        padding:10
      }}>


      <Text style={{fontFamily:fonts.primary[800], color:colors.primary, 
        textAlign:'center', fontSize:30, top: -55 }}>
        Daftar
      </Text>

        <View style={{
          padding:10,
          marginTop: 0
        }}>
          {/* FORM VIEW */}

            {/* NAMA LENGKAP */}
            <MyInput value={kirim.namalengkap} onChangeText={(value) => setKirim({...kirim, namalengkap: value})}  placeholder="Nama Lengkap" label="Nama Lengkap"/>

            <MyGap jarak={10}/>
          {/* USERNAME */}
          <MyInput value={kirim.username} onChangeText={(value) => setKirim({...kirim, username: value})} placeholder="Username" label="Username"/>

            <MyGap jarak={10}/>

            {/* Pasword */}
            <MyInput  value={kirim.password} onChangeText={(value) => setKirim({...kirim, password: value})} placeholder="Password" label="Password" secureTextEntry={true}/>

            <MyGap jarak={10}/>

               {/* Konfimasi Pasword */}
               <MyInput value={kirim.repassword} onChangeText={(value) => setKirim({...kirim, repassword: value})} placeholder="Konfirmasi Password" label="Konfirmasi Password" secureTextEntry={true}/>

            {/* Button */}
            <MyGap jarak={10}/>
            <MyButton onPress={simpan} title="Daftar"/>

            {/* Button Daftar */}
            <MyGap jarak={130}/>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Register')}>
              <View style={{padding:10}}>
                  <Text style={{
                    fontFamily:fonts.primary[600],
                    textAlign:"center",
                    color:Color.blueGray[500],
                    fontSize:13
                    
                  }}>Sudah memiliki akun? Silakan  <Text style={{
                    fontFamily:fonts.primary[800],
                    color:colors.primary
                  }}>Masuk</Text></Text>
              </View>
            </TouchableWithoutFeedback>
            

        </View>

      </View>
        </ScrollView>

        </View>
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({});
