import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeNavigation from "./HomeNavigation";

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <HomeNavigation />
    </NavigationContainer>
  );
}
