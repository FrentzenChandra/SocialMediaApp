import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, ScrollView, Image, View} from 'react-native';
import globalStyle from '../../assets/styles/styles';
import {
  horizontalScale,
  verticalScale,
  fontScale,
} from '../../assets/styles/scaling';
import findFonts from '../../assets/fonts/helper/helper';
import style from './style';
const Profile = ({navigation}) => {
  return (
    <SafeAreaView style={globalStyle.whiteBackground}>
      <ScrollView contentContainerStyle={globalStyle.scrollView}>
        <View
          style={{
            borderWidth: 1,
            marginTop: verticalScale(40),
            alignSelf: 'center',
            padding: 4,
            borderColor: '#0150EC',
            borderRadius: horizontalScale(120),
          }}>
          <Image
            source={require('../../assets/images/default_profile.png')}
            style={{
              width: horizontalScale(120),
              height: horizontalScale(120),
            }}
          />
        </View>
        <Text
          style={{
            fontFamily: findFonts('Inter', '600'),
            fontSize: fontScale(20),
            alignSelf: 'center',
            marginTop: verticalScale(10),
          }}>
          Emmanuel Robertsen
        </Text>
        <View
          style={{
            marginHorizontal: horizontalScale(20),
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <View style={{}}>
            <Text style={style.statsTextProfile}>45</Text>
            <Text>Following</Text>
          </View>
          <View style={globalStyle.ruler}></View>
          <View>
            <Text>30</Text>
            <Text>Followers</Text>
          </View>
          <View style={globalStyle.ruler}></View>
          <View>
            <Text>100</Text>
            <Text>Posts</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
