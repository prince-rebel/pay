import React from 'react'
import {View, StyleSheet,Image,ImageBackground ,Button,Text,TouchableOpacity} from 'react-native'
import { DrawerItem, DrawerContentScrollView } from "@react-navigation/drawer";
import {  Avatar,  Title,  Caption,  Drawer,Paragraph } from "react-native-paper";
import {Icon} from 'react-native-elements';


export default function content(props) {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{paddingTop:0,marginTop:0}}>
       <View style={styles.drawerContent}>
            <View style={styles.userInfoSection}>
              <View style={{borderBottomWidth: 1,borderBottomColor: 'white', width:500}}>
              <Image
                style={{ width:500,
                  height: 45,
                  resizeMode: 'center',}}
                  source={require('../../assets/logo.png')}/>
              </View>
             <View style={{flexDirection:'row', }}>
               <View style={{marginLeft:-50, marginTop:20,marginRight:10}}>
              <Avatar.Image
                source={{
                  uri:
                    "https://res.cloudinary.com/ruksa/image/upload/v1587470607/profile/pic012_kdiyqt.jpg",
                }}
                size={55}
                
              />
              </View>
              <View style ={{flexDirection :'column',marginTop:20}}>
              <Caption style={styles.caption}>Francisco Nathanael</Caption>
              <Caption style={styles.name}>CAPO-CHICHI </Caption>
              </View>
              </View>
              <View style={{flexDirection:'row', marginLeft:-80,marginTop:5}}>
              <Icon
                name="place"
                size={16}
                color="white"
                />
               
                <Text style={{ color:'white'}}> 2 plateaux  sanon L32</Text>
              </View>
   
              <View style={{flexDirection:'row', marginLeft:-120,padding:5}}>
                <Icon
                name="phone"
                size={16}
                color="white"
                />
                 <Text  style={{fontSize:12, color:'white'}}>+225 0555582825 </Text>
              </View>
              <View style={{flexDirection:'row', marginLeft:-65}}>
                <Icon
                name="email"
                size={16}
                color="white"
                />
                 <Text  style={{fontSize:12, color:'white'}}> franciscocapoch@gmail.com</Text>
              </View>

              <View style={{marginTop:20, flexDirection:'row',marginLeft:'auto',paddingBottom:10}}>
              <Text style={{paddingRight:15,color:'white'}}> Editer</Text>
              <Icon
                name="edit"
                size={13}
                
                color="white"
                style={{marginRight:15}}
                />

              </View>
              
          
            </View>
            
            <Drawer.Section style={styles.drawerSection}>
            <ImageBackground source={require('../../assets/icon_Openpay_white.png')} style={{flex: 1,resizeMode: "center",justifyContent: "center",width:260}}>
              <DrawerItem
                icon={({ color, size }) => (
                  <Icon
                    name='badge'
                    color='rgb(255, 165, 0)' />
                )}
                labelStyle={{color:'rgb(255, 165, 0)',marginLeft:-30}}
                label="Compte bonus"
                onPress={() => {}}
              />
              <DrawerItem
                icon={({ color, size }) => (
                  <Icon
                    name='star'
                    color='rgb(255, 165, 0)' />
                )}
                labelStyle={{color:'rgb(255, 165, 0)',marginLeft:-30}}
                label="Notez Open Pay"
                onPress={() => {}}
              />
            
              <DrawerItem
                icon={({ color, size }) => (
                  <Icon
                    name='event'
                    color='rgb(255, 165, 0)' />
                )}
               labelStyle={{color:'rgb(255, 165, 0)',marginLeft:-30}}
                label="Condition d'utilisation"
                onPress={() => {}}
              />
              <DrawerItem
                icon={({ color, size }) => (
                  <Icon
                    name='lock'
                    color='rgb(255, 165, 0)' />
                )}
                labelStyle={{color:'rgb(255, 165, 0)',marginLeft:-30}}
                label="Verouiller Open Pay"
                onPress={() => {}}
              />
               </ImageBackground>
              </Drawer.Section>
         
              <View style={{flex:1,alignContent:'center',alignItems:'center',paddingTop:5}}>
                <Text style={{fontWeight:'bold',color:'rgb(255, 165, 0)',paddingTop:10}}>Gagnez jusqu'à 100.000 F CFA</Text>
                <Paragraph style={{ textAlign:'center',color:'rgb(255, 165, 0)',paddingTop:10}}>Recevez 500 F CFA sur votre compte  Open Pay pour chaque utilisateur {"\n"}invité qui a un compte valide</Paragraph>
                <Caption style={{color:'rgb(255, 165, 0)',paddingTop:10,fontWeight:'bold'}}>Votre code de parrainage</Caption>
                <Caption style={{color:'rgb(255, 165, 0)', fontWeight:'bold'}}>IOJLFH</Caption>
                <TouchableOpacity  style={styles.appButtonContainer }>
                <Text style={styles.appButtonText}>inviter vos amis</Text>
                </TouchableOpacity>
              </View>
            
         </View>


    </DrawerContentScrollView>
  )
}
const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  userInfoSection: {
      paddingTop:40,
    paddingLeft: 20,
    paddingBottom:20,
    alignItems:'center',
    backgroundColor:'rgb(255, 165, 0)'
   
  },
  title: {
    color:'white',
    fontWeight: "bold",
    fontSize:20
  },
  caption: {
    color:'white',
    fontSize: 14,
    paddingBottom:5,

  },
  name: {
    color:'white',
    fontSize: 15,
    paddingBottom:20,
    fontWeight: "bold",

  },
  row: {
   
    marginBottom:10,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    paddingTop:45,
    fontSize:30,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  appButtonContainer: {
   elevation:8,
    backgroundColor: 'rgb(255, 165, 0)',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width:200,
    marginTop:10,
    marginBottom:20

  },
  appButtonText: {
    fontSize: 15,
    color: "#fff",
    alignSelf: "center",
   
  },
});
