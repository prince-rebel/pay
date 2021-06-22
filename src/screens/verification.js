import color from 'color'
import React from 'react'
import { View, Text,StyleSheet ,SafeAreaView,ScrollView ,TouchableOpacity} from 'react-native'
import { Icon } from 'react-native-elements'

import tabNavigator from './tabNavigator'

export default function verification({navigation}) {
    return (
        <SafeAreaView>
               
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                <Text style={{marginTop:25,fontWeight:'bold',fontSize:19}}>vérification du rechargement</Text>
                <Icon name="check-circle" size={200} color='#0070C0' style={{marginLeft:5,paddingTop:5}}/>
                <Text style={{marginTop:25,fontSize:30,textAlign:'center' ,color:'#0070C0',fontWeight:'bold'}}>Transaction effectuée {"\n"}avec succès </Text> 
                
                <TouchableOpacity onPress={() => navigation.navigate('tabNavigator')} style={styles.appButtonContainer }>
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
         backgroundColor: "#0070C0",
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
