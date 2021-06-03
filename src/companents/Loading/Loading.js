import React from 'react';
import LottieView from 'lottie-react-native';

function Loading() {
  return (
    <LottieView source={require('../../asstes/61332-food.json')} autoPlay />
  );
}

export default Loading;
