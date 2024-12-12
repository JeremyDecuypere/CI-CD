import React, { useState } from "react";
import { View, Text, Dimensions, TouchableOpacity, FlatList, TextInput } from "react-native";
import { entries } from "../../api/daos/fetchModels.js";
import { StyleSheet } from "react-native";

const SearchScreen = ({navigation}) => {
    const [filteredData, setFilteredData] = useState([]);
    
    const style = StyleSheet.create({
        inputArea: {
            marginTop: 50,
            height: 40,
            borderColor: '#ccc',
            borderWidth: 1,
            marginBottom: 15,
            paddingHorizontal: 10,
            borderRadius: 5,
        }, 
        container: {
            flex: 1,
            width: '100%',
            height: '100%'
        },
        card :{
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
            width: Dimensions.get('screen').width * 0.8,
            marginVertical: 10,
            height: Dimensions.get('screen').height * 0.1,
            backgroundColor: '#81C4FF',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
        }
    })

    const getDataByName = async (text) =>{
                try {
                    const result = await entries(); 
                    setFilteredData(result.filter(
                        item => 
                            item.name.substring(0, text.length).toLowerCase() === text.toLowerCase()
                    ));
                    
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            };
    
    


    return (
        <View style={[style.container, { alignItems: 'center', justifyContent: 'center'}]}>
            <TextInput
                style={style.inputArea}
                placeholder="Search your car (e.g E90)"
                onChangeText={getDataByName} 
            />

            <FlatList
                data={filteredData}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={style.card}
                        onPress={() => {navigation.navigate("Details", {car: item}),console.log(item)}}
                    >
                        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 16 }}>{item.name}</Text>
                        <Text style={{ color: 'black', fontSize: 12 }}>{item.description}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={{ paddingBottom: 20 }}
            />
        </View>
    );
};

export default SearchScreen;
