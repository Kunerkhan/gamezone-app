import { createStackNavigator } from "@react-navigation/stack";
import { ImageBackground } from "react-native";

import { ReviewDetails } from "../screens/ReviewDetails";
import { Header } from "../shared/components/header";
import { Home } from "../screens/Home";

export const Stack = createStackNavigator();

export const HomeStack = () => (
    <Stack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: "#eee",
                height: 100,
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
            name="GameZone"
            component={Home}
            options={({ navigation }) => ({
                headerTitle: () => <Header navigation={navigation} title="GameZone" />,
            })}
        />
        <Stack.Screen
            name="Review Details"
            component={ReviewDetails}
        />
    </Stack.Navigator>
)