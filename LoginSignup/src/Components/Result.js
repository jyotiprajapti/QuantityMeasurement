import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { StylingConstant } from '../Styling'
const Result = ({result}) => {
  return (
      <Text
      style={styles.text}
      TextColor={StylingConstant.text}>Result:{result = result}</Text>
  )
}

const styles = StyleSheet.create({
text:{
    borderRadius: 100,
    color: StylingConstant.text,
    paddingHorizontal: 10,
    width: '80%',
    backgroundColor: 'lightgrey',
    marginVertical: 10,
    height: "7%",
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize:20,
}
})

export default Result;