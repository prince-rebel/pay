import React from 'react'
import { View, Text,StyleSheet,ScrollView,Image ,TouchableOpacity,SafeAreaView,TextInput} from 'react-native'
import { Icon } from 'react-native-elements'
import Header from './header'
import Rechargement from './Rechargement'

export default function debit({navigation}) {
    return (
        <SafeAreaView style={{}}>
                <View style={{width:400,height:150,marginTop:10}}>
                    <Header/>
                </View>
            <ScrollView>
                
            <View style={{flexDirection:'row'}}> 
            <TouchableOpacity onPress={() =>navigation.goBack()}>
                 <Icon name="arrow-back" size={25}  style={{marginLeft:15,paddingTop:10}}/>  
                 </TouchableOpacity>
                 <View style={{flex:1,justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                 <Image source={require('../../assets/Capture-removebg-preview.png')} style={{width:50,height:50}}/>
                 <Text style={{marginTop:15,fontWeight:'bold'}}>Débiter le numéro</Text>
                 <Text  style={{}}>0564436015</Text>
                 </View>
            </View>
            <View style={{flexDirection:'row',marginTop:5}}> 
               
                 <Icon name="credit-card" size={30}  style={{marginLeft:15,paddingTop:10}}/> 
                 <Text style={{paddingTop:15,fontSize:19,marginLeft:10}}>XXX-9850</Text> 
                 <TextInput style={{paddingTop:15,fontSize:19,marginLeft:100}} placeholder='10000 F CFA'/>    
            </View>
            <Text style={{marginLeft:15,fontSize:12}}>Solde actuel : 150.000 F CFA</Text> 
            <View style={{flexDirection:'row' ,marginTop:90}}>
            <Text style={{marginLeft:15,fontSize:14}}>Frais de transfert opérateur</Text> 
            <Text style={{marginLeft:100,fontSize:14}}>3 F CFA</Text> 
            </View> 
            <View style={{flexDirection:'row' ,marginTop:5}}>
            <Text style={{marginLeft:15,fontSize:14}}>Frais de rechargement de carte</Text> 
            <Text style={{marginLeft:80,fontSize:14}}>0 F CFA</Text> 
            </View> 
            <View style={{flexDirection:'row' ,marginTop:5}}>
            <Text style={{marginLeft:15,fontSize:14,fontWeight:'bold'}}>Montant à recevoir</Text> 
            <Text style={{marginLeft:140,fontSize:14,fontWeight:'bold'}}>98 F CFA</Text> 
            </View> 
           
            <TouchableOpacity onPress={() => navigation.navigate('Rechargement')}style={styles.appButtonContainer }>
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
