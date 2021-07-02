
import React,{useEffect,useState} from 'react'
import { View, Text ,SafeAreaView, StyleSheet,ScrollView,TouchableOpacity ,TextInput,FlatList,Image} from 'react-native'
import { Icon } from 'react-native-elements'
import { navigate, navigationRef } from './RootNavigation';
import receveur from './receveur'
import * as Contacts from 'expo-contacts';


  
  const Fat = ({ name, texte ,photo}) => (
    <View >
      <TouchableOpacity onPress={()=>navigate('receveur')} style={{flexDirection:'row',marginTop:20}}>
      <Image source={photo} style={{width:50,height:50,marginBottom:10, borderRadius: 400/ 2}}/>
      <View style={{flexDirection:'column',marginLeft:15}}>
      <Text style={{fontSize:15}}>{ name}</Text>
      <Text style={{fontSize:15}}>{texte}</Text>
      </View>
      <View style={{marginLeft:'auto'}}>
      <Icon  name="chevron-right"size={25} />
      </View>
      </TouchableOpacity>

    </View>
  );

export default function contact({navigation}) {
  const [contacts, setContacts ] = useState([])
  useEffect(() => {
  (async () => {
    const { status } = await Contacts.requestPermissionsAsync();
    if (status === 'granted') {
      const { data } = await Contacts.getContactsAsync({
        fields: [Contacts.Fields.PhoneNumbers],
      });

      if (data.length > 0) {
        setContacts(data)
      }
    }
  })();
}, []);

  
    const renderItem = ({ item }) => (
      <Fat name={item.name} texte={item.phoneNumbers ? item.phoneNumbers[0].number : ''} photo={item.Image ? item.Image[0]: require('../../assets/avatar.png')} />
      );
    
    return (
        <SafeAreaView>
              <View style={{flexDirection:'row',marginTop:30,backgroundColor:'#0070C0',height:60}}> 
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Icon name="arrow-back" size={25}  color= 'white' style={{marginLeft:5,paddingTop:5}}/>    
                              </TouchableOpacity>
                                <Text style={{paddingTop:10,fontSize:17,marginLeft:30,color:'white'}}>Sélectionnez le bénéficiaire</Text>    
              </View> 
                        
       
            
            <ScrollView>
                <View >
                

                    
                    <View style={styles.container}>
                      <View  style={styles.inputStyles}>
                        <Icon name='search' size={27}/>
                        <TextInput
                        placeholder="Nom, Numéro de téléphone"
                        style={{width:300,fontSize:15,marginLeft:15}}
                       
                        />                               
                   </View>
                    </View>
               
                   
                    <View style={styles.container}>
                      <View  style={styles.inputStyles}>
                        <Icon name='dialpad' size={27} color='#0070C0'/>
                        <TextInput
                        keyboardType="numeric"
                        placeholder="Saisir un Numero"
                        onChangeText ={e=>e? SetName(e):''}
                        style={{width:300,fontSize:15,marginLeft:15}}
                       
                        />     
                         <TouchableOpacity onPress={() => navigate('Receveur')}>
                        <Icon name='chevron-right' size={27}/>     
                        </TouchableOpacity>                     
                   </View>
                    </View>
                   
                  
                    <View style={{marginTop:25,marginLeft:20}}>
                        <Text>Mes contacts</Text>
                      <FlatList
                              data={contacts}
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

    