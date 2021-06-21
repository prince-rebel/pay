import React from 'react'
import {Image,SafeAreaView ,StyleSheet, View, Text,TouchableOpacity } from 'react-native'
import {Icon,Header } from 'react-native-elements';
import { ScrollView } from 'react-native';
import * as RootNavigation from './RootNavigation';
import {DrawerActions} from '@react-navigation/native'
import tableau from './depenses/tableau'
import compte from './compte'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();


export default function header({navigation}) {
    return (
        <>
        
        <SafeAreaView style={styles.container}>
            <ScrollView>

            <View style={{backgroundColor:'#0070C0'}} >
                <View style={{flexDirection:'row',justifyContent:'space-evenly', marginTop:10,marginLeft:-25}}>
                <TouchableOpacity onPress={() =>RootNavigation.dispatch(DrawerActions.toggleDrawer())}>
                    <Icon
                    name='menu'
                    color='white' 
                    
                    />
                    </TouchableOpacity>
                    <View style={{justifyContent:'center',alignItems:'center'}}>
                    <Image style={styles.image}
                        source={require('../../assets/logo.png')}/>
                    </View>
                        <Icon
                    name='notifications'
                    color='white' 
                    />
                        <Icon
                    name='help'
                    color='white' 
                   
                   />

                </View>
                <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:10}}>
                <TouchableOpacity onPress={() => RootNavigation.navigate('compte')} >
                    <Icon
                    name='style'
                    color='white' 
                    />
                     </TouchableOpacity>

                    <TouchableOpacity onPress={() => RootNavigation.navigate('tableau')}  >
                    <Icon
                    name='insights'
                    color='white' 

                    />
                    </TouchableOpacity>
                  
                        <Icon
                    name='help'
                    color='white' 
                    />

                </View>

                <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
                    <Text style={styles.text}>Compte</Text>
                    <Text style={styles.text}>Dépenses</Text>
                    <Text style={styles.text}>Aides</Text>
                  

                </View>

      
                

            </View>
                
            {/* <View>
            <Icon
                 name='account-balance-wallet'
                 color='black' />
            <Icon
                 name='areachart'
                 color='black' />

                

            </View> */}
      
        </ScrollView>
      
        </SafeAreaView>
        </>

    )
}
const styles=StyleSheet.create({
    container: {
        flex: 1,
        marginTop:10
      },

  header:{
      flex:1,
      flexDirection:'row',
      backgroundColor:'#0070C0',
    
      
  },
  image: {
    width: 130,
    height: 30,
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    marginTop:10
  },
  icon:{
    marginRight:15,
    marginLeft:10,
    width:50,
    marginTop:10
  },
  text:{
    fontSize:10,
    color:'white'
  }
 
})