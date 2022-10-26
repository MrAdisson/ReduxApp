import { Button, StyleSheet, Text, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { increaseCount, decreaseCount, resetCount } from '../store/action';

export default function Counter(props) {
    
    const counter = useSelector((state) => state.count)
    const dispatch = useDispatch()

    return (
    <View style={{flex:1, marginVertical: 50, marginHorizontal:20}}>
      <Text style={{alignSelf: 'center', fontSize:30}}> Counter App</Text>

        <View style={styles.container}>
            <Button 
            color= 'green'
            touchSoundDisabled = {false}
            title="Up"
            onPress={() => {dispatch(increaseCount()); console.log("COUNT INCREASE")}}
            />
            <Text style={{margin: 10, alignSelf: 'center'}}> {counter} </Text>
            <Button 
            color= 'orange'
            title="Down"
            onPress={() => {dispatch(decreaseCount()); console.log("COUNT DECREASE")}}
            />

        </View>
        <View>
            <Button
            color='red'
            title="RESET"
            onPress={() => {dispatch(resetCount()); console.log("COUNT RESET")}}
            />
        </View>
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
  