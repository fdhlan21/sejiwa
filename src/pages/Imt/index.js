import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState, } from 'react'
import { MyButton, MyGap, MyHeader, MyInput } from '../../components';
import { ScrollView } from 'react-native-gesture-handler';
import { useToast } from 'react-native-toast-notifications';
import { Color, fonts, colors } from '../../utils';
import DashedLine from 'react-native-dashed-line';

export default function Imt({ navigation, route }) {
    const [loading, setLoading] = useState(false);
    const [kirim, setKirim] = useState({
        tinggi_badan: '',
        berat_badan: '',
    });
    const [hasil, setHasil] = useState({
        nilai: 0,
        indeks: '',
    })

    const toast = useToast();
    const hitungIMT = () => {

        if (kirim.tinggi_badan.length == 0 && kirim.berat_badan.length == 0) {
            toast.show('Tinggi badan dan berat badan wajib diisi', { type: 'warning' });
        } else if (kirim.tinggi_badan.length == 0) {
            toast.show('Tinggi badan wajib diisi', { type: 'warning' });
        } else if (kirim.berat_badan.length == 0) {
            toast.show('Berat badan wajib diisi', { type: 'warning' });
        } else {
            console.log(kirim);
            let nilai = (kirim.berat_badan / Math.pow((kirim.tinggi_badan / 100), 2)).toFixed(1);
            let indeks = '';
            if (nilai < 18.5) {
                indeks = 'Berat badan kurang';
            } else if (nilai >= 18.5 && nilai <= 22.9) {
                indeks = 'Berat badan normal';
            } else if (nilai >= 23 && nilai <= 29.9) {
                indeks = 'Berat badan berlebih';
            } else if (nilai >= 30) {
                indeks = 'Obesitas';
            }

            setHasil({
                nilai: nilai,
                indeks: indeks,
            })
        }

    }
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.white
        }}>
            <MyHeader title="IMT (Indeks Massa Tubuh)" />
            <ScrollView showsVerticalScrollIndicato={false}>
                <View style={{
                    margin: 16,
                    padding: 12,
                }}>
                    <MyInput onChangeText={x => setKirim({ ...kirim, tinggi_badan: x })} label="Masukan Tinggi Badan ( cm )" iconname='man' keyboardType='number-pad' placeholder='Ketikan tinggi badan' />
                    <MyGap jarak={20} />
                    <MyInput onChangeText={x => setKirim({ ...kirim, berat_badan: x })} label="Masukan Berat Badan ( kg )" iconname='speedometer' keyboardType='number-pad' placeholder='Ketikan berat badan' />
                    <MyGap jarak={30} />
                    <MyButton title="Hitung IMT" onPress={hitungIMT} Icons="checkmark-circle-outline" />

                    {hasil.nilai > 0 &&
                        <View style={{
                            borderWidth: 1,
                            marginVertical: 20,
                            borderRadius: 12,
                            overflow: 'hidden',
                            borderColor: Color.blueGray[300]
                        }}>
                            <View style={{
                                padding: 12,
                                backgroundColor: colors.tertiary
                            }}>
                                <Text style={{
                                    ...fonts.headline3,
                                    textAlign: 'center',
                                    color: Color.secondary[900]
                                }}>Hasil Indeks Massa Tubuh</Text>
                            </View>
                            <DashedLine dashLength={10} dashThickness={1} dashGap={5} dashColor={Color.blueGray[400]} dashStyle={{ borderRadius: 5 }} />
                            <View style={{
                                padding: 12,
                            }}>
                                <Text style={{
                                    ...fonts.headline0,
                                    textAlign: 'center',
                                    color: colors.black,
                                }}>{hasil.nilai}</Text>
                                <Text style={{
                                    ...fonts.headline5,
                                    textAlign: 'center',
                                    color: Color.primary[900]
                                }}>{hasil.indeks}</Text>
                            </View>
                        </View>
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})