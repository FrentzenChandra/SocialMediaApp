import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import UserProfile from '../UserProfile/UserProfile';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEllipsis} from '@fortawesome/free-solid-svg-icons/faEllipsis';
import findFonts from '../../assets/fonts/helper/helper';
import {
  faBookmark,
  faComment,
  faHeart,
} from '@fortawesome/free-regular-svg-icons';
import {height} from '@fortawesome/free-solid-svg-icons/faEnvelope';
import PropTypes from 'prop-types';
import styles from './userPostStyle';
import globalStyles from '../../assets/styles/styles';
const UserPosts = props => {
  return (
    <View style={styles.userPostContainer}>
      <View style={styles.userPostHeadContainer}>
        <UserProfile
          width={40}
          height={40}
          image={require('../../assets/images/default_profile.png')}
        />
        <View style={{marginLeft: 10}}>
          <Text style={styles.userPostNameText}>
            {props.firstName + ' ' + props.lastName}
          </Text>
          <Text style={styles.userPostLocationText}>{props.location}</Text>
        </View>
        <FontAwesomeIcon
          icon={faEllipsis}
          size={32}
          style={{marginLeft: 'auto'}}
        />
      </View>
      <Image source={props.image} style={styles.userPostImage} />
      <View style={styles.userPostReactionContainer}>
        <FontAwesomeIcon icon={faHeart} />
        <Text>{props.likes}</Text>
        <FontAwesomeIcon icon={faComment} />
        <Text>{props.comments}</Text>
        <FontAwesomeIcon icon={faBookmark} />
        <Text>{props.bookmarks}</Text>
      </View>
      <View style={globalStyles.ruler} />
    </View>
  );
};

UserPosts.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  bookmarks: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  image: PropTypes.any.isRequired,
};

export default UserPosts;
