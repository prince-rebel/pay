import React from 'react'
import { View, Text ,TouchableOpacity,Image,StyleSheet} from 'react-native'
import Compte from './compte'
import { Icon } from 'react-native-elements'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import * as RootNavigation from './RootNavigation';
import {DrawerActions} from '@react-navigation/native'
import tableau from './depenses/tableau'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import aide from './aide'
const Tab = createMaterialTopTabNavigator();

             

  

export default function tabNavigator() {
    return (
      <>
                  <View style={{backgroundColor:'#0070C0',marginTop:20}} >

                            <View style={{flexDirection:'row',justifyContent:'space-evenly', marginTop:10,marginLeft:-25}}>
                                <TouchableOpacity onPress={() =>RootNavigation.dispatch(DrawerActions.toggleDrawer())}>
                                        <Icon
                                        name='menu'
                                        color='white' 
                                        size={30}/>
                                </TouchableOpacity>
                                
                                <View style={{alignItems:'center',justifyContent:'center'}}>
                                    <Image style={styles.image}
                                        source={require('../../assets/logo.png')}/>
                                </View>
                                        <Icon
                                            name='notifications'
                                            color='white' 
                                            size={30}
                                            />
                                        <Icon
                                            name='help'
                                            color='white' 
                                            size={30}
                                        
                                        />


                            </View>


                  </View>


          <Tab.Navigator
          tabBarOptions={{showIcon: true, style:{
              backgroundColor:'#0070C0'},
          labelStyle:{color:'white',fontSize:10} ,
         pressColor :'white',
         indicatorStyle: { backgroundColor: "#ffffff" } 
        
          }}>
            <Tab.Screen name="Compte" component={Compte}
            options={{
                tabBarLabel: 'Compte',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="wallet-outline" color="white" size={25} />
                ),
            }} />

            <Tab.Screen name="Dépenses" component={tableau} 
            options={{
                tabBarLabel: 'Dépenses',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="bar-chart-outline" color="white" size={25} />
                ),
            }}/>

            <Tab.Screen name="Aides" component={aide} 
            options={{
                tabBarLabel: 'Aides',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="help-circle-outline" color="white" size={25} />
                ),
            }}/>
          </Tab.Navigator>
    

         
              
               </> 
                
  
        
    )
}
const styles = StyleSheet.create({
    image: { 
        width: 150,
        flex:2,
        paddingBottom:45
       

      }
})
