import React, { Component } from "react";
import { View } from "react-native";
import firebase from "firebase";
import { Header, Button, Spinner } from "./components/common";
import LoginForm from "./components/LoginForm";

class App extends Component {
    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyCYJ97CVIrZv6mgGlb1_PwW0Kg7IhkX5Dg",
            authDomain: "authentication-e04e4.firebaseapp.com",
            databaseURL: "https://authentication-e04e4.firebaseio.com",
            projectId: "authentication-e04e4",
            storageBucket: "authentication-e04e4.appspot.com",
            messagingSenderId: "91235170341"
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch(this.state.loggedIn) {
            case true:
                return (
                    <Button onPress={() => firebase.auth().signOut()}>
                        Log out
                    </Button>
                );
            case false:
                return <LoginForm />;
            default: 
                return <Spinner size="small" />;
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;