import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { useNavigation } from '@react-navigation/native';

export default function MyCarouser() {
  const [activeSlide, setActiveSlide] = useState(0);
  const windowWidth = Dimensions.get('window').width;
  const navigation = useNavigation();

  // Variabel ImageSLIDER berisi gambar-gambar slider
  const ImageSLIDER = [
    require('../../assets/slider_1.png'),
    require('../../assets/slider_2.png'),
    require('../../assets/slider_3.png'),
  ];

  const [data, setData] = useState([
    { id: 1, image: ImageSLIDER[0] },
    { id: 2, image: ImageSLIDER[1] },
    { id: 3, image: ImageSLIDER[2] },
  ]);

  const renderCarouselItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image
        source={item.image}
        style={styles.imageStyle}
      />
    </View>
  );

  return (
    <View style={styles.carouselContainer}>
      <Carousel
        loop={true}
        autoplay={true} // Menambahkan autoplay untuk animasi otomatis
        autoplayInterval={3000} // Interval setiap 3 detik
        data={data}
        containerCustomStyle={styles.carousel}
        renderItem={renderCarouselItem}
        sliderWidth={windowWidth}
        itemWidth={windowWidth * 0.8} // Sesuaikan lebar item agar lebih sesuai di layar
        layout="default"
        layoutCardOffset={18}
        onSnapToItem={(index) => setActiveSlide(index)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  carouselContainer: {
    marginTop: 10,
    alignItems: 'center',  // Menjajarkan slider di tengah secara horizontal
    justifyContent: 'center',  // Menjajarkan secara vertikal
    height: 200,  // Sesuaikan tinggi container carousel agar sesuai dengan elemen di atas dan bawah
  },
  carousel: {
    marginBottom: 10,
  },
  itemContainer: {
    width: '100%',  // Mengatur lebar item untuk memenuhi seluruh lebar carousel
    height: 150,  // Sesuaikan tinggi item sesuai dengan desain
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center', // Posisikan gambar di tengah item slider
    overflow: 'hidden',
  },
  imageStyle: {
    height: 214,  // Mengisi penuh tinggi container
    width: 340,  // Mengisi penuh lebar container
    resizeMode: 'cover',  // Menjaga proporsi gambar
  },
});
