import * as React from 'react';
import { View, StyleSheet, Text, Image, StatusBar } from 'react-native';
import Swiper from 'react-native-swiper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Button } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';


export interface SliderProps {
    navigation: any
}

export default class MySliderComponent extends React.Component<SliderProps, any> {
    constructor(props: SliderProps) {
        super(props);
    }

    render() {
        return (
            <View style={[styles.container, styles.mainView]}>
            <StatusBar backgroundColor="#0984e3" />

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
      <Text style={styles.buttext} onPress={() => this.props.navigation.navigate('CreatAcount')} >Sign Up</Text>
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
backgroundColor: '#0984e3',
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


//             <View style={[styles.container, styles.mainView]}>
//                 <Swiper>
//                     <View style={styles.container}>
//                         <Text style={[styles.text, styles.textCol]} >Doorstep</Text>
//                         <Text style={[styles.text2, styles.textCol]}> Repair Service</Text>
//                         <Image source={require('../screens/assets/tips-for-repairing-a-laptop-748x421.jpeg')} style={styles.swiperimg} ></Image>
//                         <Text style={[styles.textDetail, styles.textdetcol]} >Saving customers' time and energy, We put in ours to ensure your Laptop's fixation at Doorstep and at earliest.</Text>
//                     </View>
//                     <View style={styles.container}>
//                         <Text style={[styles.text, styles.textCol]} >Cost </Text>
//                         <Text style={[styles.text2, styles.textCol]}> Effective Solutions</Text>
//                         <Image source={require('../screens/assets/tips-for-repairing-a-laptop-748x421.jpeg')} style={styles.swiperimg} ></Image>
//                         <Text style={[styles.textDetail, styles.textdetcol]} >We also sale parts and accessories taking into concern our customers that are looking for Cost Effective Solutions.</Text>
//                     </View>
//                     <View style={styles.container}>
//                         <Text style={[styles.text, styles.textCol]} >Professionalism</Text>
//                         <Text style={[styles.text2, styles.textCol]}> Quality services</Text>
//                         <Image source={require('../screens/assets/tips-for-repairing-a-laptop-748x421.jpeg')} style={styles.swiperimg} ></Image>
//                         <Text style={[styles.textDetail, styles.textdetcol]} >We always Demonstrate the core values of professionalism leading to long lasting Business relationships wih Customers.
// </Text>
//                     </View>

//                 </Swiper>
//                 <TouchableOpacity onPress={() => this.props.navigation.navigate('home')} style={styles.button} >
// <Text style={styles.buttext} >Get Started</Text>
// </TouchableOpacity>

//             </View>
//         )
//     }
// }
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     button: {
//         alignItems: 'center',
//         backgroundColor: '#3444f1',
//         paddingTop: 10,
//         paddingBottom: 10,
//         paddingLeft: 100,
//         paddingRight: 100,
//         borderRadius: 5,
//         margin:5
//         },
        
//         buttext: {
//         color: 'white',
//         fontSize: hp('2.2')
//         },
        
//     mainView: {
//         padding: 20,
//         justifyContent: 'center',
//         alignItems: 'center',
//         paddingBottom:70
//     },

//     slide2: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#97CAE5'
//     },
//     slide3: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#92BBD9'
//     },
//     text: {
//         fontSize: hp(4),
//         fontWeight: 'bold',
//         marginTop: hp('2'),
//         fontFamily:'serif'
//     },
//     text2: {
//         fontSize: hp(4),
//         fontWeight: 'bold',
//         fontFamily:'serif'
//     },
//     swiperimg: {
//         height: hp('30'),
//         width: wp('100'),
//         marginTop: hp('6')
//     },
//     textCol: {
//         color: '#333030',
//     },
//     textDetail: {
//         fontSize: hp('3'),
//         marginTop: hp('4'),
//         fontFamily:'serif'
//     },
//     textdetcol: {
//         color: '#454242'
//     },

// })
