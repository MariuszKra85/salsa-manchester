import { gql, useMutation, useQuery } from '@apollo/client';
import styled from 'styled-components';
import useForm from '../lib/useForm';
import { useUser } from '../lib/useUser';

const Wrapper = styled.div`
  display: flex;
  margin-top: 200px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  label {
    display: flex;
    flex-direction: column;
    line-height: 3rem;
  }
  input {
    background: transparent;
    border: 0;
    border-bottom: 1px solid var(--grey);
    color: white;
  }
  input:focus-visible {
    outline: 0;
  }
  button {
    background-color: var(--red);
    border-radius: 20px;
    padding: 1rem 2rem;
    margin-top: 2rem;
    text-transform: uppercase;
    color: white;
  }
`;

const LOGIN_MUTATION = gql`
  mutation LOGIN_MUTATION($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      ... on UserAuthenticationWithPasswordSuccess {
        item {
          name
        }
      }
      ... on UserAuthenticationWithPasswordFailure {
        code
        message
      }
    }
  }
`;

const CURRENT_USER_QUERY = gql`
  query {
    authenticatedItem {
      ... on User {
        id
        email
        name
      }
    }
  }
`;

export default function LoginForm() {
  const { inputs, handleChange } = useForm({
    email: '',
    password: '',
  });
  const { userState, loginUser } = useUser();

  const [singIn, { data, error, loading }] = useMutation(LOGIN_MUTATION, {
    variables: inputs,
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  async function handleSubmit(e) {
    e.preventDefault();
    message();
    const res = await singIn();

    return res;
  }
  const message = () =>
    data?.authenticateUserWithPassword.__typename ===
    'UserAuthenticationWithPasswordSuccess' ? (
      <p>Login Success!</p>
    ) : (
      <p>Zjebaleś!</p>
    );

  if (
    data?.authenticateUserWithPassword.__typename ===
    'UserAuthenticationWithPasswordSuccess'
  ) {
    loginUser(data.authenticateUserWithPassword);
  }

  return (
    <Wrapper>
      <h2>Login:</h2>
      {message()}

      <form method="POST" onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={inputs.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="Password">
          Password:
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={inputs.password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </Wrapper>
  );
}
