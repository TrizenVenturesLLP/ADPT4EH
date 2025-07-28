import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from './SimpleNavigation';

const PRIMARY_YELLOW = '#f9b233';
const DARK = '#222';

const RoleSelectionScreen = () => {
  const navigation = useNavigation();
  const [goal, setGoal] = useState('');
  const [userType, setUserType] = useState('');
  const [agreeUpdates, setAgreeUpdates] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const canComplete = goal && userType && agreeTerms;

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.logoRow}>
          <Image source={require('../assets/images/logo.png')} style={{ height: 32, width: 32, marginRight: 8 }} />
          <Text style={{ fontWeight: '700', color: '#1f2937', fontSize: 18 }}>Extrahand</Text>
        </View>
        <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
          <Text style={{ fontSize: 28, color: PRIMARY_YELLOW, fontWeight: 'bold' }}>×</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text style={styles.label}>What is your main goal on Extrahand? *</Text>
        <View style={styles.row}>
          <TouchableOpacity
            style={[styles.selectBtn, goal === 'get' && styles.selectedBtn]}
            onPress={() => setGoal('get')}
          >
            <Text style={[styles.selectIcon, goal === 'get' && styles.selectedIcon]}>✔</Text>
            <Text style={[styles.selectText, goal === 'get' && styles.selectedText]}>Get things done</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.selectBtn, goal === 'earn' && styles.selectedBtn]}
            onPress={() => setGoal('earn')}
          >
            <Text style={[styles.selectIcon, goal === 'earn' && styles.selectedIcon]}>▢</Text>
            <Text style={[styles.selectText, goal === 'earn' && styles.selectedText]}>Earn Money</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.label}>Tell us about your self *</Text>
        <View style={styles.row}>
          <TouchableOpacity
            style={[styles.selectBtn, userType === 'individual' && styles.selectedBtn]}
            onPress={() => setUserType('individual')}
          >
            <Text style={[styles.selectIcon, userType === 'individual' && styles.selectedIcon]}>👤</Text>
            <Text style={[styles.selectText, userType === 'individual' && styles.selectedText]}>Individual</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.selectBtn, userType === 'business' && styles.selectedBtn]}
            onPress={() => setUserType('business')}
          >
            <Text style={[styles.selectIcon, userType === 'business' && styles.selectedIcon]}>🏢</Text>
            <Text style={[styles.selectText, userType === 'business' && styles.selectedText]}>Business user</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.checkboxRow}>
          <TouchableOpacity style={styles.checkbox} onPress={() => setAgreeUpdates(!agreeUpdates)}>
            <Text style={agreeUpdates ? styles.checkboxChecked : styles.checkboxUnchecked}>✔</Text>
          </TouchableOpacity>
          <Text style={styles.checkboxLabel}>
            I agree to receive product updates, marketing materials and special offers via email, SMS, and push notifications
          </Text>
        </View>
        <View style={styles.checkboxRow}>
          <TouchableOpacity style={styles.checkbox} onPress={() => setAgreeTerms(!agreeTerms)}>
            <Text style={agreeTerms ? styles.checkboxChecked : styles.checkboxUnchecked}>✔</Text>
          </TouchableOpacity>
          <Text style={styles.checkboxLabel}>
            I agree to the Extrahand Terms & Conditions Community Guidelines, and Privacy Policy *
          </Text>
        </View>
        <TouchableOpacity
          style={[styles.completeBtn, !canComplete && { opacity: 0.5 }]}
          disabled={!canComplete}
          onPress={() => {
            console.log('RoleSelectionScreen - Complete button pressed');
            console.log('RoleSelectionScreen - goal:', goal);
            if (goal === 'earn' && navigation && navigation.navigate) {
              console.log('RoleSelectionScreen - Navigating to PerformerHome');
              navigation.navigate('PerformerHome');
            } else if (goal === 'get' && navigation && navigation.navigate) {
              console.log('RoleSelectionScreen - Navigating to PosterHome');
              navigation.navigate('PosterHome');
            }
          }}
        >
          <Text style={styles.completeText}>Complete</Text>
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
    justifyContent: 'flex-start',
    paddingTop: 24,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  closeButton: {
    padding: 8,
  },
  content: {
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 16,
  },
  label: {
    fontSize: 16,
    color: DARK,
    fontWeight: '500',
    marginBottom: 8,
    alignSelf: 'flex-start',
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  selectBtn: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 4,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  selectedBtn: {
    backgroundColor: PRIMARY_YELLOW,
    borderColor: PRIMARY_YELLOW,
  },
  selectIcon: {
    fontSize: 22,
    marginBottom: 8,
    color: DARK,
  },
  selectedIcon: {
    color: '#fff',
  },
  selectText: {
    fontSize: 15,
    color: DARK,
    fontWeight: '500',
  },
  selectedText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
    width: '100%',
    paddingHorizontal: 4,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: PRIMARY_YELLOW,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
    marginTop: 2,
    backgroundColor: '#fff',
  },
  checkboxChecked: {
    color: PRIMARY_YELLOW,
    fontSize: 18,
    fontWeight: 'bold',
  },
  checkboxUnchecked: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  checkboxLabel: {
    flex: 1,
    fontSize: 14,
    color: DARK,
    fontWeight: '400',
  },
  completeBtn: {
    width: '100%',
    backgroundColor: PRIMARY_YELLOW,
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 16,
  },
  completeText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default RoleSelectionScreen; 