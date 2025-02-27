import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from './scaling';

const globalStyle = StyleSheet.create({
  whiteBackground: {
    backgroundColor: '#fffffe',
    display: 'flex',
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
  },
  horizontalRuler: {
    borderColor: '#d9d9d9',
    borderWidth: horizontalScale(0.5),
  },
  verticalRuler: {
    height: verticalScale(20),
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#E9EFF1',
    marginLeft: horizontalScale(22),
  },

});

export default globalStyle;
