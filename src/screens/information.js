import React from 'react'
import { View, Text , StyleSheet, Image,ScrollView,SafeAreaView,TouchableOpacity} from 'react-native'
import { Divider } from 'react-native-elements'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function information({navigation}) {
    return (
        <SafeAreaView>
               <View style={{flexDirection:'row',marginTop:20 ,backgroundColor:'#0070C0',height:60,marginTop:30}}> 
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name="arrow-back" size={25} color="white"  style={{paddingTop:10}} />    
                    </TouchableOpacity>  
                        <Text style={{paddingTop:15,fontSize:17,marginLeft:100,textAlign:'center',color:'white'}}>Details</Text>  
                   
                    </View>
           
            <ScrollView>

                <View style={styles.page}>
             
                    <View style={styles.container}>

                        <View style={{justifyContent:'center',alignItems:'center',margin:25}}>
                                <Text style={{fontSize:15,marginBottom:15}}>Transfert à votre numéro</Text>
                                <Image source={require('../../assets/mtn.png')} style={{ width:90,height:90}}/>
                                <Text style={{marginTop:20,fontSize:20,fontWeight:'bold'}}>1010 F CFA</Text>
                                <Text style={{textAlign:'center',marginTop:15,fontSize:15}}>
                                    Le transfert MTN Mobile Money à votre numéro (0564436015) à partir de votre compte Open Pay a été effectué.
                                </Text>
                        </View>
                        <View style={{flexDirection:'row',marginBottom:15 }}>
                            <View style={{flexDirection:'row'}}> 
                                <Text>Ajouter une note   </Text>
                                <Ionicons name='pencil-sharp' size={18} />
                            </View>

                            <View style={{flexDirection:'row', marginLeft:'auto'}}>
                                <Text>Telecharger le reçu </Text>
                                <Ionicons name='md-document-text' size={18}/>                                                          
                            </View>                            
                        </View>
                    </View>


                    <View style={styles.container}>
                        <View style={styles.divider}>
                            <Text>Date</Text>
                            <Text style={styles.text}>23/03/2021 13:58   </Text>
                        </View>

                        <Divider orientation="horizontal" />

                        <View style={styles.divider}>
                            <Text>Statut</Text>
                            <Text style={styles.text}>Effectué   </Text>
                        </View>

                        <Divider orientation="horizontal" />

                        <View style={styles.divider}>
                            <Text>Compte Open Pay</Text>
                            <Text style={styles.text}>XXX-6768   </Text>
                        </View>

                        <Divider orientation="horizontal" />

                        <View style={styles.divider}>
                            <Text>Solde avant</Text>
                            <Text style={styles.text}>567 F CFA  </Text>
                        </View>

                        <Divider orientation="horizontal" />

                        <View style={styles.divider}>
                            <Text>Montant avec les frais </Text>
                            <Text style={styles.text}>567 F CFA  </Text>
                        </View>

                        <Divider orientation="horizontal" />

                        <View style={styles.divider}>
                            <Text>Les frais de transfert</Text>
                            <Text style={styles.text}>567 F CFA   </Text>
                        </View>

                        <Divider orientation="horizontal" />

                        <View style={styles.divider}>
                            <Text>Montant crédité</Text>
                            <Text style={styles.text}>567 F CFA   </Text>
                        </View>

                        <Divider orientation="horizontal" />

                        <View style={styles.divider}>
                            <Text >Solde après</Text>
                            <Text style={styles.text}>567 F CFA   </Text>
                        </View>
                        <Divider orientation="horizontal" />
                        

                    </View>
                    
                        
                </View>
                <View style={{marginTop:130}}></View>

            </ScrollView>
        </SafeAreaView>
    )
}
const styles= StyleSheet.create({
    page:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        marginTop:15
    },
    container:{
        borderRadius:10,
        width:320,
        backgroundColor:'white',
        marginBottom:20,
        marginTop:5,
        paddingTop:15,
        shadowColor: "#c4bebe",
        shadowOpacity: 0.6,
        shadowRadius: 8,
        shadowOffset: {
        height: 2,
        width: 5} ,
       
    },
    divider:{
            flexDirection:'row',
            marginTop:10,
            padding:5,
            marginBottom:5
    },
    text:{
        marginLeft:'auto',
       
    }
})