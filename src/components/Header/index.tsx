import React from "react";
import LogoPulga from "../../../assets/images/logo-pulga.png";
import { Input } from "../Input";
import { HeaderContainer, LogoImage } from "./styles";
import { IHeaderProps } from "./types";

const Header = ({ currentCity }: IHeaderProps) => {
  return (
    <HeaderContainer>
      <LogoImage source={LogoPulga} />
      <Input placeholder="Seu endereço" value={currentCity} editable={false} />
    </HeaderContainer>
  );
};

export { Header };
