import {StyleSheet} from 'react-native';
import findFonts from '../../assets/fonts/helper/helper';
import {
  fontScale,
  horizontalScale,
  verticalScale,
} from '../../assets/styles/scaling';

const styles = StyleSheet.create({
  ellipsisContainer: {marginLeft: 'auto'},
  ellipsisButton: {color: '#79869F'},
  userPostContainer: {marginHorizontal: horizontalScale(30)},
  userPostHeadContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: verticalScale(13),
  },
  userPostNameContainer: {marginLeft: horizontalScale(10)},
  userPostNameText: {
    fontSize: fontScale(16),
    fontFamily: findFonts('Inter', 600),
    marginBottom: verticalScale(2),
  },
  userPostLocationText: {
    color: '#79869F',
    fontSize: fontScale(12),
    fontFamily: findFonts('Inter', 400),
  },
  userPostImage: {
    width: '100%',
    height: 220,
    borderRadius: horizontalScale(20),
    alignSelf: 'center',
  },
  userPostStats: {
    marginTop: verticalScale(16),
    marginBottom: verticalScale(20),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: horizontalScale(5),
  },
  userPostStatButtons: {
    color: '#79869F',
    marginLeft: horizontalScale(5),
    marginRight: horizontalScale(27),
  },
  userPostStatIcons: {
    color: '#79869F',
  },
  ruler: {
    borderBottomColor: '#d9d9d9',
    borderWidth: 1,
  },
});

export default styles;
