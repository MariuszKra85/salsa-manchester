import Link from 'next/link';
import styled from 'styled-components';
import Logout from './Logout';

const StyledBurger = styled.button`
  position: absolute;
  top: 2.2rem;
  right: 4rem;
  flex-direction: column;
  justify-content: space-around;
  width: 3rem;
  height: 3.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 99;
  display: none;

  @media only screen and (max-width: 740px) {
    display: flex;
  }

  &:focus {
    outline: none;
  }

  div {
    width: 3.5rem;
    height: 0.4rem;
    background: ${({ open }) => (open ? '#313131' : '#EFFFFA')};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      width: 2.2rem;
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
    @media (max-width: 576px) {
    }
  }
`;
const StyledMenu = styled.div`
  flex-direction: column;
  justify-content: center;
  height: 110vh;
  text-align: left;
  position: fixed;
  top: 1.7rem;
  right: 2rem;
  transition: transform 0.3s ease-in-out;
  z-index: 98;

  button {
    background-color: transparent;
    display: flex;
    border: none;
    a {
      width: 100%;
    }
  }

  @media (max-width: 740px) {
    top: 0;
    left: 0;
    width: 18rem;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
    display: flex;
    background: #effffa;
  }

  @media (max-width: 576px) {
    width: 110%;

    background-color: rgba(225, 225, 225, 0.9);
  }

  a {
    font-size: 2rem;
    padding: 2rem 0 0 2rem;
    font-weight: bold;
    letter-spacing: 0.3rem;

    text-decoration: none;
    transition: color 0.3s linear;
    @media (max-width: 700px) {
      color: #0d0c1d;
    }

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
`;

const Burger = ({ open, setOpen }) => (
  <StyledBurger open={open} onClick={() => setOpen(!open)}>
    <div />
    <div />
    <div />
  </StyledBurger>
);

const Menu = ({ open, setOpen, windowSize }) => (
  <StyledMenu open={open}>
    {windowSize?.width < 770 ? (
      <>
        {' '}
        <a href="#top" onClick={() => setOpen(!open)}>
          Home
        </a>
        <a href="#about" onClick={() => setOpen(!open)}>
          About
        </a>
        <a href="#portfolio" onClick={() => setOpen(!open)}>
          Projects
        </a>
        <a href="#contact" onClick={() => setOpen(!open)}>
          Contact
        </a>
      </>
    ) : (
      <>
        {' '}
        <button
          onClick={() => {
            setOpen(!open);
          }}
        >
          <Link href="/">Home</Link>
        </button>
        <button
          onClick={() => {
            setOpen(!open);
          }}
        >
          <Link href="/aboutMe">About me</Link>
        </button>
        <button
          onClick={() => {
            setOpen(!open);
          }}
        >
          <Link href="/beginners">Beginners</Link>
        </button>
        <Link href="/contact">Mid</Link>
        <Link href="/contact">Advance</Link>
        <Logout toggleOpen={setOpen} />
      </>
    )}
  </StyledMenu>
);

export { Burger, Menu };
