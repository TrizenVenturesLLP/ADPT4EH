import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Platform } from 'react-native';

const PRIMARY_YELLOW = '#f9b233';
const PRIMARY_BLUE = '#2563EB';
const DARK = '#222';
const GRAY = '#888';
const LIGHT_BG = '#f8fafc';

const LoginScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter email and password.');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      Alert.alert('Success', 'Logged in!', [
        { text: 'OK', onPress: () => navigation.goBack() }
      ]);
    }, 1000);
  };

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={{ fontSize: 22, color: DARK }}>{Platform.OS === 'web' ? '←' : '‹'}</Text>
      </TouchableOpacity>
      <View style={styles.card}>
        <Text style={styles.heading}>Sign In</Text>
        <Text style={styles.subtext}>Login to your account</Text>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="johndoe@gmail.com"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
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
        <TouchableOpacity style={styles.forgotContainer} onPress={() => {}}>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin} disabled={loading}>
          <Text style={styles.loginButtonText}>{loading ? 'Logging in...' : 'Login'}</Text>
        </TouchableOpacity>
        <View style={styles.dividerContainer}>
          <View style={styles.divider} />
          <Text style={styles.dividerText}>Or sign up with</Text>
          <View style={styles.divider} />
        </View>
        {/* Social Login Icons */}
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
          Don't have an account ?{' '}
          <Text style={styles.signupText} onPress={() => navigation.goBack()}>Sign Up</Text>
        </Text>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center', // changed from 'flex-start' to 'center' for vertical centering
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 16,
    zIndex: 10,
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
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: DARK,
    marginBottom: 4,
    marginTop: 60,
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
  forgotContainer: {
    alignSelf: 'flex-end',
    marginBottom: 16,
  },
  forgotText: {
    color: PRIMARY_YELLOW,
    fontWeight: '600',
    fontSize: 14,
  },
  loginButton: {
    width: '100%',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: PRIMARY_YELLOW,
  },
  loginButtonText: {
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
  signupText: {
    color: PRIMARY_BLUE,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
}); 