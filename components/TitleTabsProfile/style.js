import {StyleSheet} from 'react-native';
import findFonts from '../../assets/fonts/helper/helper';
import {fontScale, verticalScale} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  profileTabTexts: {
    fontFamily: findFonts('Inter', '400'),
    color: '#79869F',
    fontSize: fontScale(16),
  },
  profileTabTextContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: verticalScale(10),
  },
});

export default style;
