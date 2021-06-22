import React,{useState } from 'react'
import { View, Text,StyleSheet,ScrollView,Image ,TouchableOpacity,SafeAreaView,TextInput} from 'react-native'
import { Icon } from 'react-native-elements'

import Rechargement from './Rechargement'

export default function debit({navigation}) {
    const [Frais, setFrais] = useState(0);
    const [Montant, setMontant] = useState(0);

    return (
        <SafeAreaView style={{}}>
               
            <ScrollView>
                
            <View > 
                    <View style={{flexDirection:'row', marginTop:20 ,backgroundColor:'#0070C0',height:60,marginTop:30,paddingBottom:10}}>
                        <TouchableOpacity onPress={() =>navigation.goBack()}>
                        <Icon name="arrow-back" size={25} color='white' style={{marginLeft:15,paddingTop:16}}/>  
                        </TouchableOpacity>
                        <Text style={{paddingTop:15,fontSize:17,marginLeft:45,textAlign:'center',color:'white'}}>Validation de la transaction</Text>  
                    </View>
                 <View style={{justifyContent:'center',alignItems:'center',flexDirection:'column',marginTop:30}}>
                 <Image source={require('../../assets/Capture-removebg-preview.png')} style={{width:80,height:80}}/>
                 <Text style={{marginTop:15,fontWeight:'bold'}}>Débiter le numéro</Text>
                 <Text  style={{}}>0564436015</Text>
                 </View>
            </View>
            <View style={{flexDirection:'row',marginTop:5}}> 
               
                 <Icon name="credit-card" size={30}  style={{marginLeft:15,paddingTop:10}}/> 
                 <Text style={{paddingTop:15,fontSize:19,marginLeft:10}}>XXX-9850</Text> 
                 <TextInput 
                    style={{paddingTop:15,fontSize:19,marginLeft:100}} 
                    keyboardType="numeric"  placeholder='10000 F CFA' 
                    onChangeText = {e=>{setFrais(e * 0.02), e  ? setMontant(e-Frais) :  setMontant(0)}}
                 />    
            </View>
            <Text style={{marginLeft:15,fontSize:12}}>Solde actuel : 150.000 F CFA</Text> 
            <View style={{flexDirection:'row' ,marginTop:90}}>
            <Text style={{marginLeft:15,fontSize:14}}>Frais de transfert opérateur</Text> 
            <Text style={{marginLeft:100,fontSize:14}}>{Frais} F CFA</Text> 
            </View> 
            <View style={{flexDirection:'row' ,marginTop:5}}>
            <Text style={{marginLeft:15,fontSize:14}}>Frais de rechargement de carte</Text> 
            <Text style={{marginLeft:80,fontSize:14}}>0 F CFA</Text> 
            </View> 
            <View style={{flexDirection:'row' ,marginTop:5}}>
            <Text style={{marginLeft:15,fontSize:14,fontWeight:'bold'}}>Montant à recevoir</Text> 
            <Text style={{marginLeft:140,fontSize:14,fontWeight:'bold'}}>{Montant} F CFA</Text> 
            </View> 
           
            <TouchableOpacity onPress={() => Montant >=100?
                 navigation.navigate('Rechargement'):
                 alert('Le montant minimun à recevoir est 100 Fcf Assurer vous que la valeur entrer est superieur à 100 FCF')}
                 style={styles.appButtonContainer }>
            <Text style={styles.appButtonText}>Confirmer</Text>
            </TouchableOpacity>
                
            
            </ScrollView>
        </SafeAreaView>
    )
}const styles=StyleSheet.create({

    appButtonContainer: {
        elevation:8,
         backgroundColor: "#0070C0",
         borderRadius: 5,
         paddingVertical: 10,
         paddingHorizontal: 12,
         width:300,
         marginTop:80,
         alignItems:'center',
         justifyContent:'center',
         marginLeft:30
     
       },
       appButtonText: {
         fontSize: 20,
         color: "#fff",
         alignSelf: "center",
        
       },
})
