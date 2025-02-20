import {StyleSheet} from 'react-native';
import findFonts from '../fonts/helper/helper';
import {fontScale, horizontalScale, verticalScale} from './scaling';

const globalStyles = StyleSheet.create({
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

  ruler: {
    borderBottomColor: '#d9d9d9',
    borderWidth: 1,
  },
});

export default globalStyles;
