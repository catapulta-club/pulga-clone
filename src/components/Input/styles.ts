import styled from 'styled-components/native';

export const Container = styled.View`
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    bottom: -22px;
    max-width: 90%;
    width: 100%;
    height: 48px;
    background-color: ${({theme}) => theme.colors.background.onMain};
    border: 1px solid #ADB5BD;
    padding: 16px;
    border-radius: 12px;
`

export const TextInput = styled.TextInput`
    flex:1;
    margin-left:12px;
    height: 24px;
`