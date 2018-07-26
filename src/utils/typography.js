import Typography from 'typography';
import moragaTheme from 'typography-theme-moraga';

moragaTheme.bodyFontFamily = ['-apple-system', 'BlinkMacSystemFont',
  'Helvetica Neue', 'Arial', 'sans-serif'];
moragaTheme.headerFontFamily = moragaTheme.bodyFontFamily;

moragaTheme.overrideThemeStyles = () => ({
  '.js-system--apple': {
    fontFeatureSettings: "case, ss01, ss02"
  },
  a: {
    color: '#3090e4'
  },
  '[lang=zh],[lang=ja]': {
    textAlign: 'start',
    header: {
      textAlign: 'start'
    }
  },
});

const typography = new Typography(moragaTheme);

export default typography;
