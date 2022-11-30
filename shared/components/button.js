import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export const FlatButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>
                    {title}
                </Text>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: "#f01d71",
    },

    buttonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
        textAlign: "center",
        textTransform: "uppercase",
    },
})