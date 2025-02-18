import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, FlatList} from 'react-native';
import Title from './components/Title/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons/faEnvelope';
import UserStories from './components/UserStories/UserStories';

const userStories = [
  {
    name: 'Doni',
    id: 1,
    profileImage: require('./assets/images/default_profile.png'),
  },
  {
    name: 'Rina',
    id: 2,
    profileImage: require('./assets/images/default_profile.png'),
  },
  {
    name: 'Adi',
    id: 3,
    profileImage: require('./assets/images/default_profile.png'),
  },
  {
    name: 'Sari',
    id: 4,
    profileImage: require('./assets/images/default_profile.png'),
  },
  {
    name: 'Budi',
    id: 5,
    profileImage: require('./assets/images/default_profile.png'),
  },
  {
    name: 'Lina',
    id: 6,
    profileImage: require('./assets/images/default_profile.png'),
  },
];

const App = () => {
  return (
    <SafeAreaView>
      <Title title="Let's Explore" notifications={2} />
      <FlatList
        style={{
          marginHorizontal: 23,
        }}
        data={userStories}
        horizontal={true}
        renderItem={({item}) => (
          <UserStories name={item.name} image={item.profileImage} />
        )}></FlatList>
    </SafeAreaView>
  );
};

export default App;
