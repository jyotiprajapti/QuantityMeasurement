import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Btn = ({btnColor, textColor, btnLabel, Press}) => {
  return (
    <TouchableOpacity
    onPress={Press}
      style={{
        backgroundColor: btnColor,
        borderRadius: 100,
        alignItems: 'center',
        width:"55%" ,
        paddingVertical: '2%',
        margin: 10,
        marginBottom:'7%'
      }}>
      <Text style={{color: textColor, fontSize: 25, fontWeight: 'bold'}}>
        {btnLabel}
      </Text>
    </TouchableOpacity>
  );
};

export default Btn;
