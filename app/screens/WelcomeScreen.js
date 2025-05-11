import { View, Text, Button, StyleSheet } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎉 ¡Bienvenido a FunEnglish! 🎉</Text>
      <Button title="Entrar como Niño 👦" onPress={() => alert("Modo Niño")} />
      <Button title="Entrar como Padre 👨‍🦰" onPress={() => alert("Modo Padre")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD93D',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
});