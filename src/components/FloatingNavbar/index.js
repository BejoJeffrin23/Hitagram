import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const FloatingNavbar = () => {
  return (
    <View style={styles.navigationBar}>
      <TouchableOpacity
        style={styles.fixedButton}
        onPress={() => {
          // Handle the action for the fixed button
        }}>
        <Text style={styles.plus}>+</Text>
      </TouchableOpacity>
      <MaterialIcon name="home" size={20} color="white" />
      <MaterialIcon name="favorite-border" size={20} color="#00FF00" />
      <MaterialIcon name="search" size={20} color="white" />
      <MaterialIcon name="message" size={20} color="white" />
    </View>
  );
};

export default FloatingNavbar;

const styles = StyleSheet.create({
  navigationBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'black', // Background color of the navigation bar
    height: 50, // Height of the navigation bar
    position: 'absolute', // Position it at the bottom
    left: 0,
    right: 0,
    bottom: 10,
    marginHorizontal: 15,
    paddingHorizontal: 10,
    borderRadius: 15,
  },
  fixedButton: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    backgroundColor: '#00FF00',
    borderRadius: 100,
    borderStyle: 'dotted',
  },
  plus: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
