import 'react-native-gesture-handler';
import React from 'react';
import { StripeProvider } from '@stripe/stripe-react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Config } from '@/Config';
import { ApplicationNavigator } from '@/Navigators';
import { persistor, store } from '@/Store';
import './Translations';

const App = () => (
  <Provider store={store}>
    <StripeProvider publishableKey={Config.STRIPE_PUBLIC_KEY}>
      <PersistGate loading={null} persistor={persistor}>
        <ApplicationNavigator />
      </PersistGate>
    </StripeProvider>
  </Provider>
);

export default App;
