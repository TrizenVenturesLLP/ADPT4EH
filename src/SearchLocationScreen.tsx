import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Platform } from 'react-native';
import { useNavigation } from './SimpleNavigation';

const PRIMARY_YELLOW = '#f9b233';
const DARK = '#222';
const GRAY = '#888';
const LIGHT_GRAY = '#f5f5f5';

const SearchLocationScreen = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('Gachibowli');
  const [isSearchFocused, setIsSearchFocused] = useState(true);
  const searchInputRef = useRef<TextInput>(null);

  // Mock search results - in real app, these would come from Google Places API
  const searchResults = [
    {
      id: '1',
      name: 'Gachibowli',
      address: 'Hyderabad, Telangana, India'
    },
    {
      id: '2',
      name: 'Gachibowli ORR Entrance toward...',
      address: 'Telecom Nagar, Gachibowli, Hyderabad, Telangana, India'
    },
    {
      id: '3',
      name: 'Gachibowli Circle',
      address: 'Mushroom Rock Road, Gachibowli, Hyderabad, Telangana, India'
    },
    {
      id: '4',
      name: 'Gachibowli Stadium',
      address: 'Diamond Hills, Rajiv Gandhi Nagar, Gachibowli, Hyderabad, Telangana, India'
    },
    {
      id: '5',
      name: 'Gachibowli Flyover',
      address: 'Gachibowli, Hyderabad, Telangana, India'
    }
  ];

  useEffect(() => {
    // Focus the search input when component mounts
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleUseCurrentLocation = () => {
    // Mock current location data
    const currentLocation = {
      doorNo: 'Current Location',
      area: 'Your Current Location',
      city: 'Hyderabad',
      state: 'Telangana',
      pinCode: '500032',
      country: 'India'
    };
    
    navigation.navigate('LocationConfirmation', { addressDetails: currentLocation });
  };

  const handleLocationSelect = (location: any) => {
    // Parse the location data for LocationConfirmation
    const addressDetails = {
      doorNo: location.name,
      area: location.name,
      city: 'Hyderabad',
      state: 'Telangana',
      pinCode: '500032',
      country: 'India',
      fullAddress: location.address
    };
    
    navigation.navigate('LocationConfirmation', { addressDetails });
  };

  if (Platform.select({ web: true, default: false })) {
    return (
      <div style={{ minHeight: '100vh', background: '#fff' }}>
        <View style={styles.container}>
          {/* Search Header */}
          <View style={styles.searchHeader}>
            <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
              <Text style={styles.backIcon}>←</Text>
            </TouchableOpacity>
            <TextInput
              ref={searchInputRef}
              style={styles.searchInput}
              value={searchText}
              onChangeText={setSearchText}
              placeholder="Search location..."
              placeholderTextColor={GRAY}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
            />
          </View>

          {/* Use Current Location Option */}
          <TouchableOpacity style={styles.currentLocationRow} onPress={handleUseCurrentLocation}>
            <View style={styles.currentLocationIcon}>
              <Text style={styles.targetIcon}>🎯</Text>
            </View>
            <Text style={styles.currentLocationText}>Use current location</Text>
          </TouchableOpacity>

          {/* Search Results */}
          <ScrollView style={styles.resultsContainer} showsVerticalScrollIndicator={false}>
            {searchResults.map((result) => (
              <TouchableOpacity
                key={result.id}
                style={styles.resultRow}
                onPress={() => handleLocationSelect(result)}
              >
                <View style={styles.locationIcon}>
                  <Text style={styles.pinIcon}>📍</Text>
                </View>
                <View style={styles.resultTextContainer}>
                  <Text style={styles.resultName}>{result.name}</Text>
                  <Text style={styles.resultAddress}>{result.address}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Powered by Google */}
          <View style={styles.poweredByContainer}>
            <Text style={styles.poweredByText}>powered by </Text>
            <Text style={styles.googleText}>Google</Text>
          </View>
        </View>
      </div>
    );
  }

  return (
    <View style={styles.container}>
      {/* Search Header */}
      <View style={styles.searchHeader}>
        <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <TextInput
          ref={searchInputRef}
          style={styles.searchInput}
          value={searchText}
          onChangeText={setSearchText}
          placeholder="Search location..."
          placeholderTextColor={GRAY}
          onFocus={() => setIsSearchFocused(true)}
          onBlur={() => setIsSearchFocused(false)}
        />
      </View>

      {/* Use Current Location Option */}
      <TouchableOpacity style={styles.currentLocationRow} onPress={handleUseCurrentLocation}>
        <View style={styles.currentLocationIcon}>
          <Text style={styles.targetIcon}>🎯</Text>
        </View>
        <Text style={styles.currentLocationText}>Use current location</Text>
      </TouchableOpacity>

      {/* Search Results */}
      <ScrollView style={styles.resultsContainer} showsVerticalScrollIndicator={false}>
        {searchResults.map((result) => (
          <TouchableOpacity
            key={result.id}
            style={styles.resultRow}
            onPress={() => handleLocationSelect(result)}
          >
            <View style={styles.locationIcon}>
              <Text style={styles.pinIcon}>📍</Text>
            </View>
            <View style={styles.resultTextContainer}>
              <Text style={styles.resultName}>{result.name}</Text>
              <Text style={styles.resultAddress}>{result.address}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Powered by Google */}
      <View style={styles.poweredByContainer}>
        <Text style={styles.poweredByText}>powered by </Text>
        <Text style={styles.googleText}>Google</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: LIGHT_GRAY,
  },
  backButton: {
    marginRight: 12,
    padding: 4,
  },
  backIcon: {
    fontSize: 20,
    color: DARK,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: PRIMARY_YELLOW,
    borderRadius: 20,
    paddingHorizontal: 16,
    fontSize: 16,
    color: DARK,
  },
  currentLocationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: LIGHT_GRAY,
  },
  currentLocationIcon: {
    width: 24,
    height: 24,
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  targetIcon: {
    fontSize: 20,
  },
  currentLocationText: {
    fontSize: 16,
    color: PRIMARY_YELLOW,
    fontWeight: '500',
  },
  resultsContainer: {
    flex: 1,
  },
  resultRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: LIGHT_GRAY,
  },
  locationIcon: {
    width: 24,
    height: 24,
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pinIcon: {
    fontSize: 18,
    color: GRAY,
  },
  resultTextContainer: {
    flex: 1,
  },
  resultName: {
    fontSize: 16,
    color: DARK,
    fontWeight: '500',
    marginBottom: 2,
  },
  resultAddress: {
    fontSize: 14,
    color: GRAY,
    lineHeight: 18,
  },
  poweredByContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: LIGHT_GRAY,
  },
  poweredByText: {
    fontSize: 12,
    color: GRAY,
  },
  googleText: {
    fontSize: 12,
    color: '#4285F4',
    fontWeight: 'bold',
  },
});

export default SearchLocationScreen; 