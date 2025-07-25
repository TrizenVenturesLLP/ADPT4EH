import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Platform } from 'react-native';

const PRIMARY_YELLOW = '#f9b233';
const PRIMARY_BLUE = '#2563EB';
const DARK = '#222';
const GRAY = '#888';
const LIGHT_BG = '#f8fafc';

const SignUpScreen = ({ navigation }: any) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agree, setAgree] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSignUp = () => {
    if (!fullName || !email || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill all fields.');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // Navigate directly after sign up
      if (navigation.navigate) {
        navigation.navigate('OTPVerification', { phone });
      } else if (typeof navigation === 'function') {
        navigation('OTPVerification', { phone });
      } else {
        navigation.goBack && navigation.goBack();
      }
    }, 1000);
  };

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={{ fontSize: 22, color: DARK }}>{Platform.OS === 'web' ? '←' : '‹'}</Text>
      </TouchableOpacity>
      <View style={styles.card}>
        <Text style={styles.heading}>Create Account</Text>
        <Text style={styles.subtext}>Sign up to get started</Text>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex. John Doe"
          value={fullName}
          onChangeText={setFullName}
          editable={true}
        />
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="johndoe@gmail.com"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          editable={true}
        />
        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={styles.input}
          placeholder="8985******"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
          editable={true}
        />
        <Text style={styles.label}>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={[styles.input, { flex: 1, marginBottom: 0 }]}
            placeholder="************"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            editable={true}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
            <Text style={{ fontSize: 18, color: GRAY }}>{showPassword ? '🙈' : '👁️'}</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.label}>Confirm Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={[styles.input, { flex: 1, marginBottom: 0 }]}
            placeholder="************"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={!showConfirmPassword}
            editable={true}
          />
          <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)} style={styles.eyeIcon}>
            <Text style={{ fontSize: 18, color: GRAY }}>{showConfirmPassword ? '🙈' : '👁️'}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.checkboxContainer} onPress={() => setAgree(!agree)} activeOpacity={0.8}>
          <Text style={{
            fontSize: 18,
            marginRight: 8,
            color: agree ? PRIMARY_YELLOW : GRAY,
            borderWidth: 1,
            borderColor: agree ? PRIMARY_YELLOW : GRAY,
            borderRadius: 4,
            width: 22,
            height: 22,
            textAlign: 'center',
            lineHeight: 22,
            backgroundColor: agree ? PRIMARY_YELLOW + '22' : 'transparent',
          }}>{agree ? '✓' : ''}</Text>
          <Text style={styles.checkboxLabel}>
            Agree with <Text style={styles.termsText}>Terms & Conditions</Text>
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.signupButton, { backgroundColor: PRIMARY_YELLOW }]}
          disabled={!agree || loading}
          onPress={agree ? handleSignUp : undefined}
          activeOpacity={agree ? 0.7 : 1}
        >
          <Text style={styles.signupButtonText}>{loading ? 'Signing Up...' : 'Sign Up'}</Text>
        </TouchableOpacity>
        <View style={styles.dividerContainer}>
          <View style={styles.divider} />
          <Text style={styles.dividerText}>Or sign up with</Text>
          <View style={styles.divider} />
        </View>
        {/* Social Signup Buttons */}
        <View style={styles.socialRow}>
          <TouchableOpacity style={styles.socialIconButton}>
            <Text style={{ fontSize: 24 }}></Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialIconButton}>
            <Text style={{ fontSize: 24, color: '#EA4335' }}>G</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialIconButton}>
            <Text style={{ fontSize: 24, color: '#1877F3' }}>f</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.footerText}>
          Already have an account?{' '}
          <Text style={styles.loginText} onPress={() => navigation.goBack()}>Sign In</Text>
        </Text>
      </View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center', // changed from 'flex-start' to 'center' for vertical centering
  },
  card: {
    width: '100%',
    maxWidth: 480,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 32,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 4,
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 16,
    zIndex: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: DARK,
    marginBottom: 4,
    textAlign: 'center',
  },
  subtext: {
    fontSize: 14,
    color: GRAY,
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    alignSelf: 'flex-start',
    fontSize: 13,
    color: DARK,
    marginBottom: 2,
    marginTop: 6,
    fontWeight: '500',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: GRAY,
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
    fontSize: 16,
    backgroundColor: LIGHT_BG,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 8,
  },
  eyeIcon: {
    position: 'absolute',
    right: 16,
    padding: 4,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    alignSelf: 'flex-start',
  },
  checkboxLabel: {
    fontSize: 14,
    color: DARK,
  },
  termsText: {
    color: PRIMARY_YELLOW,
    fontWeight: 'bold',
  },
  signupButton: {
    width: '100%',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 16,
  },
  signupButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginVertical: 8,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: GRAY,
  },
  dividerText: {
    marginHorizontal: 8,
    color: GRAY,
    fontWeight: 'bold',
    fontSize: 13,
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginBottom: 16,
    gap: 16,
  },
  socialIconButton: {
    backgroundColor: '#fff',
    borderRadius: 32,
    padding: 10,
    marginHorizontal: 8,
    borderWidth: 1,
    borderColor: GRAY,
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
  },
  footerText: {
    fontSize: 14,
    color: DARK,
    marginTop: 12,
    textAlign: 'center',
  },
  loginText: {
    color: PRIMARY_BLUE,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
}); 