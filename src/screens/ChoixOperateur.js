import React from 'react'
import {StyleSheet, View, SafeAreaView,Text ,Image,ScrollView,TouchableOpacity} from 'react-native'
import { Icon } from 'react-native-elements'
import { Divider } from 'react-native-elements'
import num from './num'

export default function ChoixOperateur({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
           
            <ScrollView  showsVerticalScrollIndicator={false} >
              
                    <View style={{flexDirection:'row',marginTop:20 ,backgroundColor:'#0070C0',height:60,marginTop:30}}> 
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon name="arrow-back" size={35} color="white"  style={{paddingTop:10}} />    
                    </TouchableOpacity>  
                        <Text style={{paddingTop:15,fontSize:17,marginLeft:45,textAlign:'center',color:'white'}}>Recharger mon compte</Text>  
                   
                    </View>
              

                <TouchableOpacity onPress={() => navigation.navigate('num')}>
                <View style={styles.operator}>
                    <Image source={require('../../assets/mtn.png')} style={{width:60,height:60,marginLeft:15}}/>
                    <Text style={{paddingTop:19,marginLeft:10,fontWeight:'bold',fontSize:14}}>MTN Mobile Money</Text>
                    <Icon name="chevron-right" size={25}  style={{marginLeft:100,paddingTop:19}}/>
                </View>
                </TouchableOpacity>
                <Divider orientation="horizontal" />

                <TouchableOpacity onPress={() => navigation.navigate('num')}>
                <View style={styles.operator}>
               
                    <Image source={require('../../assets/IconOrange.png')} style={{width:60,height:60,marginLeft:15}}/>
                    <Text style={{paddingTop:19,marginLeft:10,fontWeight:'bold',fontSize:14}}>Orange Money</Text>
                    <Icon name="chevron-right" size={25}  style={{marginLeft:125,paddingTop:19}}/>
                </View>
                </TouchableOpacity>
              
                <TouchableOpacity onPress={() => navigation.navigate('num')}>
                <View style={styles.operator}>
                    

                        <Image source={require('../../assets/moov.png')} style={{width:60,height:60,marginLeft:15}}/>
                        <Text style={{paddingTop:19,marginLeft:10,fontWeight:'bold',fontSize:14}}>Moov Money</Text>
                        <Icon name="chevron-right" size={25}  style={{marginLeft:135,paddingTop:19}}/>

                   
                </View>
                </TouchableOpacity>
              
                <TouchableOpacity onPress={() => navigation.navigate('num')}>
                <View style={styles.operator}>
                    <Image source={require('../../assets/banque.png')} style={{width:60,height:60,marginLeft:15}}/>
                    <Text style={{paddingTop:19,marginLeft:10,fontWeight:'bold',fontSize:14}}>Virement Bancaire</Text>
                    <Icon name="chevron-right" size={25}  style={{marginLeft:100,paddingTop:19}}/>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('num')}>
                <View style={styles.operator}>
                    <Image source={require('../../assets/Capture-removebg-preview.png')} style={{width:60,height:60,marginLeft:15}}/>
                    <Text style={{paddingTop:19,marginLeft:10,fontWeight:'bold',fontSize:14}}>Versement Open Pay</Text>
                    <Icon name="chevron-right" size={25}  style={{marginLeft:80,paddingTop:19}}/>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('num')}>
                <View style={styles.operator}>
                    <Image source={require('../../assets/unnamed.png')} style={{width:60,height:60,marginLeft:15}}/>
                    <Text style={{paddingTop:19,marginLeft:10,fontWeight:'bold',fontSize:14}}>Visa</Text>
                    <Icon name="chevron-right" size={25}  style={{marginLeft:180,paddingTop:19}}/>
                </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('num')}>
                <View style={styles.operator}>
                    <Image source={require('../../assets/MasterCard.png')} style={{width:60,height:60,marginLeft:15}}/>
                    <Text style={{paddingTop:19,marginLeft:10,fontWeight:'bold',fontSize:14}}>Master Card</Text>
                    <Icon name="chevron-right" size={25}  style={{marginLeft:130,paddingTop:19}}/>
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