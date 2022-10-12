import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 200px 30px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  img {
    width: 250px;
    border-radius: 10px;
    margin-top: 2rem;
  }
  h2 {
    font-size: 2rem;
    background: #000;
    position: absolute;
    top: 190px;
    right: 15%;
    padding: 0.2rem 3rem 0.2rem 2rem;
    border-radius: 10px 0 0 10px;
  }
  p {
    font-size: 1.6rem;
  }
`;

const INSTRUCTOR_QUERY = gql`
  query {
    allInstructorsLists {
      title
      picLink
      description
    }
  }
`;

export default function AboutMe() {
  const { data, error, loading } = useQuery(INSTRUCTOR_QUERY);
  console.log(data);
  if (loading) {
    return (
      <Wrapper>
        <p>Loading...</p>
      </Wrapper>
    );
  }
  return (
    <>
      {data.allInstructorsLists.map((e) => (
        <Wrapper>
          {console.log(e)}
          <img src={e.picLink} alt={e.title} />
          <h2>{e.title}</h2>
          <p>{e.description}</p>
        </Wrapper>
      ))}
    </>
  );
}
