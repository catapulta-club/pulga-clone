import React from "react";
import { Rating } from "react-native-ratings";
import { Button } from "../../../components/Button";
import { secondsToTime } from "../../../utils/timer";

import {
  Container,
  RatingTitle,
  SubtitleContainer,
  Time,
  Title,
} from "./styles";
import { IFinishRide } from "./types";

const FinishRide = ({ finishRide, rideDuration }: IFinishRide) => {
  return (
    <Container>
      <Title>Corrida Finalizada</Title>
      <Time>{secondsToTime(rideDuration)}</Time>
      <RatingTitle>Como foi sua viagem?</RatingTitle>
      <Rating style={{ paddingVertical: 10 }} />
      <Button title="Avaliar" variant="primary" onPress={finishRide} />
    </Container>
  );
};

export { FinishRide };
