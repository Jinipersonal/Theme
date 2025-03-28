import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Card } from 'react-native-paper';
import { useTheme } from '../theme/ThemeContext';

const DisplayScreen = ({ navigation }) => {
  const { theme, fontSize } = useTheme();
  const isDarkMode = theme === 'dark';

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#121212' : '#F5F5F5' }]}>
      {/* <Card style={styles.card}>
        <Card.Content> */}
      <Text style={[styles.text, { color: isDarkMode ? '#FFF' : '#000', fontSize }]}>
        This is a sample text. The font size and theme are applied dynamically.
      </Text>
      {/* </Card.Content>
      </Card> */}

      <Button mode="contained" onPress={() => navigation.navigate('Settings')} style={styles.navigateButton}>
        Back to Settings
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  card: { width: '100%', padding: 20, elevation: 5 },
  text: { textAlign: 'center' },
  navigateButton: { marginTop: 20, width: '100%', borderRadius: 5 },
});

export default DisplayScreen;
