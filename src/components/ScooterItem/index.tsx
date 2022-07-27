import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import {
  Container,
  ScooterBattery,
  ScooterCode,
  ScooterDistancy,
  ScooterImage,
  ScooterInfo,
  ScooterName,
  Wrapper,
} from "./styles";
import { IScooterItemProps } from "./types";

const ScooterItem = ({ item, onSelect, idSelected }: IScooterItemProps) => {
  const handleSelect = () => {
    onSelect(item.id);
  };
  return (
    <Wrapper onPress={handleSelect}>
      <Container isSelected={idSelected === item.id}>
        <ScooterImage source={{ uri: item.picture }} resizeMode="center" />
        <ScooterInfo>
          <ScooterName>{item.name}</ScooterName>
          <ScooterCode>{item.code}</ScooterCode>
          <ScooterBattery battery={item.battery}>
            <FontAwesome
              name={item.battery > 50 ? "battery-4" : "battery-2"}
              size={16}
              color={item.battery > 50 ? "green" : "#FFD43B"}
            />{" "}
            {item.battery}%
          </ScooterBattery>
          <ScooterDistancy>
            <FontAwesome name="map-o" size={16} color="#868E96" />{" "}
            {item.distancy}Km
          </ScooterDistancy>
        </ScooterInfo>
      </Container>
    </Wrapper>
  );
};

export { ScooterItem };
