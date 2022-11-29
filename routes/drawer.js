import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import { About } from "../screens/About";
import { AboutStack } from "./aboutStack";
import { HomeStack } from "./homeStack";
import { Header } from "../shared/components/header";


const Drawer = createDrawerNavigator();

export const RootDrawerNavigator = () => (
    <NavigationContainer>
        <Drawer.Navigator screenOptions={{ headerShown: false }}>
            <Drawer.Screen
                name="GameZome"
                component={HomeStack}
            />
            <Drawer.Screen name="About GameZone" component={AboutStack} />
        </Drawer.Navigator>
    </NavigationContainer>
)