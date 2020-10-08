import React from "react";
import { View, Text, StyleSheet, ImageBackground, } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { TouchableOpacity } from "react-native-gesture-handler";
// require('../screens/assets/images.jpg')



export interface LetsBeginProps {
}

export class LetsBegin extends React.Component<any, any> {

    constructor(props: LetsBeginProps) {
        super(props);
    }

    navigateToSlider() {
        this.props.navigation.navigate('slider');
    }

    public render() {
        return (
            <ImageBackground source={require('../screens/assets/756295.jpg')} style={styles.backgroundImage}>
                <View style={[styles.container, styles.mainview]}>

                    <View>
                        <Text style={styles.welcome} >WELCOME</Text>
                        <Text style={styles.appname} >to the SystemFixer</Text>
                        <Text style={[styles.info, styles.white]} >Saving customers' time and energy, We put in ours to ensure your System's fixation at Doorstep and at earliest.</Text>
                        <Text style={[styles.info, styles.white]}>We always Demonstrate the core values of professionalism leading to long lasting Business relationships wih Customers.</Text>
                    </View>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('slider')} >
                        <View style={styles.letset} >
                            <Text style={styles.letbegin} > Let`s begin</Text>
                            <Icon style={{ marginTop: 5, marginLeft: 10, color: 'white', fontSize: 22 }} name="arrow-right">

                            </Icon>
                        </View>
                    </TouchableOpacity>


                </View>
            </ImageBackground>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    mainview: {
        padding: hp('3'),
        backgroundColor: 'rgba(0,0,0,0.8)'
    },

    white: {
        color: 'white'
    },
    backgroundImage: {
        flex: 1
    },

    info: {
        marginTop: hp('1.5'),
        fontSize: hp('2.2'),
        color: 'white'
    },
    appname: {
        fontSize: hp('3.5'),
        marginTop: hp('2'),
        color: 'white', 
        fontFamily:'serif'
    },
    welcome: {
        fontSize: hp('5'),
        marginTop: hp('10'),
        color: 'white',
        fontFamily:'serif'
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    text: {
        color: "grey",
        fontSize: 30,
        fontWeight: "bold"
    },



    letset: {
        flexDirection: 'row',
        marginTop: hp('20'),
        borderWidth:1,
        borderColor:'white',
        marginRight:'auto',
        borderRadius:2

    },
    letbegin: {
        fontSize: hp('2.5'),
        color: 'white',
        fontFamily:'serif'


    },
})
