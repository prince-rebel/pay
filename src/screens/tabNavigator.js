import React from 'react'
import { View, Text ,TouchableOpacity,Image,StyleSheet} from 'react-native'
import Contact from './contact'
import Compte from './compte'
import Receveur from './receveur'
import { Icon } from 'react-native-elements'
import { NavigationContainer } from '@react-navigation/native';
import * as RootNavigation from './RootNavigation';
import {DrawerActions} from '@react-navigation/native'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

  

export default function tabNavigator() {
    return (
      <>
         <View style={{backgroundColor:'#0070C0', marginTop:20}} >
         <View style={{flexDirection:'row',justifyContent:'space-evenly', marginTop:10,marginLeft:-25}}>
         <TouchableOpacity onPress={() =>RootNavigation.dispatch(DrawerActions.openDrawer())}>
         <Icon
                    name='menu'
                    color='white' 
                    
                    />
        
         </TouchableOpacity>
         <View style={{justifyContent:'center',alignItems:'center'}}>
                    <Image style={styles.img}
                        source={require('../../assets/Groupe17234.svg')}/>
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
         </View>

          <Tab.Navigator>
            <Tab.Screen name="Home" component={Contact} />
            <Tab.Screen name="Settings" component={Receveur} />
            <Tab.Screen name="Compte" component={Compte} />
          </Tab.Navigator>
    

         
              
               </> 
                
  
        
    )
}
const styles = StyleSheet.create({
    img:{
        height:50,
        width:100

    }
})
