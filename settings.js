import React from 'react';
import { View, Text, ScrollView, StyleSheet, Pressable } from 'react-native';
import Header from './Header';
import { SafeAreaView } from 'react-native-safe-area-context';
// import Toggle from 'react-native-toggle';
import SwitchToggle from "react-native-switch-toggle";
import ToggleSwitch from 'toggle-switch-react-native';
import { Ionicons } from '@expo/vector-icons';


export default function Settings() {
  return (
    <SafeAreaView style={{flex:1}}>
    <ScrollView style={{backgroundColor:'black'}}>
        <View>
            <Header withBackIcon={true}/>
            <View style={{...styles.notifycard, display:'flex',flexDirection:'row', justifyContent:'space-between'}}>
              <View>
                <Text style={{color:'#fff',paddingTop:20, fontSize:16}}>Notifications</Text>
              </View>
              <View style={{ padding:20}}>
                <ToggleSwitch
                  isOn={false}
                  onColor="green"
                  offColor="purple"
                  size="medium"
                  onToggle={isOn => console.log("changed to : ", isOn)}
                />
              </View>
            </View>

            <View style={{...styles.notifycard, display:'flex',flexDirection:'row', justifyContent:'space-between'}}>
              <View>
                <Text style={{color:'#fff',paddingTop:20,fontSize:16}}>Theme</Text>
              </View>
              <View style={{ padding:20}}>
                <ToggleSwitch
                  
                  isOn={true}
                  onColor="purple"
                  offColor="purple"
                  size="medium"
                  icon={<Ionicons name='md-moon' color={'#638CF6'} />}
                  onToggle={isOn => console.log("changed to : ", isOn)}
                />
              </View>
            </View>
            
            <Pressable style={{...styles.notifycard}}>
              <Text style={{color:'#fff',fontSize:16}}>Acount Settings</Text>
            </Pressable>

            <View style={{...styles.notifycard}}>
              <Text style={{color:'#fff',fontSize:16}}>About</Text>
            </View>
        </View>
     </ScrollView>
</SafeAreaView>
  );
}

const styles = StyleSheet.create({
    notifycard:{
        backgroundColor:'#131313',
        width:'95%',
        height:70,
         
        paddingLeft:15,
        margin:5,
        borderRadius:25,
        alignContent:'center',
        flex: 1,
        justifyContent: 'center',

    } 
  });
