import React from 'react';
import styled from 'styled-components';
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../const';

const HeaderWapper = styled.header`
  width: 100%;
  height: 80px;
  background-color: ${PRIMARY_COLOR};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 20px;
  letter-spacing: 0px;
  line-height: 20px;
  color: ${SECONDARY_COLOR};
  font-family: 'Roboto',Helvetica,Arial,sans-serif;
  font-weight: 400;
`;

const Icon = styled.i`
  margin-right: 10px;
  color: #fff;
  font-size: 18px;
`;

const Header = () => (
  <HeaderWapper>
    <Icon className='fab fa-github' />
    <Title> GitHub Test </Title>
  </HeaderWapper>
);

export default Header;