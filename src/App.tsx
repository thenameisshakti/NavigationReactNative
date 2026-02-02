import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from './navigation/RootNavigator';
import { Provider } from 'react-redux';
import store from './Store/index';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}