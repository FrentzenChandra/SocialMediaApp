import {StyleSheet} from 'react-native';
import {horizontalScale} from './scaling';

const globalStyle = StyleSheet.create({
  whiteBackground: {
    backgroundColor: '#fffffe',
    display: 'flex',
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
  },
  ruler: {
    borderColor: '#d9d9d9',
    borderWidth: horizontalScale(0.5),
  },
});

export default globalStyle;
