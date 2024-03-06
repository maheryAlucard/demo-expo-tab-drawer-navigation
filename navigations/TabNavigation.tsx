import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabScreenOne } from "../screens/TabScreenOne";
import { TabScreenTwo } from "../screens/TabScreenTwo";
import { TabScreenThree } from "../screens/TabScreenThree";
import { DrawerNavigation } from "./DrawerNavigation";

const Tab = createBottomTabNavigator();

export function TabNavigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={DrawerNavigation} />
            <Tab.Screen name="Tab One" component={TabScreenOne} />
            <Tab.Screen name="Tab Two" component={TabScreenTwo} />
            <Tab.Screen name="Tab Three" component={TabScreenThree} />
        </Tab.Navigator>
    )
}