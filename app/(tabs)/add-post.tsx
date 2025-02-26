import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { useImagePicker } from "@/hooks/useImagePicker";

export default function AddPost() {
    const [caption, setCaption] = useState<string>("");
    const [loading, setLoading] = useState(false);
    const { image, openImagePicker, reset } = useImagePicker();

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={image === undefined ? require("@/assets/images/placeholder.png") : { uri: image }} />
            </View>
            <Pressable>

                <Text style={styles.photoButton} onPress={openImagePicker}>
                    <MaterialIcons color={"#fff"} size={28} name="photo" />Choose a photo
                </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignContent: "center",
        backgroundColor: "white",
        padding: 10
    },
    imageContainer: {
        width: "90%",
        aspectRatio: 1,
        borderRadius: 25,
        overflow: "hidden",
        alignSelf: "center",
        marginBottom: 20,
        marginTop: 20
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "contain"
    },
    photoButton: {
        padding: 20,
        marginTop: 10,
        backgroundColor: Colors.light.tint,
        width: "90%",
        fontSize: 20,
        textAlign: "center",
        alignItems: "center",
        alignSelf: "center",
        color: "#fff",
        borderRadius: 15
    }
})