import { Image, StyleSheet, Platform, View, Text, ImageBackground } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { homeFeed } from "@/placeholder";
import { FlashList } from "@shopify/flash-list";

export default function HomeScreen() {
    const data = homeFeed;
    return (
        <View style={styles.container}>
            <FlashList
                renderItem={({ item }) => (
                    <ImageBackground style={styles.homeImages} source={{ uri: item.image }} />
                )}
                data={data}
                estimatedItemSize={500}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        alignContent: "center",
        marginTop: 50,
        backgroundColor: "white",
        padding: 10
    },
    homeImages: {
        width: "100%",
        height: "100%",
        aspectRatio: 1,
        marginBottom: 10,
        borderRadius: 10
    },
    stepContainer: {
        gap: 8,
        marginBottom: 8,
    },
    reactLogo: {
        height: 178,
        width: 290,
        bottom: 0,
        left: 0,
        position: "absolute",
    },
});
