import type { NativeStackNavigationProp } from '@react-navigation/native-stack'


export type RootStackParamList = {
    OnBoarding: undefined;
    Home: undefined
};

export type OnBoardProps = NativeStackNavigationProp<RootStackParamList, 'OnBoarding'>
export type HomeProps = NativeStackNavigationProp<RootStackParamList, 'Home'>