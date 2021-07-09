import { StyleSheet } from 'react-native';
import { ThemeCommonParams } from '@/Theme/theme.type';

export default function ({ Colors, Gutters, Layout }: ThemeCommonParams) {
  const base = {
    ...Layout.center,
    ...Gutters.largeHPadding,
    height: 40,
    backgroundColor: Colors.primary,
  };
  const rounded = {
    ...base,
    borderRadius: 20,
  };
  const outline = {
    ...base,
    backgroundColor: Colors.transparent,
    borderWidth: 2,
    borderColor: Colors.primary,
  };
  const outlineRounded = {
    ...rounded,
    backgroundColor: Colors.transparent,
    borderWidth: 2,
    borderColor: Colors.primary,
  };

  return StyleSheet.create({ base, rounded, outline, outlineRounded });
}
