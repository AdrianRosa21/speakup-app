import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import AnimatedBackground from '../components/AnimatedBackground';

export default function Login() {
  const [fontsLoaded] = useFonts({
    'Fredoka': require('../assets/fonts/Fredoka-Regular.ttf'),
    'Happy': require('../assets/fonts/HappyFontTH.ttf'),
  });

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

      <Text style={styles.textoAyuda}>Indicale a tus padres que te ayuden con estos datos</Text>


      

      <View style={styles.inputContainer}>
        <Image source={require('../assets/icons/person-circle.svg')} style={styles.icono} />
        <TextInput
          placeholder="Nombre de usuario"
          placeholderTextColor="#000"
          style={styles.input}
        />
      </View>
      

      <View style={styles.inputContainer}>
        <Image source={require('../assets/icons/key-fill.svg')} style={styles.icono} />
        <TextInput
          placeholder="Contraseña"
          placeholderTextColor="#000"
          secureTextEntry
          style={styles.input}
        />
      </View>

      <TouchableOpacity>
        <Text style={styles.olvido}>¿Olvidaste tu contraseña?</Text>
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
      fontSize: 75,
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
    olvido: {
      marginTop: 10,
      fontFamily: 'Fredoka',
      color: '#000',
      fontSize: 18,
      textDecorationLine: 'underline',
    },
  });