import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, FlatList} from 'react-native';
import Title from './components/Title/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons/faEnvelope';
import UserStories from './components/UserStories/UserStories';
import UserPosts from './components/UserPosts/UserPosts';

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
  {
    name: 'Rina',
    id: 7,
    profileImage: require('./assets/images/default_profile.png'),
  },
  {
    name: 'Adi',
    id: 8,
    profileImage: require('./assets/images/default_profile.png'),
  },
  {
    name: 'Sari',
    id: 9,
    profileImage: require('./assets/images/default_profile.png'),
  },
  {
    name: 'Budi',
    id: 10,
    profileImage: require('./assets/images/default_profile.png'),
  },
  {
    name: 'Lina',
    id: 11,
    profileImage: require('./assets/images/default_profile.png'),
  },
  {
    name: 'Lina22',
    id: 12,
    profileImage: require('./assets/images/default_profile.png'),
  },
];

const userPosts = [
  {
    firstName: 'Allison',
    lastName: 'Becker',
    location: 'Boston , LA',
    likes: 1201,
    comments: 24,
    bookmarks: 55,
    image: require('./assets/images/default_post.png'),
    id: 1,
  },
  {
    firstName: 'Michael',
    lastName: 'Scott',
    location: 'Scranton, PA',
    likes: 987,
    comments: 15,
    bookmarks: 42,
    image: require('./assets/images/default_post.png'),
    id: 2,
  },
  {
    firstName: 'Pam',
    lastName: 'Beesly',
    location: 'Scranton, PA',
    likes: 1234,
    comments: 30,
    bookmarks: 60,
    image: require('./assets/images/default_post.png'),
    id: 3,
  },
  {
    firstName: 'Jim',
    lastName: 'Halpert',
    location: 'Scranton, PA',
    likes: 1500,
    comments: 45,
    bookmarks: 75,
    image: require('./assets/images/default_post.png'),
    id: 4,
  },
  {
    firstName: 'Dwight',
    lastName: 'Schrute',
    location: 'Scranton, PA',
    likes: 876,
    comments: 20,
    bookmarks: 50,
    image: require('./assets/images/default_post.png'),
    id: 5,
  },
  {
    firstName: 'Angela',
    lastName: 'Martin',
    location: 'Scranton, PA',
    likes: 765,
    comments: 18,
    bookmarks: 40,
    image: require('./assets/images/default_post.png'),
    id: 6,
  },
  {
    firstName: 'Kevin',
    lastName: 'Malone',
    location: 'Scranton, PA',
    likes: 654,
    comments: 12,
    bookmarks: 35,
    image: require('./assets/images/default_post.png'),
    id: 7,
  },
  {
    firstName: 'Stanley',
    lastName: 'Hudson',
    location: 'Scranton, PA',
    likes: 543,
    comments: 10,
    bookmarks: 30,
    image: require('./assets/images/default_post.png'),
    id: 8,
  },
  {
    firstName: 'Phyllis',
    lastName: 'Vance',
    location: 'Scranton, PA',
    likes: 432,
    comments: 8,
    bookmarks: 25,
    image: require('./assets/images/default_post.png'),
    id: 9,
  },
  {
    firstName: 'Ryan',
    lastName: 'Howard',
    location: 'Scranton, PA',
    likes: 321,
    comments: 5,
    bookmarks: 20,
    image: require('./assets/images/default_post.png'),
    id: 10,
  },
  {
    firstName: 'Kelly',
    lastName: 'Kapoor',
    location: 'Scranton, PA',
    likes: 210,
    comments: 3,
    bookmarks: 15,
    image: require('./assets/images/default_post.png'),
    id: 11,
  },
];

const pagination = (database, currentPage, pageSize) => {
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  if (startIndex >= database.length) {
    return [];
  }

  return database.slice(startIndex, endIndex);
};

const App = () => {
  const pageStoriesSize = 4;

  const [userStoriesoading, setuserStoriesLoading] = useState(false);
  const [userStoriesCurrentPage, setuserStoriesCurrentPage] = useState(1);
  const [userStoriesRenderedData, setuserStoriesRenderedData] = useState([]);

  const pagePostSize = 4;

  const [userPostoading, setuserPostLoading] = useState(false);
  const [userPostCurrentPage, setuserPostCurrentPage] = useState(1);
  const [userPostRenderedData, setuserPostRenderedData] = useState([]);

  useEffect(() => {
    setuserStoriesLoading(true);
    setuserStoriesCurrentPage(1);
    setuserStoriesRenderedData(pagination(userStories, 1, pageStoriesSize));
    setuserStoriesLoading(false);
  }, []);

  return (
    <SafeAreaView>
      <FlatList
        ListHeaderComponent={
          <>
            <Title title="Let's Explore" notifications={2} />
            <FlatList
              onEndReachedThreshold={0.7}
              onEndReached={() => {
                setuserStoriesLoading(true);
                const dataToAppend = pagination(
                  userStories,
                  userStoriesCurrentPage + 1,
                  pageStoriesSize,
                );
                if (dataToAppend.length > 0) {
                  setuserStoriesCurrentPage(userStoriesCurrentPage + 1);
                  setuserStoriesRenderedData(prevData => [
                    ...prevData,
                    ...dataToAppend,
                  ]);
                }
                setuserStoriesLoading(false);
              }}
              style={{
                marginHorizontal: 23,
              }}
              data={userStoriesRenderedData}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => (
                <UserStories
                  key={item.id}
                  name={item.name}
                  image={item.profileImage}
                />
              )}
            />
          </>
        }
        showsVerticalScrollIndicator={false}
        data={userPosts}
        renderItem={({item}) => (
          <UserPosts
            firstName={item.firstName}
            lastName={item.lastName}
            location={item.location}
            likes={item.likes}
            comments={item.comments}
            bookmarks={item.bookmarks}
            image={item.image}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default App;
