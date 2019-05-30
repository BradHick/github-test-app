import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  border-radius: 15px;
  padding: 20px;
  background-color: #343434;
  opacity: 1;
  transition: 0.8s opacity;
  border: none;
  display: flex;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: 100;
  justify-content: center;
  align-items: center;
  &:hover {
    opacity: 0.8;
  };
`;

const Label = styled.span`
  font-family: 'Righteous', cursive;
  color: #fff;
`;

export default ({ children, ...props }) => (
  <Button {...props}>
    <Label>{children}</Label>
  </Button>
);