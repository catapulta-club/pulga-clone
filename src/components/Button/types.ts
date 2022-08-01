import { ButtonProps } from "react-native";

export interface IButton extends ButtonProps {
    leftIcon?: any;
    title: string;
    variant?: 'primary' | 'secondary'  
}

export interface IButtonProps {
    variant?: 'primary' | 'secondary';
    disabled?: boolean | null;
}