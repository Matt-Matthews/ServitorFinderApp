import React from 'react';
import { View, ScrollView, KeyboardAvoidingView, Image, StyleSheet, Pressable, Dimensions, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Icon } from 'react-native-gradient-icon';
import Header from '../components/Header';
import CustomInput from '../components/CustomInput';
import CustomeBtn from '../components/CustomeBtn';

export default function AccountSettings({navigation}) {

  return (
    <SafeAreaView style={{flex:1}}>
        <StatusBar backgroundColor="#000" barStyle="light-content" />
        <Header navigation={navigation} withBackIcon={true} />
        
        <ScrollView style={{backgroundColor:'black'}}>
        <View style={{marginTop: Dimensions.get('window').height*0.04,}} />
         <KeyboardAvoidingView behavior="position">
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
              <View style={{marginTop: Dimensions.get('window').height*0.04,}} />
              <View style={{alignItems: 'center'}}>
                    <CustomInput icon='md-person-sharp' placeholder='Firstname' />
                    <CustomInput icon='md-person-sharp' placeholder='Lastname' />
                    <CustomInput icon='md-call-sharp' placeholder='Mobile number' />
                    <CustomInput icon='md-mail-sharp' placeholder='Email' />
                    <CustomInput icon='md-lock-closed' password={true} placeholder='Create password' />
                    <CustomInput icon='md-lock-closed' password={true} placeholder='Confirm password' />
                    
                    <View style={{marginTop: Dimensions.get('window').height*0.04,}} />
                    
                    <CustomeBtn text={'Update'} /> 
                    <View style={{marginTop: Dimensions.get('window').height*0.02,}} />
                        
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
    },
    container: {
      position: 'relative',
      borderRadius:Dimensions.get('window').width*0.5,
      width: Dimensions.get('window').width*0.5, 
      height: Dimensions.get('window').width*0.5,
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    },
    img:{
        borderRadius:Dimensions.get('window').width*0.5,
        width: '100%', 
        height: '100%', 
    },
    imageIcon:{
        position:'absolute',
        alignItems:'center',
        alignSelf: 'center',
        padding:5,
        backgroundColor: 'rgba(0,0,0,0.3)',
        width:'100%',
        bottom: 0,
        height:'24%',
        borderBottomRadius:Dimensions.get('window').width*0.5,
        borderBottomRightRadius:Dimensions.get('window').width*0.5,
        borderBottomLeftRadius:Dimensions.get('window').width*0.5,
    },
    icon: {
      opacity: 1
    },

    submainview: {
      backgroundColor:'#131313',
      borderRadius: Dimensions.get('window').height* 0.07,
      paddingHorizontal: Dimensions.get('window').width*0.03,
      height: Dimensions.get('window').height* 0.07,
      width:'93%',
      alignSelf: 'center',
      marginBottom: Dimensions.get('window').height* 0.02,
      alignItems: 'center',
    },
    inputs: {
      fontSize:16,
    }
  });