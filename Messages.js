import { View, Text, StyleSheet, Image,Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons'; 


const url = 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'

export default function Messages() {
    function backToUsers(){
       alert('went back')
    }
  return (
    <SafeAreaView>
    <View style={styles.container}>
      <Header onPress={backToUsers}  withBackIcon={true} />
            <View style={{width:'50%',marginLeft:'10%', display:'flex', flexDirection:'row'}}>
                        <View style={{ padding:10 }}>
                            <Image 
                                source={{ uri: url }}
                                style={{ width: 60, height: 60, borderRadius: 150 , }}/>
                                
                                            
                         </View>
                         <View style={{ marginTop:'15%'}}>
                                <Text style={{color:'white',fontWeight:'900'}}>User Name</Text>
                                            
                        </View>
                         

            </View>
            <View style={{  backgroundColor: '#131313',height:'10%', width:'50%',borderRadius: 25,marginLeft:'10%', marginTop: '10%', padding: 10 }}>
                                      
                                        <View style={{}}>
                                            
                                            <Text style={{color:'white'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                                            </View>
                                            <View style={{justifyContent: 'flex-end'}}>
                                            <Text style={{color:'white',fontSize:10,marginLeft:'75%', marginTop: '5%'}}>12:25</Text>
                                            </View>
                </View>
     
            <View style={{  backgroundColor: '#131313',height:'10%', width:'50%',borderRadius: 25,marginLeft:'40%', marginTop: '10%', padding: 10 }}>
                                      
                                        <View style={{}}>
                                            
                                            <Text style={{color:'white'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                                            </View>
                                            <View style={{justifyContent: 'flex-end'}}>
                                            <Text style={{color:'white',fontSize:10,marginLeft:'75%', marginTop: '5%'}}>11:55</Text>
                                            </View>
                </View>

                
                <View style={{ flexDirection:'row', marginLeft: '8%', top: '85%' }}>
                    
                        
                        <View style={{width: '70%', backgroundColor: '#131313', height:50, borderRadius:25, padding:10, marginRight: 20}}>
                              <Text style={{color: '#fff', fontSize:18, paddingLeft: 5}}>
                                  Message
                              </Text>
                        </View>
                       
                        
                        <TouchableOpacity>
                        <View style={{width:50, height:50, borderRadius:150, backgroundColor: '#B615DE', justifyContent: 'center'}}>
                             <AntDesign name="caretright" size={24} color="#fff" style={{alignSelf: 'center'}}/>
                        </View>
                        </TouchableOpacity> 
                </View>   
                
     
    </View>
   
    </SafeAreaView>
  )
}










const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: 'black'
    },
    con: {
        marginLeft: '10%',
        marginTop: '8%'
    },
    messageContainer:{
        backgroundColor: '#131313',
         
         width:'60%',
         marginLeft:'10%',
         height:'6%',
         borderRadius: 25 ,
        


    },
   
 

})