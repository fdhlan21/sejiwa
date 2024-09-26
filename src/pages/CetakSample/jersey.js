import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../utils'
import { MyButton, MyGap, MyHeader, MyImageUpload, MyInput, MyPicker } from '../../components'

export default function CetakSampleJersey({navigation}) {
  return (
    <SafeAreaView style={{flex:1, backgroundColor:colors.white}}>
    <MyHeader title="Cetak Sample Jersey"/>

    <ScrollView>
        <View style={{padding:20}}>
            <View style={{padding:20, backgroundColor:colors.foourty,
            borderRadius:10, }}>
                <Text style={{fontFamily:fonts.primary[300], fontStyle:'italic', fontSize:10, color:colors.primary}}>Cetak Sample Kain Roll : </Text>
                <Text style={{fontFamily:fonts.primary[300], fontStyle:'italic', color:colors.primary, fontSize:10}}>
                    • Free jika {'<'} 10 cm {'\n'}
                    • Bayar jika 1 pcs Jersey
                </Text>
            </View>
                <MyGap jarak={10}/>
            <View>
                    {/* Upload Desain */}
                    <MyImageUpload/>
                    
                    <MyGap jarak={20}/>

                    {/* Ukuran */}
                    <MyPicker label="Ukuran" data={[
                         {label: 'Pilih disini', value: ' '},
                        {label: '< 10 cm', value: '<10cm'},
                        {label: '> 1 pcs', value: '>1pcs'},
                    ]} placeholder="Pilih disini"/>

                    <MyGap jarak={20}/>

                    {/* Provinsi */}
                    <MyPicker label="Provinsi" data={[
                        {label: 'Pilih disini', value: ''}
                    ]} placeholder="Pilih disini"/>

                     <MyGap jarak={20}/>

                    {/* Kota/Kabupaten */}
                    <MyPicker label="Kota/Kabupaten" data={[
                       {label: 'Pilih disini', value: ''}
                    ]} placeholder="Pilih disini"/>

                     <MyGap jarak={20}/>

                    {/* Kecamatan */}
                    <MyInput label="Kecamatan" placeholder="Isi disini"/>
                    
                    <MyGap jarak={20}/>

                    {/* Alamat Lengkap */}
                    <MyInput label="Alamat Lengkap" placeholder="Isi disini"/>

                    <MyGap jarak={20}/>
                    <MyButton title="Buat Pesanan" colorText={colors.white}/>
            </View>
        </View>
    </ScrollView>
    </SafeAreaView>
  )
}