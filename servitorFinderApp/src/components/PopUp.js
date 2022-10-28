import { View, Text,StyleSheet} from "react-native";
import React from "react";
import { Icon } from "react-native-gradient-icon";

export default function PopUp() {
  return (
    <View style={styles.popUp}>
        <Icon  
                    size={Dimensions.get('window').height*0.04}
                    colors={[
                        {color:"#B615DE",offset:"0",opacity:"1"},
                        {color:"#D428A8",offset:"1",opacity:"1"},
                    ]}
                    name="md-log-out-outline" 
                    type="ionicon" 
                />
                <Text>Logout</Text>
        </View>
  );
}
const styles = StyleSheet.create({
    popUp: {
        position: 'absolute',
        zIndex: 3,
        elevation: 3, 
        width: Dimensions.get('window').width*0.35, 
        padding:Dimensions.get('window').height*0.01, 
        backgroundColor: 'red',
        right: 10,
        bottom: -50,
        flexDirection: 'row',
    }
})