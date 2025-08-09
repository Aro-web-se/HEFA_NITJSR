import { View, Text, StyleSheet, Alert, Button} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import PrimaryButton from "../components/PrimaryButton";
import { SubTitle1 } from "../components/styles";

const  LogOut = ({navigation}) => {
    function handSubmit(){
          Alert.alert(
      "Are you sure",
      "Are you sure you want to log out? You'll need to log in again to access your account",
      [
        { text: "Cancel", style: "cancel" },
        { 
          text: "LogOut", 
          style: "default", 
          onPress: () => navigation.navigate("Login") 
        },
      ]
    );
       
    }
    return(
        <View style={styles.Container}>
            <View style={styles.InnerContainer}>
            <View>
           <SubTitle1>Are you sure you want to LogOut?  </SubTitle1>
           </View>
           <View>
            <PrimaryButton onPressed={handSubmit}>LogOut</PrimaryButton>
           </View>
           </View>
        </View>
    );
}

export default LogOut;

const styles = StyleSheet.create({
    Container:{
        flex: 1,
         padding: 20,
         alignItems: 'center'
    },
    InnerContainer:{
        alignItems: 'center',
        padding: 30,
        borderRadius: 20,
        justifyContent: 'center',
        backgroundColor: "#E6D3B3",
    },
    Button:{
        
    }
})