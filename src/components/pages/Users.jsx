import styled from "styled-components";
import { SearchInput } from "../molecules/Searchinput";
import { UserCard } from "../organisms/user/UserCard";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";

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
  const { userInfo, setUserInfo } = useContext(UserContext);
  const onClickSwitch = () => setUserInfo({ isAdmin: !userInfo.isAdmin });
  return (
    <SContainer>
      <h2>All Users</h2>
      <SearchInput />
      <br />
      <SecondaryButton onClick={onClickSwitch}>Change</SecondaryButton>
      <SUserArea>
        {users.map((obj) => (
          <UserCard key={user.id} user={obj} />
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
