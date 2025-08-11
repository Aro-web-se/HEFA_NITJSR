import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from "react-native";
import PrimaryButton from "./../components/PrimaryButton"
import axios from "axios";

export default function AddHomestay({ navigation }) {
    const [form, setForm] = useState({
        title: "",
        location: "",
        pricePerNight: "",
        description: "",
        image: "",
        sellerName: ""
    });

    const handleChange = (key, value) => setForm({ ...form, [key]: value });

    const handleSubmit = async () => {
        await axios.post("http://localhost:5000/homestays", form);
        alert("Homestay added!");
        navigation.goBack();
    };

    return (
    <View style={styles.OuterContainer}>
        <ScrollView style={styles.container}>
            {["title", "location", "pricePerNight", "description", "image", "sellerName"].map((field) => (
                <TextInput
                    key={field}
                    style={styles.input}
                    placeholder={field}
                    value={form[field]}
                    onChangeText={(text) => handleChange(field, text)}
                />
            ))}
            <PrimaryButton onPressed={handleSubmit} >Add Homestay</PrimaryButton>
        </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    OuterContainer:{
        paddingTop: 90,
    },
    container: { 
        padding: 20 
    },
    input: { 
        borderWidth: 1, 
        padding: 10, 
        marginBottom: 10, 
        borderRadius: 5 
    },
});
