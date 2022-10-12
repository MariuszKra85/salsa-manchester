import styled from 'styled-components';
import Beginners from '../components/Beginners';
import { useUser } from '../lib/useUser';

const Wrapper = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

export default function BeginnersPage() {
  const { userState } = useUser();
  console.log(userState);
  if (userState?.__typename === 'UserAuthenticationWithPasswordSuccess') {
    return <Beginners />;
  }
  return (
    <Wrapper>
      <p> You need to be login to see Content</p>
    </Wrapper>
  );
}
