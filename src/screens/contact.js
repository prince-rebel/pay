import React,{useEffect,useState} from 'react'
import { View, Text ,SafeAreaView, StyleSheet,ScrollView,TouchableOpacity ,TextInput,FlatList,Image} from 'react-native'
import { Icon } from 'react-native-elements'
import { navigate, navigationRef } from './RootNavigation';
import receveur from './receveur'
import Header from './header'



const  Donnee= [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3',
      name: 'Papa GBAGBO',
      texte: '0777109379',
      photo:require('../../assets/mtn.png'),
    
    },
    {
      id: '3ac68afc-48d3-a4f8-fbd91aa97f63',
      name: 'Papa ADO',
      texte: '0777109379',
      photo:require('../../assets/ado.jpg'),
  
    },
    {
      id: '145571e29d72',
      name: 'Papa BEDIE',
      texte: '0777109379',
      photo:require('../../assets/bedos.jpg'),
    
    },
    {
      id: '58694a0f-3da1',
      name: 'Genl BOGOTA',
      texte: '0777109379',
      photo:require('../../assets/soro.jpg'),
      
    },
    
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      name: 'Papa GBAGBO',
      texte: '0777109379',
      photo:require('../../assets/lg.png'),
    
    },
    
    
   // ...lots of more authors and books go in here...
  
  ];

  
  const Fat = ({ name, texte ,photo}) => (
    <View >
      <TouchableOpacity onPress={()=>navigate('receveur')} style={{flexDirection:'row',marginTop:20}}>
      <Image source={photo} style={{width:60,height:60,marginBottom:10, borderRadius: 400/ 2}}/>
      <View style={{flexDirection:'column',marginLeft:15}}>
      <Text style={{fontSize:17}}>{ name}</Text>
      <Text style={{fontSize:16}}>{texte}</Text>
      </View>
      <View style={{marginLeft:85}}>
      <Icon  name="chevron-right"size={35} />
      </View>
      </TouchableOpacity>

    </View>
  );

export default function contact({navigation}) {
  
    const renderItem = ({ item }) => (
        <Fat name={item.name} texte={item.texte} photo={item.photo}/>
      );
    
    return (
        <SafeAreaView>
          <View style={{width:400,height:110,marginTop:10}}><Header/></View>
            
            <ScrollView>
                <View >
                
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <View style={{flexDirection:'row',marginTop:10}}> 
                            <Icon name="arrow-back" size={25}  style={{marginLeft:5,paddingTop:5}}/>    
                            <Text style={{paddingTop:10,fontWeight:'bold',fontSize:17,marginLeft:30}}>Sélectionnez le bénéficiaire</Text>    
                        </View> 
                        </TouchableOpacity>
                    <TouchableOpacity onPress={() =>navigationRef.navigate('Receveur')}>
                    <View style={styles.container}>
                      <View  style={styles.inputStyles}>
                        <Icon name='search' size={27}/>
                        <TextInput
                        placeholder="Nom, Numéro de téléphone"
                        style={{width:300,fontSize:15,marginLeft:15}}
                       
                        />                               
                   </View>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigate('Receveur')}>
                    <View style={styles.container}>
                      <View  style={styles.inputStyles}>
                        <Icon name='dialpad' size={27} color='#0070C0'/>
                        <TextInput
                        onChangeText={queryText => handleSearch(queryText)}
                        placeholder="Saisir un Numero"
                        style={{width:300,fontSize:15,marginLeft:15}}
                       
                        />     
                        <Icon name='chevron-right' size={27}/>                          
                   </View>
                    </View>
                    </TouchableOpacity>
                  
                    <View style={{marginTop:25,marginLeft:20}}>
                        <Text>Mes contacts</Text>
                    <FlatList
                            data={Donnee}
                            renderItem={renderItem} />                            
                            </View>
                        
                </View>
            </ScrollView>
        </SafeAreaView>
    )
} 
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginTop:20,
        marginLeft:10,
        backgroundColor:"white",
        borderRadius:10,
        width:350,
        flexDirection:'row'
       
        

    },
    input: {
      
       width:200,
       marginLeft:20,
       backgroundColor: 'grey' 
        
      },
      content:{
        flexDirection:'row',
       
      },
      inputStyles:{
          fontSize:14,
          height:35,
          width:290,
          marginTop:15,
          marginBottom:15,
          marginLeft:10,
          flexDirection:'row',
          backgroundColor:'white'
          
      }
})
