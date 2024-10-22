import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Spinner from 'react-native-spinkit';
import { Color, colors, fonts } from '../../utils';

const windowHeight = Dimensions.get('window').height;

export default function MyLoading({ type = 'Circle', color = colors.white }) {
    return (
        <View style={styles.container}>
            <Spinner isVisible={true} size={80} type={type} color={color} />
            <Text style={styles.text}>Loading, please wait...</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Background hitam transparan
        zIndex: 9999, // Memastikan loading berada di atas elemen lain
    },
    text: {
        marginTop: 20,
        fontSize: 16,
        color: colors.white, // Teks putih agar kontras dengan background hitam
        fontFamily: fonts.primary[600], // Menggunakan font yang elegan
    },
});