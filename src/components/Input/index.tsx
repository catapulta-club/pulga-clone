import React from "react";
import { Feather } from "@expo/vector-icons";
import { Container, TextInput } from "./styles";
import { TextInputProps } from "react-native";

export const Input = ({ value }: TextInputProps) => {
  return (
    <Container>
      <Feather name="search" size={16} color="#868E96" />
      <TextInput value={value} />
    </Container>
  );
};
