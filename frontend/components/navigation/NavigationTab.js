import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from "../screens/Home";
import SearchScreen from "../screens/Search";
import SettingsScreen from "../screens/Settings";

const Tab = createBottomTabNavigator();

const TabNav = () => {
    return (
      <Tab.Navigator 
       screenOptions={
        
        ({ route }) => ({
          
        tabBarStyle: {backgroundColor: 'white', borderColor: '#0166B1', paddingTop: 10}  ,
        tabBarHideOnKeyboard: true,
        tabBarIcon: ({ focused, size }) => {
          let iconName;
          if(route.name === "Select your car"){
            iconName = focused
            ? 'car-outline'
            : 'car-outline';
          } else if(route.name === "Settings"){
            iconName = focused ? 'cog-sharp': 'cog-sharp'
          } else if(route.name === "Search"){
            iconName = focused ? 'search-sharp': 'search-sharp'
          }

          return <Ionicons name={iconName} size={size} style={{color: '#0166B1'}} ></Ionicons>
        }
       })
       
       }>
        <Tab.Screen name="Select your car" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} options={{headerShown: false}}/>
        <Tab.Screen name="Settings" component={SettingsScreen}/>
      </Tab.Navigator>
    )
}

export default TabNav