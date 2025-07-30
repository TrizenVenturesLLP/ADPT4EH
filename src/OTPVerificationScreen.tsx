import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Platform, Dimensions } from 'react-native';
import { useNavigation } from './SimpleNavigation';

const PRIMARY_YELLOW = '#f9b233';
const DARK = '#222';
const GRAY = '#888';
const LIGHT_BG = '#f8fafc';

const maskPhone = (phone: string) => {
  if (!phone) return '';
  return phone.replace(/(\d{2})(\d{2})(\d{4})(\d{2})/, '+$1 $2******$4');
};

const OTPVerificationScreen: React.FC = () => {
  const navigation = useNavigation();
  const phone = navigation.params?.phone || '';
  const [otp, setOtp] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(30);
  const [isMobileView, setIsMobileView] = useState(false);
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  // Check if we're on mobile web view
  useEffect(() => {
    const checkScreenSize = () => {
      if (Platform.OS === 'web') {
        const { width } = Dimensions.get('window');
        setIsMobileView(width <= 768);
      } else {
        setIsMobileView(true); // Always frameless on native mobile
      }
    };

    checkScreenSize();
    if (Platform.OS === 'web') {
      const subscription = Dimensions.addEventListener('change', checkScreenSize);
      return () => subscription?.remove();
    }
  }, []);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer(t => t - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleChange = (text: string, idx: number) => {
    if (/^\d?$/.test(text)) {
      const newOtp = [...otp];
      newOtp[idx] = text;
      setOtp(newOtp);
      if (text && idx < 3) {
        // @ts-ignore
        inputRefs[idx + 1].current.focus();
      }
    }
  };

  const handleResend = () => {
    if (timer === 0) setTimer(30);
  };

  const handleContinue = () => {
    // Add OTP verification logic here
    if (otp.join('').length === 4) {
      console.log('=== OTP VERIFICATION DEBUG ===');
      console.log('OTP entered:', otp.join(''));
      console.log('Navigation object:', navigation);
      console.log('Platform:', Platform.OS);
      
      // Simplified navigation for Android
      console.log('Calling navigation.navigate("ChooseLocationMethod")');
      navigation.navigate('ChooseLocationMethod');
    } else {
      console.log('OTP not complete, length:', otp.join('').length);
    }
  };

  // Frameless layout for mobile (Android, iOS, and mobile web)
  if (isMobileView) {
    return (
      <View style={styles.androidContainer}>
        {/* Back Button */}
        <TouchableOpacity style={styles.androidBackButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backArrow}>‹</Text>
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>

        {/* Title Section */}
        <View style={styles.androidTitleSection}>
          <Text style={styles.androidHeading}>Verification Code</Text>
          <Text style={styles.androidSubtext}>We have sent a verification code to</Text>
          <Text style={styles.androidPhoneText}>{maskPhone(phone)} <Text style={styles.androidEditText}>Edit</Text></Text>
        </View>

        {/* OTP Input */}
        <View style={styles.androidOtpContainer}>
          <View style={styles.androidOtpRow}>
            {otp.map((digit, idx) => (
              <TextInput
                key={idx}
                ref={inputRefs[idx]}
                style={styles.androidOtpInput}
                value={digit}
                onChangeText={text => handleChange(text, idx)}
                keyboardType="number-pad"
                maxLength={1}
                autoFocus={idx === 0}
                textAlign="center"
              />
            ))}
          </View>
        </View>

        {/* Resend Section */}
        <View style={styles.androidResendContainer}>
          <Text style={styles.androidResendText}>
            Didn't receive OTP ? <Text style={[styles.androidResendLink, timer > 0 && { color: GRAY }]} onPress={handleResend}>Resend SMS in {timer.toString().padStart(2, '0')}s</Text>
          </Text>
        </View>

        {/* Continue Button */}
        <TouchableOpacity 
          style={[styles.androidContinueButton, { opacity: otp.join('').length === 4 ? 1 : 0.6 }]}
          onPress={handleContinue} 
          disabled={otp.join('').length !== 4}
        >
          <Text style={styles.androidContinueButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // Desktop web layout (with form frame)
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff' }}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.heading}>Verification Code</Text>
          <Text style={styles.subtext}>We have sent a verification code to</Text>
          <Text style={styles.phoneText}>{maskPhone(phone)} <Text style={styles.editText}>Edit</Text></Text>
          <View style={styles.otpRow}>
            {otp.map((digit, idx) => (
              <TextInput
                key={idx}
                ref={inputRefs[idx]}
                style={styles.otpInput}
                value={digit}
                onChangeText={text => handleChange(text, idx)}
                keyboardType="number-pad"
                maxLength={1}
                autoFocus={idx === 0}
                textAlign="center"
              />
            ))}
          </View>
          <View style={styles.resendRow}>
            <Text style={styles.resendText}>Didn't receive OTP ? </Text>
            <TouchableOpacity onPress={handleResend} disabled={timer > 0}>
              <Text style={[styles.resendLink, timer > 0 && { color: GRAY }]}>Resend SMS in {timer.toString().padStart(2, '0')}s</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.continueButton} onPress={handleContinue} disabled={otp.join('').length !== 4}>
            <Text style={styles.continueButtonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </div>
  );
};

export default OTPVerificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 10,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  card: {
    width: '100%',
    maxWidth: 400,
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
    fontSize: 22,
    fontWeight: 'bold',
    color: DARK,
    marginBottom: 8,
    textAlign: 'center',
  },
  subtext: {
    fontSize: 15,
    color: GRAY,
    marginBottom: 12,
    textAlign: 'center',
  },
  phoneText: {
    fontSize: 16,
    color: DARK,
    marginBottom: 18,
    textAlign: 'center',
  },
  editText: {
    color: PRIMARY_YELLOW,
    fontWeight: '600',
    fontSize: 15,
  },
  otpRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
    marginBottom: 34,
  },
  otpInput: {
    width: 48,
    height: 48,
    borderWidth: 1,
    borderColor: GRAY,
    borderRadius: 8,
    fontSize: 22,
    backgroundColor: LIGHT_BG,
    textAlign: 'center',
    marginHorizontal: 6,
    marginBottom: 18,
  },
  resendRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
    justifyContent: 'center',
  },
  resendText: {
    textAlign: 'center',
    color: DARK,
    fontSize: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resendLink: {
    color: PRIMARY_YELLOW,
    fontWeight: '600',
    fontSize: 14,
  },
  continueButton: {
    width: '100%',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    backgroundColor: PRIMARY_YELLOW,
    marginTop: 8,
  },
  continueButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  // New styles for Android-specific layout
  androidContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
  },
  androidBackButton: {
    position: 'absolute',
    top: 40,
    left: 16,
    zIndex: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backArrow: {
    fontSize: 22,
    color: DARK,
    marginRight: 8,
  },
  backText: {
    fontSize: 16,
    color: DARK,
    fontWeight: 'bold',
  },
  androidTitleSection: {
    alignItems: 'center',
    marginTop: 100,
    marginBottom: 40,
  },
  androidHeading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: DARK,
    marginBottom: 8,
  },
  androidSubtext: {
    fontSize: 15,
    color: GRAY,
    marginBottom: 12,
  },
  androidPhoneText: {
    fontSize: 16,
    color: DARK,
    marginBottom: 18,
  },
  androidEditText: {
    color: PRIMARY_YELLOW,
    fontWeight: '600',
    fontSize: 15,
  },
  androidOtpContainer: {
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
  },
  androidOtpRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
    marginBottom: 30,
  },
  androidOtpInput: {
    width: 48,
    height: 48,
    borderWidth: 1,
    borderColor: GRAY,
    borderRadius: 8,
    fontSize: 22,
    backgroundColor: LIGHT_BG,
    textAlign: 'center',
    marginHorizontal: 6,
  },
  androidResendContainer: {
    alignItems: 'center',
    marginBottom: 18,
    justifyContent: 'center',
  },
  androidResendText: {
    color: DARK,
    fontSize: 14,
    textAlign: 'center',
  },
  androidResendLink: {
    color: PRIMARY_YELLOW,
    fontWeight: '600',
    fontSize: 14,
  },
  androidContinueButton: {
    width: '100%',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    backgroundColor: PRIMARY_YELLOW,
    marginTop: 8,
  },
  androidContinueButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
}); 