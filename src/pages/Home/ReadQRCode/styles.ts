import styled from 'styled-components/native';
import { appFonts } from '../../../styles/fonts';

export const Container = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 92px;
`

export const Title = styled.Text`
    font-family: ${appFonts.bold};
    font-size: 20px;
    color: ${({theme}) => theme.colors.background.main};
`

export const SubTitle = styled.Text`
    font-family: ${appFonts.regular};
    font-size: 16px;
    color: ${({theme}) => theme.colors.background.main};
`