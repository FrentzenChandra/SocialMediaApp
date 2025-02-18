const findFonts = (fontFamily = 'Inter', fontWeight = '400') => {
  switch (fontWeight) {
    case '100':
      return `${fontFamily}_18pt-thin`;
    case '200':
      return `${fontFamily}_18pt-ExtraLight`;
    case '300':
      return `${fontFamily}_18pt-Light`;
    case '400':
      return `${fontFamily}_18pt-Regular`;
    case '500':
      return `${fontFamily}_18pt-Medium`;
    case '600':
      return `${fontFamily}_18pt-SemiBold`;
    case '700':
      return `${fontFamily}_18pt-Bold`;
    case '800':
      return `${fontFamily}_18pt-ExtraBold`;
    case '900':
      return `${fontFamily}_18pt-Black`;
    default:
      return `${fontFamily}_18pt-Regular`;
  }
};

export default findFonts;
