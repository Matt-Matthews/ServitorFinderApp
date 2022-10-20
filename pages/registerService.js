import React from "react";
import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import icon from "../assets/logo.png";
import { TouchableOpacity, Pressable } from 'react-native';
import { useState } from "react";
import CustomeBtn from "./CustomeBtn";
import ChooseFile from "./chooseFile";
import CustomFragment from "./customFragment";
import CustomFragment2 from "./customFragment2";
import { Ionicons, FontAwesome, FontAwesome5, EvilIcons, MaterialIcons } from "@expo/vector-icons";




function RegisterService() {



    const [index, setIndex] = useState(0);
    console.log(index);
    const [id, setId] = useState('');
    const [address, setAddress] = useState('');
    const [company, setCompany] = useState('');
    const [regNum, setRegNum] = useState('');
    const [fileResponse, setFileResponse] = useState([]);
    const[jobType,setJobType]=useState("")
    console.log(jobType)


    // const handleDocumentSelection = useCallback(async () => {
    //     try {
    //       const response = await DocumentPicker.pick({
    //         presentationStyle: 'fullScreen',
    //       });
    //       setFileResponse(response);
    //     } catch (err) {
    //       console.warn(err);
    //     }
    //   }, []);
    return (

        <View style={{ flex: 1, backgroundColor: "rgba(0, 0, 0, 1)", width: "100%" }} >
            <Text style={styles.skip}>Skip for now</Text>
            <View style={{ justifyContent: "center" }}>
                <Image source={icon} style={styles.logo} />




            </View>


            <Text style={styles.Reg}>Register service</Text>
            <View style={styles.Fregmant}>
                <Pressable
                    onPress={() => setIndex(0)}

                >{
                    index===0?<CustomFragment/>
                    :
                    
      
                    
                    <Text style={{ color: "white", marginLeft: 18, marginRight: 20, fontSize: 20 }}>Individual</Text>
                }
                    
                </Pressable>
                <Pressable
                    onPress={() => setIndex(1)}
                >
                  {
                    index===1?<CustomFragment2/>
                    :
                    
      
                    
                    <Text style={{ color: "white", marginLeft: 18, marginRight: 20, fontSize: 20 }}>Company</Text>
                }
                </Pressable>
            </View>
            {index === 0 &&
                <View >
                    <View style={styles.viewInput}>
                        <View style={{ width: "5%" }}>
                            <FontAwesome5 name="user" size={20} color="white" style={styles.iconStyle} />
                        </View>
                        <View style={{ width: '100%' }}>
                            <TextInput style={styles.inputs2}

                                value={id}
                                placeholder="Id number"
                                onChangeText={text => setId(text)} />
                        </View>

                    </View>
                    <View style={styles.viewInput}>
                        <View style={{ width: "5%" }}>
                            <EvilIcons name="location" size={26} color="white" style={styles.iconStyle} />
                        </View>
                        <View style={{ width: '100%' }}>
                            <TextInput style={styles.inputs2}
                                value={address}
                                placeholder="Address"
                                onChangeText={text => setAddress(text)} />
                        </View>

                    </View>


                    <View style={styles.uploadView}>
                        <View >

                            <Text style={{ color: 'white', marginTop: 8 }}>Service type:</Text>
                        </View>
                        <View
                        // onPress={handleDocumentSelection}
                        >
                            <select style={styles.select}
                            onChange={(e)=>setJobType(e.target.value)}>
                                <option value="Plumber">Plumber</option>
                                <option value="Electrician">Electrician</option>
                                <option value="Gardener">Gardener</option>
                            </select>
                        </View>
                    </View>
                    <View style={styles.uploadView}>

                        <View style={styles.view1}>
                            <FontAwesome name="id-card-o" size={18} color="white" style={styles.iconStyle} />
                            <Text style={{ fontSize: 16, color: "white", marginTop: 10, marginLeft: 10 }}>Upload id</Text>
                        </View>
                        <View
                        // onPress={handleDocumentSelection}
                        >
                            <ChooseFile />
                        </View>
                    </View>
                    <View style={styles.uploadView}>
                        <View style={styles.view1}>

                            <FontAwesome5 name="house-user" size={18} color="white" style={styles.iconStyle} />
                            <Text style={{ fontSize: 16, color: "white", marginTop: 10, marginLeft: 10 }}>Proof of residence</Text>
                        </View>
                        <View
                        // onPress={handleDocumentSelection}
                        >
                            <ChooseFile />
                        </View>
                    </View>
                    <View style={styles.uploadView}>
                        <View style={styles.view1}>
                            <MaterialIcons name="upload-file" size={24} color="white" style={styles.iconStyle} />
                            <Text style={{ fontSize: 16, color: "white", marginTop: 10, marginLeft: 10 }}>Upload cv</Text>
                        </View>
                        <View
                        // onPress={handleDocumentSelection}
                        >
                            <ChooseFile />
                        </View>
                    </View>
                    <View style={styles.uploadView}>
                        <View style={styles.view1}>
                            <MaterialIcons name="upload-file" size={24} color="white" style={styles.iconStyle} />

                            <Text style={{ fontSize: 16, color: "white", marginTop: 10, marginLeft: 10 }}>Supporting documents</Text>
                        </View>
                        <View
                        // onPress={handleDocumentSelection}
                        >
                            <ChooseFile />
                        </View>
                    </View>
                    <View style={styles.btn}> <CustomeBtn />
                    </View>
                </View>
            }
            {index === 1 &&
                <View>
                  
                 
                    <View style={styles.viewInput}>
                        <View style={{ width: "5%" }}>
                            <FontAwesome5 name="user" size={24} color="white" style={styles.iconStyle} />
                        </View>
                        <View style={{ width: '100%' }}>
                        <TextInput style={styles.inputs2}
                        value={company}
                        placeholder="Company name"
                        onChangeText={text => setCompany(text)} />
                        </View>

                    </View>
                    <View style={styles.viewInput}>
                        <View style={{ width: "5%" }}>
                        <MaterialIcons name="app-registration" size={24} color="white" style={styles.iconStyle}/>
                        </View>
                        <View style={{ width: '100%' }}>
                        <TextInput style={styles.inputs2}
                        value={regNum}
                        placeholder="Registration number"
                        onChangeText={text => setRegNum(text)} />
                        </View>

                    </View>
                    
                    <View style={styles.uploadView}>
                        <View >

                            <Text style={{ color: 'white', marginTop: 8 }}>Service type:</Text>
                        </View>
                        <View
                        // onPress={handleDocumentSelection}
                        >
                            <select style={styles.select}
                                onChange={(e)=>setJobType(e.target.value)}>
                                <option value="Plumber">Plumber</option>
                                <option value="Electrician">Electrician</option>
                                <option value="Gardener">Gardener</option>
                            </select>
                        </View>
                    </View>
                    
                    <View style={styles.viewInput}>
                        <View style={{ width: "5%" }}>
                            <EvilIcons name="location" size={26} color="white" style={styles.iconStyle} />
                        </View>
                        <View style={{ width: '100%' }}>
                            <TextInput style={styles.inputs2}
                                value={address}
                                placeholder="Address"
                                onChangeText={text => setAddress(text)} />
                        </View>

                    </View>

                    <View style={styles.uploadView}>
                        <View style={styles.view1}>
                            <FontAwesome name="id-card-o" size={18} color="white" style={styles.iconStyle} />
                            <Text style={{ fontSize: 16, color: "white", marginTop: 10, marginLeft: 10 }}>Upload certificate</Text>
                        </View>
                        <View
                        // onPress={handleDocumentSelection}
                        >
                            <ChooseFile />
                        </View>
                    </View>
                    <View style={styles.btn}> <CustomeBtn />
                    </View>
                </View>
            }

        </View>
    );
}
const styles = StyleSheet.create({
    skip: {
        color: "white",
        alignSelf: "flex-end",
        color: "rgba(182, 21, 222, 100)",
        marginTop: 20,
        marginRight: 10,
        fontWeight: 550,
        position: "absolute"
    },
    iconStyle: {
        marginTop: 12,
        marginLeft: 5
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
        color: 'rgba(255, 255, 255, 1)',
        textAlign: "center",
        fontSize: 32,

        fontFamily: "Inter, sans-serif",
        fontWeight: 700,
        marginBottom: 20,

    },
    Fregmant: {
        position: "relative",
        flexDirection: "row",
        alignItems: "center",

        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: 'rgba(19, 19, 19, 1)',
        width: 232,
        height: 52,
        marginBottom: 13,
        borderRadius: 25,


    },
    viewInput: {

        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        alignSelf: 'flex-start',
        height: 52,
        borderRadius: 25,
        position: "relative",
        flexDirection: "row",

        marginLeft: "auto",
        marginRight: "auto",
        width: "80%",
        margin: 3,


    },
    input: {
        width: "80%",
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        color: "#FFFAFA",
        borderWidth: 5,
        padding: 10,
        margin: 3,
        marginLeft: "auto",
        marginRight: "auto",

        padding: 10,
        borderRadius: 25,
        borderWidth: 2,
        height: 52

    },
    inputs2: {
        width: "80%",
        backgroundColor: 'transparent',
        color: "#FFFAFA",
        borderWidth: 5,
        padding: 10,
        margin: 3,
        marginLeft: "auto",
        marginRight: "auto",


        borderRadius: 25,
        borderWidth: 'none',
        height: 52,
        borderColor: 'none'
    },
    // textInp: {
    //     position: "relative",
    //     flexDirection: "row",
    // },
    select: {

        backgroundColor: 'rgba(19, 19, 19, 1)',
        height: 30,
        width: 150,
        margin: 3,
        color: 'white',
        borderRadius: 25,
        marginLeft: 70,

        // border: 2px solid rgba(182, 21, 222, 1);
        // box-sizing: border-box;
        // width: 207px;
        // height: 39px;
        // border-radius: 25px;
    },


    btn: {
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 10,
    },

    // viewStyle: {
    //     width: "80%",
    //     backgroundColor: 'rgba(52, 52, 52, 0.8)',
    //     color: "#FFFAFA",
    //     borderWidth: 5,
    //     padding: 10,
    //     margin: 3,
    //     marginLeft: "auto",
    //     marginRight: "auto",
    //     borderRadius: 8,
    //     padding: 10,
    //     borderRadius: 25,
    //     borderWidth: 2,
    //     position: "relative",
    //     flexDirection: "row",

    // },


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

export default RegisterService;


