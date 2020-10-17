import * as React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableWithoutFeedback, TouchableOpacity, Keyboard, ImageBackground, Image, StatusBar, AsyncStorage, ScrollView } from "react-native";
import 'react-native-gesture-handler';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Swiper from 'react-native-swiper';
import DropDownPicker from 'react-native-dropdown-picker';
const phone = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export interface hardwarestartProps {
}

export interface hardwarestartState {
}

export default class hardwarestartComponent extends React.Component<hardwarestartProps, hardwarestartState> {
  constructor(props: hardwarestartProps) {
    super(props);
    this.state = {
      form: {},
      // userAccountId: '',
      issu: '',
      demag: ''
    };
  }
  problems() {
    fetch("https://2b1115a1f1af.ngrok.io/blood", {
      method: "Post",
      headers: {
        'Content-Type': 'Application/json'
      },
      body: JSON.stringify({
        "username": this.state.form.username,
        "department": this.state.form.email,
        "contactinfo": this.state.form.contactinfo,
        "company": this.state.form.company,
        "model": this.state.form.model,
        "series": this.state.form.series,
        "issu": this.state.issu,
        "demag": this.state.demag,
        // "userAccountId": this.state.userAccountId,
      })
    }).then((data: any) => {
      alert('Blood Donated')
    })

  }
  // componentDidMount(){
  //   const userId = AsyncStorage.getItem('userId', (err, userId) => {
  //     if (userId) {

  //       this.setState({ userAccountId: userId });
  //     } else {
  //       alert("no useraccount id")
  //     }

  //   })
  // }

  public render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>

          <StatusBar backgroundColor="#30336b" />
          <View style={styles.logo} >
            <Image source={require('../screens/assets/loginlogo.png')} style={styles.swiperimg} ></Image>
            <Text style={styles.textDetail} >SystemFixer</Text>

          </View>
          <View style={{ flex: 2.5, marginBottom: 40 }} >
              
            <Formik

initialValues={{ username: '', email: '', contactinfo: '', company: '', model: '', series: '' }}
validationSchema={Yup.object({
                username: Yup.string()
                .required('Required'),
                email: Yup.string()
                .email('Invalid Email')
                .required('Required'),
                contactinfo: Yup.string()
                .required("required")
                .matches(phone, 'Phone number is not valid')
                .min(11, "to short")
                .max(11, "to long"),
                company: Yup.string()
                .required('Required'),
                model: Yup.string()
                // .email('Invalid Email')
                .required('Required'),
                series: Yup.string()
                
                
              })}
              onSubmit={(values, actions) => {
                console.log(values);
                this.setState({ form: values });
                this.problems()
                actions.resetForm();
              }}>
              {props => (
                <Swiper
                //   autoplay
                activeDotColor="#30336b"
                >

                  <View style={styles.container}>
                      <ScrollView>
                    <View style={styles.colors} >
                      <Text style={{ color: '#30336b', fontSize: 17 }} >Laptop Company</Text>
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
                      <Text style={{ color: '#30336b', fontSize: 17 }} >Laptop Model</Text>
                      <TextInput
                        onChangeText={props.handleChange('model')}
                        onBlur={props.handleBlur('model')}
                        value={props.values.model}
                        //   placeholder="password"
                        style={styles.input}
                        placeholderTextColor="#7f7e87"
                        />
                      <Text style={styles.error}>{props.touched.model && props.errors.model}</Text>
                      <Text style={{ color: '#30336b', fontSize: 17 }} >Laptop Series</Text>
                      <TextInput
                        onChangeText={props.handleChange('series')}
                        onBlur={props.handleBlur('series')}
                        value={props.values.series}
                        //   placeholder="password"
                        style={styles.input}
                        placeholderTextColor="#7f7e87"
                        />
                      <Text style={styles.error}>{props.touched.series && props.errors.series}</Text>
                      <Text style={{ color: 'white' }} >(optional)</Text>

                      {/* <TouchableOpacity onPress={props.handleSubmit} style={styles.button} > */}
                      {/* <TouchableOpacity onPress={() => this.props.navigation.navigate('hardwareissues')} style={styles.button} >
                        <Text style={styles.buttext}  >Next</Text>
                      </TouchableOpacity> */}



                    </View>
                      </ScrollView>

                  </View>

                  <View style={styles.container}>
                    <View style={styles.colors} >
                      <Text style={{ color: 'black', fontSize: 17, margin: 10 }} >Your issue</Text>
                      <DropDownPicker
                        placeholder="Possible Issues"
                        dropDownStyle={{ backgroundColor: '#fafafa' }}
                        itemStyle={{ padding: 25, }}
                        labelStyle={{ fontSize: 13, color: '#000' }}
                        placeholderStyle={{ fontWeight: 'bold', fontSize: 16 }}
                        items={[
                          { label: 'lcd', value: 'lec' },
                          { label: 'keyboard', value: 'keyboard' },
                          { label: 'pad', value: 'pad' },
                          { label: 'body', value: 'body' },
                          { label: 'camera issue', value: 'camera issue' },
                          { label: 'ram issue', value: 'ram issue' },
                          { label: 'hard issue', value: 'hard issue' },
                          { label: 'camera issue', value: 'camera issue' },
                        ]}
                        defaultValue={this.state.issu}
                        containerStyle={{ height: 54 }}
                        style={{ backgroundColor: 'white' }}
                        // dropDownStyle={{ backgroundColor: '#fafafa' }}
                        onChangeItem={item => this.setState({
                          issu: item.value
                        })}
                      />
                      <Text style={{ color: 'black', fontSize: 17, margin: 10 }} >IF Demage</Text>
                      <DropDownPicker
                        placeholder="Possible Demages"
                        dropDownStyle={{ backgroundColor: '#fafafa' }}
                        itemStyle={{ padding: 25, }}
                        labelStyle={{ fontSize: 13, color: '#000' }}
                        placeholderStyle={{ fontWeight: 'bold', fontSize: 16 }}
                        items={[
                          { label: 'body break', value: 'body break' },
                          { label: 'camera', value: 'camera' },
                          { label: 'pad', value: 'pad' },
                          { label: 'body', value: 'body' },
                          { label: 'camera issue', value: 'camera issue' },
                          { label: 'ram issue', value: 'ram issue' },
                          { label: 'hard issue', value: 'hard issue' },
                          { label: 'camera issue', value: 'camera issue' },
                        ]}
                        defaultValue={this.state.demag}
                        containerStyle={{ height: 54 }}
                        style={{ backgroundColor: 'white' }}
                        // dropDownStyle={{ backgroundColor: '#fafafa' }}
                        onChangeItem={item => this.setState({
                          demag: item.value
                        })}
                      />



                      {/* <TouchableOpacity onPress={props.handleSubmit} style={styles.button} > */}
                      {/* <TouchableOpacity onPress={() => this.props.navigation.navigate('hardwareend')} style={styles.button} >
                        <Text style={styles.buttext}  >Next</Text>
                      </TouchableOpacity> */}
                    </View>
                  </View>
                  <View style={[styles.container, styles.content]}>
                  <ScrollView>

                    <View style={styles.colors} >
                      <Text style={{ color: 'black', fontSize: 17 }} >Username</Text>
                      <TextInput
                        onChangeText={props.handleChange('username')}
                        onBlur={props.handleBlur('username')}
                        value={props.values.username}
                        autoFocus
                        //   placeholder="Username"
                        style={styles.input}
                        placeholderTextColor="#7f7e87"
                      />
                      <Text style={styles.error}>{props.touched.username && props.errors.username}</Text>
                      <Text style={{ color: 'black', fontSize: 17 }} >Email</Text>
                      <TextInput
                        onChangeText={props.handleChange('email')}
                        onBlur={props.handleBlur('email')}
                        value={props.values.email}
                        //   placeholder="password"
                        style={styles.input}
                        placeholderTextColor="#7f7e87"
                      />
                      <Text style={styles.error}>{props.touched.email && props.errors.email}</Text>
                      <Text style={{ color: 'black', fontSize: 17 }} >Phone No</Text>
                      <TextInput
                        onChangeText={props.handleChange('contactinfo')}
                        onBlur={props.handleBlur('contactinfo')}
                        value={props.values.contactinfo}
                        //   placeholder="password"
                        style={styles.input}
                        placeholderTextColor="#7f7e87"
                      />
                      <Text style={styles.error}>{props.touched.contactinfo && props.errors.contactinfo}</Text>

                      {/* <TouchableOpacity onPress={props.handleSubmit} style={styles.button} > */}
                      <TouchableOpacity onPress={props.handleSubmit} style={styles.button} >
                        <Text style={styles.buttext}  >Submit</Text>
                      </TouchableOpacity>



                    </View>
                    </ScrollView>
                  </View>

                </Swiper>
              )}

            </Formik>
          </View>




        </View>
      </TouchableWithoutFeedback>
    );
  }

}









const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,

  },
  textDetail: {

    color: '#30336b',
    fontSize: 35,
    fontFamily: 'serif',
    fontWeight: 'bold',
    fontStyle: 'italic',
    textAlign: 'center',
    paddingTop: 10


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
    margin: hp('3'),
    flex: 1,
  },


  colors: {
    padding: hp('4'),
    // marginBottom: hp('7'),
    marginVertical: 10,
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
    marginTop: 10



  },
});


