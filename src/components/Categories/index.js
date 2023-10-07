import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';

const Categories = () => {
  const [active, setActive] = useState(2);
  const players = [
    {
      name: 'All Games',
    },
    {
      name: 'Counter Strike',
    },
    {
      name: 'Pubg',
    },
    {
      name: 'League of legends',
    },
    {
      name: 'Spider man',
    },
  ];
  return (
    <View style={styles.row}>
      {/* Scrollable buttons */}
      <ScrollView horizontal>
        {players.map(({name}, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={index === active ? styles.activePlayer : styles.player}
              onPress={() => {
                setActive(index);
              }}>
              <Text style={styles.plus}>{name}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingTop: 15,
    borderBottomColor: 'white',
    borderBottomWidth: 0.2,
  },

  plus: {
    color: 'white',
    fontSize: 12,
  },
  activePlayer: {
    alignItems: 'center',
    paddingHorizontal: 15,
    borderBottomColor: '#00FF00',
    borderBottomWidth: 3,
    paddingBottom: 15,
  },
  player: {
    alignItems: 'center',
    paddingHorizontal: 15,
  },
});
