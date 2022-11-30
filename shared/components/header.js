import { StyleSheet, Text, View, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export const Header = ({ navigation, title }) => {
    const openMenu = () => {
        navigation.openDrawer();
    }

    return (
        <View style={styles.header}>
            <MaterialIcons
                name="menu"
                size={28}
                style={styles.icon}
                onPress={openMenu}
            />
            <View style={styles.headerTitle}>
                <Image style={styles.logo} source={require("../../assets/heart_logo.png")} />
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    headerText: {
        fontWeight: 20,
        fontWeight: "bold",
        color: "#333",
        letterSpacing: 1,
    },

    icon: {
        flexBasis: "20%",
    },

    headerTitle: {
        flexDirection: "row",
        alignItems: 'center',
        flexBasis: "70%",
    },
    logo: {
        width: 26,
        height: 26,
        marginHorizontal: 10,
    }
})