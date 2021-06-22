import React from 'react'
import {StyleSheet, View, SafeAreaView,Text ,Image,ScrollView,TouchableOpacity} from 'react-native'
import { Icon } from 'react-native-elements'

import contact from './contact'

export default function transfert({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
             <View style={{flexDirection:'row',marginTop:20 ,backgroundColor:'#0070C0',height:60,marginTop:30}}> 
                <TouchableOpacity onPress={()=> navigation.goBack()} >
                     <Icon name="arrow-back" size={25}  color="white" style={{marginLeft:5,paddingTop:5}}/>    
                     </TouchableOpacity>
                    <Text style={{paddingTop:10,fontSize:17,marginLeft:30,color:'white'}}>Transférer de l'argent vers</Text>    
                </View>
                
            
            <ScrollView  showsVerticalScrollIndicator={false}>
           
               
                <TouchableOpacity  onPress={() => navigation.navigate('contact')}>
                <View style={styles.operator}>
                    <Image source={require('../../assets/Capture-removebg-preview.png')} style={{width:60,height:60,marginLeft:15}}/>
                    <Text style={{paddingTop:19,marginLeft:10,fontWeight:'bold',fontSize:15}}>Open Pay</Text>
                    <Icon name="chevron-right" size={30}  style={{marginLeft:170,paddingTop:8}}/>
                </View>
                </TouchableOpacity>
                <TouchableOpacity  onPress={( ) =>navigation.navigate('contact')}>
                <View style={styles.operator}>
                    <Image source={require('../../assets/mtn.png')} style={{width:60,height:60,marginLeft:15}}/>
                    <Text style={{paddingTop:19,marginLeft:10,fontWeight:'bold',fontSize:15}}>MTN Mobile Money</Text>
                    <Icon name="chevron-right" size={30}  style={{marginLeft:100,paddingTop:8}}/>
                </View>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => navigation.navigate('contact')}>
                <View style={styles.operator}>
                    <Image source={require('../../assets/Orange_Money.jpg')} style={{width:60,height:60,marginLeft:15}}/>
                    <Text style={{paddingTop:19,marginLeft:10,fontWeight:'bold',fontSize:15}}>Orange Money</Text>
                    <Icon name="chevron-right" size={30}  style={{marginLeft:130,paddingTop:8}}/>
                </View>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => navigation.navigate('contact')}>
                <View style={styles.operator}>
                    <Image source={require('../../assets/moov.png')} style={{width:60,height:60,marginLeft:15}}/>
                    <Text style={{paddingTop:19,marginLeft:10,fontWeight:'bold',fontSize:15}}>Moov Money</Text>
                    <Icon name="chevron-right" size={30}  style={{marginLeft:140,paddingTop:8}}/>
                </View>
                </TouchableOpacity>
                <View style={styles.operator}>
                    <Image source={require('../../assets/banque.png')} style={{width:60,height:60,marginLeft:15}}/>
                    <Text style={{paddingTop:19,marginLeft:10,fontWeight:'bold',fontSize:15}}>Virement Bancaire</Text>
                    <Icon name="chevron-right" size={30}  style={{marginLeft:100,paddingTop:8}}/>
                </View>
                <TouchableOpacity  onPress={() => navigation.navigate('contact')}>
                <View style={styles.operator}>
                    <Image source={require('../../assets/Capture-removebg-preview.png')} style={{width:60,height:60,marginLeft:15}}/>
                    <Text style={{paddingTop:19,marginLeft:10,fontWeight:'bold',fontSize:15}}>Versement Open Pay</Text>
                    <Icon name="chevron-right" size={30}  style={{marginLeft:80,paddingTop:8}}/>
                </View>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => navigation.navigate('contact')}>
                <View style={styles.operator}>
                    <Image source={require('../../assets/unnamed.png')} style={{width:60,height:60,marginLeft:15}}/>
                    <Text style={{paddingTop:19,marginLeft:10,fontWeight:'bold',fontSize:15}}>Visa</Text>
                    <Icon name="chevron-right" size={30}  style={{marginLeft:195,paddingTop:8}}/>
                </View>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => navigation.navigate('contact')}>
                <View style={styles.operator}>
                    <Image source={require('../../assets/MasterCard.png')} style={{width:60,height:60,marginLeft:15}}/>
                    <Text style={{paddingTop:19,marginLeft:10,fontWeight:'bold',fontSize:15}}>Master Card</Text>
                    <Icon name="chevron-right" size={30}  style={{marginLeft:135,paddingTop:8}}/>
                </View>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
      
     
    },
    operator:{
        flex:1,
        flexDirection:'row',
        marginTop:2,
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:'white',
        borderRadius:10,
        shadowColor: "#c4bebe",
        shadowOpacity: 0.6,
        shadowRadius: 7,
        shadowOffset: {
        height: 2,
        width: 2} ,
        

    },
})
