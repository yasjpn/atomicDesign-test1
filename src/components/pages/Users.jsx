import styled from "styled-components";

import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `なまえ ${val}`,
    image: "https://source.unsplash.com/N04FIfHhv_k",
    email: "aaa@bbb.com",
    phone: "090-0000-1111",
    company: {
      name: "あいう株式会社"
    },
    website: "https://google.com"
  };
});

export const Users = () => {
  return (
    <SContainer>
      <h2>Users</h2>
      <SearchInput />
      <SUserArea>
        {users.map((user) => (
          <UserCard key={users.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
