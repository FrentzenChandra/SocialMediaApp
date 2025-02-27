import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import style from './style';
import PropTypes from 'prop-types';
import findFonts from '../../assets/fonts/helper/helper';

const TitleTabsProfile = props => {
  return (
    <View style={style.profileTabTextContainer}>
      <Text
        style={[
          style.profileTabTexts,
          props.focused
            ? {fontFamily: findFonts('Inter', '600'), color: 'Black'}
            : {},
        ]}>
        {props.title}
      </Text>
    </View>
  );
};

TitleTabsProfile.props = {
  title: PropTypes.string.isRequired,
  focused: PropTypes.any.isRequired,
};

export default TitleTabsProfile;
