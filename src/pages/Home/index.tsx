import React from "react";
import { View, Text } from "react-native";
import { appFonts } from "../../styles/fonts";

const Home = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontFamily: appFonts.bold, fontSize: 32 }}>Home</Text>
    </View>
  );
};

export { Home };
