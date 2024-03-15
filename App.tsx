import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import RootStack from "./src/navigation/Rootstack";
import { StatusBar } from "expo-status-bar";
import {PaperProviderTemplate as PaperProviderCustom} from "./src/components/provider/PaperProviderTemplate";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./src/slice/AmisSlice";

export default function App() {
  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
          <PaperProviderCustom>
          <RootStack />
          <StatusBar style="light"></StatusBar>
        </PaperProviderCustom>
      </NavigationContainer>
    </ReduxProvider>
  );
}

const styles = StyleSheet.create({

});
