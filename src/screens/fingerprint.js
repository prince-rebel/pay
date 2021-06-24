import React,{useEffect,useState} from 'react'
import { View,Text,StyleSheet, TouchableHighlight } from 'react-native'
import * as LocalAuthentication from 'expo-local-authentication'


export default function Fingerprint(){
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
                                
                                LocalAuthentication.authenticateAsync().then(reps=>{
                                    alert(reps)
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
    return(
        <>
        <View style={styles.container}>
            <TouchableHighlight style={styles.btn} onPress={fing()}>
                <Text style={{color:'#FFF'}}>Emprunte</Text>
            </TouchableHighlight>
            <Text style={{fontSize:30}}>voir</Text>
        </View>

        </>
    )
}
const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    btn:{
        borderRadius:3,
        marginBottom:15,
        padding:15,
        backgroundColor:'#039107'

    }
})
