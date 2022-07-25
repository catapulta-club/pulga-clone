import styled from 'styled-components/native';
import { appFonts } from '../../styles/fonts';

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.primary.main};
`

export const ContentContainer = styled.View`
    padding-left: 32px;
    padding-right: 32px;
    position: relative;
`

export const ButtonContainer = styled.View`
    position: absolute;
    padding-left: 32px;
    padding-right: 32px;
    width: 100%;
    bottom: 60px;
`

export const ImageHeader = styled.Image`
    width: 100%;
    height: 50%;
`

export const Title = styled.Text`
    font-family: ${appFonts.bold};
    font-size: 48px;
    color: ${({theme}) => theme.colors.primary.onMain};
`

export const SubTitle = styled.Text`
    font-family: ${appFonts.regular};
    font-size: 16px;
    margin-top:24px;
    color: ${({theme}) => theme.colors.primary.onMain}
`