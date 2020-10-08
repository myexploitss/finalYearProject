import * as React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableWithoutFeedback, TouchableOpacity, Keyboard, ImageBackground, Image, StatusBar } from "react-native";
import 'react-native-gesture-handler';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import DropDownPicker from 'react-native-dropdown-picker';

export interface hardwareissuesProps {
}

export interface hardwareissuesState {
}

export default class hardwareissuesComponent extends React.Component<hardwareissuesProps, hardwareissuesState> {
  constructor(props: hardwareissuesProps) {
    super(props);
    this.state = {
    };
  }

  public render() {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <StatusBar backgroundColor="black" />
          <View style={styles.logo} >
            {/* <Image source={require('../screens/assets/loginlogo.png')} style={styles.swiperimg} ></Image> */}
            <Text style={styles.textDetail} >SystemFixer</Text>

          </View>

              <View style={styles.colors} >
                  <Text style={{color:'gold' ,fontSize:17}} >Your issue</Text>
                  <DropDownPicker
                        placeholder="Possible Isssues"
                        containerStyle={{ height:54 }}
                        dropDownStyle={{ backgroundColor: '#fafafa',  }}
                        // marginTop: 1
                        // itemStyle={{ padding: 15, }}
                        labelStyle={{ fontSize: 13, color: '#000' }}
                        // placeholderStyle={{ fontWeight: 'bold' }}
                        // activeLabelStyle={{ color: 'red' }}
                        items={[
                            { label: 'lcd', value: 'item1' },
                            { label: 'keyboard', value: 'item2' },
                            { label: 'pad', value: 'item2' },
                            { label: 'body break', value: 'item2' },
                            { label: 'camera issue', value: 'item2' },
                            { label: 'ram issue', value: 'item2' },
                            { label: 'hard issue', value: 'item2' },
                            { label: 'camera issue', value: 'item2' },
                        ]}
                    />
                <Text style={{color:'gold' ,fontSize:17}} >Laptop Model</Text>
                <DropDownPicker
                        placeholder="Demage"
                        containerStyle={{ height:54 }}
                        dropDownStyle={{ backgroundColor: '#fafafa',  }}
                        // marginTop: 1
                        // itemStyle={{ padding: 15, }}
                        labelStyle={{ fontSize: 13, color: '#000' }}
                        // placeholderStyle={{ fontWeight: 'bold' }}
                        // activeLabelStyle={{ color: 'red' }}
                        items={[
                            { label: 'body break', value: 'item1' },
                            { label: 'camera', value: 'item2' },
                            { label: 'pad', value: 'item2' },
                            { label: 'body break', value: 'item2' },
                            { label: 'camera issue', value: 'item2' },
                            { label: 'ram issue', value: 'item2' },
                            { label: 'hard issue', value: 'item2' },
                            { label: 'camera issue', value: 'item2' },
                        ]}
                    />

                
               
                {/* <TouchableOpacity onPress={props.handleSubmit} style={styles.button} > */}
                <TouchableOpacity onPress={() => this.props.navigation.navigate('hardwareend')} style={styles.button} >
                  <Text style={styles.buttext}  >Next</Text>
                </TouchableOpacity>
                
                
                 
              </View>
        

          


        </View>
      </TouchableWithoutFeedback>
    );
  }

}









const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    padding: 20,
    backgroundColor:'#2e2e2e'

  

  },
  textDetail: {
    fontSize: hp('4'),
    textAlign:'center',
    fontFamily:'serif',
    color:'gold'
    
    },
  stl: {
    backgroundColor: 'rgba(0,0,0,0.9)',
    height: 100,
    width: 50
  },

  buttext: {
    color: 'white',
    fontSize: hp('2.5'),
    fontWeight: 'bold',
  },
  logo: {
    alignItems: 'center',
    marginBottom: hp('4'),
  },
  

  colors: {
    padding: hp('4'),
    // marginTop: hp('7')
    marginVertical:10,
    // borderWidth:1,
    // borderColor:'gold',
    // borderRadius:10
    

  },
  swiperimg: {
    height: hp('15'),
    width: wp('30'),


  },
  


  button: {
    alignItems: 'center',
    backgroundColor: 'gold',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 100,
    paddingRight: 100,
    borderRadius: 5,
    margin: 5,
    marginTop: 20


  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#d42027'

  },
  error: {
    fontSize: 14,
    color: 'red',
    fontWeight: 'bold',
  },
  input: {
    height: 50,
    paddingHorizontal: 8,
    width: '100%',
    borderColor: 'black',
    borderWidth: .5,
    borderRadius: 5,
    backgroundColor: '#fff',
    marginTop:10



  },
});

