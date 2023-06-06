import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {StylingConstant} from '../Styling';
import Feild from '../Components/Feild';
import Btn from '../Components/Btn';

const Login = props => {
  const [email, setEmail] = useState('');
  const [passWord, setPassword] = useState('');
  const [validEmail, setValidEmail] = useState(true);
  const [validPassword, setValidPassword] = useState(true);
  const e_mail = "jyoti@gmail.com";
  const password =  "abc@123ABC";
  const handleEmailChange = text => {
    const emailPattern = new RegExp(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    );
    setEmail(text);
    setValidEmail(emailPattern.test(text));
  };

  const handlePasswordChange = text => {
    setPassword(text);
    const passWordPattern = new RegExp(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    );
    setValidPassword(passWordPattern.test(text));
  };

  return (
    <View style={styles.view}>
      <Text style={styles.text}>Login</Text>
      <View style={styles.view2}>
        <Text style={styles.text2}>Welcome Back</Text>
        <Text style={styles.text3}>Login to your Account</Text>
        <Feild
          placeholder="E-mail"
          keyboardType={'email-address'}
          onChangeText={handleEmailChange}
          value={email}
        />
        {!validEmail && <Text>Enter a valid E-mail</Text>}
        <Feild
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={handlePasswordChange}
          value={passWord}
        />
        {!validPassword && <Text>Please enter valid password</Text>}

        <View style={{alignItems: 'flex-end', marginVertical: 20}}></View>
        <Btn
          textColor={StylingConstant.buttonText}
          btnLabel={'Login'}
          btnColor={StylingConstant.buttoncolor}
          Press={() => props.navigation.navigate("ChoosingScreen")}
        />
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginVertical: 20,
          }}>
          <Text style={{fontSize: 16}}>Don't Have an account?</Text>
          <TouchableOpacity onPress={() => props.navigation.navigate('Signup')}>
            <Text
              style={{
                color: "#0000ff",
                fontWeight: 'bold',
                fontSize: 16,
              }}>
              Signup
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    alignItems: 'center',
    width: '100%',
    backgroundColor: StylingConstant.Primary,
    flex: 1,
  },
  text: {
    color: StylingConstant.text,
    fontWeight: 'bold',
    fontSize: 64,
    marginVertical: 10,
  },
  view2: {
    backgroundColor: 'white',
    height: '80%',
    width: '90%',
    borderTopLeftRadius: 100,
    paddingTop: '8%',
    alignItems: 'center',
  },
  text2: {
    fontSize: 40,
    color: StylingConstant.text,
    fontWeight: 'bold',
  },
  text3: {
    color: 'grey',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default Login;
