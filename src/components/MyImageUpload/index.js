import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import { Color, colors, fonts } from '../../utils';

export default function MyImageUpload() {
  const [imageUri, setImageUri] = useState(null);

  const selectImage = () => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (response.assets && response.assets.length > 0) {
        const selectedImage = response.assets[0];
        setImageUri(selectedImage.uri);
      }
    });
  };

  

  // Function to handle capturing an image using the camera
  const takePhoto = () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
      includeBase64: true, // Include Base64 encoding for better handling of the image
    };
    launchCamera(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled camera');
      } else if (response.errorMessage) {
        console.log('Camera Error: ', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        const capturedImage = response.assets[0];
        setImageUri(`data:${capturedImage.type};base64,${capturedImage.base64}`);
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upload Desain</Text>

      {/* Display the selected or captured image */}
      {imageUri && (
      <View style={{alignItems: 'center'}}>
      <Image
          source={{ uri: imageUri }}
          style={styles.image}
        />
      </View>
      )}

      <View style={{padding:10,  borderRadius:10, borderColor:Color.blueGray[300], borderWidth:1}}>
      <TouchableOpacity style={styles.button} onPress={selectImage}>
          <Text style={styles.buttonText}>Upload File</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:20,
   
   
  },
  title: {
    fontSize: 15,
    marginBottom: 10,
    color: colors.primary,
    fontFamily:fonts.primary[400]
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
    alignItems:'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: Color.blueGray[300],
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign:"center"
  },
});
