import * as React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableWithoutFeedback, TouchableOpacity, Keyboard, ImageBackground, Image, StatusBar } from "react-native";
import 'react-native-gesture-handler';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const phone = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
export interface hardwareendProps {
}

export interface hardwareendState {
}

export default class hardwareendComponent extends React.Component<hardwareendProps, hardwareendState> {
  constructor(props: hardwareendProps) {
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

          <Formik

            initialValues={{ username: '', email: '', contactinfo: '' }}
            validationSchema={Yup.object({
              username: Yup.string()
                .required('Required'),
              email: Yup.string()
                .email('Invalid Email')
                .required('Required'),
                contactinfo:Yup.string()
                .required("required")
                .matches(phone, 'Phone number is not valid')
                .min(11, "to short")
                .max(11, "to long"),

            })}
            onSubmit={(values, actions) => {
              console.log(values);
              this.setState({ form: values });
              this.login() 
              actions.resetForm();
            }}>
            {props => (
              <View style={styles.colors} >
                  <Text style={{color:'gold' ,fontSize:17}} >Username</Text>
                <TextInput
                  onChangeText={props.handleChange('username')}
                  onBlur={props.handleBlur('username')}
                  value={props.values.username}
                  autoFocus
                //   placeholder="Username"
                  style={styles.input}
                  placeholderTextColor="#7f7e87"
                />
                <Text style={styles.error}>{props.errors.username}</Text>
                <Text style={{color:'gold' ,fontSize:17}} >Email</Text>
                <TextInput
                  onChangeText={props.handleChange('email')}
                  onBlur={props.handleBlur('email')}
                  value={props.values.email}
                //   placeholder="password"
                  style={styles.input}
                  placeholderTextColor="#7f7e87"
                />
                <Text style={styles.error}>{props.errors.email}</Text>
                <Text style={{color:'gold' ,fontSize:17}} >Phone No</Text>
                <TextInput
                  onChangeText={props.handleChange('contactinfo')}
                  onBlur={props.handleBlur('contactinfo')}
                  value={props.values.contactinfo}
                //   placeholder="password"
                  style={styles.input}
                  placeholderTextColor="#7f7e87"
                />
                <Text style={styles.error}>{props.errors.contactinfo}</Text>
               
                {/* <TouchableOpacity onPress={props.handleSubmit} style={styles.button} > */}
                <TouchableOpacity onPress={() => this.props.navigation.navigate('hardwareissues')} style={styles.button} >
                  <Text style={styles.buttext}  >Submit</Text>
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
    color: 'black',
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
    marginTop:10



  },
});

