import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {StylingConstant} from '../Styling';
import Feild from '../Components/Feild';
import Btn from '../Components/Btn';

const Signup = props => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [passWord, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [validFirstName, setValidFirstName] = useState(true);
  const [validLastName, setValidLastName] = useState(true);
  const [validPassword, setValidPassword] = useState(true);
  const [validEmail, setValidEmail] = useState(true);
  const [validPhone, setValidPhone] = useState(true);
  const handleFirstNameChange = text => {
    setFirstName(text);
    const namePattern = new RegExp(/^[a-zA-Z\s]+$/);
    setValidFirstName(namePattern.test(text));
  };
  const handleLastNameChange = text => {
    setLastName(text);
    const namePattern = new RegExp(/^[a-zA-Z\s]+$/);
    setValidLastName(namePattern.test(text));
  };

  const handlePasswordChange = text => {
    setPassword(text);
    const passWordPattern = new RegExp(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    );
    setValidPassword(passWordPattern.test(text));
  };

  const handleEmailChange = text => {
    const emailPattern = new RegExp(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    );
    setEmail(text);
    setValidEmail(emailPattern.test(text));
  };
  const handlePhoneChange = text => {
    const phoneNumberPattern = /^\+[0-9]{1,3}-[0-9]{3,14}$/;
    setPhoneNumber(text);
    setValidPhone(phoneNumberPattern.test(text));
  };

  return (
    <View
      style={{
        alignItems: 'center',
        width: '100%',
        backgroundColor: StylingConstant.Primary,
        flex: 1,
        height: '100%',
      }}>
      <Text
        style={{
          color: StylingConstant.text,
          fontWeight: 'bold',
          fontSize: 64,
          marginVertical: 10,
        }}>
        Register
      </Text>

      <View
        style={{
          backgroundColor: 'white',
          height: '80%',
          width: '90%',
          borderTopLeftRadius: 100,
          paddingTop: '8%',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 10}}>
          Create a new account
        </Text>
        <Feild
          placeholder="First Name"
          onChangeText={handleFirstNameChange}
          value={firstName}
        />
        {!validFirstName && <Text>Please enter a valid First name</Text>}
        <Feild
          placeholder="Last Name"
          onChangeText={handleLastNameChange}
          value={lastName}
        />
        {!validLastName && <Text>Please enter a valid Last name</Text>}
        <Feild
          placeholder="Contact Number"
          value={phoneNumber}
          onChangeText={handlePhoneChange}
        />
        {!validPhone && <Text>Enter a valid number</Text>}
        <Feild
          placeholder="E-mail"
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
        <Feild placeholder="Confirm Password" secureTextEntry={true}></Feild>
       
        <View style={{alignItems: 'flex-end', marginVertical: 8}}></View>
        <Btn
          textColor={StylingConstant.buttonText}
          btnLabel={'Signup'}
          btnColor={StylingConstant.buttoncolor}
          Press={() => props.navigation.navigate("ChoosingScreen")}
        />


        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 16}}>Already Have an account?</Text>
          <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
            <Text
              style={{
                color: "#0000ff",
                fontWeight: 'bold',
                fontSize: 16,
              }}>
              Login
            </Text>
            
          </TouchableOpacity>
          
        </View>
      </View>
    </View>
  );
};

export default Signup;
