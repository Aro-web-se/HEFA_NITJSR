import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';

// Formik
import { Formik } from 'formik';

import KeyboardAvidWrap from '../components/KeybordAvoidwrapeup';

// Icons
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons';

//API
import axios from 'axios';

import {
  StyledContainer,
  InnerContainer,
  PageLogo1,
  PageLogo2,
  PageTitle,
  SubTitle1,
  SubTitle2,
  ExtraSubTitle,
  StyledFormArea,
  LeftIcon,
  StyledInputLabel,
  StyledTextInput,
  colors,
  RightIcon,
  StyledButton,
  ButtonText,
  MsBox,
  Line,
  Extraview,
  ExtraText,
  TextLink,
  TextLinkContent,
  TextLink2,
  ExtrasubTitleView,
  LineWithTextContainer,
  LineText,
} from './../components/styles';

import { View, ActivityIndicator } from 'react-native';

// Colors
const { brand, darklight, primary } = colors;

const Login = ({ navigation }) => {
  const [hidePassword, setHidePassword] = useState(true);








  const [message, setMessage] = useState();
  const [messageType, setmessageType] = useState();

  const hendelMessage = (message, type = 'FAILED') => {
    setMessage(message);
    setmessageType(type);
  }

  const handelLogin = (crendentials, setSubmitting ) => {
    hendelMessage(null);
    const url ='http://localhost:3000/user/signin';

    axios
    .post(url, crendentials)
    .then((response) => {
      const result = response.data;
      const {message, status , data} = result;


      if(status != 'SUCCESS') {
        hendelMessage(message, status);
      }else{
        navigation.navigate('Welcome', {...data[0]});
      }
      setSubmitting(false);
    })
    .catch(error => {
      console.log(error.JSON());
      setSubmitting(false);
      hendelMessage("you getting an error. please Check your network and try again");
    })
  }







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

          <PageTitle>
            Smart and Effective IoT and GNSS Technology based Tea farming and Tourism for Tea Community Development
          </PageTitle>

          <ExtrasubTitleView>
            <ExtraSubTitle>A CSR activity of Higher Education Financial Agency (HEFA)</ExtraSubTitle>
          </ExtrasubTitleView>

          <SubTitle2> Implemented by NIT Jamshedpur </SubTitle2>
          <SubTitle1>Account Login</SubTitle1>

          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={(values, {setSubmitting}) => {


             if (values.email == '' || values.password == ''){
              hendelMessage("please fill all the fields");
              setSubmitting(false);
             }else{
              handelLogin(values, setSubmitting);
             }

            // console.log(values);
            //   navigation.navigate('Welcome');
             }}
          >
            {({ handleChange, handleBlur, handleSubmit, values, isSubmitting }) => (
              <StyledFormArea>
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
                />

                <TextLink2 onPress={() => navigation.navigate('Forgotpassword')}>
                  <TextLinkContent> Forgot Password </TextLinkContent>
                </TextLink2>



                <MsBox type={messageType}>{message}</MsBox>
                { !isSubmitting && (
                <StyledButton onPress={handleSubmit}>
                  <ButtonText> Login </ButtonText>
                </StyledButton>
              )}

                { isSubmitting && 
                <StyledButton disabled = {true}>
                  <ActivityIndicator size="large" color={primary} />
                </StyledButton>}





                <LineWithTextContainer>
                  <Line />
                  <LineText>OR</LineText>
                  <Line />
                </LineWithTextContainer>

                <StyledButton google={true} onPress={handleSubmit}>
                  <Fontisto name="google" color={'#C8F7F3'} size={28} />
                  <ButtonText google={true}> signin with Google </ButtonText>
                </StyledButton>
                <Extraview>
                  <ExtraText> Don't have an account already? </ExtraText>
                  <TextLink onPress={() => navigation.navigate('Signup')}>
                    <TextLinkContent> Signup </TextLinkContent>
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

const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={brand} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
      {isPassword && (
        <RightIcon onPress={() => setHidePassword(!hidePassword)}>
          <Ionicons name={hidePassword ? 'eye-off' : 'eye'} size={30} color={darklight} />
        </RightIcon>
      )}
    </View>
  );
};

export default Login;
