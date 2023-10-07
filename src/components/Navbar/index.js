import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const Navbar = () => {
  return (
    <View style={styles.row}>
      <MaterialIcon name="menu" size={20} color="white" />
      <Text style={styles.whiteText}>eSports</Text>
      <Image
        source={require('../../assets/images/buda.jpeg')}
        style={styles.profileImg}
      />
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderBottomColor: 'white',
    borderBottomWidth: 0.2,
    alignItems: 'center',
  },
  whiteText: {
    color: 'white',
  },
  profileImg: {
    height: 40,
    width: 40,
    borderRadius: 100,
  },
});
