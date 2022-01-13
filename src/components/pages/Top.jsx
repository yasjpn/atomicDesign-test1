import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { UserContext } from "../providers/UserProviders";

export const Top = () => {
  const navigate = useNavigate();
  const { setUserInfo } = useContext(UserContext);

  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    navigate("/users");
  };
  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    navigate("/users");
  };
  return (
    <SContainer>
      <h2>Top</h2>
      <SecondaryButton onClick={onClickAdmin}>Administrator</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickGeneral}>General</SecondaryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
