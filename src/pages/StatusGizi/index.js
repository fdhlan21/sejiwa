import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState, } from 'react'
import { MyButton, MyGap, MyHeader, MyInput } from '../../components';
import { ScrollView } from 'react-native-gesture-handler';
import { useToast } from 'react-native-toast-notifications';
import { Color, fonts, colors } from '../../utils';
import DashedLine from 'react-native-dashed-line';
import moment from 'moment';
import { Icon } from 'react-native-elements';
import ProgressCircle from 'react-native-progress-circle'

export default function StatusGizi({ navigation, route }) {
    const [loading, setLoading] = useState(false);
    const jenis_kelamin = route.params.jenis_kelamin;
    const umur = moment().diff(route.params.tanggal_lahir, 'year');
    const [kirim, setKirim] = useState({
        jenis_kelamin: route.params.jenis_kelamin,
        umur: moment().diff(route.params.tanggal_lahir, 'year'),
        tinggi_badan: '',
        berat_badan: '',
        aktifitas: ''
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
        } else if (kirim.aktifitas.length == 0) {
            toast.show('Tingkatan aktifitas fisik wajib dipilih 1', { type: 'warning' });
        } else {
            console.log(kirim);

            let BMR = 0;
            let konstanta = 0;
            if (kirim.jenis_kelamin == 'Laki-laki') {

                if (kirim.aktifitas == 'Ringan') {
                    konstanta = 1.56;
                } else if (kirim.aktifitas == 'Sedang') {
                    konstanta = 1.76;
                } else if (kirim.aktifitas == 'Berat') {
                    konstanta = 2.10;
                }

                BMR = 66.5 + (13.75 * kirim.berat_badan) + (5.003 * kirim.tinggi_badan) - (6.75 * umur)



            } else {

                if (kirim.aktifitas == 'Ringan') {
                    konstanta = 1.55;
                } else if (kirim.aktifitas == 'Sedang') {
                    konstanta = 1.70;
                } else if (kirim.aktifitas == 'Berat') {
                    konstanta = 2.00;
                }
                BMR = 655.1 + (9.563 * kirim.berat_badan) + (1.850 * kirim.tinggi_badan) - (4.676 * umur)
            }


            navigation.replace('StatusGiziHasil', {
                kirim: kirim,
                hasil: BMR * konstanta
            })

        }

    }
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.white
        }}>
            <MyHeader title="Hitung Kalori Harian" />
            <ScrollView showsVerticalScrollIndicato={false}>
                <View style={{
                    margin: 16,
                    padding: 12,
                }}>
                    <View style={{
                        marginBottom: 20,
                        borderWidth: 1,
                        borderColor: Color.blueGray[300],
                        borderRadius: 12,
                        padding: 10,
                    }}>
                        <View style={{
                            marginVertical: 4,
                            flexDirection: 'row',
                        }}>
                            <Icon type='ionicon' color={Color.blueGray[300]} name='male-female-outline' size={24} />
                            <Text style={{
                                left: 10,
                                flex: 1,
                                ...fonts.subheadline3,
                                color: Color.blueGray[900],
                            }}>Jenis Kelamin</Text>
                            <Text style={{
                                flex: 1,
                                ...fonts.headline5,
                                color: Color.blueGray[900],
                            }}>{jenis_kelamin}</Text>
                        </View>
                        <View style={{
                            marginVertical: 4,
                            flexDirection: 'row',
                        }}>
                            <Icon type='ionicon' color={Color.blueGray[300]} name='time-outline' size={24} />
                            <Text style={{
                                left: 10,
                                flex: 1,
                                ...fonts.subheadline3,
                                color: Color.blueGray[900],
                            }}>Umur</Text>
                            <Text style={{
                                flex: 1,
                                ...fonts.headline5,
                                color: Color.blueGray[900],
                            }}>{umur} Tahun</Text>
                        </View>
                    </View>
                    <MyInput onChangeText={x => setKirim({ ...kirim, tinggi_badan: x })} label="Masukan Tinggi Badan ( cm )" iconname='man' keyboardType='number-pad' placeholder='Ketikan tinggi badan' />
                    <MyGap jarak={20} />

                    <MyInput onChangeText={x => setKirim({ ...kirim, berat_badan: x })} label="Masukan Berat Badan ( kg )" iconname='speedometer' keyboardType='number-pad' placeholder='Ketikan berat badan' />
                    <MyGap jarak={20} />
                    <Text style={{
                        ...fonts.subheadline3,
                    }}>Pilih Tingkatan Aktifitas Fisik</Text>

                    <TouchableOpacity onPress={() => setKirim({
                        ...kirim, aktifitas: 'Ringan',

                        act1: '75% waktu digunakan untuk duduk atau berdiri.',
                        act2: '25% waktu untuk berdiri atau bergerak.',
                        per1: 75,
                        per2: 25,

                    })} style={{
                        marginVertical: 10,
                        borderWidth: 1,
                        borderColor: kirim.aktifitas == 'Ringan' ? Color.primary[900] : Color.blueGray[300],
                        borderRadius: 12,
                        padding: 8,
                    }}>
                        <View style={{
                            flexDirection: 'row'
                        }}>
                            <View style={{
                                flex: 1,
                            }}>
                                <Text style={{
                                    ...fonts.headline2
                                }}>Ringan</Text>
                                <DashedLine dashLength={6} dashThickness={1} dashGap={4} dashColor={Color.blueGray[400]} dashStyle={{ borderRadius: 5 }} />
                                <View style={{
                                    flex: 1,
                                    marginTop: 5,
                                }}>
                                    <Text style={{ ...fonts.caption, }}>75% waktu digunakan untuk duduk atau berdiri.</Text>
                                    <Text style={{ ...fonts.caption, }}>25% waktu untuk berdiri atau bergerak.</Text>
                                </View>
                            </View>
                            <ProgressCircle
                                percent={75}
                                radius={35}
                                borderWidth={5}
                                color={colors.secondary}
                                shadowColor={colors.tertiary}
                                bgColor="#fff"
                            >
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}>
                                    <View style={{ width: 10, height: 10, borderRadius: 10, backgroundColor: colors.secondary }} />
                                    <Text style={{ ...fonts.caption, left: 5, }}>{'75%'}</Text>
                                </View>
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}>
                                    <View style={{ width: 10, height: 10, borderRadius: 10, backgroundColor: colors.tertiary }} />
                                    <Text style={{ ...fonts.caption, left: 5, }}>{'25%'}</Text>
                                </View>

                            </ProgressCircle>
                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setKirim({
                        ...kirim, aktifitas: 'Sedang',

                        act1: '25% waktu digunakan untuk duduk/berdiri.',
                        act2: '75% waktu digunakan untuk aktivitas pekerjaan tertentu.',
                        per1: 25,
                        per2: 75,
                    })} style={{
                        marginVertical: 10,
                        borderWidth: 1,
                        borderColor: kirim.aktifitas == 'Sedang' ? Color.primary[900] : Color.blueGray[300],
                        borderRadius: 12,
                        padding: 8,
                    }}>
                        <View style={{
                            flexDirection: 'row'
                        }}>
                            <View style={{
                                flex: 1,
                            }}>
                                <Text style={{
                                    ...fonts.headline2
                                }}>Sedang</Text>
                                <DashedLine dashLength={6} dashThickness={1} dashGap={4} dashColor={Color.blueGray[400]} dashStyle={{ borderRadius: 5 }} />
                                <View style={{
                                    flex: 1,
                                    marginTop: 5,
                                }}>
                                    <Text style={{ ...fonts.caption, }}>25% waktu digunakan untuk duduk/berdiri.</Text>
                                    <Text style={{ ...fonts.caption, }}>75% waktu digunakan untuk aktivitas pekerjaan tertentu.</Text>
                                </View>
                            </View>
                            <ProgressCircle
                                percent={75}
                                radius={35}
                                borderWidth={5}
                                color={colors.tertiary}
                                shadowColor={colors.border}
                                bgColor="#fff"
                            >
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}>
                                    <View style={{ width: 10, height: 10, borderRadius: 10, backgroundColor: colors.border }} />
                                    <Text style={{ ...fonts.caption, left: 5, }}>{'25%'}</Text>
                                </View>
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}>
                                    <View style={{ width: 10, height: 10, borderRadius: 10, backgroundColor: colors.tertiary }} />
                                    <Text style={{ ...fonts.caption, left: 5, }}>{'75%'}</Text>
                                </View>

                            </ProgressCircle>
                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setKirim({
                        ...kirim, aktifitas: 'Berat',

                        act1: '40% waktu digunakan untuk duduk/berdiri.',
                        act2: '60%  waktu digunakan untuk aktivitas pekerjaan tertentu.',
                        per1: 40,
                        per2: 60,

                    })} style={{
                        marginVertical: 10,
                        borderWidth: 1,
                        borderColor: kirim.aktifitas == 'Berat' ? Color.primary[900] : Color.blueGray[300],
                        borderRadius: 12,
                        padding: 8,
                    }}>
                        <View style={{
                            flexDirection: 'row'
                        }}>
                            <View style={{
                                flex: 1,
                            }}>
                                <Text style={{
                                    ...fonts.headline2
                                }}>Berat</Text>
                                <DashedLine dashLength={6} dashThickness={1} dashGap={4} dashColor={Color.blueGray[400]} dashStyle={{ borderRadius: 5 }} />
                                <View style={{
                                    flex: 1,
                                    marginTop: 5,
                                }}>
                                    <Text style={{ ...fonts.caption, }}>40% waktu digunakan untuk duduk/berdiri.</Text>
                                    <Text style={{ ...fonts.caption, }}>60%  waktu digunakan untuk aktivitas pekerjaan tertentu.</Text>
                                </View>
                            </View>
                            <ProgressCircle
                                percent={60}
                                radius={35}
                                borderWidth={5}
                                color={colors.primary}
                                shadowColor={colors.foourty}
                                bgColor="#fff"
                            >
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}>
                                    <View style={{ width: 10, height: 10, borderRadius: 10, backgroundColor: colors.foourty }} />
                                    <Text style={{ ...fonts.caption, left: 5, }}>{'40%'}</Text>
                                </View>
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}>
                                    <View style={{ width: 10, height: 10, borderRadius: 10, backgroundColor: colors.tertiary }} />
                                    <Text style={{ ...fonts.caption, left: 5, }}>{'60%'}</Text>
                                </View>

                            </ProgressCircle>
                        </View>

                    </TouchableOpacity>

                    <MyGap jarak={20} />
                    <MyButton title="Hitung BMR" onPress={hitungIMT} Icons="checkmark-circle-outline" />

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