import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { main, primaryColor } from "./src/components/Styles"
import Routes from "./src/routes"

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={primaryColor} barStyle="light-content"/>
      <Routes />
    </NavigationContainer>
  );
}