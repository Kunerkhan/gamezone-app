import { createStackNavigator } from "@react-navigation/stack";
import { ImageBackground } from "react-native";

import { About } from "../screens/About";
import { Header } from "../shared/components/header";

export const Stack = createStackNavigator();

export const AboutStack = () => (
    <Stack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: "#eee",
                height: 100
            },
            headerBackground: () => (
                <ImageBackground
                    source={require("../assets/game_bg.png")}
                    style={{
                        width: "100%",
                        height: "100%"
                    }}
                />
            )
        }}
    >
        <Stack.Screen
            name="About GameZone"
            component={About}
            options={({ navigation }) => ({
                headerTitle: () => <Header navigation={navigation} title="About GameZone" />,
            })}
        />
    </Stack.Navigator>
)