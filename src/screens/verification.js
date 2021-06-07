import color from 'color'
import React from 'react'
import { View, Text,StyleSheet ,SafeAreaView,ScrollView ,TouchableOpacity} from 'react-native'
import { Icon } from 'react-native-elements'
import Header from './header'
import tableau from './depenses/tableau'

export default function verification({navigation}) {
    return (
        <SafeAreaView>
                <View style={{width:400,height:120}}><Header/></View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                <Text style={{marginTop:25,fontWeight:'bold',fontSize:19}}>vérification du rechargement</Text>
                <Icon name="check-circle" size={200} color='rgb(255, 165, 0)' style={{marginLeft:5,paddingTop:5}}/>
                <Text style={{marginTop:25,fontSize:30,textAlign:'center' ,color:'rgb(255, 165, 0)',fontWeight:'bold'}}>Transaction effectuée {"\n"}avec succès </Text> 
                
                <TouchableOpacity onPress={() => navigation.navigate('tableau')} style={styles.appButtonContainer }>
                <Text style={styles.appButtonText}>Retourner au tableau de bord</Text>
                </TouchableOpacity> 
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginTop:30,
        
    },
    appButtonContainer: {
        elevation:8,
         backgroundColor: "'rgb(255, 165, 0)'",
         borderRadius: 5,
         paddingVertical: 10,
         paddingHorizontal: 12,
         width:300,
         marginTop:80,
         alignItems:'center',
         justifyContent:'center',
        
     
       },
       appButtonText: {
         fontSize: 21,
         color: "#fff",
         alignSelf: "center",
        
       },
})
