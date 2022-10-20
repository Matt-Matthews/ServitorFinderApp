import React from 'react';
import {StyleSheet, View, Text,ScrollView } from 'react-native';
import Header from './Header';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Notifications() {

    const notification = [
        {
          id: '1',
          userName: 'Matthews 1',
          title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Vel imperdiet, Lorem ipsum dolor sit amet consectetur adipiscing elit. Vel imperdiet, Lorem ipsum dolor sit amet consectetur adipiscing elit. Vel imperdiet', 
        },
        {
          id: '2',
          userName: 'Matthews 2',
          title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Vel imperdiet, Lorem ipsum dolor sit amet consectetur adipiscing elit. Vel imperdiet, Lorem ipsum dolor sit amet consectetur adipiscing elit. Vel imperdiet', 
        },
        {
          id: '3',
          userName: 'Matthews 3',
          title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Vel imperdiet, Lorem ipsum dolor sit amet consectetur adipiscing elit. Vel imperdiet, Lorem ipsum dolor sit amet consectetur adipiscing elit. Vel imperdiet', 
          
        },
      ];

      const notify = () => {
        return notification.map((results) => {
          return (
             <View style={{...styles.notifycard}}>
              <Text style={{color:'#fefefe'}}>{results.userName}</Text>
              <Text style={{color:'#fefefe'}}>{results.title}</Text>
            </View>
          );
        });
      };

  return (
    <SafeAreaView style={{flex:1}}>
        <ScrollView style={{backgroundColor:'black'}}>
            <View style={{...styles.container}}>
                <Header withBackIcon={true}/>
                {notify()}
            </View>
         </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
    //   flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    notifycard:{
        backgroundColor:'#131313',
        width:'93%',
        padding:10,
        margin:5,
        borderRadius:25,
        color:'#fff',
    } 
  });
