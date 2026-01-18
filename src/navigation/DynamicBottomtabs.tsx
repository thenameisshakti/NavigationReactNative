
import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { useLinkBuilder, useTheme } from '@react-navigation/native';
import { Text, PlatformPressable } from '@react-navigation/elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Search from '../screens/Search';
import Library from '../screens/Library';
import Ionicons from "react-native-vector-icons/Ionicons"
import { NavigationContainer } from '@react-navigation/native';

function MyTabBar({ state, descriptors, navigation }) {
  const { colors } = useTheme();
  const { buildHref } = useLinkBuilder();
    console.log(state,descriptors,navigation)
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        console.log(options.tabBarIcon )
        const isFocused = state.index === index;

        const icon =
  typeof options.tabBarIcon === 'function'
    ? options.tabBarIcon({
        focused: isFocused,
        color: isFocused ? colors.primary : colors.text,
        size: 24,
      })
    : null;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        return (
          <PlatformPressable
            key={route.key}
            onPress={onPress}
            style={styles.tab}
          >
            <View style={styles.tabItem}>
              {icon}
              <Text
                style={[
                  styles.label,
                  { color: isFocused ? colors.primary : colors.text },
                ]}
              >
                {options.tabBarLabel}
              </Text>
            </View>
          </PlatformPressable>
        );
      })}
    </View>
  );
}


const Tab = createBottomTabNavigator();

export function MyTabs() {
  return (
    <Tab.Navigator  tabBar={(props) => <MyTabBar {...props} />}>
      <Tab.Screen name="Home" component={Home} 
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ focused, color, size }) => (
        <Ionicons
            name={focused ? 'home' : 'home-outline'}
            size={size}
            color={color}
        />
    ),
  }}
      />
      <Tab.Screen name="Search" component={Search}
            options={{
        tabBarLabel: 'search',
        tabBarIcon: ({ focused, color, size }) => (
        <Ionicons
            name={focused ? 'search' : 'search-outline'}
            size={size}
            color={color}
        />
    ),
  }}
      />
      <Tab.Screen name="Library" component={Library}
            options={{
        tabBarLabel: 'Library',
        tabBarIcon: ({ focused, color, size }) => (
        <Ionicons
            name={focused ? 'disc' : 'disc-outline'}
            size={size}
            color={color}
        />
    ),
  }} />
      <Tab.Screen name="Profile" component={Profile} 
            options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ focused, color, size }) => (
        <Ionicons
            name={focused ? 'person' : 'person-outline'}
            size={size}
            color={color}
        />
    ),
  }}
      />

    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 64,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    backgroundColor: '#fff',
  },
  tab: {
    flex: 1,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 12,
    marginTop: 4,
  },
});


