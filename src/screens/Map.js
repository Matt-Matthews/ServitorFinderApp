import { StyleSheet, Dimensions, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from "react";
import MapView, { Marker } from 'react-native-maps';
import Header from '../components/Header';
import mapStyles from '../components/mapStyle.json';
import CustomeMarker from '../components/CustomeMarker';
import SearchInput from '../components/SearchInput';


export default function Map({navigation}) {

  function viewProfile(){
    navigation.navigate('Profile');
  }
  
  return (
    <SafeAreaView style={styles.container}>
      
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      <Header withBackIcon={false} />
      
      <MapView 
           
          zoomEnabled 
          style={styles.map} 
          initialRegion={{
            latitude: -23.9168558,
            longitude: 29.4576678,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          customMapStyle={mapStyles}
      >
        <Marker onPress={viewProfile} coordinate={{latitude: -23.9168558, longitude: 29.4576678,}}>
          <CustomeMarker isOnline={true} />
        </Marker>
      </MapView>
      <SearchInput />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
    container: {
      position: 'relative',
    },
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height*0.932,
    },
   
  });