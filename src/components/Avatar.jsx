import styled from 'styled-components';

const Avatar = styled.img`
  width: 80px;
  height: 80px;
  display: block;
  border-radius: 50%;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.08);
  @media (max-width: 800px) {
    width: 50px;
    height: 50px;
  }
`;

export default Avatar;