// // In App.js in a new project

// import * as React from 'react';
// import { View, Text, StyleSheet, } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { LetsBegin } from './src/screens/lets-begin';
// import MySliderComponent from './src/screens/slider';
// import HomeComponent from './src/screens/home';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import MapsComponent from './src/screens/maps';
// import LoginComponent from './src/screens/login';
// import selectorsComponent from './src/screens/selectors';
// import CreatAcountComponent from './src/screens/CreateAcount';
// import suggestComponent from './src/screens/suggest';
// import issuesComponent from './src/screens/issues';
// import salepointComponent from './src/screens/salepoint';
// import applyshopoComponent from './src/screens/applyshop';
// import testhomeComponent from './src/screens/testhome';
// import EvilIcons from 'react-native-vector-icons/EvilIcons';
// // import hardwareComponent from './src/screens/hardware';
// import hardwareissuesComponent from './src/screens/hardwareissues';
// import hardwareendComponent from './src/screens/hardwareend';
// import hardwarestartComponent from './src/screens/hardwarestart';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import Entypo from 'react-native-vector-icons/Entypo';




// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

// function App() {

//   function testhomeFunction() {
//     return (<Tab.Navigator 

//         tabBarOptions={ {
//           activeTintColor: '#30336b',
//    inactiveTintColor: 'white',
//    activeBackgroundColor:'white',
//    inactiveBackgroundColor:'#30336b',

//    style: {
//     backgroundColor:'white',
//     height:49
//      },
//      labelStyle: {
//        fontSize: 14,
//        marginBottom: 2


//       },

//     }}


//       // inactiveColor="blue"
//       // barStyle={{ backgroundColor: 'black' }}
//       >

//       <Tab.Screen 

//       name="hardware" component={testhomeComponent} 
//        options={{
//         tabBarLabel: 'Home',



//         tabBarIcon: ({tintColor}) => (
//           <AntDesign size={25} color={'#30336b'}  name='home' color={tintColor} />   

//         ),
//       }}/>
//       <Tab.Screen name="applyforshop" component={applyshopoComponent}
//        options={{




//         tabBarIcon: ({ color, size }) => (
//           <Entypo size={25} color={'white'}  name='shop' />   

//         ),
//       }} />
//       <Tab.Screen name="sugestions" component={suggestComponent}
//        options={{




//         tabBarIcon: ({ color, size }) => (
//           <FontAwesome5 size={22} color={'white'}  name='hands-helping' />   

//         ),

//       }} />
//     </Tab.Navigator>)
//   }


//   return (
//     <NavigationContainer>
//           <Stack.Navigator initialRouteName="testhome" headerMode='none'>
//             <Stack.Screen name="letsBegin" component={LetsBegin} />
//             <Stack.Screen name="slider" component={MySliderComponent} />
//             <Stack.Screen name="home" component={HomeComponent} />
//             <Stack.Screen name="maps" component={MapsComponent} />
//             <Stack.Screen name="login" component={LoginComponent} />
//             <Stack.Screen name="selectors" component={selectorsComponent} />
//             <Stack.Screen name="CreatAcount" component={CreatAcountComponent} />
//             <Stack.Screen name="suggest" component={suggestComponent} />
//             <Stack.Screen name="issues" component={issuesComponent} />
//             <Stack.Screen name="salepoint" component={salepointComponent} />
//             <Stack.Screen name="applyshop" component={applyshopoComponent} />
//             <Stack.Screen name="testhome" component={testhomeFunction} />
//             {/* <Stack.Screen name="hardware" component={hardwareComponent} /> */}
//             <Stack.Screen name="hardwareissues" component={hardwareissuesComponent} />
//             <Stack.Screen name="hardwareend" component={hardwareendComponent} />
//             <Stack.Screen name="hardwarestart" component={hardwarestartComponent} />
//           </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;
// const styles = StyleSheet.create({

// });
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AsyncStorage, SliderComponent } from 'react-native';
import testhomeComponent from './src/screens/testhome';
import CreatAcountComponent from './src/screens/applyshop';
import loginComponent from './src/screens/login';
import applyshopComponent from './src/screens/applyshop';
import suggestComponent from './src/screens/suggest';
import mapsComponent from './src/screens/maps';
import letbeginComponent from './src/screens/letbegins';
import slidersComponent from './src/screens/sliders';
import signUpComponent from './src/screens/signUp';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import hardwarestartComponent from './src/screens/hardwarestart';
import salepointComponent from './src/screens/salepoint';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
export interface AppProps {
}
export interface AppState {
}

export default class AppComponent extends React.Component<AppProps, any> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      isLodding: true,
      dataSource: null,
      isLoggedIn: false
    }

  }
  

  HomeStackScreen() {
    const HomeStack = createStackNavigator();

  return (
    <HomeStack.Navigator  >
      <HomeStack.Screen name="testhome" component={testhomeComponent} />
      <HomeStack.Screen name="hardwarestart" component={hardwarestartComponent} />
      <HomeStack.Screen name="salepoint" component={salepointComponent} />
    </HomeStack.Navigator>
  );
}

  homeFunction() {
    return (
      <Tab.Navigator

        tabBarOptions={{
          activeTintColor: '#30336b',
          inactiveTintColor: 'white',
          activeBackgroundColor: 'white',
          inactiveBackgroundColor: '#30336b',

          style: {
            backgroundColor: 'white',
            height: 49
          },
          labelStyle: {
            fontSize: 14,
            marginBottom: 2
          },
        }}>
        <Tab.Screen name="testhome" component={this.HomeStackScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor }) => (
              <AntDesign size={25} color={'#30336b'} name='home' color={tintColor} />),
          }} />

        <Tab.Screen name="applyshop" component={applyshopComponent}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Entypo size={25} color={'white'} name='shop' />),
          }} />
        <Tab.Screen name="maps" component={mapsComponent}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 size={22} color={'white'} name='hands-helping' />),
          }} />
        <Tab.Screen name="sugestions" component={suggestComponent}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 size={22} color={'white'} name='hands-helping' />),
          }} />

      </Tab.Navigator>

    )
  }
  
  AccountStackScreen() {
    const AccountStack = createStackNavigator();

    return (
      <AccountStack.Navigator headerMode='none' >
        <AccountStack.Screen name="letsbegin" component={letbeginComponent} />
        <AccountStack.Screen name="sliders" component={slidersComponent} />
        <AccountStack.Screen name="login" component={loginComponent} />
        <AccountStack.Screen name="signup" component={signUpComponent} />
        <AccountStack.Screen name="CreateAccount" component={CreatAcountComponent} />
        <AccountStack.Screen name="testhome" component={this.HomeStackScreen} />
        {/* <AccountStack.Screen name="hardwarestart" component={hardwarestartComponent} /> */}
      </AccountStack.Navigator>
    );
  }

  componentDidMount() {

  }

  public render() {
    const userId = AsyncStorage.getItem('userId', (err, userId) => {
      if (userId) {

        this.setState({ isLoggedIn: true });
      } else {
        this.setState({ isLoggedIn: false });
      }

    })

    return (

      <NavigationContainer>
        {
          this.state.isLoggedIn ? (
            this.HomeStackScreen(),
            this.homeFunction()
            // <Stack.Navigator  initialRouteName="home" headerMode='none' >
            //   <Stack.Screen name="swiper" component={swiperComponent} />
            //   <Stack.Screen name="login" component={loginComponent} />
            //   <Stack.Screen name="signup" component={signUpComponent} />
            //   <Stack.Screen name="donate" component={donateComponent} />
            //   <Stack.Screen name="test" component={testComponent} />
            //   {/* <Stack.Screen name="home" component={homeFunction} /> */}
            // </Stack.Navigator>
          ) : (
              this.AccountStackScreen()
            )
        }
      </NavigationContainer>

    )
  }
}

