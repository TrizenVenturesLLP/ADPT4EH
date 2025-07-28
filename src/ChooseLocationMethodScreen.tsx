import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { useNavigation } from './SimpleNavigation';

const PRIMARY_YELLOW = '#f9b233';
const DARK = '#222';

const ChooseLocationMethodScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={{ fontSize: 22, color: DARK }}>{Platform.OS === 'web' ? '←' : '‹'}</Text>
      </TouchableOpacity>
      <View style={styles.content}>
        {/* Pin Icon */}
        <View style={styles.pinContainer}>
          <View style={styles.pinOuter}>
            <View style={styles.pinInner} />
          </View>
          <View style={styles.pinShadow} />
        </View>
        <Text style={styles.question}>Where do you want your services?</Text>
        <TouchableOpacity
          style={styles.currentLocationBtn}
          onPress={() => {
            console.log('ChooseLocationMethod - Current location button pressed');
            console.log('Navigation object:', navigation);
            navigation.navigate('LocationInput');
          }}
        >
          <Text style={styles.currentLocationText}>At my current location</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.manualLocationBtn}
          onPress={() => {
            console.log('ChooseLocationMethod - Manual location button pressed');
            console.log('Navigation object:', navigation);
            navigation.navigate('SearchLocation');
          }}
        >
          <Text style={styles.manualLocationText}>I'll enter my location manually</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 10,
    padding: 8,
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  content: {
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 40,
  },
  pinContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  pinOuter: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: PRIMARY_YELLOW,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pinInner: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: PRIMARY_YELLOW,
  },
  pinShadow: {
    width: 32,
    height: 12,
    borderRadius: 16,
    backgroundColor: '#f9b23333',
    marginTop: -6,
  },
  question: {
    fontSize: 16,
    color: DARK,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 32,
  },
  currentLocationBtn: {
    width: '90%',
    backgroundColor: PRIMARY_YELLOW,
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 16,
  },
  currentLocationText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  manualLocationBtn: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#eee',
  },
  manualLocationText: {
    color: DARK,
    fontWeight: '500',
    fontSize: 16,
  },
});

export default ChooseLocationMethodScreen; 