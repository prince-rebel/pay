import React from 'react';
import {Button,StyleSheet,Image, View, Text ,TouchableOpacity} from 'react-native';
import home from './pin.js';
import compte from './compte.js' ;
import tabNavigator from './tabNavigator'



export default function finger({navigation}) {
  return (

    <View style={Styles.monEcran}>
    
      <Image
         style = {{ width: 260, height: 250, margin: 60 }}
        source={require('../../assets/Capture-removebg-preview.png')}
      />
      <Text style={{textAlign:'center'}}> Scanne ton empreinte pour te connecter</Text>
      <TouchableOpacity onPress={() => navigation.navigate('tabNavigator')}>
        <Image
          style = {{ width: 75, height: 75, margin: 60 }}
          source={require('../../assets/010-empreinte-digitale-5.png')}
        />
      </TouchableOpacity>
     
      <Text style={{textAlign:'center'}}>Mon code PIN</Text>
      <TouchableOpacity onPress={() => navigation.navigate('home')}>
      <Image
         style = {{ width: 40, height: 40, margin:20}}
        source={require('../../assets/003-clavier-1.png')}
      />
      </TouchableOpacity>
   </View>

  );
}

const Styles=StyleSheet.create({
  monEcran:{
 flex:1,
  justifyContent:'center',
  alignItems:'center'  }
 
})

