import { Text, Pressable, StyleSheet, useWindowDimensions } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function CustomFragment({text,onPress}) {
    const {width, height} = useWindowDimensions();
  return (
 
        <LinearGradient  style={{width: width * 0.4, height: height*0.06,...styles.btn }}
      colors={['#B615DE', '#D428A8']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}>
            <Text style={{...styles.text}}>Individual</Text> 
        </LinearGradient>
 
  );
}
const styles = StyleSheet.create({
    btn: {
        color: "white",
        fontSize: 16,
        width: 100,
        borderRadius:25,
        height: 52,
        width:120
       
    
    },
    text: {
        color: '#fff',
        fontSize: 20,
        marginTop:10,
        marginLeft:2
    }
})


