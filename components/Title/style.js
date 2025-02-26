import {StyleSheet} from 'react-native';
import findFonts from '../../assets/fonts/helper/helper';
import {fontScale} from '../../assets/styles/scaling';

const styles = StyleSheet.create({
  title: {
    color: '#022150',
    fontSize: fontScale(24),
    fontFamily: findFonts('Inter', '600'),
  },
});

export default styles;
