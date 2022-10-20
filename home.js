import { StyleSheet, Text, View, Image, ScrollView, Pressable} from 'react-native';
import Header from './src/components/Header';
import {SafeAreaView} from 'react-native-safe-area-context';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import image from './assets/user.jpg';
import { FlatGrid, SectionGrid } from 'react-native-super-grid';
import React from 'react';




const img = 'https://www.investnational.com.au/wp-content/uploads/2016/08/person-stock-2.png'
function HomePage({navigation}){
    const [items, setItems] = React.useState([
        { name: 'TURQUOISE', code: '#1abc9c' },
        { name: 'EMERALD', code: '#2ecc71' },
        { name: 'PETER RIVER', code: '#3498db' },
        { name: 'AMETHYST', code: '#9b59b6' },
         { name: 'WET ASPHALT', code: '#34495e' },
         { name: 'GREEN SEA', code: '#16a085' },
      ]);
    return(
        <View style={styles.container}>
            <SafeAreaView>
                <Header />
                <View style={styles.location}>
                    <View style={{ flexDirection: 'row' }}>
                        <Entypo name="location-pin" size={24} color="#B615DE" />
                        <Text style={{ color: 'white', fontSize: 15 }}>Polokwane</Text>
                    </View>
                    <Pressable onPress={()=>navigation.navigate('Profile')}>
                            <View style={styles.profile}>
                                <Image source={{uri:img}} style={{width: 60,height: 60, borderRadius:150}}/>
                            </View>
                    </Pressable>
                   
                </View>
                <View style={styles.search}>
                      <View style={{marginLeft: '4%'}}>
                          <Text style={{ color: '#969696', fontSize: 16 }}>
                               Search
                          </Text>
                      </View>
                      <View style={{marginRight: '4%'}}>
                      <FontAwesome name="search" size={25} color="#B615DE" />
                      </View>
                </View>
                <View style={{marginLeft: '5%', marginTop: '12%'}}>
                    <Text style={{ color: '#9f9d9e', fontSize: 16 }}>Categories</Text>
                </View>
                
                <View style={styles.categories}>
                <ScrollView horizontal={true}>
                      <View style={{backgroundColor:'#131313', borderRadius:80, margin:10,padding:10, width:70, backgroundColor:"#B615DE"}}>
                          <Text style={{color:'#9f9d9e', alignSelf:'center'}}>All</Text>
                      </View>
                      <View style={{backgroundColor:'#131313', borderRadius:80, margin:10,padding:10}}>
                          <Text style={{color:'#9f9d9e', alignSelf:'center', paddingLeft:10,paddingRight:10}}>Plumbing</Text>
                      </View>
                      <View style={{backgroundColor:'#131313', borderRadius:80, margin:10,padding:10}}>
                          <Text style={{color:'#9f9d9e', alignSelf:'center', paddingLeft:10,paddingRight:10}}>Electrical</Text>
                      </View>
                      <View style={{backgroundColor:'#131313', borderRadius:80, margin:10,padding:10}}>
                          <Text style={{color:'#9f9d9e', alignSelf:'center', paddingLeft:10,paddingRight:10}}>Designer</Text>
                      </View>
                         </ScrollView>
                </View>
                <ScrollView>
                 <View style={styles.services}>
                   
                    <FlatGrid
                        itemDimension={130}
                        data={items}
                        style={styles.gridView}
                        // staticDimension={300}
                        // fixed
                        // horizontal
                        spacing={10}
                        renderItem={({ item }) => (
                            <View style={[styles.itemContainer, { backgroundColor: '#131313' }]}>
                                <View style={{width:80, height:80, borderRadius:150, backgroundColor: 'white', marginLeft: '20%'}}>
                                <Image source={{uri:img}} style={{width: 80,height: 80, borderRadius:150}}/>

                                </View>
                                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                  <Text style={styles.itemName}>Username</Text>
                                  <View style={{flexDirection: 'row',}}>
                                      <Entypo name="star" size={12} color="#B615DE" />
                                      <Entypo name="star" size={12} color="#B615DE" />
                                      <Entypo name="star" size={12} color="#B615DE" />
                                      <Entypo name="star" size={12} color="#B615DE" />
                                      
                                  </View>
                                </View>
                                  <Text style={styles.itemCode}>Service name</Text>
                            </View>
                        )}
                    />
                    
                 </View>
                 </ScrollView>

            </SafeAreaView>
        </View>
     
    )
}
export default HomePage
const styles = StyleSheet.create({ 
   container: {
      height: '100%',
      backgroundColor: 'black'
   },
   location:{
      flexDirection: 'row',
      marginTop: '15%',
      marginLeft: '5%',
      justifyContent: 'space-between'
   },
   profile: {
       width: 60,
       height: 60,
       backgroundColor: 'white',
       marginTop: '-6%',
       borderRadius: 150,
       marginRight: '2%'
   },
   search: {
      marginTop: '12%',
      width: '95%',
      alignSelf: 'center',
      height: 60,
      backgroundColor: '#131313',
      borderRadius: 100,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
   },
   categories: {
      flexDirection: 'row',
      marginLeft: '2%',
      marginTop: '1%',
      width: '100%',
      height: 70,
      alignItems: 'center',
   },
   services: {
     width: '92%',
     height: '60%',
     marginLeft: '5%'
   },
   gridView: {
    // marginTop: 10,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: '#9f9d9e',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#9f9d9e',
  },
})
