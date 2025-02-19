import {StyleSheet} from 'react-native';
import findFonts from '../../assets/fonts/helper/helper';

const styles = StyleSheet.create({
  userPostContainer: {marginHorizontal: 35},
  userPostHeadContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  userPostNameText: {
    fontSize: 16,
    fontFamily: findFonts('Inter', 600),
    marginBottom: 2,
  },
  userPostLocationText: {fontSize: 12, fontFamily: findFonts('Inter', 400)},
  userPostImage: {
    width: '100%',
    height: 220,
    borderRadius: 20,
    alignSelf: 'center',
  },
  userPostReactionContainer: {
    marginTop: 16,
    marginBottom: 20,
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    width: 190,
  },
});

export default styles;
