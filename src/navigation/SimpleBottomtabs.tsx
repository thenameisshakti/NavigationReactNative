import Ionicons from "react-native-vector-icons/Ionicons"
import {
  createStaticNavigation,
} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Search from '../screens/Search';
import Library from '../screens/Library';

const MyTabs = createBottomTabNavigator({
 screens: {
    home: {
      screen: Home,
      options: {
        tabBarIcon: ({ focused, color, size }) => (
          <Ionicons
            name={focused ? 'home' : 'home-outline'}
            size={size}
            color={color}
          />
        ),
      },
    },

    search: {
      screen: Search,
      options: {
        tabBarIcon: ({ focused, color, size }) => (
          <Ionicons
            name={focused ? 'search' : 'search-outline'}
            size={size}
            color={color}
          />
        ),
      },
    },

    library: {
      screen: Library,
      options: {
        tabBarIcon: ({ focused, color, size }) => (
          <Ionicons
            name={focused ? 'disc' : 'disc-outline'}
            size={size}
            color={color}
          />
        ),
      },
    },

    profile: {
      screen: Profile,
      options: {
        tabBarIcon: ({ focused, color, size }) => (
          <Ionicons
            name={focused ? 'person' : 'person-outline'}
            size={size}
            color={color}
          />
        ),
      },
    },
  },

});

export const Navigation = createStaticNavigation(MyTabs);
