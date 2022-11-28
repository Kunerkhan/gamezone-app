import { StyleSheet, View, Text } from "react-native";

export const Home = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Home Screen</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
    },
    titleText: {
        fontFamily: "nunito-regular",
        fontSize: 18,
    }
})