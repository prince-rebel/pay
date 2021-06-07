import React from 'react'
import {StyleSheet, View, SafeAreaView,Text ,Image,ScrollView,TouchableOpacity} from 'react-native'
import { Icon } from 'react-native-elements'
import Header from './header'
import num from './num'

export default function ChoixOperateur({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{width:400,height:130,paddingTop:15}}>
                <Header/>
                </View>
            <ScrollView  showsVerticalScrollIndicator={false} style={{marginLeft:25}}>
                <TouchableOpacity onPress={() => navigation.navigate('compte')}>
                    <View style={{flexDirection:'row',marginTop:20}}> 
                        <Icon name="arrow-back" size={25}  style={{marginLeft:5,paddingTop:5}}/>    
                        <Text style={{paddingTop:10,fontWeight:'bold',fontSize:17,marginLeft:30}}>Recharger mon compte</Text>    
                    </View>
                </TouchableOpacity>

                
                <View style={styles.operator}>
                <TouchableOpacity onPress={() => navigation.navigate('num')}>
                    <Image source={require('../../assets/IconOrange.png')} style={{width:60,height:60,marginLeft:15}}/>
                    <Text style={{paddingTop:19,marginLeft:10,fontWeight:'bold',fontSize:20}}>MTN Mobile Money</Text>
                    <Icon name="chevron-right" size={40}  style={{marginLeft:30,paddingTop:8}}/>
                </TouchableOpacity>
                </View>
               
                <View style={styles.operator}>
                <TouchableOpacity onPress={() => navigation.navigate('num')}>

                    <Image source={require('../../assets/IconOrange.png')} style={{width:60,height:60,marginLeft:15}}/>
                    <Text style={{paddingTop:19,marginLeft:10,fontWeight:'bold',fontSize:20}}>Orange Money</Text>
                    <Icon name="chevron-right" size={40}  style={{marginLeft:75,paddingTop:8}}/>
                </TouchableOpacity>
                </View>
              
               
                <View style={styles.operator}>
                    <TouchableOpacity onPress={() => navigation.navigate('num')}>

                        <Image source={require('../../assets/IconOrange.png')} style={{width:60,height:60,marginLeft:15}}/>
                        <Text style={{paddingTop:19,marginLeft:10,fontWeight:'bold',fontSize:20}}>Moov Money</Text>
                        <Icon name="chevron-right" size={40}  style={{marginLeft:85,paddingTop:8}}/>

                    </TouchableOpacity>
                </View>
              
                <TouchableOpacity onPress={() => navigation.navigate('num')}>
                <View style={styles.operator}>
                    <Image source={require('../../assets/IconOrange.png')} style={{width:60,height:60,marginLeft:15}}/>
                    <Text style={{paddingTop:19,marginLeft:10,fontWeight:'bold',fontSize:20}}>Virement Bancaire</Text>
                    <Icon name="chevron-right" size={40}  style={{marginLeft:40,paddingTop:8}}/>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('num')}>
                <View style={styles.operator}>
                    <Image source={require('../../assets/IconOrange.png')} style={{width:60,height:60,marginLeft:15}}/>
                    <Text style={{paddingTop:19,marginLeft:10,fontWeight:'bold',fontSize:20}}>Versement Open Pay</Text>
                    <Icon name="chevron-right" size={40}  style={{marginLeft:18,paddingTop:8}}/>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('num')}>
                <View style={styles.operator}>
                    <Image source={require('../../assets/IconOrange.png')} style={{width:60,height:60,marginLeft:15}}/>
                    <Text style={{paddingTop:19,marginLeft:10,fontWeight:'bold',fontSize:20}}>Visa</Text>
                    <Icon name="chevron-right" size={40}  style={{marginLeft:170,paddingTop:8}}/>
                </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('num')}>
                <View style={styles.operator}>
                    <Image source={require('../../assets/IconOrange.png')} style={{width:60,height:60,marginLeft:15}}/>
                    <Text style={{paddingTop:19,marginLeft:10,fontWeight:'bold',fontSize:20}}>Master Card</Text>
                    <Icon name="chevron-right" size={40}  style={{marginLeft:90,paddingTop:8}}/>
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
        

    },
})