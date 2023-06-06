import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import { StylingConstant } from '../Styling';
import Btn from '../Components/Btn';
const Home = (props) => {
  return (
    <View style={styles.background}>
      <Text style={styles.text}>Welcome</Text>
      <Text style={styles.text}>Login / Signup</Text>
      <Btn
        btnColor={StylingConstant.buttoncolor}
        btnLabel={"Login"}
        textColor={StylingConstant.buttonText}
        Press = {()=>props.navigation.navigate("Login")}
      />
      <Btn
        btnColor={StylingConstant.buttonText}
        btnLabel={"Signup"}
        textColor={StylingConstant.buttoncolor}
        Press = {()=>props.navigation.navigate("Signup")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: StylingConstant.Primary,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: StylingConstant.text,
    fontSize: 40,
  },
});

export default Home;
