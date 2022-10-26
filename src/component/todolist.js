import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, removeTodo } from '../store/action';



const TodoItem = (props) => {
    const dispatch = useDispatch()

    return(
    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
    <Text>{props.text}</Text>
    <Button title="-" onPress={() => dispatch(removeTodo({id: props.id, text: props.text}))}/>
    </View>
    )
}



export default function Todolist(props) {
    
    const todos = useSelector((state) => state.todos)
    const todoId = useSelector((state) => state.todoCurrentId)
    const dispatch = useDispatch()

    const [todoTxt, updateTxt] = useState("Entrez du texte")

    const renderItem = ({ item }) => (
        <TodoItem text={item.text} id={item.id} />
      );
    return (

    <View style={{flex:1, marginVertical: 50, marginHorizontal:20}}>
        <Text> Todo List</Text>
        <TextInput placeholder="Enter Text" onChangeText={updateTxt}>{todoTxt}</TextInput>
        <Button title="Add todo" onPress={() => {dispatch(addTodo({id:todoId, text: todoTxt}))}}/>
        <FlatList
        data={todos}
        renderItem = {renderItem} 
        keyExtractor={item => item.id}
        />

    </View>

      
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
    },
  });
  