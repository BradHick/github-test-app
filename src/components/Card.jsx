import styled from 'styled-components';

const Card = styled.div`
  background-color: ${props => (props.white ? '#ffffff' : '#d9d9d9')};
  min-height: 40px;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  padding: 20px;
  margin-top: 10px;
  text-decoration: none;
  display: flex;
  align-items: center;
  width: 100%;
  @media (max-width: 800px) {
    width: 80%;
  }
`;

export default Card;