import * as React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableWithoutFeedback, TouchableOpacity, Keyboard, ImageBackground, Image, StatusBar } from "react-native";
import 'react-native-gesture-handler';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export interface hardwarestartProps {
}

export interface hardwarestartState {
}

export default class hardwarestartComponent extends React.Component<hardwarestartProps, hardwarestartState> {
  constructor(props: hardwarestartProps) {
    super(props);
    this.state = {
    };
  }

  public render() {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <StatusBar  backgroundColor="gold" />
          <View style={styles.logo} >
            {/* <Image source={require('../screens/assets/loginlogo.png')} style={styles.swiperimg} ></Image> */}
            <Text style={styles.textDetail} >SystemFixer</Text>

          </View>

          <Formik

            initialValues={{ company: '', model: '', series: '' }}
            validationSchema={Yup.object({
              company: Yup.string()
                .required('Required'),
              model: Yup.string()
                .email('Invalid Email')
                .required('Required'),
              series: Yup.string()
                // .required('Required'),
            })}
            onSubmit={(values, actions) => {
              console.log(values);
              this.setState({ form: values });
              this.login() 
              actions.resetForm();
            }}>
            {props => (
              <View style={styles.colors} >
                  <Text style={{color:'gold' ,fontSize:17}} >Laptop Company</Text>
                <TextInput
                  onChangeText={props.handleChange('company')}
                  onBlur={props.handleBlur('company')}
                  value={props.values.company}
                  autoFocus
                //   placeholder="Username"
                  style={styles.input}
                  placeholderTextColor="#7f7e87"
                />
                <Text style={styles.error}>{props.errors.company}</Text>
                <Text style={{color:'gold' ,fontSize:17}} >Laptop Model</Text>
                <TextInput
                  onChangeText={props.handleChange('model')}
                  onBlur={props.handleBlur('model')}
                  value={props.values.model}
                //   placeholder="password"
                  style={styles.input}
                  placeholderTextColor="#7f7e87"
                />
                <Text style={styles.error}>{props.errors.model}</Text>
                <Text style={{color:'gold' ,fontSize:17}} >Laptop Series</Text>
                <TextInput
                  onChangeText={props.handleChange('series')}
                  onBlur={props.handleBlur('series')}
                  value={props.values.series}
                //   placeholder="password"
                  style={styles.input}
                  placeholderTextColor="#7f7e87"
                />
                <Text style={{color:'white'}} >(optional)</Text>
               
                {/* <TouchableOpacity onPress={props.handleSubmit} style={styles.button} > */}
                <TouchableOpacity onPress={() => this.props.navigation.navigate('hardwareissues')} style={styles.button} >
                  <Text style={styles.buttext}  >Next</Text>
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
    color: 'white',
    fontSize: hp('2.5'),
    fontWeight: 'bold',
  },
  logo: {
    alignItems: 'center',
    marginBottom: hp('2'),
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


