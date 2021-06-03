import React from 'react';
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  ScrollView,
  Linking,
} from 'react-native';
import styles from './DetailPage.style';
import useFetch from '../hooks/useFetch';

import Loading from '../companents/Loading';
import Error from '../companents/Error';
function DetayPage({route}) {
  const {id} = route.params;
  const MealsUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  const {error, loading, data} = useFetch(MealsUrl);

  const goURL = () => {
    Linking.openURL(data.meals[0].strYoutube).catch(err =>
      console.error('Error', err),
    );
  };

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image
          style={styles.image}
          source={{uri: data.meals[0].strMealThumb}}
        />
        <Text style={styles.title}>{data.meals[0].strMeal}</Text>
        <Text style={styles.area}>{data.meals[0].strArea}</Text>
        <Text style={styles.Instructions}>{data.meals[0].strInstructions}</Text>
        <View style={styles.youtube}>
          <TouchableOpacity style={styles.touchArea} onPress={goURL}>
            <Text style={styles.touchTitle}> Watch on Youtube</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

export default DetayPage;
