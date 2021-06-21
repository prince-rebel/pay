import React from 'react'
import { Text,View,StyleSheet,ScrollView,Image ,TouchableOpacity,SafeAreaView,TextInput} from 'react-native'
import { Icon } from 'react-native-elements'

export default function aide() {
    return (
        <SafeAreaView >
             
         <View style={styles.container}>
            <Text>Aides</Text> 
         </View>
        </SafeAreaView>
    )
}const styles=StyleSheet.create({

    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
