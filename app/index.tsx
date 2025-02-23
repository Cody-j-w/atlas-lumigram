import { Link, router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";


export default function Index() {
    return (
        <View style={styles.container}>
            <Pressable>
                <Text style={styles.text} onPress={() => { router.replace('/(tabs)/home') }}>
                    Login
                </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center"
    },
    text: {
        textAlign: "center"
    }
})