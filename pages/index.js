import styled from 'styled-components';
import LoginForm from '../components/LoginForm';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default function homePage() {
  return (
    <Wrapper>
      <h2>Hello!</h2>
      <p>first Page</p>
      <LoginForm />
    </Wrapper>
  );
}
