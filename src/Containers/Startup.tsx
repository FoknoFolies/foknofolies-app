import React, { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useDispatch } from 'react-redux';
import InitStartup from '@/Store/Startup/Init';
import { useTheme } from '@/Theme';
import { Brand } from '../Components';

const Startup = () => {
  const { Layout, Gutters } = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(InitStartup.action());
  }, [dispatch]);

  return (
    <View style={[Layout.fill, Layout.colCenter]}>
      <Brand />
      <ActivityIndicator size="large" style={[Gutters.largeVMargin]} />
    </View>
  );
};

export default Startup;
