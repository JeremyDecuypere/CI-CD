import { View, Text, Dimensions, TouchableOpacity } from "react-native"
import Ionicons from 'react-native-vector-icons/Ionicons'
import { engines } from "../../api/daos/fetchEngineData"
import React, { useState, useEffect } from 'react';

const SpecificationScreen = ({route}) => {
    
    const {car} = (route.params)
    console.log(car)

    const [data, setData] = useState([]); 
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await engines(car.engineId); 
                setData(result);
                console.log(result)
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false); 
            }
        };

        fetchData();
    }, []); 

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Loading...</Text>
            </View>
        );
    }

    
    return(
        <View style={{justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20}}>
            <View style={{borderRadius: 10,
                backgroundColor: '#E7222E',
                justifyContent: 'center',
                alignItems: 'center',
                height: Dimensions.get('window').height / 4,
                width: Dimensions.get('screen').width / 2.5,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,}}>
                <Text>Placeholder for a picture</Text>
                <TouchableOpacity onPress={() => 
                addFavorite()
            }>
                <Ionicons name="heart-outline" size={30} style={{marginTop: 20}}></Ionicons>
            </TouchableOpacity>
            </View>
        
            
            
            <View style={{marginTop: 10}}>
                <Text style={{fontWeight: "bold"}}>Model: {car.modelName}</Text>
                <Text>Motor Code: {data[0].engineCode}</Text>
                <Text>kw: {data[0].powerKw}</Text>
                <Text>hp :{data[0].powerHp}</Text>
                <Text>Tank Capaciteit{data[0].tank_capacity}</Text>
                <Text>Gemiddeld brandstof verbruik: {data[0].fuelConsumption}</Text>
            </View>
        </View>
    )


    

}

export default SpecificationScreen