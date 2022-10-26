import { View, StyleSheet , Text, ScrollView,Image, TextInput, Dimensions, KeyboardAvoidingView} from "react-native";
import {SafeAreaView} from 'react-native-safe-area-context'
import Header from "../components/Header";
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import CustomeBtn from "../components/CustomeBtn";
import CustomInput from "../components/CustomInput";

const img = 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80';

function RequestForm({navigation}){
    function Confirm (){
        navigation.navigate('Home')
    }
    
    return(
        <View style={styles.container}>
              <SafeAreaView>
                  <Header navigation={navigation} withBackIcon={true} />
                  <ScrollView>
                  <KeyboardAvoidingView behavior="position">
                  <View style={styles.top}>
                    <View style={{width:Dimensions.get('window').width*0.2, height:Dimensions.get('window').width*0.2, backgroundColor: '#9f9d9e', borderRadius:Dimensions.get('window').width*0.2}}>
                      <Image source={{uri:img}} style={{width: Dimensions.get('window').width*0.2,height: Dimensions.get('window').width*0.2, borderRadius:Dimensions.get('window').width*0.2}}/>
                         
                    </View>
                    <View>
                        <Text style={{color: '#fff', fontSize: 18}}>Your User name</Text>
                        <Text style={{color: '#fff', fontSize: 15}}>Your Email</Text>
                        <Text style={{color: '#fff'}}>Your Mobile number</Text>
                    </View>
                  </View>
                  <View style={styles.details}>
                        <Text style={{color: '#fff', fontSize: 18, fontWeight: 'bold', marginBottom: 5,}}>User name</Text>
                        <Text style={{color: '#fff', fontSize: 16,}}>Service name</Text>
                  </View> 
                  <View style={{marginTop: Dimensions.get('window').height*0.04,}} />
                  <CustomInput icon='md-calendar-sharp' placeholder='Date' />
                  <CustomInput icon='md-location-sharp' placeholder='Address' />

                  <View style={styles.desc}>
                       <TextInput style={{color: '#fff', fontSize: 16}}placeholder='Description' placeholderTextColor='gray' />
                  </View>
                  <View style={styles.button}>
                        <CustomeBtn text={'Confirm'} onPress={Confirm}/>
                  </View>
                  </KeyboardAvoidingView>
                  </ScrollView>
              </SafeAreaView>
        </View>
    )
}
export default RequestForm;

const styles=StyleSheet.create({
    container:{
        height: '100%',
        backgroundColor: 'black'
    },
    top:{
        marginTop: '10%',
        width: '90%',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    details: {
        marginTop: '15%',
        width: '90%',
        alignSelf: 'center'
    },
     date: {
        marginTop: '10%',
        width: '90%',
        height: 70,
        alignSelf: 'center',
        backgroundColor: '#131313',
        borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
     },
     location: {
        marginTop: '5%',
        width: '90%',
        height: 70,
        alignSelf: 'center',
        backgroundColor: '#131313',
        borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
     },
     desc:{
        marginTop: '5%',
        width: '90%',
        alignSelf: 'center',
        height: 150,
        backgroundColor: '#131313',
        padding: 15,
        borderRadius: 25
     },
     button: {
        marginTop: '12%',
        height:80,
        alignSelf: 'center',
     }

})