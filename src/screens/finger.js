import React from 'react';
import {Button,StyleSheet,Image, View, Text ,TouchableOpacity} from 'react-native';
import home from './pin.js';
import compte from './compte.js' ;
import TabNavigator from './tabNavigator'
import * as LocalAuthentication from 'expo-local-authentication'




export default function finger({navigation}) {

  function fing(){
       
    LocalAuthentication.hasHardwareAsync()
    .then(succes=>{
      //   voir le resultat de la requete (true ou false)
         if( succes===true){
          //    si l'appareil prend en compte l'emprunte digital ou la reconnaissance faciale ou  IRIS alors voir le type 
  
              LocalAuthentication.supportedAuthenticationTypesAsync()
  
              .then(rep=>{
                 
                  // le resultat doit etre 1 pour( FINGERPRINT ) ou 2( FACIAL_RECOGNITION) ou 3(IRIS)
                      if (rep==1){                   
                          // voir si l'appareil possede des empruntes deja enregistré
                          LocalAuthentication.isEnrolledAsync()
                          .then(res=>{
                              if (res===false){
                                  alert("Aucune emprunte n'est enregistré dans votre telephone")
                              }else{
                                  // analyser l'emprunte de l'utilisateur
                                  LocalAuthentication.authenticateAsync()
                                  .then(reps=>{
                                    navigation.navigate('TabNavigator')
                                  })
                              }
                          })
  
                          .catch(error=>{
                              alert(error)
                          })
                      }
              })
              
  
         }else{
             alert('desoler votre appareil ne supporte pas FINGERPRINT et FACIAL_RECOGNITION')
         }
      })
      .catch(error=>{
          alert('echec'+error)
      })
   
     };
  return (

    <View style={Styles.monEcran}>
    
      <Image
         style = {{ width: 260, height: 250, margin: 60 }}
        source={require('../../assets/Capture-removebg-preview.png')}
      />
      <Text style={{textAlign:'center'}}> Scanne ton empreinte pour te connecter</Text>
      <TouchableOpacity  onPress={fing()}>
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

