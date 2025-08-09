import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Dimensions, Text, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';

const { width } = Dimensions.get('window');
const ITEM_SIZE = width / 2 - 30; // dynamic size for 2 columns

const data = [
  { id: '1', 
    title: 'Home Stay', 
    screen: 'HomeStay', 
    animation: require('./../assets/AnimationCATA/Home.json') 
  },
  {
    id: '2',
    title: 'Sensor Data',
    screen: 'SensorData',
    animation: require('../assets/AnimationCATA/Data Animation.json'),
  },
  {
    id: '3',
    title: 'Transpotation',
    screen: 'Transpotation',
    animation: require('../assets/AnimationCATA/Cheeky Car.json'),
  },
  {
    id: '4',
    title: 'Local Cuisine',
    screen: 'LocalCuisine',
    animation: require('../assets/AnimationCATA/Food animation.json')
  },
  { id: '5', 
    title: 'Shopping', 
    screen: 'Shopping', 
    animation: require('../assets/AnimationCATA/shopping cart.json') },
  {
    id: '6',
    title: 'E-learning',
    screen: 'ELearning',
    animation: require('../assets/AnimationCATA/Online Learning Platform.json'),
  },
];

const HomeScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate(item.screen)}>
      <View style={styles.item}>
        <View style={styles.circle}>
          <LottieView source={item.animation} autoPlay loop style={styles.lottie} />
        </View>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={2}
      contentContainerStyle={styles.list}
    />
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  list: {
    padding: 10,
  },
  item: {
    flex: 1,
    alignItems: 'center',
    margin: 10,
  },
  circle: {
    width: ITEM_SIZE,
    height: ITEM_SIZE,
    borderRadius: ITEM_SIZE / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    elevation: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
  },
  lottie: {
    width: ITEM_SIZE * 0.6,
    height: ITEM_SIZE * 0.6,
  },
  title: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
