import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image, TouchableWithoutFeedback, Keyboard, TextInput, Alert, PermissionsAndroid } from 'react-native';
import { Button } from 'react-native-elements';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const phone = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
export interface CreatAcountProps {
    navigation: any
}
import Geolocation from '@react-native-community/geolocation';


export default class CreatAcountComponent extends React.Component<CreatAcountProps, any> {
    constructor(props: CreatAcountProps) {
        super(props);
        this.state = {
            form: {},
            latitude: '',
            longitude: '',
        }
            }
            
    createAccount() {
        fetch("https://2b1115a1f1af.ngrok.io/shop", {
          method: "Post",
          headers: {
            'Content-Type': 'Application/json'
          },
          body: JSON.stringify({
            "username": this.state.form.username,
            "contactinfo": this.state.form.contactinfo,
            "city": this.state.form.city,
            "idcard": this.state.form.idcard,
            "adress": this.state.form.adress,
            "minimumprice": this.state.form.minimumprice,
            "aboutyourself": this.state.form.aboutyourself,
            "latitude": this.state.latitude,
            "longitude": this.state.longitude,
            // "coordinates": coordinatesData

        })
          
        }
        ).then(response => response.json())
          .then(data => {
            // AsyncStorage.setItem('name',data.username);
            // AsyncStorage.setItem('token' ,(data.userId)).then((res) => {
              console.log(data.userId)      
              alert('shop registered')
            })
          }  

        //   async requestlocationPermission() {
        //     try {
        //       const granted = await PermissionsAndroid.request(
        //         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        //       )
        //       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        //         alert("Location permission denied")

        //                   this.getCurrentLocation()

    
        //       } else {
        //         alert("Location permission denied")
        //       }
        //     } catch (err) {
        //       console.warn(err)
        //       }
        //     }
        async requestlocationPermission() {
            const chckLocationPermission = PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
            if (chckLocationPermission === PermissionsAndroid.RESULTS.GRANTED) {
                alert("You've access for the location");
                this.getCurrentLocation()
                
            } else {
                try {
                    const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                        {
                            'title': 'Location Access required ',
                            'message': 'this location is the exect location of your shop which you want to registered kindle apply for your shop when you are in the shop'
                        }
                    )
                    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                        // alert("You've access for the location");
                        this.getCurrentLocation()
                    } else {
                        alert("You don't have access for the location");
                    }
                } catch (err) {
                    alert(err);
                }
            }
        };

        componentDidMount() {
            this.requestlocationPermission()
    
        }
    
        
        getCurrentLocation() {
            Geolocation.getCurrentPosition((position) => {
                const coordinatesdata = [position.coords.longitude, position.coords.latitude];
                setTimeout(() => {
                    this.setState({
                                           latitude: position.coords.latitude,
                                            longitude: position.coords.longitude,
                                        });
                }, 100);
            }, (error) => alert(error.message), {
                enableHighAccuracy: true, timeout: 20000, maximumAge: 1000
            });
        }
    public render() {
        return (
            // <ImageBackground source={require('../screens/assets/hardware-computer-computer-service-technology.jpg')} style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>

                    <View style={styles.logo} >
                        <Image source={require('../screens/assets/loginlogo.png')} style={styles.swiperimg} ></Image>
                        <Text style={styles.textDetail} >SystemFixer</Text>
                    </View>

                    <Formik
                        initialValues={{ username: '', adress: '', contactinfo: '', idcard: '' ,minimumprice:'',aboutyourself:'',city: '',}}
                        validationSchema={Yup.object({
                            
                            username: Yup.string()
                            .required('Required'),

                            contactinfo:Yup.string()
                            .required("required")
                            .matches(phone, 'Phone number is not valid')
                            .min(11, "to short")
                            .max(11, "to long"),
                            
                            idcard:Yup.string()
                            .required("required")
                            .matches(phone, 'Id Card is not valid')
                            .min(13, "to short")
                            .max(13, "to long"),
                            
                            adress:Yup.string()
                            .required(),
                            
                            minimumprice: Yup.number()

                                .required('Required'),
                                aboutyourself: Yup.string()

                                .required('Required'),
                                city: Yup.string()

                                .required('Required'),

                                
                            })}
                            
                        onSubmit={(values, actions) => {
                            console.log(values);
                            this.setState({ form: values });
                            this.createAccount();
                            actions.resetForm();
                        }}>
                        {props => (
                            
                            <View>

                                <KeyboardAwareScrollView>
                                <TextInput
                                    onChangeText={props.handleChange('username')}
                                    onBlur={props.handleBlur('username')}
                                    value={props.values.username}
                                    autoFocus
                                    placeholder="Username"
                                    style={styles.input}
                                />
                                <Text style={styles.error}>{props.touched.username && props.errors.username}</Text>
                                <TextInput
                                    onChangeText={props.handleChange('city')}
                                    onBlur={props.handleBlur('city')}
                                    value={props.values.city}
                                    autoFocus
                                    placeholder="city"
                                    style={styles.input}
                                />
                            <Text style={styles.error}>{props.touched.city && props.errors.city}</Text>
                                <TextInput
                                    onChangeText={props.handleChange('contactinfo')}
                                    onBlur={props.handleBlur('contactinfo')}
                                    value={props.values.contactinfo}
                                    placeholder="Phone Number"
                                    style={styles.input}
                                />
                                <Text style={styles.error}>{props.touched.contactinfo && props.errors.contactinfo}</Text>
                                <TextInput
                                    onChangeText={props.handleChange('idcard')}
                                    onBlur={props.handleBlur('idcard')}
                                    value={props.values.idcard}
                                    placeholder="ID Card no"
                                    style={styles.input}

                                />
                                <Text style={styles.error}>{props.touched.idcard &&props.errors.idcard}</Text>

                                <TextInput
                                    onChangeText={props.handleChange('adress')}
                                    onBlur={props.handleBlur('adress')}
                                    value={props.values.adress}
                                    placeholder="Shop adress"
                                    style={styles.input}

                                />
                                <Text style={styles.error}>{props.touched.adress &&props.errors.adress}</Text>
                                <TextInput
                                    onChangeText={props.handleChange('minimumprice')}
                                    onBlur={props.handleBlur('minimumprice')}
                                    value={props.values.minimumprice}
                                    placeholder="Minimum Price"
                                    style={styles.input}

                                />
                                <Text style={styles.error}>{props.touched.minimumprice &&props.errors.minimumprice}</Text>
                                <TextInput
                                    onChangeText={props.handleChange('aboutyourself')}
                                    onBlur={props.handleBlur('aboutyourself')}
                                    value={props.values.aboutyourself}
                                    placeholder="why people choose you"
                                    style={styles.input}

                                />
                                <Text style={styles.error}>{props.touched.aboutyourself && props.errors.aboutyourself}</Text>
                                    </KeyboardAwareScrollView>
                                <TouchableOpacity onPress={props.handleSubmit} style={styles.button} >
                                    <Text style={styles.buttext}  >Apply</Text>
                                </TouchableOpacity>
                                <View style={{ justifyContent: "center", alignItems: 'center', marginTop: 10 }}>
                                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center',  }}>
                                        {/* <FontAwesome name='heart' color={'white'} size={35} /> */}
                                        <Text style={{}} >Go Back To </Text>
                                        <Text onPress={() => this.props.navigation.navigate('home')} style={{ fontWeight: 'bold' }} >Home page!</Text>
                                    </View>

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
        backgroundColor: '#ecf0f1',
        paddingLeft: 15,
        paddingRight: 15,
        marginBottom: 15
        
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
        height: hp('12'),
        width: wp('24'),


    },

    logo: {
        alignItems: 'center',
        margin: hp('3'),
    },
    textDetail: {
        fontSize: hp('3'),
        textAlign: 'center',
        fontFamily: 'serif',
        color: '#30336b',
        fontWeight: 'bold',
        fontStyle: 'italic'
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

