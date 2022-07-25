import React from "react";

import { Container, Loader, Text } from "./styles";

export const Loading = () => {
  return (
    <Container>
      <Loader size="large" color="#FFFFFF" />
      <Text>Carregando localização, aguarde...</Text>
    </Container>
  );
};
