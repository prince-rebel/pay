import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,ImageBackground} from 'react-native';
import DrawerNavigator from './src/screens/DrawerNavigator'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import home from './src/screens/pin'
import Finger from './src/screens/finger'
import compte from './src/screens/compte'
import ChoixOperateur from './src/screens/ChoixOperateur'
import num from './src/screens/num'
import { navigationRef } from './src/screens/RootNavigation';

import contact from './src/screens/contact'
import TabNavigator from './src/screens/tabNavigator'
import Content from './src/screens/content'
import Debit from './src/screens/debit'
import Rechargement from './src/screens/Rechargement'
import Verification from './src/screens/verification'
import Transfert from './src/screens/transfert'
import receveur from './src/screens/receveur'
import tableau from './src/screens/depenses/tableau'
import information from './src/screens/information'

function SplashScreen({navigation}) {
  setTimeout(()=>{
    navigation.navigate('screen2');
  },3000);

  return (
    <>
   <ImageBackground style={{flex:1}} source={require('./assets/index.png')}/>
   </>
  );
}

function screen2({navigation}) {
  setTimeout(()=>{
    navigation.navigate('screen3');
  },3000);
  return (
    <>
    <ImageBackground style={{flex:1}} source={require('./assets/page2.png')}/>
    </>
  );
}
function screen3({navigation}) {
  setTimeout(()=>{
    navigation.navigate('DrawerNavigator');
  },3000);
  return (
    <>
    <ImageBackground style={{flex:1}} source={require('./assets/page3.png')}/>
    </>
  );
}




const Stack = createStackNavigator();

const App =()=> {
  return (


      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator initialRouteName="DrawerNavigator" headerMode="none">
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="screen2" component={screen2} />               
            <Stack.Screen name="screen3" component={screen3} />     
            <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />     
            <Stack.Screen name="Finger" component={Finger} />     
            <Stack.Screen name="compte" component={compte} />     
            <Stack.Screen name="content" component={Content} />     
            <Stack.Screen name="home" component={home}/>
            <Stack.Screen name="ChoixOperateur" component={ChoixOperateur}/>
            <Stack.Screen name="num" component={num}/>
            <Stack.Screen name="Debit" component={Debit}/>
            <Stack.Screen name="Rechargement" component={Rechargement}/>
            <Stack.Screen name="Verification" component={Verification}/>
            <Stack.Screen name="Transfert" component={Transfert}/>
            <Stack.Screen name="contact" component={contact}/>
            <Stack.Screen name="receveur" component={receveur}/>
            <Stack.Screen name="tableau" component={tableau}/>
            <Stack.Screen name="information" component={information}/>  
            <Stack.Screen name="TabNavigator" component={TabNavigator}/>  
           
                
        </Stack.Navigator>
      </NavigationContainer>
   
  );
}


export default App ;
const Styles=StyleSheet.create({
  monEcran:{
 flex:1,
  justifyContent:'center',
  alignItems:'center'  }
 
})