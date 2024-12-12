import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const WelcomeScreen = () => {
    const style = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#0166B1',
            alignItems: 'center',
            justifyContent: 'center',
        },
        common: {
            fontFamily: '-apple-system, BlinkMacSystemFont',
            color: 'white',
           // fontWeight: 'bold',
            marginBottom: 10,
        },
        logo: {
            width: 100, 
            height: 100, 
            resizeMode: 'contain',
        },
    });

    return (
        <View style={style.container}>
            <Text style={[style.common, { marginBottom: 50, fontSize: 30 }]}>
                Beamercatalog
            </Text>
            <Image source={require('../../assets/logo.png')} style={style.logo} />
        </View>
    );
};

export default WelcomeScreen;
