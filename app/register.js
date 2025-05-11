import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import AnimatedBackground from '../components/AnimatedBackground';
import { useState } from 'react';

export default function Register() {
  const [fontsLoaded] = useFonts({
    'Fredoka': require('../assets/fonts/Fredoka-Regular.ttf'),
    'Happy': require('../assets/fonts/HappyFontTH.ttf'),
  });

  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');

  if (!fontsLoaded) return null;

  return (
    <View style={styles.container}>
      <AnimatedBackground />

      <View style={styles.speakRow}>
        <Text style={[styles.letra, { color: '#fd721c' }]}>S</Text>
        <Text style={[styles.letra, { color: '#fd721c' }]}>P</Text>
        <Text style={[styles.letra, { color: '#ff3131' }]}>E</Text>
        <Text style={[styles.letra, { color: '#004aad' }]}>A</Text>
        <Text style={[styles.letra, { color: '#ffffff' }]}>K</Text>
        <Text style={[styles.letra, { color: '#fd721c' }]}>U</Text>
        <Text style={[styles.letra, { color: '#fd721c' }]}>P</Text>
      </View>

      <Text style={styles.textoAyuda}>¡Crea tu cuenta con ayuda de tus padres!</Text>

      <View style={styles.inputContainer}>
        <Image source={require('../assets/icons/person-circle.svg')} style={styles.icono} />
        <TextInput
          placeholder="Nombre completo"
          placeholderTextColor="#000"
          value={nombre}
          onChangeText={setNombre}
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        <Image source={require('../assets/icons/envelope.svg')} style={styles.icono} />
        <TextInput
          placeholder="Correo electrónico"
          placeholderTextColor="#000"
          keyboardType="email-address"
          value={correo}
          onChangeText={setCorreo}
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        <Image source={require('../assets/icons/key-fill.svg')} style={styles.icono} />
        <TextInput
          placeholder="Contraseña"
          placeholderTextColor="#000"
          secureTextEntry
          value={contrasena}
          onChangeText={setContrasena}
          style={styles.input}
        />
      </View>

      <TouchableOpacity style={styles.botonCrear}>
        <Text style={styles.textoBoton}>Crear cuenta</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffde59',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 20,
    },
    speakRow: {
      flexDirection: 'row',
      marginBottom: 20,
    },
    letra: {
      fontSize: 60,
      fontFamily: 'Fredoka',
      marginHorizontal: 1,
    },
    textoAyuda: {
      fontFamily: 'Fredoka',
      fontSize: 16,
      color: '#6e4c0b',
      marginBottom: 25,
      textAlign: 'center',
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderRadius: 30,
      paddingHorizontal: 20,
      marginBottom: 15,
      height: 50,
      width: '100%',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.15,
      shadowRadius: 3,
      elevation: 3,
    },
    icono: {
      width: 24,
      height: 24,
      marginRight: 12,
    },
    input: {
      flex: 1,
      fontSize: 16,
      fontFamily: 'Happy',
      color: '#000',
    },
    botonCrear: {
      backgroundColor: '#1d3557',
      borderRadius: 25,
      paddingVertical: 12,
      paddingHorizontal: 50,
      marginTop: 10,
      elevation: 4,
    },
    textoBoton: {
      color: '#fff',
      fontSize: 18,
      fontFamily: 'Fredoka',
      textAlign: 'center',
    },
  });
  