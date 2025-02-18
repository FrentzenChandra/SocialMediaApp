import {StyleSheet} from 'react-native';
import findFonts from '../fonts/helper/helper';

const globalStyles = StyleSheet.create({
  Header: {
    marginHorizontal: 26,
    marginTop: 30,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  messageContainer: {
    backgroundColor: '#f8f8fa',
    padding: 15,
    borderRadius: 80,
    alignItems: 'center',
  },

  messageNumberContainer: {
    padding: 1,
    backgroundColor: '#F35BAC',
    borderRadius: 10,
    width: 10,
    height: 10,
    position: 'absolute',
    top: 12,
    right: 12,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  messageNumber: {
    fontSize: 6,
    fontFamily: findFonts('Inter', '600'),
    color: '#fff',
  },

});

export default globalStyles;
