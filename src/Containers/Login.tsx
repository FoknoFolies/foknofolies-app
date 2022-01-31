import React, { useState } from 'react';
import { ImageBackground, Text, View } from 'react-native';
import {
  AccessToken,
  GraphRequest,
  GraphRequestManager,
  GraphRequestParameters,
  LoginButton,
  LoginResult,
} from 'react-native-fbsdk';
import { useTheme } from '@/Theme';

interface UserInfo {
  id: string;
  first_name: string;
  last_name: string;
}

const Login = () => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const { Fonts, Gutters, Layout } = useTheme();

  const getInfoFromToken = (accessToken: string) => {
    const parameters: GraphRequestParameters = {
      fields: {
        string: 'id, first_name, last_name, email',
      },
    };

    const profileRequest = new GraphRequest('/me', { accessToken, parameters }, (error, result) => {
      if (error) {
        console.log('login info has error: ' + error);
      } else {
        console.log('result:', result);
        setUserInfo(result as UserInfo);
      }
    });

    new GraphRequestManager().addRequest(profileRequest).start();
  };

  const handleLogin = (error: object, result: LoginResult) => {
    if (error) {
      console.log('login has error: ' + result.error);
    } else if (result.isCancelled) {
      console.log('login is cancelled.');
    } else {
      AccessToken.getCurrentAccessToken().then(data => {
        if (data) {
          getInfoFromToken(data.accessToken.toString());
        }
      });
    }
  };

  const handleLogout = () => setUserInfo(null);

  return (
    <View style={[Layout.fill, Layout.colCenter, Gutters.smallHPadding]}>
      <ImageBackground source={require('@/Assets/Images/background.jpg')} />
      <LoginButton onLoginFinished={handleLogin} onLogoutFinished={handleLogout} />
      {userInfo?.id && (
        <Text style={[Fonts.textRegular, Gutters.smallVMargin]}>
          Logged in As {userInfo.first_name} {userInfo.last_name}
        </Text>
      )}
    </View>
  );
};

export default Login;
