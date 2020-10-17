import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image, TouchableWithoutFeedback, Keyboard, TextInput, Alert, ScrollView, PermissionsAndroid } from 'react-native';
import { Button } from 'react-native-elements';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StatusBar } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import Geolocation from '@react-native-community/geolocation';

export interface signUpProps {
}

export interface signUpState {
}

export default class signUpComponent extends React.Component<signUpProps, signUpState> {
  constructor(props: signUpProps) {
    super(props);
    this.state = {
        form: {},
        // coordiantes: '',
        currentCoordinates:[],
        location: null


    };
  }
  signUp() {
    fetch("https://2b1115a1f1af.ngrok.io/signUp", {
      method: "Post",
      headers: {
        'Content-Type': 'Application/json'
      },
      body: JSON.stringify({
        "username": this.state.form.username,
        
        "email": this.state.form.email,
        "password": this.state.form.password,
        "confirmpassword": this.state.form.confirmpassword,
        "currentCoordinates": this.state.currentCoordinates,
      
      })
    }
    ).then(response => response.json())
      .then(data => {
  
        // AsyncStorage.setItem('name',data.username);
        // AsyncStorage.setItem('token' ,(data.userId)).then((res) => {
          console.log(data.userId)      
          alert('signup Succesfully')
        })
      } 
    //   findCoordinates = () => {
    //     Geolocation.getCurrentPosition(
    //       position => {
    //         const location = JSON.stringify(position);
    
    //         this.setState({ location });
    //       },
    //       error => Alert.alert(error.message),
    //       { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    //     );
    //   };
    
     
    
        
    
    // componentDidMount() { 
    
    // this.requestCameraPermission()
    // // this.findCoordinates()
    // }
public render() {

    Geolocation.getCurrentPosition(info => console.log(info));

    return (
        
        
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

            <View style={styles.container}>
            <KeyboardAwareScrollView>
                    <ScrollView>
            <StatusBar backgroundColor="#30336b" />

                <View style={styles.logo} >
                    <Image source={require('../screens/assets/loginlogo.png')} style={styles.swiperimg} ></Image>
                    <Text style={styles.textDetail} >SystemFixer</Text>

                </View>

                <Formik
                    initialValues={{ username: '', email: '', password: '', confirmpassword: '' }}
                    validationSchema={Yup.object({
                        username: Yup.string()
                        .required('Required')
                        ,
                        email: Yup.string()
                        .email('Invalid Email')
                        .required('Required'),
                        
                        password: Yup.string().required('Password is required').min(5,'minimum  charcters'),
                        confirmpassword: Yup.string()
                        .oneOf([Yup.ref('password'), null], 'Passwords must match')
                    })}
                    
                    onSubmit={(values, actions) => {
                        console.log(values);
                        this.setState({ form: values });
                        this.signUp();
                        actions.resetForm();
                    }}>
                    {props => (
                        
                        <View>

                            <TextInput
                                onChangeText={props.handleChange('username')}
                                onBlur={props.handleBlur('username')}
                                value={props.values.username}
                                autoFocus
                                placeholder="Username"
                                style={styles.input}
                                />
                            <Text style={styles.error}>{props.errors.username}</Text>
                            <TextInput
                                onChangeText={props.handleChange('email')}
                                onBlur={props.handleBlur('email')}
                                value={props.values.email}
                                placeholder="Email Address"
                                style={styles.input}
                                />
                            <Text style={styles.error}>{props.touched.email&&props.errors.email}</Text>
                            <TextInput
                                onChangeText={props.handleChange('password')}
                                onBlur={props.handleBlur('password')}
                                value={props.values.password}
                                placeholder="password"
                                style={styles.input}
                                secureTextEntry
                                
                            />
                            <Text style={styles.error}>{props.touched.password&&props.errors.password}</Text>

                            <TextInput
                                onChangeText={props.handleChange('confirmpassword')}
                                onBlur={props.handleBlur('confirmpassword')}
                                value={props.values.confirmpassword}
                                placeholder="confirm password"
                                style={styles.input}
                                secureTextEntry
                                
                                
                                />
                            <Text style={styles.error}>{props.touched.confirmpassword&&props.errors.confirmpassword}</Text>
                            <TouchableOpacity onPress={props.handleSubmit} style={styles.button} >
                                <Text style={styles.buttext}  >Sign Up</Text>
                            </TouchableOpacity>
                                    <TouchableOpacity  onPress={() => this.props.navigation.navigate('login')} >
                                        <View style={{ justifyContent: "center", alignItems: 'center', marginTop: 30 }}>
                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', margin: 18 }}>

                                    <Text style={{color:'#7f7e87'}} >Already Have an Account? </Text>
                                    <Text  style={{ fontWeight: 'bold' }} >Log in!</Text>
                                    {/* <Text  onPress={this.findCoordinates()} style={{ fontWeight: 'bold' }} >location</Text> */}
                                </View>
                                <Text  style={styles.notice}>By siginning in you are agree with our terms of services and privacy police</Text>
                                {/* <Text>Location: {this.state.location}</Text> */}

                            </View>
                                    </TouchableOpacity>
                        </View>
                    )}
                </Formik>


                    </ScrollView>
        </KeyboardAwareScrollView>
            </View>
        </TouchableWithoutFeedback>

    
    );
}
}
const styles = StyleSheet.create({

container: {
    flex: 1,
    // backgroundColor: '#ecf0f1',
    paddingLeft: 15,
    paddingRight: 15,
    // paddingBottom: 15,
},
notice:{
    color:'#7f7e87',
    textAlign:'center',
    // marginTop:hp('.2')
    },
button: {
    alignItems: 'center',
    backgroundColor: '#30336b',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 100,
    paddingRight: 100,
    borderRadius: 5,
    margin: 5,
    marginTop: 2


},
buttext: {
    color: 'white',
    fontSize: hp('2.2'),
    fontWeight: 'bold',
},

swiperimg: {
    height: hp('15'),
    width: wp('30'),


},

logo: {
    alignItems: 'center',
    margin: hp('6'),
},
textDetail: {

    color:'#30336b',
    fontSize:35,
    fontFamily:'serif',
    fontWeight: 'bold',
    fontStyle: 'italic',
    textAlign:'center',
// paddingTop:10

    
    },

title: {
    padding: 90,
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center',
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
    borderColor: '#ddd',
    borderWidth: 1,
    backgroundColor: '#fff',

},
});


