import {StyleSheet} from 'react-native';
import {horizontalScale} from '../../assets/styles/scaling';

const styles = StyleSheet.create({
  userProfileImageOutline: {
    borderColor: '#F35BAC',
    borderWidth: 1,
    padding: horizontalScale(3),
    borderRadius: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
