import { View, StyleSheet , Text, ScrollView, Pressable,Image, Dimensions} from "react-native";
import Header from "../components/Header";
import CustomeBtn from "../components/CustomeBtn";
import {SafeAreaView} from 'react-native-safe-area-context';
import { Entypo } from '@expo/vector-icons';
import Ratings from "../components/Ratings";
import AccountPic from "../components/AccountPic";
import RatingsCard from "../components/RatingsCard";
import { Icon } from "react-native-gradient-icon";


const img = 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80';

function ServitorProfile({navigation}){

    function sayHello(){
        navigation.navigate('RequestForm')
    }
    return(
        <View style={styles.container}>
            <SafeAreaView>
                <Header widthMsg={true} navigation={navigation} withBackIcon={true}/>
                <View style={{marginTop: Dimensions.get('window').height*0.04,}} />
                 {/* <View style={styles.image}> */}
                 <Image source={{uri:img}} style={{width: Dimensions.get('window').width*0.3,
                                      height: Dimensions.get('window').width*0.3, 
                                      borderRadius:Dimensions.get('window').width*0.3,
                                      alignSelf: 'center',
                                      }}/>
                 {/* </View> */}
                 <View style={{marginTop: '10%', flexDirection: 'row', marginLeft: 15, justifyContent: 'space-between'}}>
                    <View>
                        <Text style={{fontSize: 20,color: '#fff',fontWeight: '600',}}>User name</Text>
                        <Text style={{fontSize: 15,color: '#fff',fontWeight: '600',}}>Service name</Text>
                    </View>
                        <View style={{flexDirection: 'row', marginRight: '3%'}}>
                                <Ratings ratings={4} />
                        </View>
                 </View>
                 <View style={{marginLeft: '4%', width: '75%', marginTop: '2%'}}>
                    <Text style={{color: '#fff', fontSize: 15}}>
                       Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                    </Text>
                 </View>
                 <View style={styles.servicePics}>
                 <ScrollView horizontal={true}>
                    <AccountPic />
                    <AccountPic />
                    <AccountPic />
                    <AccountPic />
                    <Pressable style={{...styles.addBtn}}>
                 <Icon  
                    size={Dimensions.get('window').height*0.04}
                    colors={[
                        {color:"#B615DE",offset:"0",opacity:"1"},
                        {color:"#D428A8",offset:"1",opacity:"1"},
                    ]}
                    style={{alignSelf: 'center',}}
                    name="md-add" 
                    type="ionicon" 
                />
                 </Pressable>
                 </ScrollView>
                 
                 </View>
                 
                 <View style={styles.reviews}>
                   
                 <ScrollView horizontal={true}>
                 
                 <RatingsCard />
                 <RatingsCard />
                 <RatingsCard />
                 <RatingsCard />
                  
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
     },
     addBtn: {
         width: Dimensions.get('window').width* 0.3, 
         height: Dimensions.get('window').height* 0.2, 
         borderRadius: 25, 
         backgroundColor: '#131313', 
         marginRight: 10,
         justifyContent: 'center',
         alignItems: 'center',
         display: 'flex'
      }
})