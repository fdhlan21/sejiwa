import { View, Text, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { colors, fonts } from '../../utils';
import { MyGap, MyHeader, MyRadio, MyCalendar } from '../../components';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default function RekamanData({ navigation }) {
    const [selectedGejala, setSelectedGejala] = useState(null);
    const [selectedKepatuhan, setSelectedKepatuhan] = useState(null);
    const [isRawatInap, setIsRawatInap] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);

    return (
        <View style={{
            flex: 1,
            backgroundColor: colors.background,
        }}>
            <View>
                <MyHeader onPress={() => navigation.navigate("HomeRekamanData")} title="Rekaman / Data Saat Ini" />
            </View>
            <ScrollView>
                <View style={{ padding: 10 }}>

                    {/* NOMOR 1 */}
                    <View>
                        <View>
                            <Text style={{
                                fontFamily: fonts.primary[400],
                                color: colors.primary,
                                fontSize: 15,
                            }}>1.{'  '}Gejala Psikotik yang muncul</Text>
                        </View>
                        <View style={{ padding: 10 }}>
                            <MyRadio 
                                label="Menyendiri"
                                selected={selectedGejala === "Menyendiri"}
                                onPress={() => setSelectedGejala("Menyendiri")} 
                            />
                            <MyRadio 
                                label="Sulit Tidur"
                                selected={selectedGejala === "Sulit Tidur"}
                                onPress={() => setSelectedGejala("Sulit Tidur")} 
                            />
                            <MyRadio 
                                label="Cemas"
                                selected={selectedGejala === "Cemas"}
                                onPress={() => setSelectedGejala("Cemas")} 
                            />
                            <MyRadio 
                                label="Kontak Mata Kurang"
                                selected={selectedGejala === "Kontak Mata Kurang"}
                                onPress={() => setSelectedGejala("Kontak Mata Kurang")} 
                            />
                            <MyRadio 
                                label="Gangguan Mood"
                                selected={selectedGejala === "Gangguan Mood"}
                                onPress={() => setSelectedGejala("Gangguan Mood")} 
                            />
                        </View>
                    </View>

                    <MyGap jarak={10} />

                    {/* NOMOR 2 */}
                    <View>
                        <View>
                            <Text style={{
                                fontFamily: fonts.primary[400],
                                color: colors.primary,
                                fontSize: 15,
                            }}>2.{'  '}Kepatuhan Minum Obat</Text>
                        </View>
                        <View style={{ padding: 10 }}>
                            <MyRadio 
                                label="Selalu Minum Obat"
                                selected={selectedKepatuhan === "Selalu Minum Obat"}
                                onPress={() => setSelectedKepatuhan("Selalu Minum Obat")} 
                            />
                            <MyRadio 
                                label="Tidak Minum Obat"
                                selected={selectedKepatuhan === "Tidak Minum Obat"}
                                onPress={() => setSelectedKepatuhan("Tidak Minum Obat")} 
                            />
                        </View>
                    </View>

                    {/* NOMOR 3 */}
                    <View>
                        <View>
                            <Text style={{
                                fontFamily: fonts.primary[400],
                                color: colors.primary,
                                fontSize: 15,
                            }}>3.{'  '}Pernah Rawat Inap?</Text>
                        </View>
                        <View style={{ padding: 10 }}>
                            <MyRadio 
                                label="Ya"
                                selected={isRawatInap === "Ya"}
                                onPress={() => {
                                    setIsRawatInap("Ya");
                                    setSelectedDate(null); // Reset date when changing selection
                                }} 
                            />
                            {isRawatInap === "Ya" && (
                            <MyCalendar
                                selectedDate={selectedDate}
                                onDateChange={setSelectedDate}
                                label="Pilih Tanggal Rawat Inap"
                            />
                        )}
                            <MyRadio 
                                label="Tidak"
                                selected={isRawatInap === "Tidak"}
                                onPress={() => {
                                    setIsRawatInap("Tidak");
                                    setSelectedDate(null); // Reset date when changing selection
                                }} 
                            />
                        </View>
                        
                    </View>

                </View>
            </ScrollView>

            <View style={{
                padding:20
            }}>

            <TouchableWithoutFeedback>
                <View style={{padding:10, backgroundColor:colors.primary, borderRadius:50}}>
                        <Text style={{
                            fontFamily:fonts.primary[700],
                            fontSize:15, textAlign:"center",
                            color:colors.white
                        }}>Hasil</Text>
                </View>
            </TouchableWithoutFeedback>

            </View>
        </View>
    );
}
