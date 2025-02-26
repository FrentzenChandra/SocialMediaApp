import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text} from 'react-native';
import globalStyle from '../../assets/styles/styles';

const Profile = ({navigation}) => {
  return (
    <SafeAreaView style={globalStyle.whiteBackground}>
      <Text onPress={() => navigation.goBack()}>Go Back</Text>
      <Text>Profile Page</Text>
    </SafeAreaView>
  );
};

export default Profile;
