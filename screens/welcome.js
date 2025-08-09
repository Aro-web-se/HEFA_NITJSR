import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';

import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

export default function Welcome() {
  const navigation = useNavigation();

  const handalDone = () => {
    navigation.navigate('HomeScreen');
  };

  const doneButton = ({ ...props }) => {
    return (
      <TouchableOpacity style={styles.doneButton} {...props}>
        <Text style={styles.doneButtonText}> Done </Text>
      </TouchableOpacity>
    );
  };

  const skipButton = ({...props}) => {
    return(
      <TouchableOpacity style={styles.skipButton} {...props} >
        <Text> Skip </Text>
      </TouchableOpacity>
    );
  }

  const nextButton = ({...props}) => {
    return(
      <TouchableOpacity style={styles.NextButton} {...props} >
        <Text> Next </Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.Container}>
      <Onboarding
        onDone={handalDone}
        onSkip={handalDone}
        DoneButtonComponent={doneButton}
        SkipButtonComponent={skipButton}
        NextButtonComponent={nextButton}
        containerStyles={{ paddingHorizontal: 4 }}
        pages={[
          {
            backgroundColor: '#87CEEB',

            image: (
              <View>
                <LottieView
                  source={require('../assets/Anomations/buisnessgirlwithlaptop.json')}
                  autoPlay
                  loop
                  style={styles.lotties}
                />
              </View>
            ),
            title: ' Boost Productivity ',
            subtitle: "Unlock your full potential with efficient workflows ",
          },
          {
            backgroundColor: '#a7f3d0',
            image: (
              <View>
                <LottieView
                  source={require('../assets/Anomations/OnlineLearning.json')}
                  autoPlay
                  loop
                  style={styles.lotties}
                />
              </View>
            ),
            title: ' Work Seamlessly ',
            subtitle: "Enjoy effortless coordination in your daily work",
          },
          {
            backgroundColor: '#fef3c7',
            image: (
              <View>
                <LottieView
                  source={require('../assets/Anomations/roadtrip.json')}
                  autoPlay
                  loop
                  style={styles.lotties}
                />
              </View>
            ),
            title: "Plan Your Next Adventure" ,
            subtitle: "Discover new places and create unforgettable memories",
          },
          {
            backgroundColor: '#a78bfa',
            image: (
              <View>
                <LottieView
                  source={require('../assets/Anomations/AnalyticsCharacterAnimation.json')}
                  autoPlay
                  loop
                  style={styles.lotties}
                />
              </View>
            ),
            title: ' Achive Higher Goals ',
            subtitle: "Unlock your potential and go beyond limits",
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'white',
  },
  lotties: {
    width: width * 0.9,
    height: width,
  },
  doneButton: {
    paddingBottom: 15,
    paddingRight: 20,
  },
  doneButtonText: {
    color: '#4B0082',
    fontSize: 16,
  },
  skipButton:{
    paddingBottom: 15,
    paddingLeft: 20,
  },
  NextButton:{
    paddingBottom: 15,
    paddingRight: 20,
  }
});
