import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../../assets/styles/scaling';

const style = StyleSheet.create({
  imageContainer: {
    paddingHorizontal: horizontalScale(21),
    flexDirection: 'row',
    flexWrap: 'wrap',
    display: 'flex',
    justifyContent: 'space-between',
    objectFit: 'cover',
  },
  imagePost: {
    height: horizontalScale(106),
    width: horizontalScale(141),
    borderRadius: horizontalScale(4),
    marginTop: verticalScale(20),
  },
});

export default style;
