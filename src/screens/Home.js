import { StyleSheet, Text, View, Image, ScrollView, Pressable, Dimensions} from 'react-native';
import Header from '../components/Header';
import {SafeAreaView} from 'react-native-safe-area-context';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FlatGrid } from 'react-native-super-grid';
import React from 'react';
import SearchInput from '../components/SearchInput';
import HomeSearchInput from '../components/HomeSearchInput';
import { Icon } from "react-native-gradient-icon";
import Categories from '../components/Categories';
import Ratings from '../components/Ratings';




// const img = 'https://www.investnational.com.au/wp-content/uploads/2016/08/person-stock-2.png'
function Home({navigation}){
    const [items, setItems] = React.useState([
        { name: 'TURQUOISE', code: '#1abc9c' },
        { name: 'EMERALD', code: '#2ecc71' },
        { name: 'PETER RIVER', code: '#3498db' },
        { name: 'AMETHYST', code: '#9b59b6' },
         { name: 'WET ASPHALT', code: '#34495e' },
         { name: 'GREEN SEA', code: '#16a085' },
         { name: 'TURQUOISE', code: '#1abc9c' },
        { name: 'EMERALD', code: '#2ecc71' },
        { name: 'PETER RIVER', code: '#3498db' },
        { name: 'AMETHYST', code: '#9b59b6' },
         { name: 'WET ASPHALT', code: '#34495e' },
         { name: 'GREEN SEA', code: '#16a085' },
      ]);

      const [catIndex, setCatIndex] = React.useState(0);
      const img = 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80';
    return(
        <View style={styles.container}>
            <SafeAreaView>
                <Header />
              <ScrollView stickyHeaderIndices={[2]}>
                <View style={{marginTop: Dimensions.get('window').height*0.04,}} />
                <View style={styles.location}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon  
                    size={32}
                    colors={[
                        {color:"#B615DE",offset:"0",opacity:"1"},
                        {color:"#D428A8",offset:"1",opacity:"1"},
                    ]}
                    name="md-location-sharp" 
                    type="ionicon" 
                />
                        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', }}>Polokwane</Text>
                    </View>
                    <Pressable onPress={()=>navigation.navigate('Profile')}>
                                <Image source={{uri:img}} resizeMode='cover' style={{width: Dimensions.get('window').width*0.15,
                                      height: Dimensions.get('window').width*0.15, 
                                      borderRadius:Dimensions.get('window').width*0.15}}/>
                    </Pressable>
                   
                </View>

                <View style={{backgroundColor: '#000',}}>
                <HomeSearchInput />
               
                <View style={{marginLeft: '5%', marginTop: '12%'}}>
                    <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold', }}>Categories</Text>
                </View>
                
                <Categories catIndex={catIndex} setCatIndex={setCatIndex} />
                </View>
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
                            <Pressable onPress={()=>navigation.navigate('Profile')} style={[styles.itemContainer, { backgroundColor: '#131313' }]}>
                                <Image source={{uri:img}} style={{width: Dimensions.get('window').width*0.2,
                                      height: Dimensions.get('window').width*0.2, 
                                      borderRadius:Dimensions.get('window').width*0.2,
                                      alignSelf: 'center'
                                      }}/>
                                <View style={{flexDirection: 'row', 
                                              justifyContent: 'space-between', 
                                              marginVertical: Dimensions.get('window').height*0.005,
                                              alignItems: 'center',
                                              }}>
                                  <Text style={styles.itemName}>Username</Text>
                                  <View style={{flexDirection: 'row',}}>
                                      <Ratings ratings={4} />
                                  </View>
                                </View>
                                  <Text style={styles.itemCode}>Service name</Text>
                            </Pressable>
                        )}
                    />
                    <View style={{marginTop: Dimensions.get('window').height*0.15,}} />
                 </View>
              </ScrollView>
                
            </SafeAreaView>
        </View>
     
    )
}
export default Home;
const styles = StyleSheet.create({ 
   container: {
      height: '100%',
      backgroundColor: 'black'
   },
   location:{
      flexDirection: 'row',
      width: '93%',
      alignSelf: 'center',
      justifyContent: 'space-between',
      alignItems: 'center',
   },
   profile: {
       width: 60,
       height: 60,
       backgroundColor: 'white',
       marginTop: '-6%',
       borderRadius: 150,
       marginRight: '2%'
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
     marginLeft: '5%'
   },
   gridView: {
    // marginTop: 10,
  },
  itemContainer: {
    justifyContent: 'center',
    borderRadius: 25,
    padding: 10,
    height: Dimensions.get('window').height*0.21,
  },
  itemName: {
    fontSize: 18,
    color: '#9f9d9e',
    fontWeight: '600',
    
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 15,
    color: '#9f9d9e',
  },
})