import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BaseText } from '../constants/TextStyles';
import colors from '../constants/colors';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <BaseText style={{ color: colors.authButtonColor }}>This is the profile screen</BaseText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default ProfileScreen;