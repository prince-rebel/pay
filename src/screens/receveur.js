import React from 'react'
import { View, Text,StyleSheet,ScrollView,Image ,TouchableOpacity,SafeAreaView ,TextInput} from 'react-native'
import { Icon } from 'react-native-elements'


export default function receveur({navigation}) {
    return (
        <SafeAreaView style={{}}>
            <View style={{flexDirection:'row',marginTop:20 ,backgroundColor:'#0070C0',height:60,marginTop:30}}> 
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon name="arrow-back" size={25} color="white"  style={{paddingTop:15}} />    
                    </TouchableOpacity>  
                        <Text style={{paddingTop:15,fontSize:17,marginLeft:45,textAlign:'center',color:'white'}}>Transfère</Text>  
                   
                    </View>
        <ScrollView>
        <View style={{flexDirection:'row',marginTop:70}}> 
             <View style={{flex:1,justifyContent:'center',alignItems:'center',flexDirection:'column',marginTop:10}}>
             <Image source={require('../../assets/ado.jpg')} style={{width:50,height:50}}/>
             <Text style={{marginTop:15,fontWeight:'bold'}}>A: papa Ado (7763252798)</Text>
             </View>
        </View>
        <View style={{flexDirection:'row',marginTop:50}}> 
           
             <Icon name="credit-card" size={30}  style={{marginLeft:15,paddingTop:10}}/> 
             <Text style={{paddingTop:15,fontSize:19,marginLeft:10}}>XXX-9850</Text> 
             <TextInput style={{paddingTop:15,fontSize:19,marginLeft:100}} placeholder='10000 F CFA' keyboardType="numeric" />     
        </View>
        
        
        <View style={{flexDirection:'row' ,marginTop:5}}>
        <Text style={{marginLeft:15,fontSize:14,fontWeight:'bold'}}>Montant à payer</Text> 
        <Text style={{marginLeft:140,fontSize:14,fontWeight:'bold'}}>10.000 F CFA</Text> 
        </View> 
       
        <TouchableOpacity  onPress={() => navigation.navigate('Rechargement')} style={styles.appButtonContainer }>
        <Text style={styles.appButtonText}>Confirmer</Text>
        </TouchableOpacity>
            
        
        </ScrollView>
    </SafeAreaView>
    )
}const styles=StyleSheet.create({

    appButtonContainer: {
        elevation:8,
         backgroundColor: '#0070C0',
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

