import { useState } from 'react';
import styled from 'styled-components';
import Beginners from '../components/Beginners';
import { Burger, Menu } from '../components/BurgerMenu';
import LoginForm from '../components/LoginForm';
import { useUser } from '../lib/useUser';

const Wrapper = styled.div`
  width: 100vw;
  overflow-x: hidden;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default function homePage() {
  const { userState } = useUser();

  return <Wrapper>{userState?.item ? <Beginners /> : <LoginForm />}</Wrapper>;
}
