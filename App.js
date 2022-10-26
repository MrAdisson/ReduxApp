import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Counter from './src/component/counter'
import store from './src/store/store'
import {Provider} from 'react-redux';

export default function App() {
  return (
    
    <View style={styles.container}>
      <Provider store={store}>
        <Counter/>
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
});
