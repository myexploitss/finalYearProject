

import * as React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableWithoutFeedback, TouchableOpacity, Keyboard, ImageBackground, Image, StatusBar } from "react-native";
import 'react-native-gesture-handler';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export interface loginProps {
  navigation:any
}

export interface loginState {
}

export default class loginComponent extends React.Component<loginProps, loginState> {
  // props: any;
  // setState: any;

  constructor(props: loginProps) {
    super(props);
    this.state = {
      form: {},
      // email:String,
      // password:String
    }
  }
    
login() {
  fetch("https://8fee5886efcc.ngrok.io/login", {
    method: "Post",
    headers: {
      'Content-Type': 'Application/json'
    },
    body: JSON.stringify({
      "email": this.state.form.email,
      "password": this.state.form.password
    })
  }
  ).then(response => response.json())
    .then(data => {

      // AsyncStorage.setItem('name',data.username);
      // AsyncStorage.setItem('token' ,(data.userId)).then((res) => {
      //   console.log(data.userId)      
        alert('login Succesfully')
      })
    
     
    }  



  render() {

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <StatusBar backgroundColor="#0984e3" />
          <View style={styles.logo} >
            <Image source={require('../screens/assets/loginlogo.png')} style={styles.swiperimg} ></Image>
            <Text style={styles.textDetail} >SystemFixer</Text>

          </View>

          <Formik

            initialValues={{ username: '', email: '', password: '' }}
            validationSchema={Yup.object({
              username: Yup.string()
                .required('Required'),
              email: Yup.string()
                .email('Invalid Email')
                .required('Required'),
              password: Yup.string()
                .required('Required'),
            })}
            onSubmit={(values, actions) => {
              console.log(values);
              this.setState({ form: values });
              this.login() 
              actions.resetForm();
            }}>
            {props => (
              <View style={styles.colors} >
                <TextInput
                  onChangeText={props.handleChange('username')}
                  onBlur={props.handleBlur('username')}
                  value={props.values.username}
                  autoFocus
                  placeholder="Username"
                  style={styles.input}
                  placeholderTextColor="#7f7e87"
                />
                <Text style={styles.error}>{props.errors.username}</Text>
                <TextInput
                  onChangeText={props.handleChange('password')}
                  onBlur={props.handleBlur('password')}
                  value={props.values.password}
                  placeholder="password"
                  style={styles.input}
                  placeholderTextColor="#7f7e87"
                />
                <Text style={styles.error}>{props.errors.password}</Text>
               
                {/* <TouchableOpacity onPress={props.handleSubmit} style={styles.button} > */}
                <TouchableOpacity onPress={() => this.props.navigation.navigate('home')} style={styles.button} >
                  <Text style={styles.buttext}  >Log in</Text>
                </TouchableOpacity>
                <View style={{justifyContent: "center",alignItems:'center',marginTop:40}}>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', margin: 20 }}>
                  {/* <FontAwesome name='heart' color={'white'} size={35} /> */}
                  <Text style={{}} >Don't Have an Account? </Text>
                  <Text onPress={() => this.props.navigation.navigate('signup')} style={{ fontWeight: 'bold' }} >Sign Up!</Text>
                </View>
                <Text>Forgot Password?</Text>
                </View>
                
                 
              </View>
            )}

          </Formik>


        </View>
      </TouchableWithoutFeedback>
    );
  }

}









const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  textDetail: {
    fontSize: hp('4'),
    textAlign:'center',
    fontFamily:'serif',
    
    },
  stl: {
    backgroundColor: 'rgba(0,0,0,0.9)',
    height: 100,
    width: 50
  },

  buttext: {
    color: 'white',
    fontSize: hp('2.2'),
    fontWeight: 'bold',
  },
  logo: {
    alignItems: 'center',
    margin: hp('8'),
  },
  

  colors: {
    padding: hp('2.5'),
    // marginTop: hp('7')
    marginVertical:30
  },
  swiperimg: {
    height: hp('15'),
    width: wp('30'),


  },
  


  button: {
    alignItems: 'center',
    backgroundColor: '#0984e3',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 100,
    paddingRight: 100,
    borderRadius: 5,
    margin: 5,
    marginTop: 2


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



  },
});



