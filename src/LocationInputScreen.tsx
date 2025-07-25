import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Platform } from 'react-native';

const PRIMARY_YELLOW = '#f9b233';
const DARK = '#222';
const GRAY = '#888';

const LocationInputScreen = ({ navigation }: any) => {
  if (Platform.select({ web: true, default: false })) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', background: '#fff' }}>
        <View style={styles.container}>
          {/* Top bar */}
          <View style={styles.topBar}>
            <Text style={styles.topBarText}>confirm your Location</Text>
            <TouchableOpacity onPress={() => navigation && navigation.goBack && navigation.goBack()}>
              <Text style={styles.skipText}>Skip</Text>
            </TouchableOpacity>
          </View>
          {/* Search bar */}
          <View style={styles.searchBar}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search for area, Street name..."
            />
          </View>
          {/* Map placeholder */}
          <View style={styles.mapPlaceholder}>
            <Text style={{ color: GRAY, fontSize: 18, textAlign: 'center', marginTop: 100 }}>
              [Map will be shown here]
            </Text>
          </View>
          {/* Location details */}
          <View style={styles.locationDetails}>
            <Text style={styles.locationLabel}>Your Current Location</Text>
            <TouchableOpacity>
              <Text style={styles.changeText}>CHANGE</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.addressText}>
            {'5-12-63\nBank colony, Tuni, 533401, Andhra Pradesh'}
          </Text>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>Add more address details</Text>
          </TouchableOpacity>
        </View>
      </div>
    );
  }
  return (
    <View style={styles.container}>
      {/* Top bar */}
      <View style={styles.topBar}>
        <Text style={styles.topBarText}>confirm your Location</Text>
        <TouchableOpacity onPress={() => navigation && navigation.goBack && navigation.goBack()}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>
      {/* Search bar */}
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for area, Street name..."
        />
      </View>
      {/* Map placeholder */}
      <View style={styles.mapPlaceholder}>
        <Text style={{ color: GRAY, fontSize: 18, textAlign: 'center', marginTop: 100 }}>
          [Map will be shown here]
        </Text>
      </View>
      {/* Location details */}
      <View style={styles.locationDetails}>
        <Text style={styles.locationLabel}>Your Current Location</Text>
        <TouchableOpacity>
          <Text style={styles.changeText}>CHANGE</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.addressText}>
        {'5-12-63\nBank colony, Tuni, 533401, Andhra Pradesh'}
      </Text>
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Add more address details</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LocationInputScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 0,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  topBar: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    marginBottom: 8,
  },
  topBarText: {
    fontSize: 16,
    fontWeight: '600',
    color: DARK,
  },
  skipText: {
    color: PRIMARY_YELLOW,
    fontWeight: '600',
    fontSize: 16,
  },
  searchBar: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 8,
    boxShadow: Platform.OS === 'web' ? '0 2px 8px #eee' : undefined,
    elevation: Platform.OS === 'android' ? 2 : 0,
    marginTop: 8,
    marginBottom: 8,
    padding: 4,
  },
  searchInput: {
    width: '100%',
    padding: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 8,
    backgroundColor: '#f8fafc',
  },
  mapPlaceholder: {
    width: '90%',
    height: 260,
    backgroundColor: '#e5e7eb',
    borderRadius: 16,
    marginTop: 8,
    marginBottom: 16,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  locationDetails: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  locationLabel: {
    fontSize: 15,
    color: DARK,
    fontWeight: '500',
  },
  changeText: {
    color: PRIMARY_YELLOW,
    fontWeight: '600',
    fontSize: 15,
  },
  addressText: {
    width: '90%',
    fontSize: 15,
    color: DARK,
    marginBottom: 16,
  },
  addButton: {
    width: '90%',
    backgroundColor: PRIMARY_YELLOW,
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 8,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
}); 