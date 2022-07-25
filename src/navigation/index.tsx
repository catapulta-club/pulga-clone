import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { OnBoarding } from "../pages/OnBoarding";
import { Home } from "../pages/Home";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}
    >
      <Stack.Screen name="onboarding" component={OnBoarding} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export { Navigation };
