

import * as React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableWithoutFeedback, TouchableOpacity, Keyboard, ImageBackground, Image, StatusBar, AsyncStorage } from "react-native";
import 'react-native-gesture-handler';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export interface loginProps {
  navigation: any
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
    console.log("called")
    fetch("https://5bace0f01483.ngrok.io/login", {
      method: "Post",
      headers: {
        'Content-Type': 'Application/json'
      },
      body: JSON.stringify({
        "email": this.state.form.email,
        "password": this.state.form.password
      })
    }).then(response => response.json())
      .then(data => {
        if (data.userId && data.username) {
          AsyncStorage.setItem('username', data.username);
          console.log(data.username)
          AsyncStorage.setItem('userId', (data.userId)).then((res) => {
            console.log(data.userId)
            alert('login Succesfully');   
          })
        } else {
          alert('Login failed! Please try again.')
        }
      }).catch(() => {
        alert('Login failed! Please try again.')
        })
  }


  render() {

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          {/* <StatusBar backgroundColor="#0984e3" /> */}
          <View style={styles.logo} >
            <Image source={require('../screens/assets/loginlogo.png')} style={styles.swiperimg} ></Image>
            <Text style={styles.textDetail} >SystemFixer</Text>

          </View>

          <Formik

            initialValues={{ email: '', password: '' }}
            validationSchema={Yup.object({
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
                  onChangeText={props.handleChange('email')}
                  onBlur={props.handleBlur('email')}
                  value={props.values.email}
                  autoFocus
                  placeholder="email"
                  style={styles.input}
                  placeholderTextColor="#7f7e87"
                />
                <Text style={styles.error}>{props.errors.email}</Text>
                <TextInput
                  onChangeText={props.handleChange('password')}
                  onBlur={props.handleBlur('password')}
                  value={props.values.password}
                  placeholder="password"
                  style={styles.input}
                  placeholderTextColor="#7f7e87"
                />
                <Text style={styles.error}>{props.touched.password && props.errors.password}</Text>

                {/* <TouchableOpacity onPress={props.handleSubmit} style={styles.button} > */}
                <TouchableOpacity onPress={props.handleSubmit} style={styles.button} >
                  <Text style={styles.buttext}  >Log in</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('testhome')}  >

                  <View style={{ justifyContent: "center", alignItems: 'center', marginTop: 40 }}>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', margin: 20 }}>

                      <Text style={{ color: '#7f7e87' }} >Don't Have an Account? </Text>
                      <Text style={{ fontWeight: 'bold' }} >Sign Up!</Text>
                    </View>
                    <Text style={{ color: '#7f7e87' }} >Forgot Password?</Text>
                  </View>
                </TouchableOpacity>


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
    textAlign: 'center',
    fontFamily: 'serif',

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
    marginVertical: 30
  },
  swiperimg: {
    height: hp('15'),
    width: wp('30'),


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



