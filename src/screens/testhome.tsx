import * as React from 'react';
import { View, StyleSheet, Text, StatusBar, Image, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Card, Badge, } from 'react-native-elements'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { AsyncStorage } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Swiper from 'react-native-swiper';

export interface testhomeProps {
    navigation: any
}

export interface testhomeState {
}

export default class testhomeComponent extends React.Component<testhomeProps, testhomeState> {
    constructor(props: testhomeProps) {
        super(props);
        this.state = {
            username: String
        };
    }
    getuserDetails() {

        // return fetch('https://5e98ec77c013.ngrok.io/donateBlood')
        //   .then((response) => response.json())
        //   .then((json) => {

        //    this.setState({
        //       dataBlood: json

        //     })
        // })
        //   .catch((error) => {
        //     console.error(error);
        //   });

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
    // removeItem() {
    //     console.log("remove called")
    //     const userId = AsyncStorage.getItem('userId', (err, userId) => {
    //         if (userId) {
    //             console.log(userId)
    //         } else {
    //             console.log("no id")
    //         }
    //     })

    //     AsyncStorage.removeItem('userId').then(() => {

    //     })
    // }
    public render() {
        return (
            <View style={styles.container} >
                <StatusBar backgroundColor="black" />
                <View style={styles.logout}>
                    <View>
                        <Text style={{color:'white'}} >hassem</Text>
                    </View>
                    <AntDesign onPress={() => this.removeItem()} name='logout' color={'white'} size={25} />
                </View>
                <View style={{ marginLeft: 5, marginRight: 5, flex: 1, backgroundColor: '#2e2e2e' }}>

                    <View style={styles.logo} >
                        <Image source={require('../screens/assets/tips-for-repairing-a-laptop-748x421.jpeg')} style={styles.img} ></Image>
                        <View style={{ marginLeft: 10, marginTop: 8 }} >
                            <Text style={styles.data} >Hassem mehboob</Text>
                            <Text style={styles.data} >MUL</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1 }} >
                        <Swiper
                            autoplay
                            activeDotColor="gold"
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
                    <View style={{ flex: 1 }} >

                        <View style={{ flexDirection: 'row', flex: 1, }} >

                            <View style={{ flex: 1, alignItems: 'center', }} >
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('hardwarestart')} style={styles.button} >
                                    <AntDesign name='laptop' color={'white'} style={{ borderWidth:1,borderRadius:100,borderColor:'white',padding:15 }} size={25} />
                                    <Text style={styles.label}>Hardware Fix</Text>
                                    {/* <Text onPress={() => this.props.navigation.navigate('hardware')} style={styles.label} > Hardware Fix</Text> */}
                                </TouchableOpacity>
                            </View>
                            <View style={{ flex: 1, alignItems: 'center', }} >
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('hardwarestart')} style={styles.button} >
                                    <MaterialCommunityIcons  name='blender-software'  color={'white'} style={{ borderWidth:1,borderRadius:100,borderColor:'white',padding:15 , }} size={25} />
                                    <Text style={styles.label}>Software Fix</Text>
                                    {/* <Text onPress={() => this.props.navigation.navigate('hardware')} style={styles.label} > Hardware Fix</Text> */}
                                </TouchableOpacity>
                            </View>
                            <View style={{ flex: 1, alignItems: 'center', }} >
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('hardwarestart')} style={styles.button} >
                                    <MaterialIcons name='system-update-alt' color={'white'} style={{ borderWidth:1,borderRadius:100,borderColor:'white',padding:15 , }} size={25} />
                                    <Text style={styles.label}>Upgradation</Text>
                                    {/* <Text onPress={() => this.props.navigation.navigate('hardware')} style={styles.label} > Hardware Fix</Text> */}
                                </TouchableOpacity>
                            </View>

                        </View>
                        <View style={{ flexDirection: 'row', flex: 1 }} >

                            <View style={{ flexDirection: 'row', flex: 1, }} >

                                <View style={{ flex: 1, alignItems: 'center', }} >
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('hardwarestart')} style={styles.button} >
                                        <AntDesign style={{ borderWidth:1,borderRadius:100,borderColor:'white',padding:15 , }} name='logout' color={'white'}  size={25} />
                                        <Text style={styles.label}>Software Fix</Text>
                                        {/* <Text onPress={() => this.props.navigation.navigate('hardware')} style={styles.label} > Hardware Fix</Text> */}
                                    </TouchableOpacity>
                                </View>
                                <View style={{ flex: 1, alignItems: 'center', }} >
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('hardwarestart')} style={styles.button} >
                                        <AntDesign  name='logout' color={'white'} style={{ borderWidth:1,borderRadius:100,borderColor:'white',padding:15 , }} size={25} />
                                        <Text style={styles.label}>Software Fix</Text>
                                        {/* <Text onPress={() => this.props.navigation.navigate('hardware')} style={styles.label} > Hardware Fix</Text> */}
                                    </TouchableOpacity>
                                </View>
                                <View style={{ flex: 1, alignItems: 'center', }} >
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('hardwarestart')} style={styles.button} >
                                        <AntDesign style={{ borderWidth:1,borderRadius:100,borderColor:'white',padding:15 , }} name='logout' color={'white'}  size={25} />
                                        <Text style={styles.label}>Software Fix</Text>
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
        paddingRight: 35,
        padding: 10,
        backgroundColor: 'black'
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
        backgroundColor: 'black'
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
        backgroundColor: '#f01f49',

    },
    img: {
        height: 63,
        width: 63,
        borderRadius: 100,
    },
    label: {
        fontSize: 14,
        color: 'gold',
    },
    data: {
        color: 'white',
        fontSize: 16,
        // fontFamily: 'serif'
    },
    subtittle: {
        paddingTop: 6,
        textAlign: 'center',
        color: 'white',
        fontSize: 13,
        fontStyle: 'italic',
        paddingLeft: 8
    },
    logo: {
        flexDirection: 'row',
        padding: 20,

    },
    swiperimg: {
        // resizeMode: "cover",
        height: 210,
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