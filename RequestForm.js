import { View, StyleSheet , Text, ScrollView,Image} from "react-native";
import {SafeAreaView} from 'react-native-safe-area-context'
import Header from "./src/components/Header";
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import CustomeBtn from "./src/components/CustomeBtn";

const img = 'https://www.investnational.com.au/wp-content/uploads/2016/08/person-stock-2.png'
function RequestForm({navigation}){
    function Confirm (){
        navigation.navigate('Home')
    }
    
    return(
        <View style={styles.container}>
              <SafeAreaView>
                  <Header withBackIcon={true} />
                  <View style={styles.top}>
                    <View style={{width:70, height:70, backgroundColor: '#9f9d9e', borderRadius:150}}>
                      <Image source={{uri:img}} style={{width: 70,height: 70, borderRadius:150}}/>
                         
                    </View>
                    <View>
                        <Text style={{color: '#9f9d9e', fontSize: 18}}>Your User name</Text>
                        <Text style={{color: '#9f9d9e', fontSize: 15}}>Your Email</Text>
                        <Text style={{color: '#9f9d9e'}}>Your Mobile number</Text>
                    </View>
                  </View>
                  <View style={styles.details}>
                        <Text style={{color: '#9f9d9e', fontSize: 16}}>User name</Text>
                        <Text style={{color: '#9f9d9e', fontSize: 16}}>Service name</Text>
                  </View> 
                  <View style={styles.date}>
                    <View>
                     <MaterialIcons name="date-range" size={24} color="#8B8686" />
                    </View>
                    <View>
                        <Text style={{color: '#9f9d9e', fontSize: 16}}>Date</Text>
                    </View>
                  </View>

                  <View style={styles.location}>
                    <View>
                    <Entypo name="location-pin" size={24} color="#8B8686" />
                    </View>
                    <View>
                        <Text style={{color: '#9f9d9e', fontSize: 16}}>Address</Text>
                    </View>
                  </View>

                  <View style={styles.desc}>
                       <Text style={{color: '#9f9d9e', fontSize: 16}}>Description</Text>
                  </View>
                  <View style={styles.button}>
                        <CustomeBtn text={'Confirm'} onPress={Confirm}/>
                  </View>
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
        justifyContent: 'space-between'
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