import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNav from "./NavigationTab";
import SpecificationScreen from "../screens/Specificaties";
import DetailScreen from "../screens/Detail";
import CreateScreen from "../screens/Create";



const Stack = createNativeStackNavigator();

const AppNav = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={TabNav} 
            options={{headerShown: false}}
            />
            <Stack.Screen name="Details" component={DetailScreen} />
            <Stack.Screen name="Specificaties" component={SpecificationScreen}/>
            <Stack.Screen name="Create" component={CreateScreen}/>
           
        </Stack.Navigator>
    )
}

export default AppNav