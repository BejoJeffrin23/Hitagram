import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';

import Navbar from './src/components/Navbar';
import Players from './src/components/Players';
import Categories from './src/components/Categories';
import Stories from './src/components/Stories';
import FloatingNavbar from './src/components/FloatingNavbar';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.blackbg}>
      <ScrollView style={styles.blackbg}>
        <Navbar />
        <Players />
        <Categories />
        <Stories />
      </ScrollView>
      <FloatingNavbar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  blackbg: {
    backgroundColor: 'black',
    position: 'relative',
  },
});

export default App;
