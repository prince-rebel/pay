import React from 'react'
import { View, Text ,SafeAreaView ,StyleSheet,ScrollView,Image ,TouchableOpacity} from 'react-native'
import { Icon } from 'react-native-elements'
import Header from './header'
import Debit from './debit'

export default function num({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
              <View style={{width:400,height:120,paddingTop:10}}>
                  <Header/>
              </View>
        <ScrollView  showsVerticalScrollIndicator={false} style={{marginLeft:25,marginTop:10}}>
        
            <View style={{flexDirection:'row',marginLeft:5}}> 
            <TouchableOpacity onPress={() =>{{}}}>
                 <Icon name="arrow-back" size={25}  style={{marginLeft:5,paddingTop:5}}/>  
                 </TouchableOpacity>  
                <Text style={{paddingTop:10,fontWeight:'bold',fontSize:17,marginLeft:30}}>Recharger mon compte</Text>    
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Debit')}>
            <View style={styles.operator}>
                     <Icon name="person-pin" color='rgb(255, 165, 0)' size={35}  style={{marginLeft:30,paddingTop:8}}/>
                    <View style={{flexDirection:'column'}}>
                    <Text style={{paddingTop:15,marginLeft:10,fontSize:16}}>Utiliser mon muméro</Text>
                    <Text style={{marginLeft:10,fontSize:14}}>0564436015</Text>
                    </View>
                    <Icon name="chevron-right" size={30}  style={{marginLeft:70,paddingTop:8}}/>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Debit')}>
                <View style={styles.operator}>
                 <Icon name="person-add-alt-1" size={30} color='rgb(255, 165, 0)' style={{marginLeft:20,paddingTop:8}}/>
                 <View style={{flexDirection:'column'}}>
                    <Text style={{paddingTop:10,marginLeft:10,fontSize:16}}>Ajouter un numéro de rechargement</Text>
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
        width:350,
        shadowColor: "#c4bebe",
        shadowOpacity: 0.6,
        shadowRadius: 7,
        shadowOffset: {
        height: 2,
        width: 2} ,
        

    },})
