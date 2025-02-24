import { Link, router } from "expo-router";
import { Dimensions, Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from '@/constants/Colors';
import { useState } from "react";

export default function Index() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('@/assets/images/logo.png')} />
            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor={Colors.dark.text}
                onChangeText={(value) => setEmail(value)}
            />
            <TextInput
                secureTextEntry={true}
                style={styles.input}
                placeholder="Password"
                placeholderTextColor={Colors.dark.text}
                onChangeText={(value) => setPassword(value)}
            />
            <Pressable>
                <Text style={styles.loginButton} onPress={() => { router.replace('/(tabs)/home') }}>
                    Sign in
                </Text>
            </Pressable>
            <Pressable>
                <Text style={styles.registerButton} onPress={() => { router.replace('/register') }}>
                    Create a new account
                </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: "#00003C",
        padding: 10,
        width: "100%"
    },
    loginButton: {
        textAlign: "center",
        padding: 10,
        backgroundColor: Colors.light.tint,
        color: "#fff",
        marginTop: 20,
        borderRadius: 3
    },
    registerButton: {
        textAlign: "center",
        padding: 10,
        backgroundColor: "#00003C",
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 3,
        color: "#fff",
        marginTop: 10
    },
    input: {
        borderColor: Colors.light.tint,
        color: Colors.dark.text,
        borderWidth: 1,
        borderRadius: 3,
        marginBottom: 10
    },
    logo: {
        flex: 1,
        flexDirection: "row",
        width: "100%",
        height: undefined,
        resizeMode: 'contain'
    }
})