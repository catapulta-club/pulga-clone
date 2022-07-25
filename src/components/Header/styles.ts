import styled from 'styled-components/native';

export const HeaderContainer = styled.View`
    position: absolute;
    left: 0;
    top: 0;
    background: ${({theme}) => theme.colors.primary.main};
    height: 132px;
    width: 100%;

    display: flex;
    justify-content:center;
    align-items: center;
`

export const LogoImage = styled.Image`
    width: 88px;
    height: 24px;
`