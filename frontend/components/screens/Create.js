import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, ScrollView } from 'react-native';
import { createVariant } from '../../api/data';

const CreateScreen = ({navigation}) => {
   
  const [modelName, setModelName] = useState('');
  const [modelNameDetail, setModelNameDetail] = useState('');
  const [description, setDescription] = useState('');
  const [details, setDetails] = useState('');
  const [engineCode, setEngineCode] = useState('');
  const [powerKw, setPowerKw] = useState('');
  const [powerHp, setPowerHp] = useState('');
  const [fuelConsumption, setFuelConsumption] = useState('');
  const [engine, setEngine] = useState('');
  const [tankCapacity, setTankCapacity] = useState('');

  
  const handleSubmit = async () => {
    const body = {
      Variant: {
        model_name: modelName, 
      },
      Model: {
        name: modelNameDetail, 
        description: description,
        details: details,
      },
      Engine: {
        engine_code: engineCode, 
        power_kw: parseFloat(powerKw), 
        power_hp: parseFloat(powerHp),
        fuel_consumption: fuelConsumption,
        engine: engine,
        tank_capacity: parseFloat(tankCapacity),
      },
    };
    createVariant(body)
    navigation.navigate("Home")
  };

  return (
    <ScrollView contentContainerStyle={{ alignItems: 'stretch', justifyContent: 'center' }} style={styles.container}>
      <Text style={styles.header}>Create Variant</Text>
      <Text>Model Name:</Text>
      <TextInput placeholder="E.G: M440i" style={styles.input} value={modelName} onChangeText={setModelName}/>
    <Text>Series:</Text>
      <TextInput placeholder="E.G: G82 (4 series sedan)" style={styles.input} value={modelNameDetail} onChangeText={setModelNameDetail}/>
      <Text>Years:</Text>
      <TextInput style={styles.input} value={description} onChangeText={setDescription}/>
      <Text>Description:</Text>
      <TextInput style={styles.input} value={details} onChangeText={setDetails}/>
      <Text>Engine Code:</Text>
      <TextInput placeholder="E.G: B58"style={styles.input} value={engineCode} onChangeText={setEngineCode}/>
      <Text>Power (kw):</Text>
      <TextInput style={styles.input} keyboardType="numeric" value={powerKw} onChangeText={setPowerKw}/>
      <Text>Power (hp):</Text>
      <TextInput style={styles.input} keyboardType="numeric" value={powerHp} onChangeText={setPowerHp}/>
      <Text>Fuel Consumption:</Text>
      <TextInput style={styles.input} value={fuelConsumption} onChangeText={setFuelConsumption}/>
      <Text>Engine Type:</Text>
      <TextInput placeholder="E.G: Twin-Turbo Inline 6" style={styles.input} value={engine} onChangeText={setEngine}/>
      <Text>Tank Capacity:</Text>
      <TextInput  style={styles.input} keyboardType="numeric" value={tankCapacity} onChangeText={setTankCapacity}/>
      <Button title="Submit" onPress={handleSubmit}  />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});


export default CreateScreen