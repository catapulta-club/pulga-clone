import React from "react";
import { Button } from "../../../components/Button";
import { secondsToTime } from "../../../utils/timer";

import { Container, SubtitleContainer, Time, Title } from "./styles";
import { IStartRide } from "./types";
import { useStartRideController } from "./useStartRideController";

const StartRide = ({ handleFinishRide }: IStartRide) => {
  const { seconds, handleOnFinish } = useStartRideController({
    handleFinishRide,
  });
  return (
    <Container>
      <Title>Corrida em andamento</Title>
      <Time>{secondsToTime(seconds)}</Time>
      <Button
        title="Encerer"
        variant="primary"
        leftIcon="pause"
        onPress={handleOnFinish}
      />
    </Container>
  );
};

export { StartRide };
