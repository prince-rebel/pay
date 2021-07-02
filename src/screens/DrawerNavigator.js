import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { StatusBar } from 'react-native';
import {StyleSheet, View, Text ,Button} from 'react-native'
import {createDrawerNavigator,DrawerContent,DrawerItems } from "@react-navigation/drawer"
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from './RootNavigation';


import Content from './content.js';
import finger from './finger.js';
import home1 from './pin.js';
import compte from './compte.js';
import ChoixOperateur from './ChoixOperateur'
import num from './num'
import Debit from './debit'
import Rechargement from './Rechargement'
import verification from './verification'
import transfert from './transfert'
import contact from './contact'
import receveur from './receveur'

import tableau from './depenses/tableau'
import information from './information'
import TabNavigator from './tabNavigator'




const Drawer = createDrawerNavigator()


export default function DrawerNavigator() {
    return (
        <>
              
                <Drawer.Navigator drawerContent={props => <Content {...props}/>} initialRouteName='finger'>
                    <Drawer.Screen name="finger" component={finger}/>
                    <Drawer.Screen name="home1" component={home1}/>
                    <Drawer.Screen name="compte" component={compte}/>
                    <Drawer.Screen name="ChoixOperateur" component={ChoixOperateur}/>
                    <Drawer.Screen name="num" component={num}/>
                    <Drawer.Screen name="Debit" component={Debit}/>
                    <Drawer.Screen name="Rechargement" component={Rechargement}/>
                    <Drawer.Screen name="verification" component={verification}/>
                    <Drawer.Screen name="transfert" component={transfert}/>
                    <Drawer.Screen name="contact" component={contact}/>
                    <Drawer.Screen name="receveur" component={receveur}/>
                    <Drawer.Screen name="tableau" component={tableau}/>
                    <Drawer.Screen name="TabNavigator" component={TabNavigator}/>
                    <Drawer.Screen name="information" component={information}/>
                </Drawer.Navigator>
              

        </>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center'
    }
})
