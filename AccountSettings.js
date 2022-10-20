import React from 'react';
import { View, Text, ScrollView, KeyboardAvoidingView, Image, StyleSheet, TextInput, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from './Header';
import { Entypo } from '@expo/vector-icons';
import { Icon } from 'react-native-gradient-icon';
import CustomeBtn from './CustomeBtn copy';

export default function AccountSettings() {

  return (
    <SafeAreaView style={{flex:1}}>
        <ScrollView style={{backgroundColor:'black'}}>
        <Header withBackIcon={true} />
         <KeyboardAvoidingView>
             <View style={{...styles.imageContainer}}>
              <View style={styles.container}>
              <Image
                  source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2PwJtMipqQMVvlZpnsm_JcVUW97F7EBOY8Q&usqp=CAU'}}
                  style={{...styles.img}}
                />
                <View style={{...styles.imageIcon}}>
                <Pressable>
                <Icon  
                    size={32}
                    colors={[
                        {color:"#B615DE",offset:"0",opacity:"1"},
                        {color:"#D428A8",offset:"1",opacity:"1"},
                    ]}
                    name="md-camera" 
                    type="ionicon" 
                />
            </Pressable>
                </View>
              </View>
              </View>
        
              <View>
                      <View style={{...styles.submainview, display:'flex',flexDirection:'row'}}>
                      <Icon  
                        size={32}
                        colors={[
                            {color:"grey",opacity:"60%"},
                            
                        ]}
                        name="person" 
                        type="ionicon" 
                      />
                         <TextInput placeholderTextColor={"grey"} placeholder='Firstname' style={styles.inputs}></TextInput>
                      </View>
                      <View style={{...styles.submainview, display:'flex',flexDirection:'row'}}>

                      <Icon  
                        size={32}
                        colors={[
                          {color:"grey",opacity:"60%"},
                           
                        ]}
                        name="person" 
                        type="ionicon" 
                    />
                         <TextInput placeholderTextColor={"grey"} placeholder='Lastname' style={styles.inputs}></TextInput>
                      </View>

                      <View style={{...styles.submainview, display:'flex',flexDirection:'row'}}>

                      <Icon  
                        size={32}
                        colors={[
                            {color:"grey",opacity:"60%"},
                           
                        ]}
                        name="call" 
                        type="ionicon" 
                      />
                        <TextInput placeholderTextColor={"grey"} placeholder='Mobile Number' style={styles.inputs}></TextInput>
                      </View>

                      <View style={{...styles.submainview, display:'flex',flexDirection:'row'}}>

                        <Icon  
                          size={32}
                          colors={[
                              {color:"grey",opacity:"60%"},   
                          ]}
                          name="mail" 
                          type="ionicon" 
                        />
                         <TextInput placeholderTextColor={"grey"} placeholder='Email' style={styles.inputs}></TextInput>
                        </View>

                      <View style={{...styles.submainview,display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                          <View style={{display:'flex',flexDirection:'row'}}>
                          <Entypo name="lock" size={32} color="grey" />
                         <TextInput placeholderTextColor={"grey"} placeholder='Old Password' style={styles.inputs}></TextInput>
                          </View>
                       

                         <Icon  
                          size={32}
                          colors={[
                              {color:"#B615DE",offset:"0",opacity:"1"},
                              {color:"#D428A8",offset:"1",opacity:"1"},
                          ]}
                          name="eye-off" 
                          type="ionicon"/>
                          
                        </View>

                        

                        <View style={{...styles.submainview,display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                          <View style={{display:'flex',flexDirection:'row'}}>
                          <Entypo name="lock" size={32} color="grey"/>
                         <TextInput placeholderTextColor={"grey"} placeholder='New Password' style={styles.inputs}></TextInput>
                          </View>
                       

                         <Icon  
                          size={32}
                          colors={[
                              {color:"#B615DE",offset:"0",opacity:"1"},
                              {color:"#D428A8",offset:"1",opacity:"1"},
                          ]}
                          name="eye-off" 
                          type="ionicon"/>
                        </View>

                         <View style={{alignSelf:'center', marginTop:'15%'}}>
                            <CustomeBtn text={'Update'} /> 
                        </View>
              </View>
       
              </KeyboardAvoidingView>
     </ScrollView>
      
</SafeAreaView>

  );
}

const styles = StyleSheet.create({
    imageContainer:{
      alignItems: 'center',
      justifyContent: 'center',
      top:25,
      marginBottom:25
    },
    container: {
      position: 'relative',
      borderRadius:100,
      width: 200, 
      height: 200,
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    },
    img:{
        borderRadius:100,
        width: 200, 
        height: 200, 
    },
    imageIcon:{
        position:'absolute',
        alignItems:'center',
        alignSelf: 'center',
        padding:5,
        backgroundColor: 'rgba(0,0,0,0.3)',
        width:'100%',
        bottom: 0,
        height:50,
        borderBottomRadius:100,
        borderBottomRightRadius:100,
        borderBottomLeftRadius:100,
    },
    icon: {
      opacity: 1
    },

    submainview: {
      backgroundColor:'#131313',
      borderRadius:25,
      padding:10,
      margin:10,
      height:50,
      width:'90%',
      top:30,
    },
    inputs: {
      fontSize:16,
    }
  });
