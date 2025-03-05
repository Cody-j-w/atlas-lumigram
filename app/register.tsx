import { Link, router } from "expo-router";
import { Dimensions, Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from '@/constants/Colors';
import { useState } from "react";
import { useAuth } from "@/components/AuthProvider";

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = useAuth();

    async function register() {
        try {
            await auth.register(email, password);
            router.replace('/(tabs)/home')
        } catch (error) {
            alert("Could not create account. Please try again later");
        }
    }
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('@/assets/images/logo.png')} />
            <Text style={styles.header}>
                Register
            </Text>
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
                <Text style={styles.createAccount} onPress={() => register()}>
                    Create account
                </Text>
            </Pressable>
            <Pressable>
                <Text style={styles.loginButton} onPress={() => { router.replace('/') }}>
                    Login to existing account
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
    header: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        margin: 10
    },
    createAccount: {
        textAlign: "center",
        padding: 10,
        backgroundColor: Colors.light.tint,
        color: "#fff",
        marginTop: 20,
        borderRadius: 3
    },
    loginButton: {
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

        width: "80%",
        height: 200,
        resizeMode: 'contain',
        alignSelf: "center"
    },
})