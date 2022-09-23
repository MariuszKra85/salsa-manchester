import styled from 'styled-components';
import Beginners from '../components/Beginners';
import LoginForm from '../components/LoginForm';
import { useUser } from '../lib/useUser';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
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
`;

export default function homePage() {
  const { userState } = useUser();
  console.log(userState);

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
      {userState?.item ? <Beginners /> : <LoginForm />}
    </Wrapper>
  );
}
