import { useState } from 'react';
import styled from 'styled-components';
import { Burger, Menu } from './BurgerMenu';

const Wrapper = styled.div`
  width: 100vw;
  overflow-x: hidden;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    position: absolute;
    top: 60px;
    text-align: center;
    font-size: 4rem;
    letter-spacing: 1px;
    text-shadow: 3px 4px 10px #ff3333;
    margin: 0;
    padding-bottom: 60px;
  }
  img {
    position: absolute;
    width: 100%;
    opacity: 0.15;
    bottom: 0;
    z-index: -1;
  }
  img {
    max-width: 500px;
  }
`;

export default function Heading() {
  const [open, setOpen] = useState(false);
  return (
    <Wrapper>
      <h1>
        Salsa Freedom <br />
        Manchester
      </h1>
      <img
        src="https://res.cloudinary.com/mariuszkra85/image/upload/v1662935098/Salsa/background_cnwkfh.gif"
        alt="bg"
      />
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
    </Wrapper>
  );
}
