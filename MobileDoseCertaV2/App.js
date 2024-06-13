import { UserProvider } from "./src/contexts/UserContext";
import { NavigationContainer } from "@react-navigation/native";
import Route from "./src/navigations/route";

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <Route />
      </NavigationContainer>
    </UserProvider>
  );
}