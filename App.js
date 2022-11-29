import { useState }  from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

import { RootDrawerNavigator } from "./routes/drawer";

const getFonts = () => Font.loadAsync({
    'nunito-regular': require("./assets/fonts/NunitoSans-Regular.ttf"),
    'nunito-bold': require("./assets/fonts/NunitoSans-Bold.ttf"),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if(fontsLoaded) {
    return (
      <RootDrawerNavigator />
    );
  } else {
    return (
      <AppLoading 
        startAsync={getFonts} 
        onFinish={() => setFontsLoaded(true)} 
        onError={() => console.log('error')} 
      />
    )
  }

}
