import React, {useState, useEffect} from 'react';
import {FlatList, View, Text, StyleSheet} from 'react-native';
import useFetch from '../hooks/useFetch';
import CategoryCard from '../companents/CategoryCard/CategoryCard.js';

import Loading from '../companents/Loading/Loading.js';
import Error from '../companents/Error/Error.js';

function CategoryPage({navigation}) {
  const CategoriesUrl =
    'https://www.themealdb.com/api/json/v1/1/categories.php';
  const {error, loading, data} = useFetch(CategoriesUrl);

  const onHandleCategory = title => {
    navigation.navigate('Meals', {title});
  };

  const renderCategory = ({item}) => (
    <CategoryCard
      category={item}
      onSelect={() => onHandleCategory(item.strCategory)}
    />
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
        data={data.categories}
        renderItem={renderCategory}
        keyExtractor={item => item.idCategory}
      />
    </View>
  );
}

export default CategoryPage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'orange',
  },
});
