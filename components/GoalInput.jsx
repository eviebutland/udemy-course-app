import React, {useState} from 'react'
import { StyleSheet, View, TextInput, Button } from 'react-native'

export const GoalInput = (props) => {
  const [courseGoal, setCourseGoal] = useState('')

  const handleChange = (e) => {
    setCourseGoal(e)
  }

  return (
    <View style={styles.textContainer}>
      <TextInput style={styles.textInput} placeholder="Course Goal" onChangeText={handleChange} value={courseGoal}></TextInput>
      <Button title={props.buttonTitle} onPress={() => props.addGoalToPage(courseGoal)}/>
      {/* Above in addGoalToPage passes up a child property to a parent by using an anonomous function (it does not get rendered every call now) */}
    </View>
  )
}

const styles = StyleSheet.create({
  textContainer: {
    padding: 40, 
    flexDirection: 'row', 
    justifyContent: 'space-between'
  },
  textInput: {
    borderBottomColor: 'black', 
    borderWidth: 1, 
    padding: 10, 
    width: '100%'
  },
})