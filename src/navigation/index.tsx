import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { OnBoarding } from "../pages/OnBoarding";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}
    >
      <Stack.Screen name="onboarding" component={OnBoarding} />
    </Stack.Navigator>
  );
};

export { Navigation };
