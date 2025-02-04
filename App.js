import { StyleSheet, Text, View } from 'react-native';
import ViewScrolling from './components/ViewScrolling';
import Constants from 'expo-constants';
import FlatIsJustice from './components/FlatIsJustice';

export default function App() {

  return (
    <View style={styles.container}>
      <FlatIsJustice />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingLeft: 8,
    paddingRight: 8
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 5,
    borderColor: '#ccc',
    borderWidth: 1,
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5
  },
  image: {
    marginRight: 16
  },
  rowText: {
    fontSize: 16,
    marginLeft: 5,
    padding: 1
  }
});


