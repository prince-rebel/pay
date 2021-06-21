import React from 'react'
import { View, Text ,SafeAreaView ,StyleSheet,ScrollView,Image ,TouchableOpacity} from 'react-native'
import { Icon } from 'react-native-elements'

import Debit from './debit'

export default function num({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{flexDirection:'row',marginTop:20 ,backgroundColor:'#0070C0',height:60,marginTop:30}}> 
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon name="arrow-back" size={25} color="white"  style={{paddingTop:15}} />    
                    </TouchableOpacity>  
                        <Text style={{paddingTop:15,fontSize:17,marginLeft:45,textAlign:'center',color:'white'}}>Recharger mon compte</Text>  
                   
                    </View>
              
        <ScrollView  showsVerticalScrollIndicator={false} style={{marginLeft:15,marginTop:10}}>
        
           
            <TouchableOpacity onPress={() => navigation.navigate('Debit')}>
            <View style={styles.operator}>
                     <Icon name="person-pin" color='#0070C0' size={40}  style={{marginLeft:30,paddingTop:8}}/>
                    <View style={{flexDirection:'column'}}>
                    <Text style={{paddingTop:10,marginLeft:10,fontSize:14}}>Utiliser mon muméro</Text>
                    <Text style={{marginLeft:10,fontSize:14}}>0564436015</Text>
                    </View>
                    <Icon name="chevron-right" size={30}  style={{marginLeft:80,paddingTop:8}}/>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Debit')}>
                <View style={styles.operator}>
                 <Icon name="person-add-alt-1" size={40} color='#0070C0' style={{marginLeft:20,paddingTop:8}}/>
                 <View style={{flexDirection:'column'}}>
                    <Text style={{paddingTop:5,marginLeft:10,fontSize:14}}>Ajouter un numéro de rechargement</Text>
                    <Text style={{marginLeft:10,fontSize:14}}>MTN Mobile Money</Text>
                    </View>
                    <Icon name="chevron-right" size={30}  style={{paddingTop:8}}/>
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
        marginTop:15,
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
        

    },})
