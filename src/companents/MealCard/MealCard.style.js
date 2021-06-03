import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    margin: 10,
    height: Dimensions.get('window').height / 3,
  },
  image: {
    height: Dimensions.get('window').height / 3,
    borderRadius: 15,
    justifyContent: 'flex-end',
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    color: 'white',
    textAlign: 'right',
    padding: 3,
  },
});
