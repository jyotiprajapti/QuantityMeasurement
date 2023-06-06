import {TextInput} from 'react-native';
import React from 'react';
import { StylingConstant } from '../Styling';

const Feild = props => {
  return (
    <TextInput
      {...props}
      style={{
        borderRadius: 100,
        color: StylingConstant.text,
        paddingHorizontal: 10,
        width: '80%',
        backgroundColor: 'lightgrey',
        marginVertical: 10,
        marginBottom:'7%',
        fontSize:20
      }}

      placeholderTextColor={StylingConstant.text}></TextInput>
  );
};

export default Feild;