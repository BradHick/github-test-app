import styled from 'styled-components';
import { PRIMARY_COLOR } from '../const';

const Container = styled.section`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: -webkit-fill-available;
  background-color: ${PRIMARY_COLOR};
  padding: 20px 0 50px 0;
  max-width: 500px;
`;

export default Container;