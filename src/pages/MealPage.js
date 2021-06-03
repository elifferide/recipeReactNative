import React from 'react';
import {FlatList, Text, View, StyleSheet} from 'react-native';
import useFetch from '../hooks/useFetch';

import Loading from '../companents/Loading/Loading.js';
import Error from '../companents/Error/Error.js';
import MealCard from '../companents/MealCard';

function MealPage({route, navigation}) {
  const {title} = route.params;
  const MealsUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${title}`;
  const {error, loading, data} = useFetch(MealsUrl);

  const onHandleMeal = id => {
    navigation.navigate('Details', {id});
  };

  const renderMeal = ({item}) => (
    <MealCard meal={item} onSelect={() => onHandleMeal(item.idMeal)} />
  );

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={data.meals}
        renderItem={renderMeal}
        keyExtractor={item => item.idMeal}
      />
    </View>
  );
}

export default MealPage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'orange',
  },
});
