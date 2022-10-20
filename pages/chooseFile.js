import { Text, Pressable, StyleSheet, useWindowDimensions } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useState, useCallback } from "react";
import DocumentPicker from 'react-native-document-picker';
import * as ImagePicker from 'expo-image-picker';



export default function ChooseFile({text,onPress}) {
    const {width, height} = useWindowDimensions();
    const [fileResponse, setFileResponse] = useState([]);

    const handleDocumentSelection = useCallback(async () => {
      try {
        const file = await DocumentPicker.pick({
          type: [DocumentPicker.types.pdf],
          copyTo: 'documentDirectory',
        });
        this.setState({
          document: decodeURI(
            file.fileCopyUri.replace('file://', ''),
          ),
        });
        setFileResponse(response);
      } catch (err) {
        console.warn(err);
      }
    }, []);

    const pickFromGallery= async ()=>{
      try{
        const {granted}= await ImagePicker.requestMediaLibraryPermissionsAsync();
        if(granted)
        {
         let data= await ImagePicker.launchImageLibraryAsync({
            mediaTypes:ImagePicker.MediaTypeOptions.Images,
            allowsEditing:true,
            aspect:[1,1],
            quality:0.7
          })
          console.log(data)
        }
        else{
          Alert.alert('You need to give this app permission to your camera')
        }  
      }catch(err){
        console.error("Failed to go to gallery",err)
      }
      
      }
    

  return (
    <Pressable onPress={pickFromGallery}>
        <LinearGradient  style={{width: width * 0.4, height: height*0.06,...styles.btn }}
      colors={['#B615DE', '#D428A8']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}>
            <Text style={{...styles.text}}>Choose file</Text>
        </LinearGradient>
    </Pressable>
  );
}
const styles = StyleSheet.create({
    btn: {
        color: "white",
        fontSize: 16,
        width: 100,
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25,
        height: 52,
    
    },
    text: {
        color: '#fff',
        fontSize: 18,
        marginTop:10,
        marginLeft:2
    }
})


