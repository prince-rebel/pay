import React from 'react'
import {StyleSheet, View, Text ,SafeAreaView,TouchableOpacity,FlatList,Image,ScrollView } from 'react-native'
import {Icon} from 'react-native-elements';
import Header from './header'
import ChoixOperateur from './ChoixOperateur'
import Transfer from './transfert'
import information from './information'

const AUTHORS = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      name: 'Badge Meilleur Payeur',
      texte: 'Lorem ipsum dolor sit amet, consetetur',
      photo:require('../../assets/badge.png'), 
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      name: 'Badge Fast Transaction ',
      texte: 'Lorem ipsum dolor sit amet, consetetur',
      photo:require('../../assets/badge.png'), 
  
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      name: 'Badge Etoile filante',
      texte: 'Lorem ipsum dolor sit amet, consetetur',
      photo:require('../../assets/badge.png'), 
    },
    
   // ...lots of more authors and books go in here...
  
  ];


const  Day= [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      name: 'Transfert à votre numéro',
      texte: '08:23',
      photo:require('../../assets/mtn.png'),
      prix:'1010 F CFA'
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      name: 'Transfert à votre numéro',
      texte: '08:23',
      photo:require('../../assets/mtn.png'),
      prix:'1010 F CFA'
  
    },
    {
      id: '58672',
      name: 'Transfert à votre numéro',
      texte: '08:23',
      photo:require('../../assets/Orange_Money.jpg'),
      prix:'1010 F CFA'
    },
    {
      id: '5869',
      name: 'Transfert à votre numéro',
      texte: '08:23',
      photo:require('../../assets/378645-boutique-vector-icon-gratuit-vectoriel.jpg'),
      prix:'1010 F CFA'
    },
    
   // ...lots of more authors and books go in here...
  
  ];


  const AuthorInfo = ({ name, texte ,photo}) => (
    <View style={{flexDirection:'row'}}>
      
      <Image source={photo} style={{width:50,height:50,marginBottom:30}}/>
      <View style={{flexDirection:'column',marginLeft:10}}>
      <Text style={styles.title}>{ name}</Text>
      <Text style={styles.title}>{texte}</Text>
      </View>
    </View>
  );
  const TransDay = ({ name, texte ,photo,prix}) => (
    <View style={{flexDirection:'row'}}>
      
      <Image source={photo} style={{width:40,height:40,marginBottom:30, borderRadius: 400/ 2,}}/>
      <View style={{flexDirection:'column',marginLeft:5}}>
      <Text style={styles.title}>{ name}</Text>
      <Text style={{fontSize:10}}>{texte}</Text>
      </View>
      <Text style={{marginLeft:15}}>{prix}</Text>
      <Icon  name="chevron-right"size={30} style={{ marginTop:-5}}/>

    </View>
  );
  
      
          

const compte = ({navigation}) => {

    const renderItem = ({ item }) => (
        <AuthorInfo name={item.name} texte={item.texte} photo={item.photo}/>
      );
    const renderItem1 = ({ item }) => (
        <TransDay name={item.name} texte={item.texte} photo={item.photo} prix={item.prix}/>
      );
      
   
    return (
        <SafeAreaView style={styles.container}>
           <View style={{width:375,height:150,marginTop:10}}>
           <Header/>
           </View>
           
            <ScrollView  style={{width:'100%'}} showsVerticalScrollIndicator={false}>
           
                    <View style={styles.solde}>
                        <Text  style={{fontSize:17}}>Solde disponible</Text>
                        <Text style={{fontSize:25,fontWeight:'bold'}}>125.678 F CFA</Text>

                    </View>
                    <View style={styles.bouton}>
                        <TouchableOpacity style={styles.appButtonContainer} onPress={() => navigation.navigate('ChoixOperateur')}>
                        <Icon 
                            name="add"
                            size={15}
                            color="#0070C0"/>
                        <Text style={styles.text} >Ajouter de l'argent</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={styles.ButtonContainer } onPress={() => navigation.navigate('Transfert')}>
                            <Icon 
                            name="forward"
                            size={15}
                            color="#0070C0"/>
                        <Text style={styles.text}>Envoyer de l'argent</Text>
                        </TouchableOpacity>
                    </View>
                    
                    <View style={styles.depense}>
                        <View style={{paddingRight:20,paddingLeft:12}}>
                        <Icon 
                        name="payment"
                        color="#0070C0"
                        size={45}/>
                        </View>
                
                        <View style={{flexDirection:'column'}}>
                        <Text  style={{fontSize:16}}>Vous avez dépensé ce mois</Text>
                        <Text style={{fontSize:20,fontWeight:'bold'}}>125.678 F CFA</Text>
                        </View>

                        <View style={{marginLeft:'auto',paddingTop:10}}>
                        <Icon 
                        name="chevron-right"
                        size={30}/>
                        </View>

                    </View>
                    <View style={{marginTop:15,justifyContent:'center',  width:340, backgroundColor:'white',marginLeft:10,borderRadius:10}} >
                        <View style={{flexDirection:'row'}}>
                        <View style={{paddingTop:15,marginLeft:10}} >
                        <Text>Mes badges</Text>
                        </View>
                        <View style={{paddingTop:15,marginLeft:'auto'}}>
                        <Text style={{color:'#0070C0'}}>Voir plus</Text>
                        </View>
                        </View>
                        <View style={{alignItems:'center',marginTop:15}}>
                        <Image source={require('../../assets/fiche.png')} style={{width:300,height:175,borderRadius:10}}/></View>
                        <View style={{flexDirection:'row'}}>
                        <View style={{paddingTop:20,marginLeft:10}} >
                        <Text>Autres badge à gagner</Text>
                        </View>
                        <View style={{paddingTop:20,marginLeft:'auto'}}>
                        <Text style={{color:'#0070C0'}}>Voir plus</Text></View>
                        </View>
                        <View style={{marginTop:25,marginLeft:20}}>
                        <FlatList
                            data={AUTHORS}
                            renderItem={renderItem} />
                            </View>

                    </View>

                    <View style={{marginTop:15,justifyContent:'center',  width:340, backgroundColor:'white',marginLeft:10,borderRadius:10}} >
                        <View style={{flexDirection:'row'}}>
                        <View style={{paddingTop:15,marginLeft:10}} >
                        <Text style={{fontWeight:'bold',fontSize:15}}>Transactions</Text>
                        </View>
                        <View style={{paddingTop:15,marginLeft:'auto'}}>
                        <Text style={{color:'#0070C0'}}>Voir plus</Text>
                        </View>
                        </View>
                      
                        <View style={{marginTop:25,marginLeft:20}}>
                            <Text style={{paddingBottom:20}}>Aujourd'hui</Text>
                        <FlatList
                            data={Day}
                            renderItem={renderItem1} />
                            </View>

                        <View style={{marginTop:25,marginLeft:20}}>
                        <Text style={{paddingBottom:20}}>Hier</Text>
                        <FlatList
                            data={Day}
                            renderItem={renderItem1} />
                            </View>

                    </View>

                    
            </ScrollView>   
                    
        </SafeAreaView>
        
    )
}

export default compte

const styles=StyleSheet.create({
    container:{
        flex:1,
       justifyContent:'center',
       alignItems:'center'
    },
    solde:{
        flexDirection:'column',
        backgroundColor:'white',
        borderRadius:10,
        marginLeft:10,
        padding:10,
        width:340,
       marginTop:10,
        shadowColor: "#c4bebe",
        shadowOpacity: 0.6,
        shadowRadius: 7,
        shadowOffset: {
        height: 2,
        width: 2}
    },
    bouton:{
        flexDirection:'row',
        backgroundColor:'white',
        marginLeft:10,
        borderRadius:10,
        padding:10,
        width:340,
        marginTop:20,
        shadowColor: "#c4bebe",
        shadowOpacity: 0.6,
        shadowRadius: 7,
        shadowOffset: {
        height: 2,
        width: 2}
    },
    appButtonContainer: {

         backgroundColor: "#c4bebe",
         borderRadius: 1,
         paddingVertical: 10,
         paddingHorizontal: 12,
         marginTop:10,               
         flexDirection:'row',
     
       },
        
   ButtonContainer: {

         backgroundColor: "#c4bebe",
         borderRadius: 1,
         paddingVertical: 10,
         paddingHorizontal: 12,
         marginTop:10,
         marginLeft:10,
         padding:5,
         flexDirection:'row',
     
       },

       text:{
           color:'#0070C0',
       },
        
       depense:{
          
        flexDirection:'row',
        backgroundColor:'white',
        borderRadius:10,
        marginLeft:10,
        paddingTop:20,
        paddingBottom:15,
        width:340,
        marginTop:20,
        shadowColor: "#c4bebe",
        shadowOpacity: 0.6,
        shadowRadius: 7,
        shadowOffset: {
        height: 2,
        width: 2}
       }
   
})