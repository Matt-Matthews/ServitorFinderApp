import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
  Dimensions,
  Pressable,
  StatusBar,
} from 'react-native';
import CustomInput from '../components/CustomInput';
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from '@react-native-masked-view/masked-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import logo from '../assets/images/logo.png';
import CustomeBtn from '../components/CustomeBtn';
SafeAreaView

const SignIn = ({navigation}) => {
  const {height, width} = useWindowDimensions();
  function onPress() {
    navigation.navigate('SignUp');
  }
  function gotoHome() {
    navigation.navigate('BottomNav');
  }
  return (
    <SafeAreaView style={[styles.root]}>
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <KeyboardAvoidingView
          style={{flex: 1, backgroundColor: 'black', height: height}}
          behavior="position"
          enabled={true}>
          <ScrollView>
            <View style={styles.container}>
              <Image
                style={{height: width * 0.60, width: width * 0.60, marginTop: height * 0.05}}
                source={logo}
                resizeMode="cover"
              />
              <Text style={styles.heading}>Login</Text>
              <CustomInput icon='md-mail-sharp' placeholder='Email' />
              <CustomInput icon='md-lock-closed' password={true} placeholder='Password' />
              <View
                style={[
                  {width: width * 0.9, height: height * 0.07},
                  styles.left,
                ]}>
                <Text style={{color: '#fff',}}>Forgot password?</Text>
              </View>
              <View style={{marginTop: Dimensions.get('window').height*0.01,}} />
                    
              <CustomeBtn text={'Login'} onPress={gotoHome} /> 
              <View style={{marginTop: Dimensions.get('window').height*0.04,}} />
              <Pressable onPress={onPress}  style={[styles.centre]}>
                <Text style={{color: '#fff',}}>Don`t have an account?</Text>
                <MaskedView
                  maskElement={
                    <Text style={[styles.text, styles.font]}>Sign up</Text>
                  }>
                  <LinearGradient
                    colors={['#B615DE', '#D428A8']}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}>
                    <Text
                      
                      style={[styles.text, styles.font, {opacity: 0}]}>
                      Sign up
                    </Text>
                  </LinearGradient>
                </MaskedView>
              </Pressable>
            </View>
            <View style={{marginTop: Dimensions.get('window').height*0.01,}} />
          </ScrollView>
        </KeyboardAvoidingView>
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

export default SignIn;
