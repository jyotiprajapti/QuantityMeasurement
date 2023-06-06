import React, { useState } from 'react';
import { StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const CustomPicker = ({ data, selectedValue, onValueChange }) => {
  return (
    <Picker
      style={styles.container}
      selectedValue={selectedValue}
      onValueChange={onValueChange}>
      {data.map((item, index) => (
        <Picker.Item label={item} value={item} key={index} />
      ))}
    </Picker>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom:'7%',
    height: "6%",
    width: "45%",
    backgroundColor: '#b1c9bd',
    alignItems: 'center'
  },
});
export default CustomPicker;
