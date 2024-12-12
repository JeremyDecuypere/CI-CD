import { Text, View, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Dimensions } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { entries } from '../../api/daos/fetchModels.js';

const HomeScreen = ({ navigation }) => {


const styles = StyleSheet.create({
    content: {
        justifyContent: 'center', 
        alignItems: 'center' ,
    },
    card: {
        height: Dimensions.get('window').height / 3,
        width: Dimensions.get('window').width / 2.15,
        margin: 5,
        backgroundColor: '#81C4FF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    }

})
    const [data, setData] = useState([]); 
    const [loading, setLoading] = useState(true); 
    

        const fetchData = async () => {
            try {
                const result = await entries(); 
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false); 
            }
        };
        if(data.length == 0){
        fetchData();
        }
     
    if (loading) {
        return (
                <View style={[{ flex: 1}, styles.content]}>
                <Text>Loading...</Text>
            </View>
        );
    }

    return (
        <ScrollView contentContainerStyle={styles.content} style={{ paddingTop: 10}}>
            <FlatList
                data={data}
                numColumns={2}
                renderItem={({ item }) => (
                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity
                            style={{ color: 'black' }}
                            onPress={() => navigation.navigate('Details', { car: item })}
                        >
                            <View style={styles.card}>
                                <View style={{ paddingBottom: 20 }}>
                                    <Text style={{ color: '#6F6F6F' }}>{item.name}</Text>
                                    <Text style={{ color: '#6F6F6F' }}>{item.description}</Text>
                                </View>
                                <Ionicons name="reader-sharp" size={25} />
                            </View>
                        </TouchableOpacity>
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </ScrollView>
    );
};


export default HomeScreen;