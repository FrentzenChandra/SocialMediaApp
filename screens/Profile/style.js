import {StyleSheet} from 'react-native';
import findFonts from '../../assets/fonts/helper/helper';
import {
  fontScale,
  horizontalScale,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  statsCountTextProfile: {
    fontFamily: findFonts('Inter', '600'),
    fontSize: fontScale(20),
    textAlign: 'center',
  },
  statsTextProfile: {
    fontFamily: findFonts('Inter', '400'),
    fontSize: fontScale(16),
    color: '#79869F',
    textAlign: 'center',
  },
  statsTextContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  statsContainer: {
    marginHorizontal: horizontalScale(50),
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: verticalScale(20),
  },
  profileHorizontalRuler: {
    marginHorizontal: horizontalScale(20),
    height: 1,
    marginTop: verticalScale(22),
    marginBottom: verticalScale(5),
  },
});

export default style;
