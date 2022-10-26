import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import ChooseFile from "./chooseFile";
import { Ionicons } from "@expo/vector-icons";

export default function FileInput({icon,name}) {
    return (
        <View style={styles.uploadView}>

            <View style={styles.view1}>
                <Ionicons name={icon} size={20} color="gray" />
                <Text style={{ fontSize: 16, color: "white", marginLeft: 10 }}>{name}</Text>
            </View>
            <View>
                <ChooseFile />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
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
        width: Dimensions.get('window').width*0.93,

        color: "#FFFAFA",
        borderWidth: 5,
        backgroundColor: 'red',
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

        backgroundColor:'#131313',
        borderTopLeftRadius: Dimensions.get('window').height* 0.07,
        borderBottomLeftRadius: Dimensions.get('window').height* 0.07,
        paddingHorizontal: Dimensions.get('window').width*0.03,
        height: Dimensions.get('window').height* 0.07,
        width:Dimensions.get('window').width*0.63,
        alignSelf: 'center',
        marginBottom: Dimensions.get('window').height* 0.02,
        alignItems: 'center',
        flexDirection: 'row'
    },

})