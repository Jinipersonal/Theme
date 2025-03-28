import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Switch, Button, Card, TextInput } from 'react-native-paper';
import { useTheme } from '../theme/ThemeContext';
import Icon from 'react-native-vector-icons/MaterialIcons';
const SettingsScreen = ({ navigation }) => {
  const { theme, setTheme, fontSize, setFontSize } = useTheme();
  const isDarkMode = theme === 'dark';

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#121212' : '#F5F5F5' }]}>
      {/* <Card style={styles.card}>
        <Card.Title title="User Preferences" titleStyle={{ fontSize: 22, fontWeight: 'bold' }} />
        <Card.Content> */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={[styles.label, { color: isDarkMode ? '#FFF' : '#000' }]}>Dark Mode</Text>
        <Switch value={isDarkMode} onValueChange={() => setTheme(isDarkMode ? 'light' : 'dark')} />
      </View>
      <Text style={[styles.label, { color: isDarkMode ? '#FFF' : '#000', marginTop: 15 }]}>Font Size</Text>
      <View style={styles.buttonContainer}>
        <Button mode="contained" onPress={() => setFontSize(fontSize - 2)} style={styles.button}>
          <Text style={{ fontSize: 24 }}>A-</Text>
          {/* <Icon name='text-decrease' style={{fontSize:24}}/> */}
        </Button>
        <Text style={[styles.label, { color: isDarkMode ? '#FFF' : '#000' }]}>{fontSize}</Text>
        <Button mode="contained" onPress={() => setFontSize(fontSize + 2)} style={styles.button}>
          {/* <Icon name='text-increase' style={{fontSize:24}}/> */}
          <Text style={{ fontSize: 24 }}>A+</Text>
        </Button>
      </View>
      <Text style={[styles.label, { fontSize: fontSize, color: isDarkMode ? '#FFF' : '#000', marginTop: 15 }]}> This is a sample text. The font size and theme are applied dynamically.</Text>

      {/* </Card.Content>
      </Card> */}

      <Button mode="contained" onPress={() => navigation.navigate('Display')} style={styles.navigateButton}>
        Go to Display
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  card: { width: '100%', padding: 20, elevation: 5 },
  label: { fontSize: 18, marginVertical: 10 },
  buttonContainer: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 },
  button: { marginHorizontal: 10 },
  navigateButton: { marginTop: 20, width: '100%', borderRadius: 5 },
});

export default SettingsScreen;
