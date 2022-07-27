import React from "react";
import { Text } from "react-native";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import MapView, { Marker } from "react-native-maps";
import MapMarkerImage from "../../../assets/images/marker.png";
import { Header } from "../../components/Header";

import { SelectScooter } from "./SelectScooter";

import { mapStyle, modalStyle } from "./styles";
import { useHomeController } from "./useHomeController";
import { Loading } from "../../components/Loading";
import { ReadQRCode } from "./ReadQRCode";
import { StartRide } from "./StartRide";
import { FinishRide } from "./FinishRide";

const Home = () => {
  const {
    snapPoints,
    handleOpenModal,
    bottomSheetModalRef,
    currentCity,
    currentLocation,
    locations,
    currentStep,
    handleNextStep,
    handleFinishRide,
    handleDoneRide,
    rideDuration,
    setRideDuration,
    handleResetRide,
  } = useHomeController();

  if (!currentLocation?.coords) {
    return <Loading />;
  }

  return (
    <BottomSheetModalProvider>
      <Header currentCity={currentCity} />
      <MapView
        style={mapStyle}
        initialRegion={{
          latitude: currentLocation?.coords.latitude,
          longitude: currentLocation?.coords.longitude,
          latitudeDelta: 0.06,
          longitudeDelta: 0.06,
        }}
      >
        {locations.length
          ? locations.map((location) => (
              <Marker
                coordinate={{
                  latitude: location.lat,
                  longitude: location.lng,
                }}
                image={MapMarkerImage}
                onPress={handleOpenModal}
              />
            ))
          : null}
      </MapView>
      <BottomSheetModal
        snapPoints={snapPoints}
        ref={bottomSheetModalRef}
        index={1}
        animateOnMount={true}
        style={modalStyle}
      >
        {currentStep === 1 ? <SelectScooter nextStep={handleNextStep} /> : null}
        {currentStep === 2 ? <ReadQRCode nextStep={handleNextStep} /> : null}
        {currentStep === 3 ? (
          <StartRide handleFinishRide={handleFinishRide} />
        ) : null}
        {currentStep === 4 ? (
          <FinishRide finishRide={handleDoneRide} rideDuration={rideDuration} />
        ) : null}
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};

export { Home };
