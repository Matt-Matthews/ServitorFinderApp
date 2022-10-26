import React from 'react';
import { View, ScrollView, KeyboardAvoidingView, Image, StyleSheet, Pressable, Dimensions, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Icon } from 'react-native-gradient-icon';
import Header from '../components/Header';
import * as ImagePicker from 'expo-image-picker';
import CustomInput from '../components/CustomInput';
import CustomeBtn from '../components/CustomeBtn';
import { collection, addDoc, getDocs } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { auth, firestore,storage } from '../config/firebase';
import { useState, useEffect } from 'react';


export default function AccountSettings({ navigation }) {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [telNo, setTelNo] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [image, setImage] = useState('');
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const userCollectionRef = collection(firestore, "users")

    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      setUsers(
        data.docs.map((doc) => ({
          name: doc.data().firstName,
          cellphone: doc.data().telNo,
          userId: doc.data().userId,
          email: doc.data().email,
          surname: doc.data().lastName,
          password: doc.data().password,
        }))
      );
    }
    getUsers();
  }, []);

  let user = [];
  for (let i = 0; i < users.length; i++) {
    if (users[i].userId === auth.currentUser.uid) {
      user.push(users[i]);

    }
    console.log(user)
    console.log(auth.currentUser.uid)


  }

  //Picking image
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const updateUser = async () => {
    const storageRef = ref(
      storage,
      `/images/${Date.now()}${image.na}`
    );
    const uploadImage = uploadBytesResumable(storageRef, image);
    uploadImage.on(
      "state_changed",
      (snapshot) => {
        const progressPercent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
      },
      (err) => {
        console.log(err);
      },
      getDownloadURL(uploadImage.snapshot.ref).then((url) => {
        firebase.firestore().collection("users").where("uid", "==", auth.currentUser.uid)
          .get()
          .then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
              console.log(doc.id, " => ", doc.data());
              doc.update({
                firstName: firstName,
                lastName: lastName,
                telNo: telNo,
                email: email,
                image: url,
                password: password,

              })
              console.log("This is firstname",firstName)
            });
          }).then(() => {
            alert("user updated", { type: "success" });

          })
          .catch((err) => {
            alert("updating user", { type: "error" });
          });
      }));
  };



  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      <Header navigation={navigation} withBackIcon={true} />

      <ScrollView style={{ backgroundColor: 'black' }}>
        <View style={{ marginTop: Dimensions.get('window').height * 0.04, }} />
        {user.map((info, id) =>
        (
          <KeyboardAvoidingView behavior="position">
            <View style={{ ...styles.imageContainer }}>
              <View style={styles.container}>
                <Image
                  source={{ uri: image }}
                  style={{ ...styles.img }}
                />
                <View style={{ ...styles.imageIcon }}>
                  <Pressable
                    onPress={pickImage} >

                    <Icon

                      size={32}
                      colors={[
                        { color: "#B615DE", offset: "0", opacity: "1" },
                        { color: "#D428A8", offset: "1", opacity: "1" },
                      ]}
                      name="md-camera"
                      type="ionicon"
                    />
                  </Pressable>
                </View>
              </View>
            </View>
            <View style={{ marginTop: Dimensions.get('window').height * 0.04, }} />
            <View style={{ alignItems: 'center' }}>
              /*
              using setValue and value on together on the custominput makes typing impossible for updating data
               */
              <CustomInput icon='md-person-sharp' placeholder={info.name}  setValue={setFirstName}/>
              <CustomInput icon='md-person-sharp'   placeholder={info.surname} setValue={setLastName}/>
              <CustomInput icon='md-call-sharp'  placeholder={info.cellphone} setValue={setTelNo}/>
              <CustomInput icon='md-mail-sharp'  placeholder={info.email} setValue={setEmail}/>
              <CustomInput icon='md-lock-closed' password={true}  placeholder={info.password} setValue={setPassword}/>
              <CustomInput icon='md-lock-closed' password={true} placeholder='Confirm password' setValue={setConfPassword}/>

              <View style={{ marginTop: Dimensions.get('window').height * 0.04, }} />

              <CustomeBtn
                onPress={updateUser} text={'Update'} />
              <View style={{ marginTop: Dimensions.get('window').height * 0.02, }} />

            </View>

          </KeyboardAvoidingView>
        ))}
      </ScrollView>

    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    position: 'relative',
    borderRadius: Dimensions.get('window').width * 0.5,
    width: Dimensions.get('window').width * 0.5,
    height: Dimensions.get('window').width * 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  img: {
    borderRadius: Dimensions.get('window').width * 0.5,
    width: '100%',
    height: '100%',
  },
  imageIcon: {
    position: 'absolute',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 5,
    backgroundColor: 'rgba(0,0,0,0.3)',
    width: '100%',
    bottom: 0,
    height: '24%',
    borderBottomRadius: Dimensions.get('window').width * 0.5,
    borderBottomRightRadius: Dimensions.get('window').width * 0.5,
    borderBottomLeftRadius: Dimensions.get('window').width * 0.5,
  },
  icon: {
    opacity: 1
  },

  submainview: {
    backgroundColor: '#131313',
    borderRadius: Dimensions.get('window').height * 0.07,
    paddingHorizontal: Dimensions.get('window').width * 0.03,
    height: Dimensions.get('window').height * 0.07,
    width: '93%',
    alignSelf: 'center',
    marginBottom: Dimensions.get('window').height * 0.02,
    alignItems: 'center',
  },
  inputs: {
    fontSize: 16,
  }
});