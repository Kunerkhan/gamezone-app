import { createStackNavigator } from "@react-navigation/stack";

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
            headerTintColor: "#444",
        }}
    >
        <Stack.Screen
            name="GameZone"
            component={Home}
            options={({ navigation }) => ({
                headerTitle: ({}) => <Header navigation={navigation} title="GameZone" />,
            })}
        />
        <Stack.Screen
            name="Review Details"
            component={ReviewDetails}
        />
    </Stack.Navigator>
)