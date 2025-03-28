import React from 'react';
import { View, Text, Switch, Button } from 'react-native';
import { useTheme } from '../theme/ThemeContext';

const HomeScreen = () => {
  const { theme, setTheme, fontSize, setFontSize } = useTheme();
  const isDarkMode = theme === 'dark';

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: isDarkMode ? '#333' : '#fff' }}>
      <Text style={{ color: isDarkMode ? '#fff' : '#000', fontSize }}>Hello, React Native!</Text>
      <Switch
        value={isDarkMode}
        onValueChange={() => setTheme(isDarkMode ? 'light' : 'dark')}
      />
      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <Button title="A-" onPress={() => setFontSize(fontSize - 2)} />
        <Button title="A+" onPress={() => setFontSize(fontSize + 2)} />
      </View>
    </View>
  );
};

export default HomeScreen;
