import React from 'react'
import { View, Text,Image,StyleSheet,SafeAreaView,ScrollView } from 'react-native'
import { BallIndicator,
    BarIndicator,
    DotIndicator,
    MaterialIndicator,
    PacmanIndicator,
    PulseIndicator,
    SkypeIndicator,
    UIActivityIndicator,
    WaveIndicator,}from 'react-native-indicators';

    import Verification from './verification'
    

export default function Rechargement({navigation}) {
    setTimeout(()=>{
        navigation.navigate('Verification');
      },7000);
    return (
        <SafeAreaView >
               
            <ScrollView  showsVerticalScrollIndicator={false}>
                <View style={styles.scroll}>
                    <Text style={{marginTop:25,fontWeight:'bold',fontSize:19}}>Rechargement en cours</Text>
                    <Image source={require('../../assets/mtn.png')} style={styles.img}/>
                    <Text style={{marginTop:25,fontWeight:'bold',fontSize:30}}>MTN Mobile Money</Text>

                    <Text style={{marginTop:25,fontSize:20,textAlign:'center'}}>Veuillez validez la demande de{"\n"}  paiement qui s'affiche</Text>
                    <Text style={{marginTop:50,fontSize:17,textAlign:'center'}}>Si la demande ne s'affiche pas{"\n"} composez *133# sur votre téléphone </Text>
                    <UIActivityIndicator  animationDuration={7000}count={12} animating={true} style={styles.loader}/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
const styles=StyleSheet.create({
    scroll:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginTop:50
    },
    img:{

        width:100,
        height:100,
        marginTop:15,
    },
    loader:{
        marginTop:80
    }
})