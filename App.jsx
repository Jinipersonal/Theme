import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SettingsScreen from './src/components/SettingScreen';
import DisplayScreen from './src/components/DisplayScreen';
import { ThemeProvider } from './src/theme/ThemeContext';
const Stack = createStackNavigator();

const App = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Settings">
          <Stack.Screen name="Settings" component={SettingsScreen} />
          <Stack.Screen name="Display" component={DisplayScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
