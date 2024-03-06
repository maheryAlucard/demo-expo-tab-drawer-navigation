import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerScreenOne } from '../screens/DrawerScreenOne';
import { DrawerScreenTwo } from '../screens/DrawerScreenTwo';
import { DrawerScreenThree } from '../screens/DrawerScreenThree';

const Drawer = createDrawerNavigator();

export function DrawerNavigation() {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="DrawerScreenOne" component={DrawerScreenOne} />
        <Drawer.Screen name="DrawerScreenTwo" component={DrawerScreenTwo} />
        <Drawer.Screen name="DrawerScreenThree" component={DrawerScreenThree} />
      </Drawer.Navigator>
    );
  }