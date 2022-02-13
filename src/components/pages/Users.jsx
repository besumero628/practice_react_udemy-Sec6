import styled from "styled-components";
import { SearchInput } from "../molecules/Searchinput";
import { UserCard } from "../organisms/user/UserCard";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `test - ${val}`,
    image: "https://source.unsplash.com/NE0XGVKTmcA",
    email: "1111@example.com",
    phone: "000-1234-5678",
    company: {
      name: "Google"
    },
    website: "https://www.google.com"
  };
});

const user = {
  name: "test",
  image: "https://source.unsplash.com/NE0XGVKTmcA",
  email: "1111@example.com",
  phone: "000-1234-5678",
  company: {
    name: "Google"
  },
  website: "https://www.google.com"
};

export const Users = () => {
  return (
    <SContainer>
      <h2>All Users</h2>
      <SearchInput />
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
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
