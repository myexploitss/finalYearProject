import * as React from 'react';
import { View, StyleSheet, Text, Image, StatusBar } from 'react-native';
import Swiper from 'react-native-swiper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import { Button } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

export interface slidersProps {
    navigation: any
}

export interface slidersState {
}

export default class slidersComponent extends React.Component<slidersProps, slidersState> {
  constructor(props: slidersProps) {
    super(props);
    this.state = {
    };
  }

  public render() {
    return (
        <View style={[styles.container, styles.mainView]}>
        

  <View style={{flex:2}} >

<Swiper
//   autoplay
activeDotColor="#3444f1"


>
  
  <View style={[styles.container, styles.content]}>
      <Image  source = {require('../screens/assets/217-2177581_broken-laptop-vector-hd-png-download.png')}  style={styles.swiperimg} ></Image>
      <Text style={styles.textDetail} >Doorstep Repair Service</Text>
      <Text style={styles.text} >Saving customers' time and energy, We put in ours to ensure your Laptop's fixation at Doorstep and at earliest. </Text>
  </View>
  <View style={[styles.container, styles.content]}>
      <Image  source = {require('../screens/assets/dell-service-near-me.png')}  style={styles.swiperimg} ></Image>
      <Text style={styles.textDetail} >we save lives </Text>
      <Text style={styles.text} >connecting blood donors with recipient </Text>
  </View>
  <View style={[styles.container, styles.content]}>
      <Image source = {require('../screens/assets/hardware-computer-computer-service-technology.jpg')}  style={styles.swiperimg} ></Image>
      <Text style={styles.textDetail} >we save lives </Text>
      <Text style={styles.text} >connecting blood donors with recipient </Text>
  </View>
</Swiper>
  </View>

<View style={styles.container}>
<TouchableOpacity onPress={() => this.props.navigation.navigate('login')} style={styles.button} >
  <Text style={styles.buttext} >Log In</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.button} >
  <Text style={styles.buttext} onPress={() => this.props.navigation.navigate('signup')} >Sign Up</Text>
</TouchableOpacity>
<Text style={styles.notice} >
  We Dont post anything to facebook
</Text>
<Text  style={styles.notice}>By siginning in you are agree with our terms of services and privacy police</Text>
</View>
</View>
)
}
}
const styles = StyleSheet.create({
container: {
flex: 1,
},
content:{
alignItems: 'center'
},
button: {
alignItems: 'center',
backgroundColor: '#30336b',
paddingTop: 10,
paddingBottom: 10,
paddingLeft: 100,
paddingRight: 100,
borderRadius: 5,
margin:5
},

buttext: {
color: 'white',
fontSize: hp('2.2')
},
mainView: {
padding: 30,
justifyContent: 'center',
alignItems: 'center'
},


text: {
fontSize: hp(2.5),
marginTop: hp('1'),
color: '#5c5754',
textAlign: 'center'
},

swiperimg: {
height: hp('22'),
width: wp('50'),
margin: hp('6'),

},
textDetail: {
fontSize: hp('3.5'),
textAlign:'center',
fontFamily:'serif'

},
notice:{
color:'#7f7e87',
textAlign:'center',
marginTop:hp('1.5')
},

})

