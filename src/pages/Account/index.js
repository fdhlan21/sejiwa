import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    Linking,
    Alert,
    ActivityIndicator,
} from 'react-native';
import { windowWidth, fonts, MyDimensi } from '../../utils/fonts';
import { getData, MYAPP, storeData, urlAPI, urlApp, urlAvatar } from '../../utils/localStorage';
import { Color, colors } from '../../utils/colors';
import { MyButton, MyGap, MyHeader } from '../../components';
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';
import { ScrollView } from 'react-native';

export default function ({ navigation, route }) {
    const [user, setUser] = useState({});
    const [com, setCom] = useState({});
    const isFocused = useIsFocused();
    const [wa, setWA] = useState('');
    const [open, setOpen] = useState(false);



    useEffect(() => {
        if (isFocused) {
            getData('user').then(res => {
                setOpen(true);
                setUser(res);
            });
        }
    }, [isFocused]);

    


    const btnKeluar = () => {
        Alert.alert(MYAPP, 'Apakah kamu yakin akan keluar ?', [
            {
                text: 'Batal',
                style: "cancel"
            },
            {
                text: 'Keluar',
                onPress: () => {
                    storeData('user', null);
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'Splash' }],
                    });
                }
            }
        ]);
    };

    const MyList = ({ label, value }) => {
        return (
            <View
                style={{
                    marginVertical: 2,
                    padding: 5,
                    paddingHorizontal: 10,
                    backgroundColor: Color.blueGray[50],
                    borderRadius: 10,
                    marginTop:20,
                    borderWidth:1
                }}>
                <Text
                    style={{
                        ...fonts.headline5,
                        color: colors.primary,
                    }}>
                    {label}
                </Text>
                <Text
                    style={{
                       fontFamily:fonts.primary[500],
                        color: Color.blueGray[900],
                    }}>
                    {value}
                </Text>
            </View>
        )
    }
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.white
        }}>


            <MyHeader title="Profile" onPress={() => navigation.goBack()} />
            {!open && <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <ActivityIndicator size="large" color={colors.primary} />
            </View>}
            <ScrollView showsVerticalScrollIndicator={false}>
                {open &&

                    <View style={{
                        margin: 5,
                        flex: 1,
                    }}>
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                     
                        </View>
                        <View style={{ padding: 10, }}>
                            <MyList label="Nama Lengkap" value={user.namalengkap} />
                            <MyList label="Username" value={user.username} />
                        </View>
                        {/* data detail */}
                    </View>

                }
                <View style={{
                    padding: 20,
                }}>
                  
                    <MyGap jarak={10} />
                   
                </View>
            </ScrollView>
            <View style={{
                padding:20,

            }}>
  <TouchableOpacity style={{
                        padding:10,
                        backgroundColor:colors.primary,
                        borderRadius:20,
                        borderWidth:2,
                        borderColor:Color.blueGray[300]
                    }}>
                        <View>
                        <Text style={{
                            fontFamily:fonts.primary[600],
                            color:colors.white,
                            textAlign:"center",
                            fontSize:15,

                        }}>Edit Profile</Text>

                        </View>
                    </TouchableOpacity>

                    <MyGap jarak={10}/>
                     <TouchableOpacity onPress={btnKeluar} style={{
                        padding:10,
                        backgroundColor:Color.blueGray[300],
                        borderRadius:20,
                        borderWidth:2,
                        borderColor:Color.blueGray[300]
                    }}>
                        <View>
                        <Text style={{
                            fontFamily:fonts.primary[600],
                            color:colors.white,
                            textAlign:"center",
                            fontSize:15,

                        }}>Keluar</Text>

                        </View>
                    </TouchableOpacity>
            </View>
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({});
