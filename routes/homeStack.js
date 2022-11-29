import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { Home } from "../screens/Home";
import { ReviewDetails } from "../screens/ReviewDetails";

export const Stack = createStackNavigator();

export const HomeStack = () => (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Review Details" component={ReviewDetails} />
        </Stack.Navigator>
    </NavigationContainer>
)