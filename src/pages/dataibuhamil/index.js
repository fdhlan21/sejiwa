import { View, Text, ScrollView, Alert, Modal } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../../utils'
import { MyButton, MyCalendar, MyGap, MyHeader, MyInput } from '../../components'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function DataIbuHamil({navigation}) {
    const [form, setForm] = useState({
        namaIbu: '',
        namaSuami: '',
        usiaIbu: '',
        usiaSuami: '',
        agamaIbu: '',
        agamaSuami: '',
        pendidikanIbu: '',
        pendidikanSuami: '',
        pekerjaanIbu: '',
        pekerjaanSuami: '',
        alamatRumahIbu: '',
        alamatRumahSuami: '',
        nomorTeleponIbu: '',
        nomorTeleponSuami: '',
        jumlahAnak: '',
        anakYangHidup: '',
        jumlahKeguguran: '',
        hpht: '',
    });

    const [isModalVisible, setIsModalVisible] = useState(false);
    const handleInputChange = (key, value) => {
        setForm({ ...form, [key]: value });
    };
    

    const validateForm = () => {
        for (let key in form) {
            if (form[key] === '') {
                return false;
            }
        }
        return true;
    };

    const handleSave = async () => {
        if (!validateForm()) {
            Alert.alert('Error', 'Tolong isi semua feild.');
            return;
        }
        
        try {
            await AsyncStorage.setItem('user', JSON.stringify(form));
            alert('Data saved successfully!');
        } catch (error) {
            console.error('Error saving data', error);
            alert('Failed to save data.');
        }
    };


      const handleModalClose = () => {
        setIsModalVisible(false);
        navigation.navigate('MainApp');
    };


    const handleBack  =  () => {
        navigation.goBack()
    }
  return (
    <View style={{
        flex:1,
        backgroundColor:colors.white,

    }}>
     <MyHeader onPress={handleBack} title="Data Ibu Hamil "/>

     <ScrollView>
        <View style={{padding:20}}>

    {/* NAMA IBU */}
        <View>
            <MyInput 
            label="Nama Ibu" 
            placeholder="Masukan Nama Ibu"
            value={form.namaIbu}
            onChangeText={(value) => handleInputChange('namaIbu', value)}
            />
        </View>

        <MyGap jarak={10}/>

        
        {/* NAMA Suami */}
        <View>
            <MyInput 
            label="Nama Suami" 
            placeholder="Masukan Nama Suami"
            value={form.namaSuami}
            onChangeText={(value) => handleInputChange('namaSuami', value)}
            />
        </View>

        <MyGap jarak={10}/>

        {/* Usia Ibu */}
        <View>
            <MyInput 
            keyboardType="numeric" 
            label="Usia Ibu" 
            placeholder="Masukan Usia Ibu" 
            value={form.usiaIbu}
            onChangeText={(value) => handleInputChange('usiaIbu', value)}
            />
        </View>

        <MyGap jarak={10}/>

        {/* Usia Suami*/}
        <View>
            <MyInput 
            keyboardType="numeric" 
            label="Usia Suami" 
            placeholder="Masukan Usia Suami"
            value={form.usiaSuami}
            onChangeText={(value) => handleInputChange('usiaSuami', value)}
            />
        </View>

        <MyGap jarak={10}/>

          {/* Agama Ibu*/}
          <View>
            <MyInput  
            label="Agama Ibu" 
            placeholder="Masukan Usia iBU"
            value={form.agamaIbu}
            onChangeText={(value) => handleInputChange('agamaIbu', value)}
            />
        </View>

        <MyGap jarak={10}/>


              {/* Agama Suami*/}
              <View>
            <MyInput  
            label="Agama Suami" 
            placeholder="Masukan Usia Suami"
            value={form.agamaSuami}
            onChangeText={(value) => handleInputChange('agamaSuami', value)}   
            />
        </View>

        <MyGap jarak={10}/>


         {/* Pendidikan Ibu*/}
         <View>
            <MyInput  
            label="Pendidikan Ibu" 
            placeholder="Masukan Pendidikan Ibu"
            value={form.pendidikanIbu}
            onChangeText={(value) => handleInputChange('pendidikanIbu', value)}
            />
        </View>

        <MyGap jarak={10}/>

        

         {/* Pendidikan Suami*/}
         <View>
            <MyInput  
            label="Pendidikan Suami" 
            placeholder="Masukan Pendidikan Suami"
            value={form.pendidikanSuami}
            onChangeText={(value) => handleInputChange('pendidikanSuami', value)}
            />
        </View>

        <MyGap jarak={10}/>
          {/* Pekerjaan Ibu*/}
          <View>
            <MyInput  
            label="Pekerjaan Ibu" 
            placeholder="Masukan Pekerjaan Ibu"
            value={form.pekerjaanIbu}
            onChangeText={(value) => handleInputChange('pekerjaanIbu', value)}
            />
        </View>

        <MyGap jarak={10}/>

            {/* Pekerjaan Suami*/}
            <View>
            <MyInput  
            label="Pekerjaan Suami" 
            placeholder="Masukan Pekerjaan Suami"
            value={form.pekerjaanSuami}
            onChangeText={(value) => handleInputChange('pekerjaanSuami', value)}
            />
        </View>

         <MyGap jarak={10}/>
        
            {/* Alamat Rumah Ibu*/}
            <View>
            <MyInput  
            label="Alamat Rumah Ibu" 
            placeholder="Masukan Alamat Rumah Ibu"
            value={form.alamatRumahIbu}
            onChangeText={(value) => handleInputChange('alamatRumahIbu', value)}
            />
        </View>

        <MyGap jarak={10}/>


         
            {/* Alamat Rumah Suami*/}
            <View>
            <MyInput  
            label="Alamat Rumah Suami" 
            placeholder="Masukan Alamat Rumah Suami"
            value={form.alamatRumahSuami}
            onChangeText={(value) => handleInputChange('alamatRumahSuami', value)}
            />
        </View>

        <MyGap jarak={10}/>
           {/* Nomor Telepon Ibu*/}
           <View>
            <MyInput keyboardType="numeric"  
            label="Nomor Telepon Ibu" 
            placeholder="Masukan Nomor Telepon Ibu"
            value={form.nomorTeleponIbu}
            onChangeText={(value) => handleInputChange('nomorTeleponIbu', value)}
            />
        </View>

        <MyGap jarak={10}/>

               {/* Nomor Telepon Suami*/}
               <View>
            <MyInput 
            keyboardType="numeric" 
            label="Nomor Telepon Suami" 
            placeholder="Masukan Nomor Telepon Suami"
            value={form.nomorTeleponSuami}
            onChangeText={(value) => handleInputChange('nomorTeleponSuami', value)}
            />
        </View>

        <MyGap jarak={10}/>


               {/* Jumlah Anak*/}
               <View>
            <MyInput  
            keyboardType="numeric"  
            label="Jumlah Anak" 
            placeholder="Masukan Jumlah Anak"
            value={form.jumlahAnak}
            onChangeText={(value) => handleInputChange('jumlahAnak', value)}
            />
        </View>

        <MyGap jarak={10}/>

               {/* Jumlah Anak Hidup*/}
               <View>

            <MyInput 
            keyboardType="numeric"  
            label="Anak Yang Hidup" 
            placeholder="Masukan Jumlah Anak Yang Hidup"
            value={form.anakYangHidup}
            onChangeText={(value) => handleInputChange('anakYangHidup', value)}
            />
        </View>

        <MyGap jarak={10}/>

              {/* Jumlah Keguguran*/}
              <View>
            <MyInput
            keyboardType="numeric" 
            label="Jumlah Keguguran" 
            placeholder="Masukan Jumlah Keguguran"
            value={form.jumlahKeguguran}
            onChangeText={(value) => handleInputChange('jumlahKeguguran', value)}
        />
        </View>

        <MyGap jarak={10}/>


        
              {/* HPTHT*/}
              <View>
            <MyCalendar 
            label="HPHT"
            value={form.hpht}
            onDateChange={(value) => handleInputChange('hpht', value)}
            />
        </View>

        <MyGap jarak={20}/>

        <MyButton 
        title="Simpan"
        onPress={handleSave}
        
        />
        </View>
     </ScrollView>

    </View>
  )
}