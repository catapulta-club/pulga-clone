import styled from 'styled-components/native';
import { appFonts } from '../../../styles/fonts';

export const Container = styled.View`
    display: flex;
    flex:1;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 92px;
`


export const SubtitleContainer = styled.View`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    margin: 16px 0 ;
`

export const Title = styled.Text`
    font-family: ${appFonts.bold};
    font-size: 20px;
    color: ${({theme}) => theme.colors.background.main};
`

export const Time = styled.Text`
    font-family: ${appFonts.bold};
    font-weight: 700;
    font-size: 40px;
    color: ${({theme}) => theme.colors.placeholder.main}
`