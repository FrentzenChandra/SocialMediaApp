import styles from './userProfileStyle';
import {View, Image} from 'react-native';
const UserProfile = props => {
  return (
    <View style={styles.userProfileImageOutline}>
      <Image
        source={props.image}
        style={{width: props.width, height: props.height}}
      />
    </View>
  );
};

export default UserProfile;
