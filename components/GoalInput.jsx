import React, {useState} from 'react'
import { StyleSheet, View, TextInput, Button, Modal } from 'react-native'

export const GoalInput = (props) => {
  const [courseGoal, setCourseGoal] = useState('')

  const handleChange = (e) => {
    setCourseGoal(e)
  }
  const addNewGoalHandler = () => {
    props.addGoalToPage(courseGoal)
    setCourseGoal('')
  }

  return (
    <Modal visible={props.isAddMode} animationType='fade'>
        <View style={styles.container}>
          <TextInput style={styles.textInput} placeholder="Course Goal" onChangeText={handleChange} value={courseGoal}></TextInput>
          <View style={styles.buttonContainer}>
            <Button title={props.buttonTitle} onPress={addNewGoalHandler}/>
            {/* Above in addGoalToPage passes up a child property to a parent by using an anonomous function (it does not get rendered every call now) */}
            <Button title="Cancel" onPress={() => props.onCloseModel()} color="red"/>
          </View>
        </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 40, 
    alignItems: 'center',
    flexDirection: 'row', 
    justifyContent: 'center',
    flex: 1,
  },
  textInput: {
    borderBottomColor: 'black', 
    borderWidth: 1, 
    padding: 10, 
    width: '90%'
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '80%'
  }
})