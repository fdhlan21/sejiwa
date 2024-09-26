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

export default function StatusGiziHasil({ navigation, route }) {
    const kirim = route.params.kirim;
    const hasil = route.params.hasil;
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.white
        }}>
            <MyHeader title="Hasil Kebutuhan Kalori Harian" />
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
                            <Icon type='ionicon' color={Color.blueGray[300]} name='male-female' size={24} />
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
                            }}>{kirim.jenis_kelamin}</Text>
                        </View>
                        <View style={{
                            marginVertical: 4,
                            flexDirection: 'row',
                        }}>
                            <Icon type='ionicon' color={Color.blueGray[300]} name='time' size={24} />
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
                            }}>{kirim.umur} Tahun</Text>
                        </View>
                        <View style={{
                            marginVertical: 4,
                            flexDirection: 'row',
                        }}>
                            <Icon type='ionicon' color={Color.blueGray[300]} name='body' size={24} />
                            <Text style={{
                                left: 10,
                                flex: 1,
                                ...fonts.subheadline3,
                                color: Color.blueGray[900],
                            }}>Tinggi Badan</Text>
                            <Text style={{
                                flex: 1,
                                ...fonts.headline5,
                                color: Color.blueGray[900],
                            }}>{kirim.tinggi_badan} cm</Text>
                        </View>
                        <View style={{
                            marginVertical: 4,
                            flexDirection: 'row',
                        }}>
                            <Icon type='ionicon' color={Color.blueGray[300]} name='speedometer' size={24} />
                            <Text style={{
                                left: 10,
                                flex: 1,
                                ...fonts.subheadline3,
                                color: Color.blueGray[900],
                            }}>Berat Badan</Text>
                            <Text style={{
                                flex: 1,
                                ...fonts.headline5,
                                color: Color.blueGray[900],
                            }}>{kirim.berat_badan} kg</Text>
                        </View>
                    </View>

                    <View style={{
                        flex: 1,
                    }}>
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <ProgressCircle
                                percent={kirim.per1}
                                radius={120}
                                borderWidth={10}
                                color={colors.primary}
                                shadowColor={colors.tertiary}
                                bgColor={colors.foourty}
                            >
                                <Text style={{ ...fonts.headline0, color: colors.secondary }}>{parseFloat(hasil).toFixed(2)}</Text>
                                <Text style={{ ...fonts.subheadline3, color: colors.primary }}>Kcal/day</Text>
                            </ProgressCircle>
                        </View>

                        <View style={{
                            overflow: 'hidden',
                            marginTop: 20,
                            borderWidth: 1,
                            borderRadius: 12,
                            borderColor: Color.blueGray[300],
                        }}>
                            <View style={{
                                padding: 10,
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}>
                                <View style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}>
                                    <Icon type='ionicon' color={Color.primary[900]} name='body' size={24} />
                                    <Text style={{
                                        left: 5,
                                        ...fonts.subheadline3,
                                        color: Color.secondary[900]
                                    }}>Aktifitas Fisik</Text>
                                </View>
                                <Text style={{
                                    ...fonts.headline2
                                }}>{kirim.aktifitas}</Text>
                            </View>
                            <DashedLine dashLength={6} dashThickness={1} dashGap={4} dashColor={Color.blueGray[400]} dashStyle={{ borderRadius: 5 }} />
                            <View style={{
                                padding: 10,
                            }}>
                                <Text style={{ ...fonts.caption, }}>{kirim.act1}</Text>
                                <Text style={{ ...fonts.caption, }}>{kirim.act2}</Text>
                            </View>
                        </View>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})