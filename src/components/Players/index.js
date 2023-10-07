import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const Players = () => {
  const players = [
    {
      name: '112',
    },
    {
      name: '112',
    },
    {
      name: '112',
    },
    {
      name: '112',
    },
    {
      name: '112',
    },
    {
      name: '112',
    },
  ];
  return (
    <View style={styles.row}>
      {/* Fixed button */}
      <TouchableOpacity
        style={styles.fixedButton}
        onPress={() => {
          // Handle the action for the fixed button
        }}>
        <Text style={styles.plus}>+</Text>
      </TouchableOpacity>

      {/* Scrollable buttons */}
      <ScrollView horizontal>
        {players.map((player, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={styles.player}
              onPress={() => {
                // Handle the action for the scrollable button 1
              }}>
              <Image
                source={require('../../assets/images/buda.jpeg')}
                style={styles.playerImg}
              />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Players;

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderBottomColor: 'white',
    borderBottomWidth: 0.2,
  },
  fixedButton: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#00FF00',
    borderRadius: 100,
    borderStyle: 'dotted',
  },
  plus: {
    color: 'white',
    fontSize: 20,
  },
  player: {
    alignItems: 'center',
    marginLeft: 10,
  },
  playerImg: {
    height: 50,
    width: 50,
    borderRadius: 100,
  },
});
