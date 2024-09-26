import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { colors, fonts } from '../../utils';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';

export default function MyHeader({ onPress, color = colors.tekscolor, title, icon = false, iconname = 'search' }) {
  const navigation = useNavigation();
  
  return (
    <View style={{
      marginTop: 0,
      marginHorizontal: 0,
      flexDirection: 'row',
      alignItems: 'flex-end',
      paddingVertical: 20,
      padding: 20,
      justifyContent: 'center',
    
    }}>
      <TouchableOpacity
        onPress={onPress ? onPress : () => navigation.goBack()} // Menggunakan onPress dari props jika ada, jika tidak kembali
        style={{}}
      >
        <View style={{
          borderWidth: 1,
          borderRadius: 50,
          borderColor: colors.tekscolor,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10,
          
          
        }}>
          <Icon type='ionicon' name='arrow-back-outline' size={20} color={color} />
        </View>
      </TouchableOpacity>

      <Text style={{
        ...fonts.headline2,
        flex: 1,
        textAlign: 'center',
        top: -3,
        marginLeft: -20,
        color: color,
        fontSize:19
 
      }}>{title}</Text>

      {icon &&
        <TouchableOpacity onPress={onPress} style={{}}>
          <Icon name={iconname} size={20} color={color} />
        </TouchableOpacity>
      }
    </View>
  );
}

const styles = StyleSheet.create({});
