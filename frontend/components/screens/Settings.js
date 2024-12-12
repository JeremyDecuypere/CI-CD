import { TouchableOpacity, Dimensions, Text, View } from "react-native"
import Ionicons from 'react-native-vector-icons/Ionicons';
import SwitchToggle from "react-native-switch-toggle";
import { useState } from "react";

const SettingsScreen = ({navigation}) => {

    const [isLightModeOn, setIsLightModeOn] = useState(false);
    return(
        <View style={{margin: 'auto',}}>
            <View style={{
            height: Dimensions.get('window').height / 3,
            width: Dimensions.get('window').width / 2.15,
            justifyContent: 'center',
            alignItems: 'center'}}>
        <TouchableOpacity onPress={() => {navigation.navigate("Create")}} style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: Dimensions.get('window').height / 7,
            width: Dimensions.get('window').width / 7,
            backgroundColor: 'gray',
            borderRadius: 10,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5
            }}>
                <Ionicons name="add-circle-outline" size={40} color="black"/>
                <Text>Add variant</Text>
            </TouchableOpacity>
            
                <TouchableOpacity
          style={{
            padding: 'auto',
            marginTop: 20,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            elevation: 5,
          }}
        >
          <SwitchToggle
            switchOn={isLightModeOn}
            onPress={() => setIsLightModeOn((prev) => !prev)}
            circleColorOn="#00ff00"
            circleColorOff="#ff0000"
            containerStyle={{
              width: 60,
              height: 30,
              borderRadius: 25,
              padding: 5,
            }}
            circleStyle={{
              width: 20,
              height: 20,
              borderRadius: 20,
            }}
          />
          <Text style={{ marginTop: 10 }}>
            {isLightModeOn ? "Dark mode" : "Light mode"}
          </Text>
        </TouchableOpacity>
             
            </View>
            </View>
    )
}

export default SettingsScreen