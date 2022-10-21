/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
  SafeAreaView,
  Dimensions,
  StatusBar,
} from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from '@react-native-masked-view/masked-view';
import logo from '../assets/images/logo.png';
import CustomeBtn from '../components/CustomeBtn';
import CustomInput from '../components/CustomInput';

const SignUp = ({navigation}) => {
  const {height} = useWindowDimensions();
  function onPress() {
    navigation.navigate('SignIn');
  }

  function registerService(){
    navigation.navigate('RegisterService')
  }
  
  return (
    <SafeAreaView style={[styles.root]}>
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <KeyboardAvoidingView
          style={{flex: 1, height: height}}
          behavior="position"
          enabled={true}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
              <Image
                style={{height: height * 0.2, marginTop: height * 0.03}}
                source={logo}
                resizeMode="contain"
              />
              <Text style={styles.heading}>Sign up</Text>
              <CustomInput icon='md-person-sharp' placeholder='Firstname' />
              <CustomInput icon='md-person-sharp' placeholder='Lastname' />
              <CustomInput icon='md-call-sharp' placeholder='Mobile number' />
              <CustomInput icon='md-mail-sharp' placeholder='Email' />
              <CustomInput icon='md-lock-closed' password={true} placeholder='Create password' />
              <CustomInput icon='md-lock-closed' password={true} placeholder='Confirm password' />
              <View style={{marginTop: Dimensions.get('window').height*0.03,}} />
                    
              <CustomeBtn text={'Sign up'} onPress={registerService} /> 
              <View style={{marginTop: Dimensions.get('window').height*0.04,}} />
              <View style={[styles.centre]}>
                <Text style={{color: '#fff',}}>Already have an account?</Text>
                <MaskedView
                  maskElement={
                    <Text onPress={onPress} style={[styles.text, styles.font]}>
                      Sign in
                    </Text>
                  }>
                  <LinearGradient
                    colors={['#B615DE', '#D428A8']}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}>
                    <Text
                      onPress={onPress}
                      style={[styles.text, styles.font, {opacity: 0}]}>
                      Sign up
                    </Text>
                  </LinearGradient>
                </MaskedView>
              </View>
              
            </View>
            
          </ScrollView>
          
        </KeyboardAvoidingView>
        <View style={{marginTop: Dimensions.get('window').height*0.0458,}} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'black',
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  left: {
    marginTop: 10,
    paddingLeft: 20,
  },
  centre: {
    marginTop: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginLeft: 10,
  },
  font: {
    fontSize: 17,
  },
});

export default SignUp;
