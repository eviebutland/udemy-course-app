import React from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';


export const GoalItem = (props) => {
  return (
    // This touchable is a non visable component 
    <TouchableOpacity onPress={props.onDelete} activeOpacity={0.8}> 
      <View style={styles.listItem}>
          <Text style={styles.buttonText}>
            {props.title}
          </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  listItem: {
    borderColor: 'grey',
    padding: 10,
    margin: 10,
    backgroundColor: '#ddd'
  }
})