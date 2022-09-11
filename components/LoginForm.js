import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export default function LoginForm() {
  return (
    <Wrapper>
      <h1>Login:</h1>
      <form action="">
        <label htmlFor="email">
          `Email: `
          <input type="text" id="email" name="email" />
        </label>
        <label htmlFor="Password">
          `Password: `
          <input type="text" id="password" name="password" />
        </label>
      </form>
    </Wrapper>
  );
}
