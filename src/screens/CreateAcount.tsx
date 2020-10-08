import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image, TouchableWithoutFeedback, Keyboard, TextInput, Geolocation, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export interface CreatAcountProps {
    navigation: any
}

export default class CreatAcountComponent extends React.Component<CreatAcountProps, any> {
    constructor(props: CreatAcountProps) {
        super(props);
        this.state = {
            form: {},
            coordiantes: ''
        }


    }


    createAccount() {
        fetch("", {
            method: "Post",
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify({
                "username": this.state.form.username,
                "email": this.state.form.email,
                "password": this.state.form.pasword,
                "coordinates":  this.state.coordinates
            })
        }).then((data: any) => {
            console.log("account created");
        })
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
                        initialValues={{ username: '', email: '', password: '', confirmpassword: '' }}
                        validationSchema={Yup.object({
                            username: Yup.string()
                                .required('Required')
                            ,
                            email: Yup.string()
                                .email('Invalid Email')
                                .required('Required'),
                            password: Yup.string()

                                .required('Required'),
                            confirmpassword: Yup.string()

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
                                <Text style={styles.error}>{props.errors.email}</Text>
                                <TextInput
                                    onChangeText={props.handleChange('password')}
                                    onBlur={props.handleBlur('password')}
                                    value={props.values.password}
                                    placeholder="password"
                                    style={styles.input}

                                />
                                <Text style={styles.error}>{props.errors.confirmpassword}</Text>

                                <TextInput
                                    onChangeText={props.handleChange('confirmpassword')}
                                    onBlur={props.handleBlur('confirmpassword')}
                                    value={props.values.confirmpassword}
                                    placeholder="confirm password"
                                    style={styles.input}

                                />
                                <Text style={styles.error}>{props.errors.password}</Text>
                                <TouchableOpacity onPress={props.handleSubmit} style={styles.button} >
                                    <Text style={styles.buttext}  >Log in</Text>
                                </TouchableOpacity>
                                <View style={{ justifyContent: "center", alignItems: 'center', marginTop: 40 }}>
                                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', margin: 20 }}>
                                        {/* <FontAwesome name='heart' color={'white'} size={35} /> */}
                                        <Text style={{}} >Already Have an Account? </Text>
                                        <Text onPress={() => this.props.navigation.navigate('login')} style={{ fontWeight: 'bold' }} >Log in!</Text>
                                    </View>

                                </View>
                            </View>
                        )}
                    </Formik>


                </View>
            </TouchableWithoutFeedback>
            // </ImageBackground>
        );
    }
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#ecf0f1',
        padding: 15,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#3444f1',
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
        fontSize: hp('4'),
        textAlign: 'center',
        fontFamily: 'serif',

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

