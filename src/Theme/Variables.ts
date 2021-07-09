/**
 * This file contains the application's variables.
 *
 * Define color, sizes, etc. here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */

import {
  ThemeColors,
  ThemeFontSize,
  ThemeMetricsSizes,
  ThemeNavigationColors,
} from '@/Theme/theme.type';

/**
 * Colors
 */
export const Colors: ThemeColors = {
  background: '#E4DCD8',

  morningBlue: '#8BA394',
  cultured: '#F0F0F0',
  isabelline: '#F0E8E4',
  cadetGrey: '#8B98A3',
  aliceBlue: '#D8E5F0',

  transparent: 'rgba(0,0,0,0)',
  inputBackground: '#FFFFFF',
  white: '#ffffff',
  text: '#000031',
  primary: '#E14032',
  success: '#59C871',
  error: '#DF6262',
};

export const NavigationColors: Partial<ThemeNavigationColors> = {
  background: Colors.background,
  primary: Colors.cadetGrey,
};

/**
 * FontSize
 */
export const FontSize: ThemeFontSize = {
  small: 16,
  regular: 20,
  large: 40,
};

/**
 * Metrics Sizes
 */
const tiny = 8;
const small = 16;
const regular = 24;
const medium = 32;
const large = 40;

export const MetricsSizes: ThemeMetricsSizes = {
  tiny,
  small,
  regular,
  medium,
  large,
};
