import { View, Text, StyleSheet, Image,Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { SafeAreaView } from 'react-native-safe-area-context'
// import { Avatar } from 'react-native-elements';

const url = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
const pic = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'

const Chats = ({onPress,navigation}) => {

    function insideChats(){
        navigation.navigate('messages')
       
    }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header />
        <View style={styles.con}>
          <Text style={{ color: "#B615DE", fontSize: 18, fontWeight: "550%" }}>
            Charts
          </Text>
        </View>

             
                    
                    
                  <TouchableOpacity onPress={insideChats} >

                                    <View style={{  backgroundColor: '#131313', width:'80%', alignSelf:'center', display:'flex', flexDirection:'row',borderRadius: 25,margin:15 }}>
                                        <View style={{ padding:10 }}>
                                            <Image 
                                            source={{ uri: url }}
                                            style={{ width: 100, height: 100, borderRadius: 150 , }}/>
                                            
                                        </View>
                                        <View style={{width:'40%', marginTop:'5%'}}>
                                            <Text style={{color:'white',fontWeight:'900'}}>User Name</Text>
                                            <Text style={{color:'white'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                                            </View>
                                            <View style={{paddingLeft:5,}}>

                                            <Text style={{marginLeft:'15%', top:'75%',color:'white',fontSize:10}}>12:25</Text>
                                            </View>
                                        </View>

                                        
                  </TouchableOpacity>
                    
                  <TouchableOpacity onPress={insideChats} >

                                    <View style={{  backgroundColor: '#131313', width:'80%', alignSelf:'center', display:'flex', flexDirection:'row',borderRadius: 25,margin:15 }}>
                                        <View style={{ padding:10 }}>
                                            <Image 
                                            source={{ uri: url }}
                                            style={{ width: 100, height: 100, borderRadius: 150 , }}/>
                                            
                                        </View>
                                        <View style={{width:'40%', marginTop:'5%'}}>
                                            <Text style={{color:'white',fontWeight:'900'}}>User Name</Text>
                                            <Text style={{color:'white'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                                            </View>
                                            <View style={{paddingLeft:5,}}>

                                            <Text style={{marginLeft:'15%', top:'75%',color:'white',fontSize:10}}>12:25</Text>
                                            </View>
                                        </View>

                                        
                  </TouchableOpacity>
                    
                  <TouchableOpacity onPress={insideChats} >

                                    <View style={{  backgroundColor: '#131313', width:'80%', alignSelf:'center', display:'flex', flexDirection:'row',borderRadius: 25,margin:15 }}>
                                        <View style={{ padding:10 }}>
                                            <Image 
                                            source={{ uri: url }}
                                            style={{ width: 100, height: 100, borderRadius: 150 , }}/>
                                            
                                        </View>
                                        <View style={{width:'40%', marginTop:'5%'}}>
                                            <Text style={{color:'white',fontWeight:'900'}}>User Name</Text>
                                            <Text style={{color:'white'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                                            </View>
                                            <View style={{paddingLeft:5,}}>

                                            <Text style={{marginLeft:'15%', top:'75%',color:'white',fontSize:10}}>12:25</Text>
                                            </View>
                                        </View>

                                        
                  </TouchableOpacity>
                 
                    
                    
    
       
        
  
      </View>
    </SafeAreaView>
  );
}

export default Chats;
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