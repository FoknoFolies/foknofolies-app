import React, { FunctionComponent, useEffect, useState } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { navigationRef } from '@/Navigators/Root';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import { Startup } from '@/Containers';
import { StartupState } from '@/Store/Startup';
import { useTheme } from '@/Theme';

const Stack = createStackNavigator();

let MainNavigator: FunctionComponent | null;

const ApplicationNavigator = () => {
  const { Layout, darkMode, NavigationTheme } = useTheme();
  const { colors } = NavigationTheme;
  const [isApplicationLoaded, setIsApplicationLoaded] = useState(false);
  const applicationIsLoading = useSelector(
    (state: { startup: StartupState }) => state.startup.loading,
  );

  useEffect(() => {
    if (MainNavigator == null && !applicationIsLoading) {
      MainNavigator = require('@/Navigators/Main').default;
      setIsApplicationLoaded(true);
    }
  }, [applicationIsLoading]);

  // on destroy needed to be able to reset when app close in background (Android)
  useEffect(() => {
    return () => {
      setIsApplicationLoaded(false);
      MainNavigator = null;
    };
  }, []);

  return (
    <SafeAreaView style={[Layout.fill, { backgroundColor: colors.background }]}>
      <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
        <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Startup" component={Startup} />
          {isApplicationLoaded && MainNavigator != null && (
            <Stack.Screen
              name="Main"
              component={MainNavigator}
              options={{
                animationEnabled: false,
              }}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default ApplicationNavigator;
