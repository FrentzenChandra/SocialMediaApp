import styles from './userProfileStyle';
import {View, Image} from 'react-native';
import PropTypes from 'prop-types';
import {height} from '@fortawesome/free-solid-svg-icons/faEnvelope';
import React from 'react';

const UserProfile = props => {
  return (
    <View style={styles.userProfileImageOutline}>
      <Image
        source={props.image}
        style={{width: props.width, height: props.height}}
      />
    </View>
  );
};

UserProfile.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default UserProfile;
