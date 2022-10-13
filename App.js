import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import CustomeBtn from './src/components/CustomeBtn';
import Header from './src/components/Header';

export default function App() {
  const {width} = useWindowDimensions();

  return (
    <View style={styles.container}>
      <Header withBackIcon={true} />
      
      <CustomeBtn text={'Confirm'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
