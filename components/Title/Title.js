import React, {useState, useEffect} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';
import styles from './style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { horizontalScale } from '../../assets/styles/scaling';
const Title = props => {
  return (
    <View style={styles.Header}>
      <Text style={styles.title}>{props.title}</Text>
      <TouchableOpacity style={styles.messageContainer}>
        <FontAwesomeIcon icon={faEnvelope} size={horizontalScale(16)}/>
        <View
          style={[
            styles.messageNumberContainer,
            props.notifications <= 0 ? {display: 'none'} : {},
          ]}>
          <Text style={styles.messageNumber}>{props.notifications}</Text>
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
