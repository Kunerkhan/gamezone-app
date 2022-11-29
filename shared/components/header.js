import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export const Header = ({ navigation, title, style }) => {
    const openMenu = () => {
        navigation.openDrawer();
    }

    return (
        <View style={style}>
            <MaterialIcons
                name="menu"
                size={28}
                style={styles.icon}
                onPress={openMenu}
            />
            <View>
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    header: {
        width: "100%",
        heigth: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },

    headerText: {
        fontWeight: 20,
        fontWeight: "bold",
        color: "#333",
        letterSpacing: 1,
    },

    icon: {
        position: "absolute",
        left: 16,
    }
})