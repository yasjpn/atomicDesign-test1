import { BrowserRouter } from "react-router-dom";
import "./styles.css";
import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
// import { HeaderOnly } from "./components/templates/HeaderOnly";
import { DefaultLayout } from "./components/templates/DefaultLayout";

const user = {
  name: "なまえ",
  image: "https://source.unsplash.com/N04FIfHhv_k",
  email: "aaa@bbb.com",
  phone: "090-0000-1111",
  company: {
    name: "あいう株式会社"
  },
  website: "https://google.com"
};

export default function App() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <PrimaryButton>テスト</PrimaryButton>
        <SecondaryButton>検索</SecondaryButton>
        <br />
        <SearchInput />
        <UserCard user={user} />
      </DefaultLayout>
    </BrowserRouter>
  );
}
