import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../assets/styles/scaling';

const styles = StyleSheet.create({
  userStoriesContainer: {
    marginRight: horizontalScale(20),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: verticalScale(21),
    marginBottom: verticalScale(10),
  },

  userStoriesName: {
    marginTop: verticalScale(8),
  },
});

export default styles;
