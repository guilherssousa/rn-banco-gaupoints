import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import { createBottomTabNavigator } from 'react-navigation-tabs';

import Main from '~/pages/Main';

const Routes = createAppContainer(createSwitchNavigator({
     Main,
}));

export default Routes;
