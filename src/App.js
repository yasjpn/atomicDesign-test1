import "./styles.css";

import { Router } from "./router/Router";
import { UserProvider } from "./components/providers/UserProviders";
import { RecoilRoot } from "recoil";

export default function App() {
  return (
    <RecoilRoot>
      <UserProvider>
        <Router />
      </UserProvider>
    </RecoilRoot>
  );
}
