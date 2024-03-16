import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ReactNode } from "react";
import { navigationTheme } from "../components/provider/PaperProviderTemplate";
import Accueil from "../components/pages/Accueil";
import Annonce, {AnnonceParams} from "../components/pages/Annonce";
import Favoris from "../components/pages/Favoris";

export type RootStackParamList = {
  "Liste des annonces": undefined;
  Annonce: AnnonceParams;
  "Mes favoris": undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootStack(): ReactNode {
  return (
    <Stack.Navigator initialRouteName="Liste des annonces"
    screenOptions={{
      headerStyle: {
        backgroundColor: navigationTheme.colors.primary,

      },
      headerTintColor: navigationTheme.colors.text,
      headerTitleStyle: {fontSize: 20}
    }}>
      <Stack.Screen name="Liste des annonces" component={Accueil} />
      <Stack.Screen name="Annonce" component={Annonce} />
      <Stack.Screen name="Mes favoris" component={Favoris} />
    </Stack.Navigator>
  );
}

export default RootStack;
