import React, { useEffect } from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  Animated,
  SafeAreaView,
} from 'react-native';
import { colors, windowWidth } from '../../utils';
import { getData } from '../../utils/localStorage';

export default function Splash({ navigation }) {
  const img = new Animated.Value(0.5);
  const textScale = new Animated.Value(0.5);
  const textOpacity = new Animated.Value(0);

  useEffect(() => {
    // Animasi logo
    Animated.parallel([
      Animated.timing(img, {
        toValue: 1,
        duration: 750,
        useNativeDriver: true,
      }),
      Animated.timing(textScale, {
        toValue: 1,
        duration: 750,
        useNativeDriver: true,
      }),
      Animated.timing(textOpacity, {
        toValue: 1,
        duration: 750,
        useNativeDriver: true,
      })
    ]).start();

    // Cek status login setelah animasi selesai
    setTimeout(() => {
      getData('user').then(user => {
        if (user) {
          // Jika user sudah login, navigasi ke MainApp
          navigation.replace("MainApp");
        } else {
          // Jika belum login, navigasi ke Login
          navigation.replace("Login");
        }
      });
    }, 1200);
  }, [navigation]);

  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: colors.white,
      justifyContent: 'center',
    }}>
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary,
        width: '100%',
        height: '100%'
      }}>
        <Animated.Image
          source={require('../../assets/logo.png')}
          resizeMode="contain"
          style={{
            transform: [{ scale: img }],
            width: windowWidth / 1.2,
            height: windowWidth / 1.2,  
            marginTop: '28%',
          }}
        />
        <ActivityIndicator style={{ marginTop: 50 }} color={colors.primary} size="small" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
