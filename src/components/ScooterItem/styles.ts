import styled from 'styled-components/native';
import { appFonts } from '../../styles/fonts';
import { IBatteryProps, ISeletedProps } from './types';

export const Wrapper = styled.TouchableWithoutFeedback`

`

export const Container = styled.View<ISeletedProps>`
    min-width: 173px;
    height: 177px;

    border: 1.5px solid ${({isSelected}) => isSelected ? 'green' : '#dee2e6'};
    border-radius: 8px;
    margin-right: 24px;
    overflow: hidden;

    display: flex;
    flex-direction: row;
    padding: 5px;
`

export const ScooterInfo = styled.View`
    padding: 12px;
`

export const ScooterName = styled.Text`
    font-family: ${appFonts.bold};
    font-size: 16px;
    color: #3c9ec2;
`

export const ScooterCode = styled.Text`
    font-family: ${appFonts.bold};
    font-size: 14px;
    color: #495057;
    margin-bottom: 16px;
`

export const ScooterBattery = styled.Text<IBatteryProps>`
    font-family: ${appFonts.regular};
    font-size: 14px;
    color: ${({battery}) => battery > 50 ? 'green' : '#FFD43B'} ;
`
export const ScooterDistancy = styled.Text`
    font-family: ${appFonts.regular};
    font-size: 14px;
    color: #868E96;
`

export const ScooterImage = styled.Image`
    height: 100%;
    width: 80px;
`
