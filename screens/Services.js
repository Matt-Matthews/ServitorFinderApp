import { View, ScrollView, StyleSheet, StatusBar, } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import ServicesFilter from "../components/ServicesFilter";
import ServitorCard from "../components/ServitorCard";

export default function Services() {
const [index,setIndex] = React.useState(0);
  return (
    <SafeAreaView >
      <StatusBar backgroundColor="#000" barStyle="light-content" />
        <Header withBackIcon={false} />
        <View style={styles.container}>
          <ServicesFilter index={index} setIndex={setIndex} />
          <ScrollView>
            <ServitorCard />
          </ScrollView>
        </View>
        

    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
    container: {
      position: 'relative',
      backgroundColor: "#000",
      height: '100%',
    },
});