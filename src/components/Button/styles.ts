import styled, {css} from 'styled-components/native';
import { appFonts } from '../../styles/fonts';
import { IButtonProps } from './types';

export const ButtonContainer = styled.TouchableOpacity<IButtonProps>`
    width: 100%;
    height: 48px;
    padding: 8px 16px;

    ${({variant}) => variant === 'primary' ? css`
        background-color: ${({theme}) => theme.colors.primary.main};
    ` : css `
        background-color: ${({theme}) => theme.colors.primary.onMain};
    `}

    border-radius: ${({theme}) => theme.borders.radius.sm}px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    ${({disabled}) => disabled && css`
        opacity: 0.5;
        background-color: ${({theme}) => theme.colors.background.main};
    `}
`

export const IconContainer = styled.View`
    margin-right: 8px;
`

export const ButtonText = styled.Text<IButtonProps>`
    font-family: ${appFonts.semiBold};
    font-size: 16px;
    ${({variant}) => variant === 'primary' ? css`
        color: ${({theme}) => theme.colors.primary.onMain};
    ` : css `
        color: ${({theme}) => theme.colors.primary.main};
    `}
`
