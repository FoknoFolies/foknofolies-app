import React from 'react';
import { View } from 'react-native';
import { Brand } from '@/Components';
import { useTheme } from '@/Theme';

const Home = () => {
  const { Gutters, Layout } = useTheme();

  return (
    <View style={[Layout.fill, Layout.colCenter, Gutters.smallHPadding]}>
      <View style={[[Layout.colCenter, Gutters.smallHPadding]]}>
        <Brand />
      </View>
    </View>
  );
};

export default Home;
