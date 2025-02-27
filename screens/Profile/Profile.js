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
import {width} from '@fortawesome/free-solid-svg-icons/faEnvelope';
import {ProfileTabs} from '../../navigation/MainNavigation';
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
        <View style={style.statsContainer}>
          <View style={style.statsTextContainer}>
            <View>
              <Text style={style.statsCountTextProfile}>45</Text>
              <Text style={style.statsTextProfile}>Following</Text>
            </View>
            <View style={globalStyle.verticalRuler}></View>
          </View>
          <View style={style.statsTextContainer}>
            <View>
              <Text style={style.statsCountTextProfile}>30M</Text>
              <Text style={style.statsTextProfile}>Followers</Text>
            </View>
            <View style={globalStyle.verticalRuler}></View>
          </View>
          <View style={style.statsTextContainer}>
            <View>
              <Text style={style.statsCountTextProfile}>100</Text>
              <Text style={style.statsTextProfile}>Posts</Text>
            </View>
          </View>
        </View>
        <View
          style={[
            globalStyle.horizontalRuler,
            style.profileHorizontalRuler,
          ]}></View>
        <ProfileTabs />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
