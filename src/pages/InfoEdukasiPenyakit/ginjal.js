import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import Pdf from 'react-native-pdf';
import { colors } from '../../utils';
import { MyHeader } from '../../components';

export default function InfoEdukasiPenyakitGinjal({ navigation }) {
  const pdfSource = require('../../../android/app/src/main/assets/pdf/ginjal.pdf');

  return (
    <View style={styles.container}>
      <MyHeader title="Ginjal" />
      <Pdf
        source={pdfSource}
        onLoadComplete={(numberOfPages, filePath) => {
          console.log(`Number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page, numberOfPages) => {
          console.log(`Current page: ${page}`);
        }}
        onError={(error) => {
          console.log(error);
        }}
        onPressLink={(uri) => {
          console.log(`Link pressed: ${uri}`);
        }}
        trustAllCerts={false}
        horizontal={false}
        style={styles.pdf}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
