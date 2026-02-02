
import { AuthNavigator } from './AuthNavigator';
import { AppNavigator } from './AppNavigator';
import { useSelector } from 'react-redux';
import type { RootState } from '../Store';

export function RootNavigator() {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn)
  console.log(isLoggedIn)

return isLoggedIn? <AppNavigator /> : <AuthNavigator />;

}
 