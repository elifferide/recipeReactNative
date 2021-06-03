import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#ededed',
  },
  image: {
    height: Dimensions.get('window').height / 3,
  },
  title: {paddingLeft: 5, color: 'red', fontSize: 30, fontWeight: 'bold'},
  area: {
    paddingLeft: 5,
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  Instructions: {
    padding: 5,
    borderTopWidth: 1,
    borderTopColor: 'gray',
    paddingTop: 10,
  },
  touchArea: {
    backgroundColor: 'red',
    marginBottom: 30,
    marginTop: 20,
    padding: 10,
    margin: 15,
    borderRadius: 10,
  },
  touchTitle: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
});
