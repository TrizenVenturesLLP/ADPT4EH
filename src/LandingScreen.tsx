import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from './SimpleNavigation';

export default function LandingScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/extrahand-logo.png')} style={styles.logo} resizeMode="contain" />
      <Text style={styles.title}>Welcome to ExtraHand</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonOutline} onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.buttonOutlineText}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  logo: { width: 200, height: 200, marginBottom: 32 },
  title: { fontSize: 24, marginBottom: 30 },
  button: {
    backgroundColor: '#f9b233',
    padding: 15,
    borderRadius: 8,
    marginBottom: 12,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontWeight: '600' },
  buttonOutline: {
    borderColor: '#f9b233',
    borderWidth: 2,
    padding: 15,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
  },
  buttonOutlineText: { color: '#f9b233', fontWeight: '600' },
});
