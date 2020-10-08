import * as React from 'react';
import { View, StyleSheet, Text, Image, ImageBackground, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Card } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StatusBar } from 'react-native'
import SwiperComponent from '../theme/Swiper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';


export interface HomeProps {
  navigation: any
}

export default class HomeComponent extends React.Component<HomeProps, any> {
  constructor(props: HomeProps) {
    super(props);
  }


  public render() {
    return (
      <View style={styles.container} >
        <StatusBar barStyle="light-content" backgroundColor="#0984e3" />
        {/* <Text style={styles.bar} >SystemFixer</Text> */}
        <View style={styles.container1} >
          <SwiperComponent />
        </View>
        <View style={styles.badge} >
          
        <View style={styles.set} >
            <View style={styles.iconSet}>
              <Card containerStyle={{height:135 , width:170,justifyContent:'center',marginLeft:30,borderRadius:30,backgroundColor:"#e3f3ff",borderColor:'#0984e3'}}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('selectors')} >
                  <View style={styles.icons} >
                  <FontAwesome name='laptop' size={50} color={'#0984e3'} />  
                  <Text style={styles.textsty} >Laptop Repair</Text>
                  </View>
                </TouchableOpacity>
              </Card>
            </View>
            <View style={styles.iconSet}>
            <Card containerStyle={{height:135 ,backgroundColor:"#e3f3ff", width:170,justifyContent:'center',marginRight:30,borderRadius:30,borderColor:'#3444f1'}} >
                <TouchableOpacity onPress={() => this.props.navigation.navigate('salepoint')} >
                  <View style={styles.icons} >
                  <AntDesign size={50} color={'#0984e3'} name='shoppingcart' />   
                  <Text style={styles.textsty} >Shop now</Text>
                  </View>
                </TouchableOpacity>
              </Card>
            </View>
          </View>
          <View style={styles.set} >
            <View style={styles.iconSet}>
              <Card containerStyle={{height:135 , width:170,justifyContent:'center',marginLeft:30,borderRadius:30,backgroundColor:"#e3f3ff",borderColor:'#0984e3'}}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('maps')} >
                  <View style={styles.icons} >
                  <EvilIcons size={55} color={'#0984e3'}  name='location' />   
                  <Text style={styles.textsty} >Track my Order</Text>
                  </View>
                </TouchableOpacity>
              </Card>
            </View>
            <View style={styles.iconSet}>
            <Card containerStyle={{height:135 , width:170,justifyContent:'center',marginRight:30,borderRadius:30,backgroundColor:"#e3f3ff",borderColor:'#0984e3'}} >
                <TouchableOpacity onPress={() => this.props.navigation.navigate('maps')} >
                  <View style={styles.icons} >
                  <EvilIcons size={55} color={'#0984e3'} name='location' />   
                  <Text style={styles.textsty} >Doctor suggestion</Text>
                  </View>
                </TouchableOpacity>
              </Card>
            </View>
          </View>
          <View style={styles.set} >
            <View style={styles.iconSet}>
              <Card containerStyle={{height:135 , width:170,justifyContent:'center',marginLeft:30,borderRadius:30,backgroundColor:"#e3f3ff",borderColor:'#0984e3'}}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('applyshop')} >
                  <View style={styles.icons} >
                  <EvilIcons size={55} color={'#0984e3'} name='location' />   
                  <Text style={styles.textsty} >Apply For Shop</Text>
                  </View>
                </TouchableOpacity>
              </Card>
            </View>
            <View style={styles.iconSet}>
            <Card containerStyle={{height:135 , width:170,justifyContent:'center',marginRight:30,borderRadius:30,backgroundColor:"#e3f3ff",borderColor:'#0984e3'}} >
          
                <TouchableOpacity onPress={() => this.props.navigation.navigate('issues')} >
                  <View style={styles.icons} >
                  <MaterialIcons size={50} color={'#0984e3'}  name='sync-problem' />   
                  <Text style={styles.textsty} >Available mech</Text>
                  </View>
                </TouchableOpacity>
              </Card>
            </View>
          </View>
        </View>

      </View>




    );
  }
}
const styles = StyleSheet.create({
  container1: {
    flex: 1.5,

  },
  container: {
    flex: 1,

  },
  icons: {
    color: '#427ef5',
    alignItems: 'center',
    justifyContent: 'center'
  },

  textsty: {
    fontFamily: 'serif',
    fontWeight:'bold'
  },
  set: {
    flexDirection: 'row',
    flex: 1,
  
    
    



  },
  iconSet: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flex: 1
  },

  bgcol: {
    backgroundColor: 'rgba(0,0,0,0.8)'
  },

  bar: {
    textAlign: 'center',
    padding: 12,
    fontSize: 20,
    color: '#3444f1',
    fontWeight: 'bold',
    fontFamily:'serif'

  },
  barset: {
    color: 'white'
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: hp('3'),
    backgroundColor: '#062473',

  },

  badge: {
    flex: 2,
    marginBottom:30,

  },

  search: {
    paddingBottom: hp('5'),
  },
  data: {
    flex: 2,
    margin: hp('5')
  },
  swiperimg: {
  },


});



{/* <View style={[styles.set, styles.container]} >
            <View style={[styles.iconSet, styles.container,]}>
              <TouchableOpacity>
              <FontAwesome name='laptop' style={styles.icons}  size={55} />
                <Text style={styles.textsty} onPress={() => this.props.navigation.navigate('selectors')} >Laptop Repair</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.iconSet, styles.container,]}>
              <TouchableOpacity>
              c-  <Entypo name='classicomputer' style={styles.icons}  size={55} />

                <Text style={styles.textsty} onPress={() => this.props.navigation.navigate('maps')} >computer Repair</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[styles.set, styles.container]} >
            <View style={[styles.iconSet, styles.container,]}>
              <TouchableOpacity>
                <Ionicons name='ios-help-circle-outline' style={styles.icons}  size={55} />
                <Text style={styles.textsty} onPress={() => this.props.navigation.navigate('suggest')} >Doctor Suggestions</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.iconSet, styles.container,]}>
              <TouchableOpacity>
                <MaterialIcons name='system-update-alt' style={styles.icons}  size={55} />

                <Text style={styles.textsty} onPress={() => this.props.navigation.navigate('maps')} >system upgrade</Text>
              </TouchableOpacity>
            </View>
          </View> */}