import React from 'react';
import {
  ImageBackground,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import styles from './MealCard.style';

function MealCard({meal, onSelect}) {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <ImageBackground source={{uri: meal.strMealThumb}} style={styles.image}>
          <Text style={styles.title}>{meal.strMeal}</Text>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}
export default MealCard;
