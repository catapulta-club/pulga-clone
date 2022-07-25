import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Navigation } from "./navigation";

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
};

export default App;
