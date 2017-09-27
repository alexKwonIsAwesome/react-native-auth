import React, { Component } from "react";
import { View, Text } from "react-native";
import firebase from "firebase";
import { Header } from "./components/common";

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyCYJ97CVIrZv6mgGlb1_PwW0Kg7IhkX5Dg",
            authDomain: "authentication-e04e4.firebaseapp.com",
            databaseURL: "https://authentication-e04e4.firebaseio.com",
            projectId: "authentication-e04e4",
            storageBucket: "authentication-e04e4.appspot.com",
            messagingSenderId: "91235170341"
        });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <Text>An App!</Text>
            </View>
        );
    }
}

export default App;