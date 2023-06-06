import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Feild from '../Components/Feild';
import CustomPicker from '../Components/picker';
import Btn from '../Components/Btn';
import Result from '../Components/Result';
const Temperature = () => {
  const [from, setFrom] = useState(0);
  const [selectedValue, setSelectedValue] = useState('Celsius');
  const [selectedToValue, setSelectedToValue] = useState('Celsius');
  const [result,setResult] = useState(0)
  const data = ['Fahrenheit', 'Celsius', 'Kelvin'];

  const reset=()=>{
    setFrom(0);
    setSelectedValue('Celsius');
    setSelectedToValue('Celsius')
  }

    const convert = () => {
    if (selectedValue === selectedToValue) {
      setResult(from);
    } else {
      if (selectedValue === 'Celsius') {
        if (selectedToValue === 'Fahrenheit') {
          setResult((from*(9/5)+32));
        } else if (selectedToValue === 'Kelvin') {
          setResult(from +273.15 );
        }
      } else if (selectedValue === 'Fahrenheit') {
        if (selectedToValue=== 'Celsius') {
          setResult((from -32)/1.8);
        }
        if (selectedToValue === 'Kelvin') {
          setResult((from-32)*(5/9)+273.15);
        }
      } else if (selectedValue === 'Kelvin') {
        if (selectedToValue === 'Celsius') {
          setResult(from- 273.15);
        }
        if (selectedToValue === 'Fahrenheit') {
          setResult((from-273.15)*(9/5)+32);
        }
      }
    }
  };
  
  return (
    <View style={styles.view}>
      <Text style={styles.textBig}>Temperature</Text>
      <Text style={styles.text}>From</Text>
      <CustomPicker
        data={data}
        selectedValue={selectedValue}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
      />
      
      
      <Text style={styles.text}>To</Text>
      <CustomPicker
        data={data}
        selectedValue={selectedToValue}
        onValueChange={(itemValue) => setSelectedToValue(itemValue)}
      />
      <Feild
        placeHolder="from"
        value={from}
        onChangeText={(text) => setFrom(parseInt(text))}
      />
      
      <Btn btnLabel = {"Reset"} Press = {reset} btnColor = "#274531" textColor = '#a9dbba'/>
      <Btn  btnLabel = {"Convert"} Press = {convert} btnColor = "#274531" textColor = '#a9dbba'/>
      <Result  result={result}/>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#99ad9e',
    paddingTop: '12%',
    height: '100%',
    flex: 1,
    alignItems: 'center'
  },

  text: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: '4%',
    color:"#756d6c"
  },
  textBig: {
    fontSize: 27,
    margin: 20,
    fontWeight: 'bold',
    color:'#363131',
  },
});
export default Temperature;