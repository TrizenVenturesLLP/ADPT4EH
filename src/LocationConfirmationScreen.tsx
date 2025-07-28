import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from './SimpleNavigation';

const PRIMARY_YELLOW = '#f9b233';
const DARK = '#222';

const LocationConfirmationScreen = () => {
  const navigation = useNavigation();
  const route = { params: navigation.params };
  // addressDetails is expected to be passed via route.params
  console.log('LocationConfirmationScreen - route:', route);
  console.log('LocationConfirmationScreen - route.params:', route?.params);
  const address = route?.params?.addressDetails || {};
  console.log('LocationConfirmationScreen - address:', address);
  const areaName = address.area || address.doorNo || 'Selected Location';
  const fullAddress = [
    address.doorNo,
    address.area,
    address.city,
    address.state,
    address.pinCode,
    address.country
  ].filter(Boolean).join(', ');

  useEffect(() => {
    const timer = setTimeout(() => {
      if (navigation && navigation.navigate) {
        navigation.navigate('RoleSelection');
      }
    }, 2500);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.pinContainer}>
        <View style={styles.pinOuter}>
          <View style={styles.pinInner} />
          <Text style={styles.checkIcon}>✓</Text>
        </View>
      </View>
      <Text style={styles.deliveringText}>Delivering service at</Text>
      <Text style={styles.areaName}>{areaName}</Text>
      <Text style={styles.fullAddress}>{fullAddress}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
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
    position: 'relative',
  },
  pinInner: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
    position: 'absolute',
    top: 16,
    left: 16,
  },
  checkIcon: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    position: 'absolute',
    top: 10,
    left: 16,
  },
  deliveringText: {
    color: PRIMARY_YELLOW,
    fontSize: 14,
    marginBottom: 8,
    fontWeight: '500',
  },
  areaName: {
    color: DARK,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  fullAddress: {
    color: '#888',
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 22,
  },
});

export default LocationConfirmationScreen; 