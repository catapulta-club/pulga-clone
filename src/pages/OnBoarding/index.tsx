import React from "react";
import { View, Text } from "react-native";
import { appFonts } from "../../styles/fonts";
function OnBoarding() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontFamily: appFonts.bold, fontSize: 32 }}>
        OnBoarding
      </Text>
    </View>
  );
}

export default OnBoarding;
