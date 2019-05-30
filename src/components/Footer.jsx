import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
`;

const Text = styled.span`
  margin: 0 auto;
  color: #fff;
  font-size: 13px;
  font-family: 'Righteous', cursive;
`;

const Link = styled.a`
  color: #fff;
  font-weight: bold;
`;

const Icon = styled.i`
  color: #ff6666;
`;

const Footer = props => (
  <FooterWrapper>
    <Text>
      2019 <Icon> &#9786; </Icon> made by{' '}
      <Link
        style={{ color: '#fff' }}
        href="https://github.com/BradHick"
        rel="noopener noreferrer"
        target="_blank"
      >
        Brad Hick
      </Link>
    </Text>
  </FooterWrapper>
);

export default Footer;