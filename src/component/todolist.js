import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, removeTodo } from '../store/action';



const TodoItem = (props) => {
    const dispatch = useDispatch()

    return(
    <View style={styles.todoItem}>
    <Text style={{alignSelf: 'center', width: 200}}>{props.text}</Text>
    <Button color='orange' title="X" onPress={() => dispatch(removeTodo({id: props.id, text: props.text}))}/>
    </View>
    )
}



export default function Todolist(props) {
    
    const todos = useSelector((state) => state.todos)
    const todoId = useSelector((state) => state.todoCurrentId)
    const dispatch = useDispatch()

    const [todoTxt, updateTxt] = useState("")

    const renderItem = ({ item }) => (
        <TodoItem text={item.text} id={item.id} />
      );
    return (

    <View style={{flex:1, marginHorizontal:20, marginTop:50, marginBottom: 10}}>
        <Text style={{alignSelf: 'center', fontSize:30}}> Todo List</Text>
        <View style={styles.input}>
            <TextInput placeholder="Enter Text" onChangeText={updateTxt}>{todoTxt}</TextInput>
        </View>
        <Button title="Add todo" onPress={() => {dispatch(addTodo({id:todoId, text: todoTxt})); updateTxt('')}}/>
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
    todoItem: {
        padding:10,
        flexDirection: 'row',
        justifyContent: 'space-between', 
        backgroundColor: '#fff',
        borderColor: 'orange', 
        borderStyle: 'solid',
        borderWidth: 3,
        borderRadius:10,
        marginTop: 5
    },
    input: {
        backgroundColor: '#fff',

        padding:10,
        borderColor: 'grey', 
        borderStyle: 'solid',
        borderWidth: 3,
        borderRadius:10,
        marginVertical: 5
    }
  });
  