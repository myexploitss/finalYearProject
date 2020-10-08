import * as React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import Swiper from 'react-native-swiper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export interface SwiperProps {
}

export default class SwiperComponent extends React.Component<SwiperProps, any> {
  constructor(props: SwiperProps) {
    super(props);
  }

  public render() {
    return (
      <View style={styles.container} >
           <Swiper
            autoplay
          >
            <View style={{justifyContent:'center',alignContent:'center',alignItems:'center'}} >
            {/* <Image source={require('../screens/assets/computer-monitors-rgv-surplus-computer-monitor-accessory-laptop-multimedia-white-laptop-png-clip-art.png')} style={styles.swiperimg} ></Image> */}
            <Text>hasem</Text>
            </View>
           
          </Swiper>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container:{
flex:1,
margin:hp('2.5'),
backgroundColor:'#0984e3',
borderRadius:30,
    },
    swiperimg:{
      height:200,
    width:200,
  borderRadius:20
      
    }
});