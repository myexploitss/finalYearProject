// In App.js in a new project

import * as React from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LetsBegin } from './src/screens/lets-begin';
import MySliderComponent from './src/screens/slider';
import HomeComponent from './src/screens/home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MapsComponent from './src/screens/maps';
import LoginComponent from './src/screens/login';
import selectorsComponent from './src/screens/selectors';
import CreatAcountComponent from './src/screens/CreateAcount';
import suggestComponent from './src/screens/suggest';
import issuesComponent from './src/screens/issues';
import salepointComponent from './src/screens/salepoint';
import applyshopoComponent from './src/screens/applyshop';
import testhomeComponent from './src/screens/testhome';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
// import hardwareComponent from './src/screens/hardware';
import hardwareissuesComponent from './src/screens/hardwareissues';
import hardwareendComponent from './src/screens/hardwareend';
import hardwarestartComponent from './src/screens/hardwarestart';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';




const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
 
function App() {

  function testhomeFunction() {
    return (<Tab.Navigator 
    
        tabBarOptions={ {
          activeTintColor: 'gold',
   inactiveTintColor: 'white',
   
   style: {
    backgroundColor:'black',
    height:60
     },
     labelStyle: {
       fontSize: 13,
      },
      
    }}
  
    
      // inactiveColor="blue"
      // barStyle={{ backgroundColor: 'black' }}
      >

      <Tab.Screen 
     
      name="hardware" component={testhomeComponent} 
       options={{
        tabBarLabel: 'Home',
      
        
        
        tabBarIcon: ({ color, size  }) => (
          <AntDesign size={35} color={'gold'}  name='home' />   

        ),
      }}/>
      <Tab.Screen name="applyforshop" component={applyshopoComponent}
       options={{
        
      
        
        
        tabBarIcon: ({ color, size }) => (
          <Entypo size={35} color={'white'}  name='shop' />   

        ),
      }} />
      <Tab.Screen name="sugestions" component={HomeComponent}
       options={{
        
      
        
        
        tabBarIcon: ({ color, size }) => (
          <FontAwesome5 size={35} color={'white'}  name='hands-helping' />   

        ),
        
      }} />
    </Tab.Navigator>)
  }
  return (
    <NavigationContainer>
          <Stack.Navigator initialRouteName="home" headerMode='none'>
            <Stack.Screen name="letsBegin" component={LetsBegin} />
            <Stack.Screen name="slider" component={MySliderComponent} />
            <Stack.Screen name="home" component={HomeComponent} />
            <Stack.Screen name="maps" component={MapsComponent} />
            <Stack.Screen name="login" component={LoginComponent} />
            <Stack.Screen name="selectors" component={selectorsComponent} />
            <Stack.Screen name="CreatAcount" component={CreatAcountComponent} />
            <Stack.Screen name="suggest" component={suggestComponent} />
            <Stack.Screen name="issues" component={issuesComponent} />
            <Stack.Screen name="salepoint" component={salepointComponent} />
            <Stack.Screen name="applyshop" component={applyshopoComponent} />
            <Stack.Screen name="testhome" component={testhomeFunction} />
            {/* <Stack.Screen name="hardware" component={hardwareComponent} /> */}
            <Stack.Screen name="hardwareissues" component={hardwareissuesComponent} />
            <Stack.Screen name="hardwareend" component={hardwareendComponent} />
            <Stack.Screen name="hardwarestart" component={hardwarestartComponent} />
          </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
const styles = StyleSheet.create({
  
});