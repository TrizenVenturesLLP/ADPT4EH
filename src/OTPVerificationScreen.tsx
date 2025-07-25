import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Platform } from 'react-native';

const PRIMARY_YELLOW = '#f9b233';
const DARK = '#222';
const GRAY = '#888';
const LIGHT_BG = '#f8fafc';

const maskPhone = (phone: string) => {
  if (!phone) return '';
  return phone.replace(/(\d{2})(\d{2})(\d{4})(\d{2})/, '+$1 $2******$4');
};

const OTPVerificationScreen = ({ navigation, phone = '' }: any) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(30);
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

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
      if (navigation.navigate) {
        navigation.navigate('LocationInput');
      } else if (typeof navigation === 'function') {
        navigation('LocationInput');
      } else {
        navigation.goBack && navigation.goBack();
      }
    }
  };

  if (Platform.select({ web: true, default: false })) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff' }}>
        <View style={styles.container}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation && navigation.goBack && navigation.goBack()}>
            <Text style={{ fontSize: 18, color: DARK }}>{'←'} Back</Text>
          </TouchableOpacity>
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
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation && navigation.goBack && navigation.goBack()}>
        <Text style={{ fontSize: 18, color: DARK }}>{Platform.OS === 'web' ? '←' : '‹'} Back</Text>
      </TouchableOpacity>
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
    top: 40,
    left: 16,
    zIndex: 10,
    flexDirection: 'row',
    alignItems: 'center',
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
    marginBottom: 24,
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
  },
  resendRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },
  resendText: {
    color: DARK,
    fontSize: 14,
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
}); 