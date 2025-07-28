import React, { useState, useCallback, useMemo } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Platform, Image, Modal, ScrollView } from 'react-native';
import { useNavigation } from './SimpleNavigation';

const PRIMARY_YELLOW = '#f9b233';
const DARK = '#222';

const LocationInputScreen = () => {
  const navigation = useNavigation();
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [selectedTag, setSelectedTag] = useState('home');
  const [addressDetails, setAddressDetails] = useState({
    doorNo: '',
    area: '',
    city: '',
    state: '',
    pinCode: '',
    country: ''
  });

  const locationTags = useMemo(() => [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'office', label: 'office', icon: '🏢' },
    { id: 'other', label: 'other', icon: '❤️' }
  ], []);

  const handleConfirm = useCallback(() => {
    // Handle confirmation logic here
    console.log('LocationInput - handleConfirm called');
    console.log('Address details:', addressDetails);
    console.log('Navigation object:', navigation);
    if (navigation && navigation.navigate) {
      console.log('LocationInput - Navigating to LocationConfirmation with addressDetails');
      navigation.navigate('LocationConfirmation', { addressDetails });
    } else {
      console.log('LocationInput - Navigation object is null or navigate is not available');
    }
    setShowLocationModal(false);
  }, [addressDetails, navigation]);

  const handleAddressChange = useCallback((field: string, value: string) => {
    setAddressDetails(prev => ({ ...prev, [field]: value }));
  }, []);

  const handleTagSelect = useCallback((tagId: string) => {
    setSelectedTag(tagId);
  }, []);

  const handleModalClose = useCallback(() => {
    setShowLocationModal(false);
  }, []);

  const handleModalOpen = useCallback(() => {
    setShowLocationModal(true);
  }, []);

  const LocationDetailsModal = useMemo(() => (
    <Modal
      visible={showLocationModal}
      animationType="slide"
      transparent={true}
      onRequestClose={handleModalClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          {/* Header */}
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Enter Location details</Text>
            <TouchableOpacity 
              style={styles.closeButton}
              onPress={handleModalClose}
            >
              <Text style={styles.closeButtonText}>✕</Text>
            </TouchableOpacity>
          </View>

          <ScrollView style={styles.modalBody} showsVerticalScrollIndicator={false}>
            {/* Location Tagging Section */}
            <View style={styles.tagSection}>
              <Text style={styles.tagLabel}>Tag this location for later</Text>
              <View style={styles.tagButtons}>
                {locationTags.map((tag) => (
                  <TouchableOpacity
                    key={tag.id}
                    style={[
                      styles.tagButton,
                      selectedTag === tag.id && styles.tagButtonSelected
                    ]}
                    onPress={() => handleTagSelect(tag.id)}
                  >
                    <Text style={styles.tagIcon}>{tag.icon}</Text>
                    <Text style={[
                      styles.tagText,
                      selectedTag === tag.id && styles.tagTextSelected
                    ]}>
                      {tag.label}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            {/* Address Input Fields */}
            <View style={styles.inputSection}>
              {/* Door No & Building Name */}
              <View style={styles.inputRow}>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.inputField}
                    placeholder="Door No & Building Name"
                    value={addressDetails.doorNo}
                    onChangeText={(text) => handleAddressChange('doorNo', text)}
                  />
                  <Text style={styles.updateText}>Updated based on your exact map pin</Text>
                </View>
                <TouchableOpacity style={styles.changeButton}>
                  <Text style={styles.changeButtonText}>Change</Text>
                </TouchableOpacity>
              </View>

              {/* Area & Street */}
              <TextInput
                style={styles.inputField}
                placeholder="Area & Street"
                value={addressDetails.area}
                onChangeText={(text) => handleAddressChange('area', text)}
              />

              {/* City */}
              <TextInput
                style={styles.inputField}
                placeholder="Enter your City"
                value={addressDetails.city}
                onChangeText={(text) => handleAddressChange('city', text)}
              />

              {/* State */}
              <TextInput
                style={styles.inputField}
                placeholder="State"
                value={addressDetails.state}
                onChangeText={(text) => handleAddressChange('state', text)}
              />

              {/* Pin Code and Country */}
              <View style={styles.horizontalInputs}>
                <TextInput
                  style={[styles.inputField, styles.halfInput]}
                  placeholder="Pin code"
                  value={addressDetails.pinCode}
                  onChangeText={(text) => handleAddressChange('pinCode', text)}
                />
                <TextInput
                  style={[styles.inputField, styles.halfInput]}
                  placeholder="Country"
                  value={addressDetails.country}
                  onChangeText={(text) => handleAddressChange('country', text)}
                />
              </View>
            </View>
          </ScrollView>

          {/* Confirm Button */}
          <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
            <Text style={styles.confirmButtonText}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  ), [showLocationModal, selectedTag, addressDetails, locationTags, handleTagSelect, handleAddressChange, handleConfirm, handleModalClose]);

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
          {/* Map image for web */}
          <View style={styles.mapContainer}>
            <Image 
              source={require('../assets/mapweb.jpg')}
              style={styles.mapImage}
              resizeMode="cover"
            />
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
          <TouchableOpacity 
            style={styles.addButton}
            onPress={handleModalOpen}
          >
            <Text style={styles.addButtonText}>Add more address details</Text>
          </TouchableOpacity>
        </View>
        {LocationDetailsModal}
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
      {/* Map image for mobile */}
      <View style={styles.mapContainer}>
        <Image 
          source={require('../assets/mapmobile.jpg')}
          style={styles.mapImage}
          resizeMode="cover"
        />
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
      <TouchableOpacity 
        style={styles.addButton}
        onPress={handleModalOpen}
      >
        <Text style={styles.addButtonText}>Add more address details</Text>
      </TouchableOpacity>
      {LocationDetailsModal}
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
  mapContainer: {
    width: '90%',
    height: 260,
    borderRadius: 16,
    marginTop: 8,
    marginBottom: 16,
    overflow: 'hidden',
  },
  mapImage: {
    width: '100%',
    height: '100%',
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
  // Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    minHeight: '60%',
    maxHeight: '90%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: DARK,
  },
  closeButton: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeButtonText: {
    fontSize: 18,
    color: DARK,
    fontWeight: 'bold',
  },
  modalBody: {
    padding: 20,
  },
  tagSection: {
    marginBottom: 20,
  },
  tagLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  tagButtons: {
    flexDirection: 'row',
    gap: 10,
  },
  tagButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
  },
  tagButtonSelected: {
    backgroundColor: PRIMARY_YELLOW,
    borderColor: PRIMARY_YELLOW,
  },
  tagIcon: {
    fontSize: 16,
    marginRight: 6,
  },
  tagText: {
    fontSize: 14,
    color: '#666',
  },
  tagTextSelected: {
    color: '#fff',
    fontWeight: '600',
  },
  inputSection: {
    gap: 16,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  inputContainer: {
    flex: 1,
  },
  inputField: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  updateText: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  changeButton: {
    paddingVertical: 8,
  },
  changeButtonText: {
    color: PRIMARY_YELLOW,
    fontSize: 14,
    fontWeight: '600',
  },
  horizontalInputs: {
    flexDirection: 'row',
    gap: 12,
  },
  halfInput: {
    flex: 1,
  },
  confirmButton: {
    backgroundColor: PRIMARY_YELLOW,
    margin: 20,
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
}); 