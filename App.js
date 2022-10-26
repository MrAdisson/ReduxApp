import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import Counter from './src/component/counter'
import store from './src/store/store'
import {Provider} from 'react-redux';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Todolist from './src/component/todolist';


function Home(){


  const navigation = useNavigation()

  return(
  <View style={styles.container}>
    <Button onPress={() => navigation.navigate('Counter')} title="Go to Counter"/>
    <Button onPress={() => navigation.navigate('TodoList')} title="Go to Todolist"/>

</View>
  )

}

function CounterScreen()
{

  const navigation = useNavigation()

  return(
  <View style={styles.container}>
  <Provider store={store}>
    <Counter/>
    <Button onPress={() => navigation.goBack()} title="Back"/>
  </Provider>
</View>
  )
}



function TodoList(){

  const navigation = useNavigation()

  return(
  <View style={styles.container}>
  <Provider store={store}>
    <Todolist/>
    <Button onPress={() => navigation.goBack()} title="Back"/>
  </Provider>
</View>
  )

}


const Stack = createNativeStackNavigator();

export default function App() {
  

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Counter" component={CounterScreen} />
        <Stack.Screen name="TodoList" component={TodoList} />
      </Stack.Navigator>
    </NavigationContainer>
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
