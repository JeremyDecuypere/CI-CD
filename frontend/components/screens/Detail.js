import { Dimensions, TouchableOpacity } from 'react-native';
import {View,Text} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { FlatList,StyleSheet } from 'react-native';
import { variants } from '../../api/daos/fetchVariants';
import React, { useState, useEffect } from 'react';

const DetailScreen = ({route, navigation}) =>{

const styles = StyleSheet.create({
    carname: {
        fontWeight: 'bold',
        fontSize: 30, 
        textAlign: 'center'
    },
    carinfo:{
        fontSize: 10, 
        textAlign: 'center'
    },
    card: {
        height: Dimensions.get('window').height / 4,
        width: (Dimensions.get('window').width / 2.5), 
        borderRadius: 10,
        margin: (Dimensions.get('screen').width)*0.03, 
        backgroundColor: '#81C4FF',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    content: {
        justifyContent: 'center', 
        alignItems: 'center' 
    }
})
    if(route.params != undefined){
        const {car} = route.params;
        console.log(car)
        
        const [data, setData] = useState([]); 
        const [loading, setLoading] = useState(true); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await variants(car.id); 
                setData(result);
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
            <View style={[{ flex: 1 }, styles.content]}>
                <Text>Loading...</Text>
            </View>
        );
    }

    return (
        <View style={{padding: 20}}>
            <View>
                <Text style={styles.carname}>
                    {car.name}</Text>
                <Text style={styles.carinfo}>{car.description}</Text>
                <Text style={styles.carinfo}>{car.details}</Text>
            </View>
            <FlatList
            style= {{}}
                    data={data}
                    numColumns={2} 
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate('Specificaties',{car: item})}
                            style={styles.card}
                        >
                            <View style={styles.content}>
                            <Text style={{ fontWeight: 'bold', color: '#6F6F6F' }}>{item.modelName}</Text>
                            <Ionicons name="arrow-forward-circle-sharp" size="30" ></Ionicons>
                            </View>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
        </View>
        
    )
    }
}

export default DetailScreen