import { View, StyleSheet , Text, ScrollView, Pressable,Image} from "react-native";
import Header from "./src/components/Header";
import CustomeBtn from "./src/components/CustomeBtn";
import {SafeAreaView} from 'react-native-safe-area-context';
import { Entypo } from '@expo/vector-icons';


const img = 'https://www.investnational.com.au/wp-content/uploads/2016/08/person-stock-2.png'
const service = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZSnjs9zoIjgrnhCHtHWFFpHlIj_hhGPXooVaxjYKYRenyQf3E581_Cg5ZkZQ2XI87DZU&usqp=CAU'
function ServitorProfile({navigation}){

    function sayHello(){
        navigation.navigate('Request Form')
    }
    return(
        <View style={styles.container}>
            <SafeAreaView>
                <Header withBackIcon={true}/>
                 <View style={styles.image}>
                 <Image source={{uri:img}} style={{width: 100,height: 100, borderRadius:150}}/>
                 </View>
                 <View style={{marginTop: '10%', flexDirection: 'row', marginLeft: 15, justifyContent: 'space-between'}}>
                    <View>
                        <Text style={{fontSize: 16,color: '#9f9d9e',fontWeight: '600',}}>User name</Text>
                        <Text style={{fontSize: 12,color: '#9f9d9e',fontWeight: '600',}}>Service name</Text>
                    </View>
                        <View style={{flexDirection: 'row', marginRight: '3%'}}>
                                <Entypo name="star" size={15} color="#B615DE" />
                                <Entypo name="star" size={15} color="#B615DE" />
                                <Entypo name="star" size={15} color="#B615DE" />
                                <Entypo name="star" size={15} color="#B615DE" />
                        </View>
                 </View>
                 <View style={{marginLeft: '4%', width: '75%', marginTop: '2%'}}>
                    <Text style={{color: '#9f9d9e'}}>
                       Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                    </Text>
                 </View>
                 <View style={styles.servicePics}>
                 <ScrollView horizontal={true}>
                     <View style={{width: 130, height: 140, borderRadius: 40, backgroundColor: 'white', marginRight: 10}}>
                       <Image source={{uri:service}} style={{width: 130,height: 140, borderRadius:40}}/>
                     </View>
                     <View style={{width: 130, height: 140, borderRadius: 40, backgroundColor: 'white', marginRight: 10}}>
                       <Image source={{uri:service}} style={{width: 130,height: 140, borderRadius:40}}/>
                     </View>
                     <View style={{width: 130, height: 140, borderRadius: 40, backgroundColor: 'white',  marginRight: 10}}>
                       <Image source={{uri:service}} style={{width: 130,height: 140, borderRadius:40}}/>
                     </View>
                     <View style={{width: 130, height: 140, borderRadius: 40, backgroundColor: 'white',  marginRight: 10}}>
                       <Image source={{uri:service}} style={{width: 130,height: 140, borderRadius:40}}/>
                     </View>
                 </ScrollView>
                 </View>
                 
                 <View style={styles.reviews}>
                   
                 <ScrollView horizontal={true}>
                 
                 <View style={{width: 250, height: 120, borderRadius: 40, backgroundColor: '#131313', marginRight: 10,padding: 11}}>
                 <View style={{ display:"flex",flexDirection:"row", justifyContent:"space-between" }}>
                            <View><Text style={{ color: '#9f9d9e',paddingLeft:10 }}>Username</Text></View>
                            <View>
                                <Text> <Entypo name="star" size={15} color="#B615DE" />
                            <Entypo name="star" size={15} color="#B615DE" />
                            <Entypo name="star" size={15} color="#B615DE" /></Text>
                           </View>
                            
                        </View>
                        <Text style={{paddingLeft:10, color: '#9f9d9e',fontSize: 12 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</Text>
                        <View><Text style={{ color: '#9f9d9e',paddingLeft:130,fontSize: 10 }}>18/10/2022</Text></View>
                 </View>
                 <View style={{width: 250, height: 120, borderRadius: 40, backgroundColor: '#131313', marginRight: 10,padding: 11}}>
                 <View style={{ display:"flex",flexDirection:"row", justifyContent:"space-between" }}>
                            <View><Text style={{ color: '#9f9d9e',paddingLeft:10 }}>Username</Text></View>
                            <View>
                                <Text> <Entypo name="star" size={15} color="#B615DE" />
                            <Entypo name="star" size={15} color="#B615DE" />
                            <Entypo name="star" size={15} color="#B615DE" /></Text>
                           </View>
                            
                        </View>
                        <Text style={{paddingLeft:10, color: '#9f9d9e',fontSize: 12 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</Text>
                        <View><Text style={{ color: '#9f9d9e',paddingLeft:130,fontSize: 10 }}>18/10/2022</Text></View>

                 </View>
                 <View style={{width: 250, height: 120, borderRadius: 40, backgroundColor: '#131313', marginRight: 10,padding: 11}}>
                 <View style={{ display:"flex",flexDirection:"row", justifyContent:"space-between" }}>
                            <View><Text style={{ color: '#9f9d9e',paddingLeft:10 }}>Username</Text></View>
                            <View>
                                <Text> <Entypo name="star" size={15} color="#B615DE" />
                            <Entypo name="star" size={15} color="#B615DE" />
                            <Entypo name="star" size={15} color="#B615DE" /></Text>
                           </View>
                            
                        </View>
                        <Text style={{paddingLeft:10, color: '#9f9d9e',fontSize: 12 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</Text>
                        <View><Text style={{ color: '#9f9d9e',paddingLeft:130,fontSize: 10 }}>18/10/2022</Text></View>

                 </View>
                  
                 </ScrollView>
                  
                </View>
                <Pressable >
                <View style={{alignSelf: 'center'}}>
                     <CustomeBtn text={'Request service'} onPress={sayHello}/>
                </View>
                </Pressable>
                
            </SafeAreaView>
        </View>
    )
}
export default ServitorProfile;

const styles = StyleSheet.create({
     container: {
        height: '100%',
        backgroundColor: 'black'
     },
     image: {
        marginTop: '8%',
        width:100,
        height:100,
        borderRadius:150,
        backgroundColor: '#9f9d9e',
        alignSelf: 'center'
     },
     servicePics: {
        marginTop: '8%',
        marginLeft: '4%',
        flexDirection: 'row',
     },
     reviews: {
        marginTop: '5%',
        flexDirection: 'row',
        height: 140,
        paddingLeft: '4%'
     }
})