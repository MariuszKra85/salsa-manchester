import styled from 'styled-components';
import Steps from './Steps';

const Wrapper = styled.div`
  margin-top: 250px;
  width: 90%;
`;

export default function beginners() {
  return (
    <Wrapper>
      <h2>Beginners</h2>
      <Steps
        name="EL UNO"
        poster="https://res.cloudinary.com/mariuszkra85/image/upload/v1662935098/Salsa/background_cnwkfh.gif"
        url="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
      />
      <Steps
        name="Sombrero"
        poster="https://res.cloudinary.com/mariuszkra85/image/upload/v1662935098/Salsa/background_cnwkfh.gif"
        url="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
      />
      <Steps
        name="cross body"
        poster="https://res.cloudinary.com/mariuszkra85/image/upload/v1662935098/Salsa/background_cnwkfh.gif"
        url="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
      />
      <Steps
        name="something else"
        poster="https://res.cloudinary.com/mariuszkra85/image/upload/v1662935098/Salsa/background_cnwkfh.gif"
        url="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
      />
    </Wrapper>
  );
}
