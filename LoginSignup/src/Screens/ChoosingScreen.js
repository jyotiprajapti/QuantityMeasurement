import React from 'react';
import Btn from '../Components/Btn';
import {View, StyleSheet} from 'react-native';
import Weight from './Weight';

const ChoosingScreen = (props) => {
  return(
    <View style={styles.view}>
      <Btn
        btnLabel={'Length'}
        btnColor="#274531"
        textColor="#a9dbba"
        Press={() => props.navigation.navigate('Length')}
      />
      <Btn
        btnLabel={'Temperature'}
        btnColor="#274531"
        textColor="#a9dbba"
        Press={() => props.navigation.navigate('Temperature')}
      />
      <Btn
        btnLabel={'Weight'}
        btnColor="#274531"
        textColor="#a9dbba"
       Press={() => props.navigation.navigate('Weight')}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  view: {
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

export default ChoosingScreen;
