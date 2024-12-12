import { DarkTheme, DefaultTheme, NavigationContainer, TabRouter } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import AppNav from './components/navigation/GlobalNavigation';
import WelcomeScreen from './components/screens/Welcome';
import colors from './styles/colors';


export default function App() {
    const [showSplash, setShowSplash] = useState(true);
    

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);

    return () => clearTimeout(timer); 
  }, []);

  if (showSplash) {
    return (
       <WelcomeScreen>
        </WelcomeScreen>
    );
  }
  return (
    <NavigationContainer style={{fontFamily: '-apple-system, BlinkMacSystemFont'}} 
    >
      <AppNav></AppNav>
    </NavigationContainer>
  );
}


