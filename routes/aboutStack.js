import { createStackNavigator } from "@react-navigation/stack";

import { About } from "../screens/About";

export const Stack = createStackNavigator();

export const AboutStack = () => (
    <Stack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: "#eee"
            },
            height: 60
        }}
    >
        <Stack.Screen
            name="About GameZone"
            component={About}
        />
    </Stack.Navigator>
)