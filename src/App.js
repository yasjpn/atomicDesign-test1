import "./styles.css";

import { Router } from "./router/Router";
import { UserProvider } from "./components/providers/UserProviders";
export default function App() {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
}
