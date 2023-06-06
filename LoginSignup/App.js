import React from "react";
import Home from "./src/Screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/Screens/Login";
import Signup from "./src/Screens/Signup";
import ChoosingScreen from "./src/Screens/ChoosingScreen";
import Length from "./src/Screens/Length";
import Temperature from "./src/Screens/Temperature";
import Weight from "./src/Screens/Weight";
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name = "Login" component={Login}/>
        <Stack.Screen name = "Signup" component={Signup}/>
        <Stack.Screen name = "ChoosingScreen" component={ChoosingScreen}/>
        <Stack.Screen name = "Length" component={Length}/>
        <Stack.Screen name = "Temperature" component={Temperature}/>
        <Stack.Screen name = "Weight" component={Weight}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;