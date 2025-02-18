import React, {useState, useEffect} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';
import styles from './style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons/faEnvelope';
import globalStyles from '../../assets/styles/styles';
const Title = props => {
  return (
    <View style={globalStyles.Header}>
      <Text style={styles.title}>{props.title}</Text>
      <TouchableOpacity style={globalStyles.messageContainer}>
        <FontAwesomeIcon icon={faEnvelope} style={styles.messageIcon} />
        <View
          style={[
            globalStyles.messageNumberContainer,
            props.notifications <= 0 ? {display: 'none'} : {},
          ]}>
          <Text style={globalStyles.messageNumber}>{props.notifications}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
  notifications: PropTypes.number,
};

export default Title;
