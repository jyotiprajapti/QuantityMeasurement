import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Feild from '../Components/Feild';
import CustomPicker from '../Components/picker';
import Btn from '../Components/Btn';
import Result from '../Components/Result';
const Weight = () => {
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(0);
  const [selectedValue, setSelectedValue] = useState('Gram');
  const [selectedToValue, setSelectedToValue] = useState('Centimeter');
  const [result,setResult] = useState(0)
  const data = ['Gram', 'Miligram', 'Kilogram'];

  const reset=()=>{
    setFrom(0);
    setSelectedValue('Gram');
    setSelectedToValue('Gram')
  }

    const convert = () => {
    if (selectedValue === selectedToValue) {
      setResult(from);
    } else {
      if (selectedValue === 'Gram') {
        if (selectedToValue === 'Miligram') {
          setResult(from * 1000);
        } else if (selectedToValue === 'Kilogram') {
          setResult(from / 1000);
        }
      } else if (selectedValue === 'Miligram') {
        if (selectedToValue=== 'Gram') {
          setResult(from / 1000);
        }
        if (selectedToValue === 'Kilogram') {
          setResult(from / 1000000);
        }
      } else if (selectedValue === 'Kilogram') {
        if (selectedToValue === 'Gram') {
          setResult(from * 1000);
        }
        if (selectedToValue === 'Miligram') {
          setResult(from * 1000000);
        }
      }
    }
  };
  
  return (
    <View style={styles.view}>
      <Text style={styles.textBig}>Weight</Text>
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
    margin: '4%',
    fontWeight: 'bold',
    color:'#363131',
    
   
  },
});

export default Weight;