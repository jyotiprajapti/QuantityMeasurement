import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Feild from '../Components/Feild';
import CustomPicker from '../Components/picker';
import Btn from '../Components/Btn';
import Result from '../Components/Result';
//import {StylingConstant} from '../Styling';
const Length = () => {
  const [from, setFrom] = useState(0);
  const [selectedValue, setSelectedValue] = useState('Centimeter');
  const [selectedToValue, setSelectedToValue] = useState('Centimeter');
  const [result, setResult] = useState(0);
  const data = ['Centimeter', 'Meter', 'Kilometer'];

  const reset = () => {
    setFrom(0);
    setResult(0)
    setSelectedValue('Centimeter');
    setSelectedToValue('Centimeter');
  };

  const convert = () => {
    if (selectedValue === selectedToValue) {
      setResult(from);
    } else {
      if (selectedValue === 'Centimeter') {
        if (selectedToValue === 'Meter') {
          setResult(from / 100);
        } else if (selectedToValue === 'Kilometer') {
          setResult(from / 100000);
        }
      } else if (selectedValue === 'Meter') {
        if (selectedToValue === 'Centimeter') {
          setResult(from * 100);
        }
        if (selectedToValue === 'Kilometer') {
          setResult(from / 1000);
        }
      } else if (selectedValue === 'Kilometer') {
        if (selectedToValue === 'Centimeter') {
          setResult(from * 100000);
        }
        if (selectedToValue === 'Meter') {
          setResult(from * 1000);
        }
      }
    }
  };

  return (
    <View style={styles.view}>
      <Text style={styles.textBig}>Length</Text>
      <Text style={styles.text}>From</Text>

      <CustomPicker
        data={data}
        selectedValue={selectedValue}
        onValueChange={itemValue => setSelectedValue(itemValue)}
      />

      <Text style={styles.text}>To</Text>
      <CustomPicker
        data={data}
        selectedValue={selectedToValue}
        onValueChange={itemValue => setSelectedToValue(itemValue)}
      />
      <Feild
        placeHolder="from"
        value={from}
        onChangeText={text => setFrom(parseInt(text))}
      />

      <Btn
        btnLabel={'Reset'}
        Press={reset}
        btnColor="#274531"
        textColor="#a9dbba"
      />
      <Btn
        btnLabel={'Convert'}
        Press={convert}
        btnColor="#274531"
        textColor="#a9dbba"
      />
      <Result result={result} />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#99ad9e',
    paddingTop: '12%',
    height: '100%',
    flex: 1,
    alignItems: 'center',
  },
  spacing: {
    margin: 10,
    padding: 5,
  },

  text: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: '7%',
    color: '#756d6c',
  },
  textBig: {
    fontSize: 27,
    margin: '7%',
    fontWeight: 'bold',
    color: '#363131',
  },
});
export default Length;
