import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Platform,
  Dimensions,
  Image,
  Alert,
} from 'react-native';
import { useNavigation } from './SimpleNavigation';

const PRIMARY_YELLOW = '#f9b233';
const DARK = '#222';

const ProfileScreen: React.FC = () => {
  const navigation = useNavigation();
  const [isMobileView, setIsMobileView] = useState(false);
  
  // Form state
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [tagline, setTagline] = useState('');
  const [location, setLocation] = useState('');
  const [email, setEmail] = useState('');
  const [birthDay, setBirthDay] = useState('');
  const [birthMonth, setBirthMonth] = useState('');
  const [birthYear, setBirthYear] = useState('');
  const [description, setDescription] = useState('');
  const [postTasks, setPostTasks] = useState(true);
  const [earnMoney, setEarnMoney] = useState(false);
  const [verificationProgress, setVerificationProgress] = useState(52);

  // Check if we're on mobile web view
  useEffect(() => {
    const checkScreenSize = () => {
      if (Platform.OS === 'web') {
        const { width } = Dimensions.get('window');
        setIsMobileView(width <= 768);
      } else {
        setIsMobileView(true); // Always mobile layout on native mobile
      }
    };

    checkScreenSize();
    if (Platform.OS === 'web') {
      const subscription = Dimensions.addEventListener('change', checkScreenSize);
      return () => subscription?.remove();
    }
  }, []);

  const handleSaveProfile = () => {
    if (!firstName || !lastName) {
      Alert.alert('Error', 'Please fill in your first and last name.');
      return;
    }
    
    // Save profile logic here
    Alert.alert('Success', 'Profile saved successfully!');
  };

  const handleDeleteAccount = () => {
    Alert.alert(
      'Delete Account',
      'Are you sure you want to delete your account? This action cannot be undone.',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', style: 'destructive', onPress: () => {
          Alert.alert('Account Deleted', 'Your account has been deleted.');
          navigation.navigate('Landing');
        }},
      ]
    );
  };

  const handleViewPublicProfile = () => {
    // Navigate to public profile view
    Alert.alert('Public Profile', 'Viewing your public profile...');
  };

  const handleUploadPhoto = () => {
    Alert.alert('Upload Photo', 'Photo upload functionality would be implemented here.');
  };

  const handleUploadProfileImage = () => {
    Alert.alert('Upload Profile Image', 'Profile image upload functionality would be implemented here.');
  };

  // Mobile layout
  if (isMobileView) {
    return (
      <View style={styles.mobileContainer}>
        {/* Header */}
        <View style={styles.mobileHeader}>
          <TouchableOpacity 
            style={styles.mobileMenuButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.mobileMenuIcon}>←</Text>
          </TouchableOpacity>
          
                     <View style={styles.mobileLogoSection}>
             <Image
               source={require('../assets/images/extrahand-logo.png')}
               style={styles.mobileLogoImage}
               resizeMode="contain"
             />
           </View>
          
                     <TouchableOpacity
             style={styles.mobileAddButton}
             onPress={() => navigation.navigate('TaskPostingForm')}
           >
             <Text style={styles.mobileAddIcon}>+</Text>
           </TouchableOpacity>
        </View>

        {/* Main Content */}
        <ScrollView style={styles.mobileScrollContent} showsVerticalScrollIndicator={false}>
          {/* Account Section */}
          <View style={styles.mobileAccountSection}>
            <View style={styles.mobileAccountHeader}>
              <Text style={styles.mobileAccountTitle}>Account</Text>
              <View style={styles.mobileVerificationContainer}>
                <Text style={styles.mobileVerificationText}>
                  YOUR VERIFICATIONS ARE {verificationProgress}% COMPLETE
                </Text>
                <View style={styles.mobileProgressBar}>
                  <View style={[styles.mobileProgressFill, { width: `${verificationProgress}%` }]} />
                </View>
              </View>
            </View>

            <TouchableOpacity style={styles.mobilePublicProfileButton} onPress={handleViewPublicProfile}>
              <Text style={styles.mobilePublicProfileText}>View Your public profile</Text>
            </TouchableOpacity>

            {/* Upload Avatar Section */}
            <View style={styles.mobileUploadSection}>
              <Text style={styles.mobileSectionTitle}>Upload Avatar</Text>
              <View style={styles.mobileAvatarContainer}>
                <Text style={styles.mobileAvatarIcon}>👤</Text>
                <TouchableOpacity style={styles.mobileUploadButton} onPress={handleUploadPhoto}>
                  <Text style={styles.mobileUploadButtonText}>Upload photo</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Profile Image Section */}
            <View style={styles.mobileProfileImageSection}>
              <Text style={styles.mobileSectionTitle}>Profile image</Text>
              <Text style={styles.mobileSectionSubtitle}>modify your public profile</Text>
              <View style={styles.mobileProfileImagePlaceholder}>
                <Text style={styles.mobileProfileImageText}>&</Text>
              </View>
              <TouchableOpacity style={styles.mobileProfileImageButton} onPress={handleUploadProfileImage}>
                <Text style={styles.mobileProfileImageButtonText}>upload profile image</Text>
              </TouchableOpacity>
            </View>

            {/* Form Fields */}
            <View style={styles.mobileFormSection}>
              <View style={styles.mobileInputGroup}>
                <Text style={styles.mobileLabel}>First name*</Text>
                <TextInput
                  style={styles.mobileInput}
                  placeholder="Name"
                  value={firstName}
                  onChangeText={setFirstName}
                  placeholderTextColor="#999"
                />
              </View>

              <View style={styles.mobileInputGroup}>
                <Text style={styles.mobileLabel}>Last name*</Text>
                <TextInput
                  style={styles.mobileInput}
                  placeholder="Name"
                  value={lastName}
                  onChangeText={setLastName}
                  placeholderTextColor="#999"
                />
              </View>

              <View style={styles.mobileInputGroup}>
                <Text style={styles.mobileLabel}>Tagline</Text>
                <TextInput
                  style={styles.mobileInput}
                  placeholder="Mini bio"
                  value={tagline}
                  onChangeText={setTagline}
                  placeholderTextColor="#999"
                />
              </View>

              <View style={styles.mobileInputGroup}>
                <Text style={styles.mobileLabel}>Location</Text>
                <TextInput
                  style={styles.mobileInput}
                  placeholder="Enter your Location"
                  value={location}
                  onChangeText={setLocation}
                  placeholderTextColor="#999"
                />
              </View>

              <View style={styles.mobileInputGroup}>
                <Text style={styles.mobileLabel}>Email</Text>
                <TextInput
                  style={styles.mobileInput}
                  placeholder="Enter your mail"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  placeholderTextColor="#999"
                />
              </View>

              <View style={styles.mobileInputGroup}>
                <Text style={styles.mobileLabel}>Birthday</Text>
                <View style={styles.mobileBirthdayContainer}>
                  <TextInput
                    style={styles.mobileBirthdayInput}
                    placeholder="DD"
                    value={birthDay}
                    onChangeText={setBirthDay}
                    keyboardType="numeric"
                    maxLength={2}
                    placeholderTextColor="#999"
                  />
                  <TextInput
                    style={styles.mobileBirthdayInput}
                    placeholder="MM"
                    value={birthMonth}
                    onChangeText={setBirthMonth}
                    keyboardType="numeric"
                    maxLength={2}
                    placeholderTextColor="#999"
                  />
                  <TextInput
                    style={styles.mobileBirthdayInput}
                    placeholder="YYYY"
                    value={birthYear}
                    onChangeText={setBirthYear}
                    keyboardType="numeric"
                    maxLength={4}
                    placeholderTextColor="#999"
                  />
                </View>
              </View>

              <View style={styles.mobileInputGroup}>
                <Text style={styles.mobileLabel}>Description</Text>
                <TextInput
                  style={styles.mobileTextArea}
                  placeholder="Enter your description"
                  value={description}
                  onChangeText={setDescription}
                  multiline
                  numberOfLines={4}
                  placeholderTextColor="#999"
                />
              </View>

              {/* Preferences Section */}
              <View style={styles.mobilePreferencesSection}>
                <Text style={styles.mobilePreferencesTitle}>On Extrahand I want to</Text>
                
                <TouchableOpacity 
                  style={styles.mobileCheckboxContainer} 
                  onPress={() => setPostTasks(!postTasks)}
                >
                  <View style={[styles.mobileCheckbox, postTasks && styles.mobileCheckboxChecked]}>
                    {postTasks && <Text style={styles.mobileCheckmark}>✓</Text>}
                  </View>
                  <Text style={styles.mobileCheckboxLabel}>Post tasks</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                  style={styles.mobileCheckboxContainer} 
                  onPress={() => setEarnMoney(!earnMoney)}
                >
                  <View style={[styles.mobileCheckbox, earnMoney && styles.mobileCheckboxChecked]}>
                    {earnMoney && <Text style={styles.mobileCheckmark}>✓</Text>}
                  </View>
                  <Text style={styles.mobileCheckboxLabel}>Earn money</Text>
                </TouchableOpacity>
              </View>

              {/* Action Buttons */}
              <View style={styles.mobileActionButtons}>
                <TouchableOpacity style={styles.mobileSaveButton} onPress={handleSaveProfile}>
                  <Text style={styles.mobileSaveButtonText}>Save profile</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.mobileDeleteButton} onPress={handleDeleteAccount}>
                  <Text style={styles.mobileDeleteButtonText}>Delete my account</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }

  // Desktop layout
  return (
    <View style={styles.desktopContainer}>
              {/* Header */}
        <View style={styles.desktopHeader}>
          <TouchableOpacity 
            style={styles.desktopMenuButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.desktopMenuIcon}>←</Text>
          </TouchableOpacity>
        
                 <View style={styles.desktopLogoSection}>
           <Image
             source={require('../assets/images/extrahand-logo.png')}
             style={styles.desktopLogoImage}
             resizeMode="contain"
           />
         </View>
        
                 <TouchableOpacity 
           style={styles.desktopAddButton}
           onPress={() => navigation.navigate('TaskPostingForm')}
         >
           <Text style={styles.desktopAddIcon}>+</Text>
         </TouchableOpacity>
      </View>

      {/* Main Content */}
      <ScrollView style={styles.desktopScrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.desktopContentContainer}>
          {/* Account Section */}
          <View style={styles.desktopAccountSection}>
            <View style={styles.desktopAccountHeader}>
              <Text style={styles.desktopAccountTitle}>Account</Text>
              <View style={styles.desktopVerificationContainer}>
                <Text style={styles.desktopVerificationText}>
                  YOUR VERIFICATIONS ARE {verificationProgress}% COMPLETE
                </Text>
                <View style={styles.desktopProgressBar}>
                  <View style={[styles.desktopProgressFill, { width: `${verificationProgress}%` }]} />
                </View>
              </View>
            </View>

            <TouchableOpacity style={styles.desktopPublicProfileButton} onPress={handleViewPublicProfile}>
              <Text style={styles.desktopPublicProfileText}>View Your public profile</Text>
            </TouchableOpacity>

            {/* Upload Avatar Section */}
            <View style={styles.desktopUploadSection}>
              <Text style={styles.desktopSectionTitle}>Upload Avatar</Text>
              <View style={styles.desktopAvatarContainer}>
                <Text style={styles.desktopAvatarIcon}>👤</Text>
                <TouchableOpacity style={styles.desktopUploadButton} onPress={handleUploadPhoto}>
                  <Text style={styles.desktopUploadButtonText}>Upload photo</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Profile Image Section */}
            <View style={styles.desktopProfileImageSection}>
              <Text style={styles.desktopSectionTitle}>Profile image</Text>
              <Text style={styles.desktopSectionSubtitle}>modify your public profile</Text>
              <View style={styles.desktopProfileImagePlaceholder}>
                <Text style={styles.desktopProfileImageText}>&</Text>
              </View>
              <TouchableOpacity style={styles.desktopProfileImageButton} onPress={handleUploadProfileImage}>
                <Text style={styles.desktopProfileImageButtonText}>upload profile image</Text>
              </TouchableOpacity>
            </View>

            {/* Form Fields */}
            <View style={styles.desktopFormSection}>
              <View style={styles.desktopInputGroup}>
                <Text style={styles.desktopLabel}>First name*</Text>
                <TextInput
                  style={styles.desktopInput}
                  placeholder="Name"
                  value={firstName}
                  onChangeText={setFirstName}
                  placeholderTextColor="#999"
                />
              </View>

              <View style={styles.desktopInputGroup}>
                <Text style={styles.desktopLabel}>Last name*</Text>
                <TextInput
                  style={styles.desktopInput}
                  placeholder="Name"
                  value={lastName}
                  onChangeText={setLastName}
                  placeholderTextColor="#999"
                />
              </View>

              <View style={styles.desktopInputGroup}>
                <Text style={styles.desktopLabel}>Tagline</Text>
                <TextInput
                  style={styles.desktopInput}
                  placeholder="Mini bio"
                  value={tagline}
                  onChangeText={setTagline}
                  placeholderTextColor="#999"
                />
              </View>

              <View style={styles.desktopInputGroup}>
                <Text style={styles.desktopLabel}>Location</Text>
                <TextInput
                  style={styles.desktopInput}
                  placeholder="Enter your Location"
                  value={location}
                  onChangeText={setLocation}
                  placeholderTextColor="#999"
                />
              </View>

              <View style={styles.desktopInputGroup}>
                <Text style={styles.desktopLabel}>Email</Text>
                <TextInput
                  style={styles.desktopInput}
                  placeholder="Enter your mail"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  placeholderTextColor="#999"
                />
              </View>

              <View style={styles.desktopInputGroup}>
                <Text style={styles.desktopLabel}>Birthday</Text>
                <View style={styles.desktopBirthdayContainer}>
                  <TextInput
                    style={styles.desktopBirthdayInput}
                    placeholder="DD"
                    value={birthDay}
                    onChangeText={setBirthDay}
                    keyboardType="numeric"
                    maxLength={2}
                    placeholderTextColor="#999"
                  />
                  <TextInput
                    style={styles.desktopBirthdayInput}
                    placeholder="MM"
                    value={birthMonth}
                    onChangeText={setBirthMonth}
                    keyboardType="numeric"
                    maxLength={2}
                    placeholderTextColor="#999"
                  />
                  <TextInput
                    style={styles.desktopBirthdayInput}
                    placeholder="YYYY"
                    value={birthYear}
                    onChangeText={setBirthYear}
                    keyboardType="numeric"
                    maxLength={4}
                    placeholderTextColor="#999"
                  />
                </View>
              </View>

              <View style={styles.desktopInputGroup}>
                <Text style={styles.desktopLabel}>Description</Text>
                <TextInput
                  style={styles.desktopTextArea}
                  placeholder="Enter your description"
                  value={description}
                  onChangeText={setDescription}
                  multiline
                  numberOfLines={4}
                  placeholderTextColor="#999"
                />
              </View>

              {/* Preferences Section */}
              <View style={styles.desktopPreferencesSection}>
                <Text style={styles.desktopPreferencesTitle}>On Extrahand I want to</Text>
                
                <TouchableOpacity 
                  style={styles.desktopCheckboxContainer} 
                  onPress={() => setPostTasks(!postTasks)}
                >
                  <View style={[styles.desktopCheckbox, postTasks && styles.desktopCheckboxChecked]}>
                    {postTasks && <Text style={styles.desktopCheckmark}>✓</Text>}
                  </View>
                  <Text style={styles.desktopCheckboxLabel}>Post tasks</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                  style={styles.desktopCheckboxContainer} 
                  onPress={() => setEarnMoney(!earnMoney)}
                >
                  <View style={[styles.desktopCheckbox, earnMoney && styles.desktopCheckboxChecked]}>
                    {earnMoney && <Text style={styles.desktopCheckmark}>✓</Text>}
                  </View>
                  <Text style={styles.desktopCheckboxLabel}>Earn money</Text>
                </TouchableOpacity>
              </View>

              {/* Action Buttons */}
              <View style={styles.desktopActionButtons}>
                <TouchableOpacity style={styles.desktopSaveButton} onPress={handleSaveProfile}>
                  <Text style={styles.desktopSaveButtonText}>Save profile</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.desktopDeleteButton} onPress={handleDeleteAccount}>
                  <Text style={styles.desktopDeleteButtonText}>Delete my account</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  // Mobile styles
  mobileContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mobileHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'ios' ? 50 : 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  mobileMenuButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mobileMenuIcon: {
    fontSize: 20,
    color: '#000',
  },
  mobileLogoSection: {
    flex: 1,
    alignItems: 'center',
  },
  mobileLogoImage: {
    width: 120,
    height: 40,
  },
  mobileAddButton: {
    width: 50,
    height: 36,
    borderRadius: 8,
    backgroundColor: PRIMARY_YELLOW,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mobileAddIcon: {
    fontSize: 20,
    color: '#fff',
  },
  mobileScrollContent: {
    flex: 1,
  },
  mobileAccountSection: {
    padding: 20,
  },
  mobileAccountHeader: {
    marginBottom: 20,
  },
  mobileAccountTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  mobileVerificationContainer: {
    marginBottom: 15,
  },
  mobileVerificationText: {
    fontSize: 12,
    color: '#666',
    marginBottom: 8,
  },
  mobileProgressBar: {
    height: 4,
    backgroundColor: '#e0e0e0',
    borderRadius: 2,
  },
  mobileProgressFill: {
    height: '100%',
    backgroundColor: PRIMARY_YELLOW,
    borderRadius: 2,
  },
  mobilePublicProfileButton: {
    backgroundColor: '#f5f5f5',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 20,
  },
  mobilePublicProfileText: {
    color: PRIMARY_YELLOW,
    fontSize: 14,
    fontWeight: '500',
  },
  mobileUploadSection: {
    marginBottom: 20,
  },
  mobileSectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 10,
  },
  mobileAvatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mobileAvatarIcon: {
    fontSize: 24,
    marginRight: 10,
  },
  mobileUploadButton: {
    backgroundColor: PRIMARY_YELLOW,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  mobileUploadButtonText: {
    color: '#000',
    fontSize: 14,
    fontWeight: '500',
  },
  mobileProfileImageSection: {
    marginBottom: 20,
  },
  mobileSectionSubtitle: {
    fontSize: 12,
    color: '#666',
    marginBottom: 10,
  },
  mobileProfileImagePlaceholder: {
    width: 120,
    height: 120,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  mobileProfileImageText: {
    fontSize: 48,
    color: '#ccc',
  },
  mobileProfileImageButton: {
    backgroundColor: '#f5f5f5',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  mobileProfileImageButtonText: {
    color: PRIMARY_YELLOW,
    fontSize: 14,
    fontWeight: '500',
  },
  mobileFormSection: {
    marginTop: 20,
  },
  mobileInputGroup: {
    marginBottom: 20,
  },
  mobileLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
    marginBottom: 8,
  },
  mobileInput: {
    backgroundColor: '#f5f5f5',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    fontSize: 16,
    color: '#000',
  },
  mobileBirthdayContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  mobileBirthdayInput: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
  },
  mobileTextArea: {
    backgroundColor: '#f5f5f5',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    fontSize: 16,
    color: '#000',
    minHeight: 100,
    textAlignVertical: 'top',
  },
  mobilePreferencesSection: {
    marginTop: 20,
    marginBottom: 30,
  },
  mobilePreferencesTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 15,
  },
  mobileCheckboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  mobileCheckbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 4,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mobileCheckboxChecked: {
    backgroundColor: PRIMARY_YELLOW,
    borderColor: PRIMARY_YELLOW,
  },
  mobileCheckmark: {
    color: '#000',
    fontSize: 12,
    fontWeight: 'bold',
  },
  mobileCheckboxLabel: {
    fontSize: 16,
    color: '#000',
  },
  mobileActionButtons: {
    gap: 15,
  },
  mobileSaveButton: {
    backgroundColor: PRIMARY_YELLOW,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  mobileSaveButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
  mobileDeleteButton: {
    backgroundColor: '#000',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  mobileDeleteButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

  // Desktop styles
  desktopContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  desktopHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 40,
    paddingTop: Platform.OS === 'ios' ? 50 : 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  desktopMenuButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  desktopMenuIcon: {
    fontSize: 20,
    color: '#000',
  },
  desktopLogoSection: {
    flex: 1,
    alignItems: 'center',
  },
  desktopLogoImage: {
    width: 150,
    height: 50,
  },
  desktopAddButton: {
    width: 60,
    height: 40,
    borderRadius: 8,
    backgroundColor: PRIMARY_YELLOW,
    justifyContent: 'center',
    alignItems: 'center',
  },
  desktopAddIcon: {
    fontSize: 20,
    color: '#fff',
  },
  desktopScrollContent: {
    flex: 1,
  },
  desktopContentContainer: {
    maxWidth: 800,
    marginHorizontal: 'auto',
    padding: 40,
  },
  desktopAccountSection: {
    padding: 0,
  },
  desktopAccountHeader: {
    marginBottom: 20,
  },
  desktopAccountTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  desktopVerificationContainer: {
    marginBottom: 15,
  },
  desktopVerificationText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  desktopProgressBar: {
    height: 6,
    backgroundColor: '#e0e0e0',
    borderRadius: 3,
  },
  desktopProgressFill: {
    height: '100%',
    backgroundColor: PRIMARY_YELLOW,
    borderRadius: 3,
  },
  desktopPublicProfileButton: {
    backgroundColor: '#f5f5f5',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 30,
  },
  desktopPublicProfileText: {
    color: PRIMARY_YELLOW,
    fontSize: 16,
    fontWeight: '500',
  },
  desktopUploadSection: {
    marginBottom: 30,
  },
  desktopSectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginBottom: 15,
  },
  desktopAvatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  desktopAvatarIcon: {
    fontSize: 28,
    marginRight: 15,
  },
  desktopUploadButton: {
    backgroundColor: PRIMARY_YELLOW,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  desktopUploadButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '500',
  },
  desktopProfileImageSection: {
    marginBottom: 30,
  },
  desktopSectionSubtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
  },
  desktopProfileImagePlaceholder: {
    width: 150,
    height: 150,
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  desktopProfileImageText: {
    fontSize: 60,
    color: '#ccc',
  },
  desktopProfileImageButton: {
    backgroundColor: '#f5f5f5',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  desktopProfileImageButtonText: {
    color: PRIMARY_YELLOW,
    fontSize: 16,
    fontWeight: '500',
  },
  desktopFormSection: {
    marginTop: 30,
  },
  desktopInputGroup: {
    marginBottom: 25,
  },
  desktopLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 10,
  },
  desktopInput: {
    backgroundColor: '#f5f5f5',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    fontSize: 16,
    color: '#000',
  },
  desktopBirthdayContainer: {
    flexDirection: 'row',
    gap: 15,
  },
  desktopBirthdayInput: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
  },
  desktopTextArea: {
    backgroundColor: '#f5f5f5',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    fontSize: 16,
    color: '#000',
    minHeight: 120,
    textAlignVertical: 'top',
  },
  desktopPreferencesSection: {
    marginTop: 30,
    marginBottom: 40,
  },
  desktopPreferencesTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginBottom: 20,
  },
  desktopCheckboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  desktopCheckbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 6,
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  desktopCheckboxChecked: {
    backgroundColor: PRIMARY_YELLOW,
    borderColor: PRIMARY_YELLOW,
  },
  desktopCheckmark: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
  },
  desktopCheckboxLabel: {
    fontSize: 18,
    color: '#000',
  },
  desktopActionButtons: {
    gap: 20,
  },
  desktopSaveButton: {
    backgroundColor: PRIMARY_YELLOW,
    paddingVertical: 18,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: 'center',
  },
  desktopSaveButtonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: '600',
  },
  desktopDeleteButton: {
    backgroundColor: '#000',
    paddingVertical: 18,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: 'center',
  },
  desktopDeleteButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default ProfileScreen; 