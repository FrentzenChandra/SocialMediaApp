import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './userStoriesStyle';
import PropTypes from 'prop-types';
import UserProfile from '../UserProfile/UserProfile';

const UserStories = props => {
  return (
    <TouchableOpacity style={styles.userStoriesContainer}>
      <UserProfile image={props.image} width={65} height={65} />
      <Text style={styles.userStoriesName}>{props.name}</Text>
    </TouchableOpacity>
  );
};

UserStories.prototype = {
  name: PropTypes.string.isRequired,
  image: PropTypes.any.isRequired,
};

export default UserStories;
