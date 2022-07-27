import React from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
import { Button } from "../../../components/Button";

import { Container, SubTitle, Title } from "./styles";
import { useReadQRCodeController } from "./useReadQRCodeController";
import { IReadQRCode } from "./types";

const ReadQRCode = ({ nextStep }: IReadQRCode) => {
  const { handleBarCodeScanned, scanned } = useReadQRCodeController();

  return (
    <Container>
      <Title>Aponte para o QR Code</Title>
      <SubTitle>para iniciar a corrida</SubTitle>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={{ width: 190, height: 190, marginBottom: 24 }}
      />
      <Button
        title="Iniciar corrida"
        variant="primary"
        disabled={!scanned}
        onPress={nextStep}
      />
    </Container>
  );
};

export { ReadQRCode };
