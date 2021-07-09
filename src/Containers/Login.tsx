import React, { useState } from 'react';
import { Text, View } from 'react-native';
import {
  AccessToken,
  GraphRequest,
  GraphRequestManager,
  GraphRequestParameters,
  LoginButton,
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

  const getInfoFromToken = (token: string) => {
    console.log('caca');

    const PROFILE_REQUEST_PARAMS: GraphRequestParameters = {
      fields: {
        string: 'id, first_name, last_name',
      },
    };

    const profileRequest = new GraphRequest(
      '/me',
      {
        accessToken: token,
        parameters: PROFILE_REQUEST_PARAMS,
      },
      (error, result) => {
        if (error) {
          console.log('login info has error: ' + error);
        } else {
          console.log('result:', result);
          setUserInfo(result as UserInfo);
        }
      },
    );

    new GraphRequestManager().addRequest(profileRequest).start();
  };

  return (
    <View style={[Layout.fill, Layout.colCenter, Gutters.smallHPadding]}>
      <LoginButton
        onLoginFinished={(error, result) => {
          console.log('test');

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
        }}
        onLogoutFinished={() => setUserInfo(null)}
      />
      {userInfo?.id && (
        <Text style={[Fonts.textRegular, Gutters.smallVMargin]}>
          Logged in As {userInfo.first_name} {userInfo.last_name}
        </Text>
      )}
    </View>
  );
};

export default Login;
