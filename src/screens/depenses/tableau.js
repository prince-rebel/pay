import React from 'react'
import {Image, View, Text ,SafeAreaView,StyleSheet,TouchableOpacity,ScrollView,FlatList} from 'react-native'
import { navigate } from '../RootNavigation';
import { Icon } from 'react-native-elements'
import Header from '../header'
import { Chart, Line, Area, HorizontalAxis, VerticalAxis } from 'react-native-responsive-linechart'

const info=[
    { x: -2, y: 15 },
    { x: -1, y: 10 },
    { x: 0, y: 12 },
    { x: 1, y: 7 },
    { x: 2, y: 6 },
    { x: 3, y: 8 },
    { x: 4, y: 10 },
    { x: 5, y: 8 },
    { x: 6, y: 12 },
    { x: 7, y: 14 },
    { x: 8, y: 12 },
    { x: 9, y: 13.5 },
    { x: 10, y: 18 },
]


const  Day= [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      name: 'Transfert à votre numéro',
      texte: '08:23',
      photo:require('../../../assets/mtn.png'),
      prix:'1010 F CFA'
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      name: 'Transfert à votre numéro',
      texte: '08:23',
      photo:require('../../../assets/mtn.png'),
      prix:'1010 F CFA'
  
    },
    {
      id: '58672',
      name: 'Transfert à votre numéro',
      texte: '08:23',
      photo:require('../../../assets/Orange_Money.jpg'),
      prix:'1010 F CFA'
    },
    {
      id: '5869',
      name: 'Transfert à votre numéro',
      texte: '08:23',
      photo:require('../../../assets/378645-boutique-vector-icon-gratuit-vectoriel.jpg'),
      prix:'1010 F CFA'
    },
    
   // ...lots of more authors and books go in here...
  
  ];
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
  
export default function tableau() {
    const renderItem1 = ({ item }) => (
        <TransDay name={item.name} texte={item.texte} photo={item.photo} prix={item.prix}/>
      );
    return (
        <SafeAreaView>
            <View style={{width:400,height:110,marginTop:15}}><Header/></View>

            <ScrollView>
                    <View style={styles.solde}>
                                <Text  style={{fontSize:17}}>Solde disponible</Text>
                                <Text style={{fontSize:25,fontWeight:'bold'}}>125.678 F CFA</Text>

                            </View>
                           <View style={{flexDirection:'row'}}>
                               <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                    <TouchableOpacity onPress={() =>{{}}}style={styles.appButtonContainer }>
                                        <Text style={styles.appButtonText}>Avril</Text>
                                        </TouchableOpacity>
                                    <TouchableOpacity onPress={() =>{{}}}style={styles.appButtonContainer }>
                                        <Text style={styles.appButtonText}>Mars</Text>
                                        </TouchableOpacity>
                                    <TouchableOpacity onPress={() =>{{}}}style={styles.appButtonContainer }>
                                        <Text style={styles.appButtonText}>Février</Text>
                                        </TouchableOpacity>
                                    <TouchableOpacity onPress={() =>{{}}}style={styles.appButtonContainer }>
                                        <Text style={styles.appButtonText}>Janvier</Text>
                                        </TouchableOpacity>
                                    <TouchableOpacity onPress={() =>{{}}}style={styles.appButtonContainer }>
                                        <Text style={styles.appButtonText}>Decembre</Text>
                                        </TouchableOpacity>
                                </ScrollView>
                           </View>
                           <View>
                           {/* <Chart
                                style={{ height: 200, width: '100%' }}
                                data={info}
                                padding={{ left: 40, bottom: 20, right: 20, top: 20 }}
                                xDomain={{ min: -2, max: 10 }}
                                yDomain={{ min: 0, max: 20 }}>
                                
                                <VerticalAxis tickCount={11} theme={{ labels: { formatter: (v) => v.toFixed(2) } }} />
                                <HorizontalAxis tickCount={5} />
                                <Area theme={{ gradient: { from: { color: '#ffa502' }, to: { color: '#ffa502', opacity: 0.4 } }}} />
                                <Line theme={{ stroke: { color: '#ffa502', width: 5 }, scatter: { default: { width: 4, height: 4, rx: 2 }} }} />


                            </Chart> */}
                            
                                <Chart
                                        style={{ height: 200, width: '100%' }}
                                        data={info}
                                        padding={{ left: 40, bottom: 20, right: 20, top: 20 }}
                                        xDomain={{ min: 0, max: 10 }}
                                        yDomain={{ min: 0, max: 20 }}
                                        viewport={{ size: { width: 5 } }}
                                        >
                                      <VerticalAxis
                                        tickValues={[0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]}
                                        theme={{
                                        axis: { stroke: { color: '#ffa502', width: 2 } },
                                        ticks: { stroke: { color: '#ffa502', width: 2 } },
                                        labels: { formatter: (v) => v.toFixed(2) },
                                        }}/>

                                        <HorizontalAxis
                                            tickValues={[0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]}
                                            theme={{
                                            axis: { stroke: { color: '#ffa502', width: 2 } },
                                            ticks: { stroke: { color: '#ffa502', width: 2 } },
                                            labels: { label: { rotation: 50 }, formatter: (v) => v.toFixed(1) },
                                            }}
                                        />
                                        <Line
                                       
                                            theme={{
                                            stroke: { color: 'red', width: 2 },
                                            }}
                                            smoothing="cubic-spline"/>
                                        <Area theme={{ gradient: { from: { color: '#ffa502', opacity: 0.4 }, to: { color: '#ffa502', opacity: 0.4 } } }} smoothing="cubic-spline" />
                                        
                                    </Chart>

                          
                           </View>
                           <View>
                               <View style={{flexDirection:'column' ,marginLeft:15,marginTop:30}}>
                                   <Text style={{fontSize:13}}>Dépense Avril 2021</Text>
                                   <View style={{flexDirection:'row'}}>
                                       <Text style={{fontSize:13}}>Rechargements : 12379 F CFA</Text>
                                       <Text style={{fontSize:13,marginLeft:20}}>Solde initial : 12379 F CFA</Text>
                                   </View>
                                   <Text style={{fontSize:13}}>Dépenses:12379 F CFA</Text>
                               </View>
                                    <View style={{marginTop:15,justifyContent:'center',  width:340, backgroundColor:'white',marginLeft:10,borderRadius:10}} >
                                    <View style={{flexDirection:'row'}}>
                                    <View style={{paddingTop:15,marginLeft:10}} >
                                    <Text style={{fontWeight:'bold',fontSize:17}}>Transactions</Text>
                                    </View>
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                                    <TouchableOpacity onPress={() =>{{}}}style={styles.appButtonContainer }>
                                                        <Text style={{fontSize: 18,color: "#fff", alignSelf: "center", fontWeight:'bold'}}>Dépenses</Text>
                                                        </TouchableOpacity>
                                                    <TouchableOpacity onPress={() =>{{}}}style={styles.appButtonContainer }>
                                                        <Text style={styles.appButtonText}>Rechargements</Text>
                                                        </TouchableOpacity>
                                                    <TouchableOpacity onPress={() =>{{}}}style={styles.appButtonContainer }>
                                                        <Text style={styles.appButtonText}>Tout</Text>
                                                    </TouchableOpacity>
                                                  
                                                </ScrollView>
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
                                
                           </View>

                     

            </ScrollView>
        </SafeAreaView>
    )
}const styles=StyleSheet.create({
    solde:{
        flexDirection:'column',
        backgroundColor:'white',
        borderRadius:10,
        marginLeft:10,
        padding:10,
        width:340,
        marginTop:30,
        shadowColor: "#c4bebe",
        shadowOpacity: 0.6,
        shadowRadius: 7,
        shadowOffset: {
        height: 2,
        width: 2}
    },
    appButtonContainer: {
         backgroundColor: "'rgb(255, 165, 0)'",
         borderRadius: 3,
         paddingVertical: 7,
         paddingHorizontal: 15,
         marginLeft:10,
         marginTop:20,
         alignItems:'center',
         justifyContent:'center',
         flexDirection:'row'
  
     
       },
       appButtonText: {
         fontSize: 16,
         color: "#fff",
         alignSelf: "center",
         
        
       },
})
