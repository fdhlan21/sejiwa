import { View, Text, ScrollView, Image } from 'react-native';
import React, { useState } from 'react';
import { colors, fonts } from '../../utils';
import { MyGap, MyHeader, MyRadio, MyCalendar } from '../../components';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default function HomeRekamanData({ navigation }) {
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
                <MyHeader onPress={() => navigation.navigate("IdentitasPasien")} title="Rekaman / Data Saat Ini" />
            </View>
            <ScrollView>
                <View style={{ padding: 10 }}>

                   

                </View>
            </ScrollView>

            <View style={{
                padding:20,
                flexDirection:'row',
                justifyContent:"flex-end"
            }}>

            <TouchableWithoutFeedback onPress={() => navigation.navigate("RekamanData")}>
                <View style={{padding:10}}>
                        <Image style={{
                            width:50,
                            height:50
                        }} source={require('../../assets/add.png')}/>
                </View>
            </TouchableWithoutFeedback>

            </View>
        </View>
    );
}
