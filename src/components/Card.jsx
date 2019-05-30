import styled from 'styled-components';
import { SECONDARY_COLOR } from '../const';

const Card = styled.div`
  background-color: ${props => (props.white ? '#ffffff' : SECONDARY_COLOR)};
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