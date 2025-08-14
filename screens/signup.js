import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';

// Formik
import { Formik } from 'formik';

//API
import axios from 'axios';

import KeyboardAvidWrap from '../components/KeybordAvoidwrapeup';

//DatetimePicker
import DateTimePicker from '@react-native-community/datetimepicker';

// Icons
import { Octicons, Ionicons } from '@expo/vector-icons';

import {
  StyledContainer,
  InnerContainer,
  PageLogo1,
  PageLogo2,
  SubTitle1,
  SubTitle2,
  StyledFormArea,
  LeftIcon,
  StyledInputLabel,
  StyledTextInput,
  colors,
  RightIcon,
  StyledButton,
  ButtonText,
  Line,
  Extraview,
  ExtraText,
  TextLink,
  TextLinkContent,
  LineWithTextContainer,
  MsBox,
} from './../components/styles';

import { View, TouchableOpacity, Keyboard, Platform, ActivityIndicator } from 'react-native';

// Colors
const { brand, darklight, primary } = colors;

const Signup = ({ navigation }) => {
  const [hidePassword, setHidePassword] = useState(true);
  const [hidePassword2, setHidePassword2] = useState(true);

  const [show, setshow] = useState(false);
  const [date, setDate] = useState(new Date(2000, 1, 1));

  const [message, setMessage] = useState();
  const [messageType, setmessageType] = useState();

  // Actual date of birth
  const [dob, setdob] = useState();

  const onChange = (event, selectDate) => {
    const currentDate = selectDate || date;
    setshow(false);
    setDate(currentDate);
    setdob(currentDate);
  };

  const showDatePicker = () => {
    setshow(true);
  };

  //From handling and Backend code

  const hendelMessage = (message, type = 'FAILED') => {
    setMessage(message);
    setmessageType(type);
  };

  const handelSignup = (crendentials, setSubmitting) => {
    hendelMessage(null);
    const url = 'http://localhost:3000/user/signup';

    axios
      .post(url, crendentials)
      .then((response) => {
        const result = response.data;
        const { message, status, data } = result;

        if (status != 'SUCCESS') {
          hendelMessage(message, status);
        } else {
          navigation.navigate('Welcome', { ...data });
        }
        setSubmitting(false);
      })
      .catch((error) => {
        console.log(error.JSON());
        setSubmitting(false);
        hendelMessage('you getting an error. please Check your network and try again');
      });
  };

  return (
    <KeyboardAvidWrap>
      <StyledContainer>
        <StatusBar style="dark" />
        <InnerContainer>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <PageLogo1 resizeMode="cover" source={require('./../assets/imgage/nitjsrLogo1.png')} />

            <PageLogo2 resizeMode="cover" source={require('./../assets/imgage/logo2.png')} />
          </View>

          <SubTitle2> Implemented by NIT Jamshedpur </SubTitle2>
          <SubTitle1>Account Signup</SubTitle1>

          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode="date"
              // is24Hour={true}
              // display="default"
              // onChange={onChange}
              display={'spinner'}
              onChange={(event, selectedDate) => {
                if (Platform.OS === 'android') {
                  setshow(false); // hide after selection on Android
                }
                if (Platform.OS === 'ios') {
                  setshow(false); // hide after selection on ios
                }
                if (selectedDate) {
                  setDate(selectedDate);
                  setdob(selectedDate);
                }
              }}
              style={{ backgroundColor: 'white' }}
            />
          )}

          <Formik
            initialValues={{ name: '', email: '', dateOfBirth: '', password: '', confirmPassword: '' }}
            onSubmit={(values, { setSubmitting }) => {
              values = { ...values, dateOfBirth: dob };

              // console.log(values);
              // navigation.navigate('Login');

              if (
                values.email == '' ||
                values.password == '' ||
                values.name == '' ||
                values.dateOfBirth == '' ||
                values.confirmPassword == ''
              ) {
                hendelMessage('please fill all the fields');
                setSubmitting(false);
              } else if (values.password !== values.confirmPassword) {
                hendelMessage('Password do not match');
                setSubmitting(false);
              } else {
                handelSignup(values, setSubmitting);
              }
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values, isSubmitting }) => (
              <StyledFormArea>
                <MyTextInput
                  label="Full Name"
                  icon="person"
                  placeholder="Your name"
                  placeholderTextColor={darklight}
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}
                />

                <MyTextInput
                  label="Email Address"
                  icon="mail"
                  placeholder="*********@gmail.com"
                  placeholderTextColor={darklight}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  keyboardType="email-address"
                />

                <MyTextInput
                  label="Date of Birth"
                  icon="calendar"
                  placeholder=" MM - DD - YYYY"
                  placeholderTextColor={darklight}
                  onChangeText={handleChange('dateOfBirth')}
                  onBlur={handleBlur('dateOfBirth')}
                  value={dob ? dob.toDateString() : ''}
                  isDate={true}
                  editable={false}
                  showDatePicker={showDatePicker}
                />

                <MyTextInput
                  label="Password"
                  icon="lock"
                  placeholder="* * * * * * * * * * * * * *"
                  placeholderTextColor={darklight}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry={hidePassword}
                  isPassword={true}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
                  onPress={Keyboard.dismiss}
                  textContentType="oneTimeCode"
                  autoComplete="off"
                  autoCorrect={false}
                />

                <MyTextInput
                  label="Confirm Password"
                  icon="lock"
                  placeholder="* * * * * * * * * * * * * *"
                  placeholderTextColor={darklight}
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                  value={values.confirmPassword}
                  secureTextEntry={hidePassword2}
                  isPassword={true}
                  hidePassword={hidePassword2}
                  setHidePassword={setHidePassword2}
                  onPress={Keyboard.dismiss}
                />

                <MsBox type={messageType}>{message}</MsBox>
                {!isSubmitting && (
                  <StyledButton onPress={handleSubmit}>
                    <ButtonText> Signup </ButtonText>
                  </StyledButton>
                )}

                {isSubmitting && (
                  <StyledButton disabled={true}>
                    <ActivityIndicator size="large" color={primary} />
                  </StyledButton>
                )}

                <LineWithTextContainer>
                  <Line />
                </LineWithTextContainer>
                <Extraview>
                  <ExtraText> Already have an account? </ExtraText>
                  <TextLink onPress={() => navigation.navigate('Login')}>
                    <TextLinkContent> Login </TextLinkContent>
                  </TextLink>
                </Extraview>
              </StyledFormArea>
            )}
          </Formik>
        </InnerContainer>
      </StyledContainer>
    </KeyboardAvidWrap>
  );
};

const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, isDate, showDatePicker, ...props }) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={brand} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>

      {!isDate && <StyledTextInput {...props} />}
      {isDate && (
        <TouchableOpacity onPress={showDatePicker}>
          <StyledTextInput {...props} pointerEvents="none" />
        </TouchableOpacity>
      )}

      {isPassword && (
        <RightIcon onPress={() => setHidePassword(!hidePassword)}>
          <Ionicons name={hidePassword ? 'eye-off' : 'eye'} size={30} color={darklight} />
        </RightIcon>
      )}
    </View>
  );
};

export default Signup;
