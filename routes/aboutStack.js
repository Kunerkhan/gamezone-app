import { createStackNavigator } from "@react-navigation/stack";

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
        }}
    >
        <Stack.Screen
            name="About GameZone"
            component={About}
            options={({ navigation }) => ({
                headerTitle: ({ }) => <Header navigation={navigation} title="About GameZone" />,
            })}
        />
    </Stack.Navigator>
)