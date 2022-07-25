import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { IButton } from "./types";

import { ButtonContainer, ButtonText, IconContainer } from "./styles";

const Button = ({ title, leftIcon, variant, ...rest }: IButton) => {
  return (
    <ButtonContainer variant={variant} {...rest}>
      {leftIcon && (
        <IconContainer>
          <MaterialIcons name={leftIcon} size={18} color="white" />
        </IconContainer>
      )}
      <ButtonText variant={variant}>{title}</ButtonText>
    </ButtonContainer>
  );
};

export { Button };
