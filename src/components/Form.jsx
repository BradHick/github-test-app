import styled from 'styled-components';

const Form = styled.form`
  display: ${p => (p.flex ? 'flex' : 'grid')};
  grid-template-columns: 38% 38% 20%;
  justify-items: center;
  grid-gap: 15px;
  flex: 1;
  align-items: center;
  @media (max-width: 800px) {
    grid-template-columns: 35% 35% 20%;
  }
`;

export default Form;