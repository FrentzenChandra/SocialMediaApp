import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import UserProfile from '../UserProfile/UserProfile';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEllipsis} from '@fortawesome/free-solid-svg-icons/faEllipsis';
import {
  faBookmark,
  faComment,
  faHeart,
} from '@fortawesome/free-regular-svg-icons';
import PropTypes from 'prop-types';
import styles from './userPostStyle';
import globalStyles from '../../assets/styles/styles';
import {horizontalScale, verticalScale} from '../../assets/styles/scaling';
const UserPosts = props => {
  return (
    <View style={styles.userPostContainer}>
      <View style={styles.userPostHeadContainer}>
        <UserProfile
          width={horizontalScale(40)}
          height={horizontalScale(40)}
          image={require('../../assets/images/default_profile.png')}
        />
        <View style={styles.userPostNameContainer}>
          <Text style={styles.userPostNameText}>
            {props.firstName + ' ' + props.lastName}
          </Text>
          <Text style={styles.userPostLocationText}>{props.location}</Text>
        </View>
        <TouchableOpacity style={styles.ellipsisContainer}>
          <FontAwesomeIcon
            style={styles.ellipsisButton}
            icon={faEllipsis}
            size={horizontalScale(30)}
          />
        </TouchableOpacity>
      </View>
      <Image source={props.image} style={styles.userPostImage} />
      <View style={styles.userPostStats}>
        <FontAwesomeIcon
          style={styles.userPostStatIcons}
          icon={faHeart}
          size={horizontalScale(15)}
        />
        <Text style={styles.userPostStatButtons}>{props.likes}</Text>
        <FontAwesomeIcon
          style={styles.userPostStatIcons}
          icon={faComment}
          size={horizontalScale(15)}
        />
        <Text style={styles.userPostStatButtons}>{props.comments}</Text>
        <FontAwesomeIcon
          style={styles.userPostStatIcons}
          icon={faBookmark}
          size={horizontalScale(15)}
        />
        <Text style={styles.userPostStatButtons}>{props.bookmarks}</Text>
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
