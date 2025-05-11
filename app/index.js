import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { useFonts } from 'expo-font';
import AnimatedBackground from '../components/AnimatedBackground.js';


export default function Index() {
  const [fontsLoaded] = useFonts({
    'Fredoka': require('../assets/fonts/Fredoka-Regular.ttf'),
    'Happy': require('../assets/fonts/HappyFontTH.ttf'),
  });

  if (!fontsLoaded) return null;

  return (
        <View style={styles.container}>
          <AnimatedBackground />
      
          <View style={styles.flagContainer}>
            <Image
              source={require('../assets/images/bandera.png')}
              style={styles.bandera}
              resizeMode="contain"
            />
            <View style={styles.speakRow}>
              <Text style={[styles.letra, { color: '#fd721c' }]}>S</Text>
              <Text style={[styles.letra, { color: '#fd721c' }]}>P</Text>
              <Text style={[styles.letra, { color: '#ff3131' }]}>E</Text>
              <Text style={[styles.letra, { color: '#004aad' }]}>A</Text>
              <Text style={[styles.letra, { color: '#ffffff' }]}>K</Text>
              <Text style={[styles.letra, { color: '#fd721c' }]}>U</Text>
              <Text style={[styles.letra, { color: '#fd721c' }]}>P</Text>
            </View>
          </View>
      
          <Link href="/login" asChild>
            <TouchableOpacity style={styles.botonRojo}>
              <Text style={styles.botonTexto}>Log in</Text>
            </TouchableOpacity>
          </Link>
      
          <Link href="/register" asChild>
            <TouchableOpacity style={styles.botonAzul}>
              <Text style={styles.botonTexto}>Sign in</Text>
            </TouchableOpacity>
          </Link>
        </View>
      );
      
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffde59',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    },
    flagContainer: {
      position: 'relative',
      width: 300,
      height: 200,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 200,
    },
    bandera: {
      width: '125%',
      height: '134%',
      opacity: 0.55,
    },
    titulo: {
      position: 'absolute',
      fontSize: 75,
        fontWeight: 'bold',
      fontFamily: 'Fredoka',
      color: '#f44336',
    },
    botonRojo: {
        backgroundColor: 'rgba(255, 75, 43, 0.9)',
        width: 250,             // largo fijo
        height: 55,             // alto más visible
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 18,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 6,
      },
      
      botonAzul: {
        backgroundColor: 'rgba(29, 53, 87, 0.9)',
        width: 250,
        height: 55,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 6,
      },
    botonTexto: {
      color: '#fff',
      fontSize: 20,
      fontFamily: 'Happy',
      textAlign: 'center',
    },
    speakRow: {
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      },
      letra: {
        fontSize: 85,
        fontFamily: 'Fredoka',
        marginHorizontal: 1,
      },
  });