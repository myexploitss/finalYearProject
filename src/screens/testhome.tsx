import * as React from 'react';
import { View, StyleSheet, Text, StatusBar, Image, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Card, Badge, } from 'react-native-elements'
import Fontisto from 'react-native-vector-icons/Fontisto';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import { AsyncStorage } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Swiper from 'react-native-swiper';
import hardwarestartComponent from '../screens/hardwarestart';
// hardwarestart(){

// }
export interface testhomeProps {
    navigation: any
}

export interface testhomeState {
}

export default class testhomeComponent extends React.Component<testhomeProps, testhomeState> {
    constructor(props: testhomeProps) {
        super(props);
        this.state = {
            username: String,
    
        };
    }
    componentDidMount() {
        // this.getuserDetails()
        const username = AsyncStorage.getItem('username', (err, username) => {
            // console.log(username)
            if (username) {
                this.setState({ username: username });
                console.log(this.state.username)
            } else {
                console.log("no name")
            }
        })
    }
    removeItem() {
        console.log("remove called")
        const userId = AsyncStorage.getItem('userId', (err, userId) => {
            if (userId) {
                console.log(userId)
            } else {
                console.log("no id")
            }
        })

        AsyncStorage.removeItem('userId').then(() => {

        })
    }
    public render() {
        return (
            <View style={styles.container} >
                <StatusBar backgroundColor="#30336b" />
                <View style={{flexDirection: 'row-reverse',backgroundColor:'#30336b'}} >

                <View style={styles.logout}>
                    <AntDesign onPress={() => this.removeItem()} name='logout' color={'white'} size={25} />
                </View>
                <View style={{justifyContent:'center',alignItems: 'center',backgroundColor:'#30336b',paddingRight:60}}>
                        <Text  style={{color:'white' ,fontSize:25,fontFamily:'serif',fontWeight: 'bold',fontStyle: 'italic',textAlign:'center'}} >SystemFixer</Text>
                    </View>
                </View>
                <View style={{ marginLeft: 5, marginRight: 5, flex: 1,  }}>

                    <View style={styles.logo} >
                        <Image source={require('../screens/assets/756295.jpg')} style={styles.img} ></Image>
                        <View style={{ marginLeft: 10, marginTop: 8 }} >
        <Text style={styles.data} >{this.state.username}</Text>
                            <Text style={styles.data} >MUL</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1 }} >
                        <Swiper
                            autoplay
                            activeDotColor="#30336b"
                            >
                            <View style={styles.content}>
                                <Image source={require('../screens/assets/Laptop-Repair.jpg')} style={styles.swiperimg} ></Image>
                            </View>
                            <View style={styles.content}>
                                <Image source={require('../screens/assets/laptoprepair2.jpg')} style={styles.swiperimg} ></Image>
                            </View>
                            <View style={styles.content}>
                                <Image source={require('../screens/assets/upgrade.jpg')} style={styles.swiperimg} ></Image>
                            </View>
                        </Swiper>
                    </View>
                    <View style={{ flex: 0.85 }} >

                        <View style={{ flexDirection: 'row', flex: 1, }} >

                            <View style={{ flex: 1, alignItems: 'center', }} >
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('hardwarestart')} style={styles.button} >
                                    <Octicons name='tools' color={'#30336b'} style={{ borderColor:'#30336b',padding:15 }} size={25} />
                                    <Text style={styles.label}>Hardware Fix</Text>
                                    {/* <Text onPress={() => this.props.navigation.navigate('hardware')} style={styles.label} > Hardware Fix</Text> */}
                                </TouchableOpacity>
                            </View>
                            <View style={{ flex: 1, alignItems: 'center', }} >
                                <TouchableOpacity onPress={() => this.props.navigation.navigate()} style={styles.button} >
                                <FontAwesome5 name='laptop-medical' color={'#30336b'} style={{ borderColor:'#30336b',padding:15 , }} size={25} />
                                    <Text style={styles.label}>Software Fix</Text>
                                    {/* <Text onPress={() => this.props.navigation.navigate('hardware')} style={styles.label} > Hardware Fix</Text> */}
                                </TouchableOpacity>
                            </View>
                            <View style={{ flex: 1, alignItems: 'center', }} >
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('hardwarestart')} style={styles.button} >
                                    <MaterialIcons name='system-update-alt' color={'#30336b'} style={{ borderColor:'#30336b',padding:15, }} size={25} />
                                    <Text style={styles.label}>Upgradation</Text>
                                    {/* <Text onPress={() => this.props.navigation.navigate('hardware')} style={styles.label} > Hardware Fix</Text> */}
                                </TouchableOpacity>
                            </View>

                        </View>
                        <View style={{ flexDirection: 'row', flex: 1 }} >

                            <View style={{ flexDirection: 'row', flex: 1, }} >

                                <View style={{ flex: 1, alignItems: 'center', }} >
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('applyshop')} style={styles.button} >
                                    <Entypo name='shop' color={'#30336b'} style={{padding:15 , }} size={25} />
                                        <Text style={styles.label}>Apply For Shop</Text>
                                        <Text style={styles.label}>(registration)</Text>
                                        {/* <Text onPress={() => this.props.navigation.navigate('hardware')} style={styles.label} > Hardware Fix</Text> */}
                                    </TouchableOpacity>
                                </View>
                                <View style={{ flex: 1, alignItems: 'center', }} >
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('issues')} style={styles.button} >
                                        <Fontisto  name='shopping-store' color={'#30336b'} style={{padding:15 , }} size={25} />
                                        <Text style={styles.label}>Find shops</Text>
                                        <Text style={styles.label}>(mechanics)</Text>
                                        {/* <Text onPress={() => this.props.navigation.navigate('hardware')} style={styles.label} > Hardware Fix</Text> */}
                                    </TouchableOpacity>
                                </View>
                                <View style={{ flex: 1, alignItems: 'center', }} >
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('maps')} style={styles.button} >
                                        <Foundation style={{ padding:15 , }} name='map' color={'#30336b'}  size={25} />
                                        <Text style={styles.label}>Find Shop</Text>
                                        <Text style={styles.label}>(Near you)</Text>
                                        {/* <Text onPress={() => this.props.navigation.navigate('hardware')} style={styles.label} > Hardware Fix</Text> */}
                                    </TouchableOpacity>
                                </View>

                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerflex: {
        flexWrap: 'wrap', flexDirection: 'row',
        backgroundColor: 'lightgrey',
        height: 30
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    logout: {
        alignItems: 'flex-end',
        paddingRight: 20,
        padding: 10,
        
        // backgroundColor: '#30336b'
    },
    textDetail: {
        fontSize: hp('3.5'),
        textAlign: 'center',
        fontFamily: 'serif'
    },
    btn: {
        paddingLeft: wp('60%'),
    },
    text: {
        fontSize: 20,
        paddingLeft: wp('5%'),

    },
    container: {
        flex: 1,
        // backgroundColor: 'black'
    },
    findView: {
        flexDirection: 'row-reverse',
        marginLeft: 10,
    },
    cardview: {
        marginBottom: 10,
        marginTop: -5,
        fontFamily: 'serif'
    },
    lives: {
        color: 'white',

    },
    badgeview: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: .2,
        borderColor: 'white',
        margin: 10
    },
    badgev: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    flexdir: {
        flexDirection: 'row'
    },

    tittle: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        // fontWeight: 'bold'
    },
    title: {
        padding: 30
    },
    bar: {
        color: 'white',
        // backgroundColor: '#f01f49',

    },
    img: {
        height: 63,
        width: 63,
        borderRadius: 100,
    },
    label: {
        fontSize: 14,
        color: 'black',
        fontWeight: 'bold'
    },
    data: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold'
        // fontFamily: 'serif'
    },
    subtittle: {
        paddingTop: 6,
        textAlign: 'center',
        color: 'white',
        fontSize: 13,
        fontStyle: 'italic',
        paddingLeft: 8,
        
    },
    logo: {
        flex: 0.25,
        flexDirection: 'row',
        padding: 20,
        alignItems: 'center'

    },
    swiperimg: {
        // resizeMode: "cover",
        height: 230,
        width: 400,
    },
    logo1: {
        justifyContent: 'center',
        paddingTop: 40,
        alignItems: 'center',
    }
});
{/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

<View style={styles.container} >

    <LinearGradient colors={['#0984e3', '#79bbed']} >
        <View style={styles.logout}>
            <AntDesign onPress={() => this.removeItem()} name='logout' color={'white'} size={25} />
        </View>

        <StatusBar backgroundColor="#0984e3" />
        <View style={styles.logo1} >
            <Image source={require('../screens/assets/101-1016049_laptop-repair-clipart-png-download-clipart-computer-service.png')} style={styles.swiperimg} ></Image>
        </View>
        <View style={styles.logo} >
            <Image source={require('../screens/assets/tips-for-repairing-a-laptop-748x421.jpeg')} style={styles.img} ></Image>
            <View style={{ marginLeft: 10 }} >
                <Text style={styles.data} >Hassem mehboob</Text>
                <Text style={styles.data} >MUL</Text>

            </View>
        </View>
        <View style={styles.flexdir} >
            <View style={styles.badgeview}>
                <FontAwesome name='heart' color={'white'} size={35} />
                <Badge
                    status="error"
                    value="1"
                    containerStyle={{ top: -14, left: -10 }}
                    textStyle={{ color: 'white', fontSize: 12, }}
                    />
                <Text style={styles.lives} >Lives Saved</Text>
            </View>

            <View style={styles.badgev}>
                <FontAwesome name='bullhorn' color={'white'} size={35} />
                <Badge
                    status="error"
                    value="1"
                    containerStyle={{ top: -14, left: -10 }}
                    textStyle={{ color: 'white', fontSize: 12, }}
                />
                <Text style={styles.lives} >Lives Saved</Text>
            </View>
        </View>
    </LinearGradient>
    <Card
        title='Find Blood Donors'
        >
        <Text style={styles.cardview}>
            Find Blood Donors in your own university  many donors available from different department if you cannot find then make  request for needed blood type and its all cost free</Text>
        <View style={{ flexDirection: 'row-reverse', marginLeft: 10, }} >
            <Text  >Find it</Text>
        </View>
    </Card>
    <Card

title='Help US'
>
        <Text style={styles.cardview}>
            Find Blood Donors in your own university  many donors available from different department if you cannot find then make  request for needed blood type and its all cost free</Text>
        <View style={styles.findView} >
            <Text  >Find it</Text>
        </View>
    </Card>

</View>
</TouchableWithoutFeedback> */}


// style={{
//     textAlign: 'center',
//     marginTop:30,
//     width: 100,
//     shadowOpacity: 1,
//     textShadowColor: 'black',
//     textShadowRadius: 30,
//     textShadowOffset: { width: 2, height: 2 }
//    }}