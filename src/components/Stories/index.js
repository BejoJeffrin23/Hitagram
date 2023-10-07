import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
const Stories = () => {
  const stories = [
    {
      name: 'Bejo',
      game: 'counter strike',
      image: require('../../assets/images/gamebg.jpg'),
      playerImage: require('../../assets/images/buda.jpeg'),
      time: '4 hours ago',
    },
    {
      name: 'Bejo',
      game: 'counter strike',
      image: require('../../assets/images/nature.jpg'),
      playerImage: require('../../assets/images/buda.jpeg'),
      time: '4 hours ago',
    },
    {
      name: 'Bejo',
      game: 'counter strike',
      image: require('../../assets/images/game.jpeg'),
      playerImage: require('../../assets/images/buda.jpeg'),
      time: '4 hours ago',
    },
    {
      name: 'Bejo',
      game: 'counter strike',
      image: require('../../assets/images/game.jpeg'),
      playerImage: require('../../assets/images/buda.jpeg'),
      time: '4 hours ago',
    },
  ];
  return (
    <ScrollView style={styles.scrollView}>
      {stories.map((story, index) => {
        return (
          <View key={index} style={styles.card}>
            <View style={styles.paddingS}>
              <View style={[styles.profilePart, styles.justi]}>
                <View style={styles.profilePart}>
                  <Image source={story.playerImage} style={styles.playerImg} />
                  <View style={styles.nameGanem}>
                    <Text style={styles.text}>{story.name}</Text>
                    <Text style={styles.text}>{story.game}</Text>
                  </View>
                </View>
                <View>
                  <Text style={styles.text}>:</Text>
                </View>
              </View>

              <Image source={story.image} style={styles.storyImg} />
              <View>
                <Text style={styles.desc} numberOfLines={1}>
                  Gaming is a popular form of entertainment that involves
                  players engaging in interactive and immersive digital
                  experiences. It encompasses a wide range of genres, platforms,
                  and styles, from action-packed shooters to strategic
                  role-playing games. The gaming industry has evolved
                  significantly over the years, becoming a major cultural
                  phenomenon with competitive esports, dedicated communities,
                  and a growing focus on storytelling and artistry.
                </Text>
              </View>
              <View style={[styles.profilePart, styles.justi]}>
                <View style={styles.profilePart}>
                  <View style={styles.profilePart}>
                    <MaterialIcon
                      name="favorite-border"
                      size={20}
                      color="#00FF00"
                    />
                    <Text style={[styles.text, styles.leftmargin]}>14599</Text>
                    <View style={styles.comments}>
                      <MaterialIcon
                        name="chat-bubble-outline"
                        size={20}
                        color="white"
                      />
                      <Text style={[styles.text, styles.leftmargin]}>235</Text>
                    </View>
                  </View>
                </View>
                <View>
                  <Text style={styles.text}>{story.time}</Text>
                </View>
              </View>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default Stories;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#2C3539',
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
  nameGanem: {
    marginLeft: 10,
  },
  text: {
    color: 'white',
  },
  leftmargin: {
    marginLeft: 10,
  },
  desc: {
    color: 'white',
    marginVertical: 10,
  },
  profilePart: {
    flex: 1,
    flexDirection: 'row',
  },
  comments: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 20,
  },
  justi: {
    justifyContent: 'space-between',
  },
  playerImg: {
    height: 50,
    width: 50,
    borderRadius: 100,
  },
  storyImg: {
    flex: 1,
    alignSelf: 'stretch',
    width: 'auto',
    height: undefined,
    aspectRatio: 1,
  },
});
