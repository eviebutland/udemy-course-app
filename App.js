import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { GoalItem } from './components/GoalItem'
import { GoalInput } from './components/GoalInput'

export default function App() {
  const [courseGoals, setCourseGoals] = useState([])
  const [isAddMode, setIsAddMode] = useState(false)
  const addGoalToPage = (courseGoal) => {
    setCourseGoals([...courseGoals, {id: Math.random().toString() , value: courseGoal}])
    setIsAddMode(false)
  }
  const removeItemFromList = (goalId) => e => {
    // filter returns an array
    // filter will remove items if they do not match 
    return setCourseGoals(courseGoals => courseGoals.filter(goal => goal.id !== goalId))
  }
  const handleCloseModel = () => {
    setIsAddMode(false)
  }

  return (
    <View style={styles.container}>
      <Text>Which is in a view, like a div!</Text>
      <Button title="Add new goal" onPress={() => setIsAddMode(true)}/>
      <GoalInput 
        isAddMode={isAddMode}
        buttonTitle="Add"
        addGoalToPage={addGoalToPage}
        onCloseModel={handleCloseModel}/>
      <FlatList style={styles.list} 
        data={courseGoals} 
        keyExtractor={(item, key) => item.key}
        renderItem={ itemData => 
          <GoalItem id={itemData.item.id} title={itemData.item.value} onDelete={removeItemFromList(itemData.item.id)}/>
      }></FlatList>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 40
  },
  list: {
    flexDirection: 'column-reverse'
  }

});
