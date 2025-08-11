import styled from "styled-components/native";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import Constants from "expo-constants";


const StatusBarHeight = Constants.statusBarHeight;

export const colors = {
  primary: "#ffffff",
  secondary: "#E5E7EB",
  tertiary: "#1F2937",
  darklight: "#9CA3AF",
  brand: "#6D28D9",
  red: "#EF4444",
  green: "#32CD32",
  midnight: "#4682B4",
  lightgray: "#D3D3D3",
  blue10: "#8d8e4532" 
};

const {
  primary,
  secondary,
  tertiary,
  darklight,
  brand,
  red,
  green,
  midnight,
  lightgray,
  blue10
} = colors;

// Styled Components
export const StyledContainer = styled.View`
flex: 1;
  padding: 35px;
  padding-top: ${StatusBarHeight + 20}px;
  background-color: ${primary};
`;

export const InnerContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
`;

//welcome page
export const WelcomeContainer = styled(InnerContainer)`
  padding: 25px;
  padding-top: 19px;
  justify-content: center;
`;

export const PageLogo1 = styled.Image`
  width: 80px;
  height: 80px;
`;

export const PageLogo2 = styled.Image`
  width: 150px;
  height: 100px;
`;

//welcome page
export const Avater = styled.Image`
  width: 100px;
  height: 100px;
  margin: auto;
  border-radius: 50px;
  border-width: 2px;
  border-color: ${primary};
  margin-bottom: 3px;
  margin-top: 3px;
`;

//wlcome image
export const WlecomeImage = styled.Image`
  height: 50%;
  min-width: 100px;
`;

export const PageTitle = styled.Text`
  font-size: 15px;
  text-align: center;
  font-weight: bold;
  color: ${brand};
  padding: 10px;

  ${(props) =>
    props.Welcome &&
    `
      font-size: 35px;
    `}
`;

export const SubTitle1 = styled.Text`
  font-size: 14px;
  margin-top: 10px;
  margin-bottom: 10px;
  letter-spacing: 1px;
  font-weight: bold;
  color: ${tertiary};

  ${(props) =>
    props.Welcome &&
    `
      margin-bottom: 5px;
      font-weight: normal;
    `}
`;

export const SubTitle2 = styled.Text`
  font-size: 13px;
  margin-top: 5px;
  margin-bottom: 15px;
  letter-spacing: 1px;
  font-weight: bold;
  color: ${midnight};

  ${(props) =>
    props.Welcome &&
    `
      margin-bottom: 5px;
      font-weight: normal;
    `}
`;

//extra SubTitle
export const ExtraSubTitle = styled.Text`
  font-size: 10px;
  margin-top: 1px;
  margin-bottom: 1px;
  letter-spacing: 1px;
  font-weight: bold;
  text-align: center;
  color: ${midnight};
`;

//extra subtitle styling
export const ExtrasubTitleView = styled.View`
  padding: 7px 12px;
  border-radius: 28px;
  background-color: ${blue10};
`;
export const StyledFormArea = styled.View`
  
  width: 100%;
`;

export const StyledTextInput = styled.TextInput`
  background-color: ${secondary};
  padding: 15px 50px;
  border-radius: 15px;
  font-size: 16px;
  height: 55px;
  margin: 3px 0 10px 0;
  color: ${tertiary};
`;

export const StyledInputLabel = styled.Text`
  color: ${tertiary};
  font-size: 13px;
  text-align: left;
`;

export const LeftIcon = styled.TouchableOpacity`
  position: absolute;
  left: 10px;
  top: 32px;
  z-index: 1;
`;

export const RightIcon = styled.TouchableOpacity`
  position: absolute;
  right: 10px;
  top: 32px;
  z-index: 1;
`;

export const StyledButton = styled.TouchableOpacity`
  padding: 10px;
  background-color: ${brand};
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  margin-top: 1px;
  margin-bottom: 1px;
  height: 50px;

  ${(props) =>
    props.google == true &&
    `
      background-color: ${green};
      flex-direction: row;
      justify-content: center;
    `}
`;

export const ButtonText = styled.Text`
  color: ${primary};
  font-size: 16px;

  ${(props) =>
    props.google == true &&
    `
      padding: 5px;
    `}
`;

export const MsBox = styled.Text`
  text-align: center;
  font-size: 13px;
  margin-top: 10px;
  margin-bottom: 10px;
  color: ${props => props.type == 'SUCCESS' ? green : red };
`;

//line
export const LineWithTextContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const LineText = styled.Text`
  margin-left: 10px;
  margin-right: 10px;
  color: ${darklight};
  font-weight: bold;
`;

export const Line = styled.View`
  flex: 1;
  height: 1px;
  width: 100%;
  background-color: ${darklight};
  margin-vertical: 10px;
`;

export const Extraview = styled.View`
  justify-content: center;
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;

export const ExtraText = styled.Text`
  justify-content: center;
  align-content: center;
  color: ${tertiary};
  font-size: 16px;
`;

export const TextLink = styled.TouchableOpacity`
  justify-content: center;
  align-content: center;
`;

export const TextLinkContent = styled.Text`
  color: ${brand};
  font-size: 15px;
`;

export const TextLink2 = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: flex-end;
`;
