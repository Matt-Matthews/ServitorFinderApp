import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { SafeAreaView } from 'react-native-safe-area-context'


const Phome = ({navigation}) => {

  function goToChats(){
      navigation.navigate('chats')
   
  }
 
  return (
  <>
  <SafeAreaView>
        <View style={styles.container}>
                <Header withMeesageIcon={true}  onPress={goToChats}/>
                
        </View>
  </SafeAreaView>
 

 </>
  )
}

export default Phome











const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: 'black'
    },
    con: {
        marginLeft: '10%',
        marginTop: '8%'
    },
   

})