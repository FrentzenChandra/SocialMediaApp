import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  verticalScale,
  fontScale,
} from '../../assets/styles/scaling';
import findFonts from '../../assets/fonts/helper/helper';

const style = StyleSheet.create({

  Header: {
    marginHorizontal: horizontalScale(26),
    marginTop: verticalScale(15),
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  messageContainer: {
    backgroundColor: '#f8f8fa',
    paddingHorizontal: horizontalScale(15),
    paddingVertical: horizontalScale(15),
    borderRadius: 80,
    alignItems: 'center',
  },

  messageNumberContainer: {
    padding: 1,
    backgroundColor: '#F35BAC',
    borderRadius: 10,
    width: horizontalScale(10),
    height: horizontalScale(10),
    position: 'absolute',
    top: verticalScale(9),
    right: horizontalScale(12),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  messageNumber: {
    fontSize: fontScale(6),
    fontFamily: findFonts('Inter', '600'),
    color: '#fff',
  },
  messageIcon: {
    fontSize: horizontalScale(16),
  },
});

export default style;
