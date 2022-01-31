import {
  buildAsyncActions,
  buildAsyncReducers,
  buildAsyncState,
} from '@thecodingmachine/redux-toolkit-wrapper';

export default {
  initialState: buildAsyncState(),
  action: buildAsyncActions('startup/init', async () => {
    // const accessToken = await AccessToken.getCurrentAccessToken();
    // if (accessToken) {
    //   navigateAndSimpleReset('Main');
    // } else {
    //   navigateAndSimpleReset('Login');
    // }
  }),
  reducers: buildAsyncReducers({ itemKey: null }), // We do not want to modify some item by default
};
