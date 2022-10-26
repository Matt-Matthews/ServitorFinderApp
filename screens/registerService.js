import React from "react";
import { StyleSheet, Text, View, Image, StatusBar, Dimensions, ScrollView, KeyboardAvoidingView } from "react-native";
import icon from '../assets/images/logo.png';
import { useState } from "react";
import CustomeBtn from "../components/CustomeBtn";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomInput from "../components/CustomInput";
import RegisterFilter from "../components/RegisterFilter";

export default function RegisterService() {
    const [index, setIndex] = useState(0);
 
    return (
        <SafeAreaView style={{backgroundColor: '#000', height: '100%'}}>
            <StatusBar backgroundColor="#000" barStyle="light-content" />
            <ScrollView>
                <KeyboardAvoidingView behavior="position">
            <View style={{ backgroundColor: "rgba(0, 0, 0, 1)", width: "100%",  }} >
                <Text style={styles.skip}>Skip for now</Text>
                <View style={{ justifyContent: "center" }}>
                    <Image source={icon} style={styles.logo} />
                </View>
                <Text style={styles.Reg}>Register service</Text>
                <View style={styles.Fregmant}>
                    <RegisterFilter index={index} setIndex={setIndex} />
                </View>
                {
                    index === 0 &&<View >
                        <View style={styles.viewInput}>
                            <CustomInput icon='md-person-sharp' placeholder='Id number' />
                            <CustomInput icon='md-location-sharp' placeholder='Address' /> 
                        </View>
                        <CustomInput icon='md-construct-sharp' placeholder='Service type' />
                        <CustomInput icon='md-document-attach-sharp' placeholder='Upload id' fileInput={true} />
                        <CustomInput icon='md-home-sharp' placeholder='Proof of residence' fileInput={true} />
                        <CustomInput icon='md-document-attach-sharp' placeholder='Upload cv' fileInput={true} />
                        <CustomInput icon='md-document-attach-sharp' placeholder='Supporting documents' fileInput={true} />
                       
                    </View>
                }
                {
                    index===1&&<View >
                    <View style={styles.viewInput}>
                        <CustomInput icon='md-person-sharp' placeholder='Company name' />
                        <CustomInput icon='md-create-sharp' placeholder='Registration number' />
                    </View>
                    <CustomInput icon='md-construct-sharp' placeholder='Service type' />
                    <CustomInput icon='md-location-sharp' placeholder='Address' />
                    <CustomInput icon='md-document-attach-sharp' placeholder='Upload certificate' fileInput={true} />
                    
                </View>
                }
                 <View style={{marginTop: Dimensions.get('window').height*0.04,}} />
                        <View style={{alignSelf: 'center',}}>
                            <CustomeBtn text='Upload' />
                        </View>
                        <View style={{marginTop: Dimensions.get('window').height*0.04,}} />
            </View>
            </KeyboardAvoidingView>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    skip: {
        color: "white",
        alignSelf: "flex-end",
        color: "rgba(182, 21, 222, 100)",
        marginTop: 20,
        right: 20,
        position: "absolute"
    },
    logo: {
        width: 130,
        height: 130,
        marginBottom: 5,
        justifyContent: "center",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 25
    },
    Reg: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#fff',
        alignSelf: 'center'
    },
    viewInput: {
        marginTop: Dimensions.get('window').height*0.02,
    },
   
    chooseFile: {
        color: "white",
        marginLeft: 5,

        fontSize: 16,
        width: 100,
        backgroundColor: ' rgba(182, 21, 222, 1) 0%, rgba(212, 40, 168, 1) 100%',
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25,
        height: 30,
        marginTop: 10

    },
    uploadView: {
        width: "80%",

        color: "#FFFAFA",
        borderWidth: 5,

        margin: 3,
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: 8,

        borderRadius: 25,

        position: "relative",
        flexDirection: "row",


    },
    view2: {

        backgroundColor: ' rgba(182, 21, 222, 1) 0%, rgba(212, 40, 168, 1) 100%',
        alignItems: 'flex-end',
        alignSelf: 'flex-end',
        width: 100,
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25,
        height: 52,

    },
    view1: {

        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        alignSelf: 'flex-start',
        height: 52,
        width: 200,
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
        position: "relative",
        flexDirection: "row",

        marginLeft: "auto",
        marginRight: "auto",


    },

});
