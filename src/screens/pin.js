import React from 'react'
import { Image,StyleSheet, View, Text } from 'react-native'
import { ImageBackground, SafeAreaView ,TouchableOpacity} from "react-native"
import { KeycodeInput } from 'react-native-keycode'
import compte from './compte.js'

const home = ({navigation}) => {
    return (
    <>

    <View style={Styles.monEcran}>
    
      <Image
         style = {{ width: 200, height: 200, margin: 60 }}
        source={require('../../assets/icon_Openpay_white.png')}
      />
      <Text style={{textAlign:'center', margin :20}}> Mon code PIN</Text>

          <KeycodeInput
          secureTextEntry={true}
           onComplete={(value) =>{
             if (value==="1234") {
               navigation.navigate('compte')}else{
                 alert("code pin incorrect")
               }
              }
            }/>
                
      <Text style={{textAlign:'center',marginTop:90}}> Mon empreinte</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Finger')}>
      <Image
         style = {{ width: 40, height: 40, margin:30}}
        source={require('../../assets/010-empreinte-digitale-5.png')}
        
      />
      </TouchableOpacity>
   </View>
    </>
  )
}

export default home

const Styles=StyleSheet.create({
  monEcran:{
 flex:1,
  justifyContent:'center',
  alignItems:'center'}
 
})
