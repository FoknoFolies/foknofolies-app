import { navigateAndSimpleReset } from '@/Navigators/Root';
import {
  buildAsyncActions,
  buildAsyncReducers,
  buildAsyncState,
} from '@thecodingmachine/redux-toolkit-wrapper';
import { AccessToken } from 'react-native-fbsdk';
import DefaultTheme from '@/Store/Theme/DefaultTheme';

export default {
  initialState: buildAsyncState(),
  action: buildAsyncActions('startup/init', async (args, { dispatch }) => {
    await dispatch(DefaultTheme.action({ theme: 'default', darkMode: null }));

    const accessToken = await AccessToken.getCurrentAccessToken();

    if (accessToken) {
      navigateAndSimpleReset('Main');
    } else {
      navigateAndSimpleReset('Login');
    }
  }),
  reducers: buildAsyncReducers({ itemKey: null }), // We do not want to modify some item by default
};
