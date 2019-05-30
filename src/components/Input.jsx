import React from 'react';
import styled from 'styled-components';

const InputField = styled.input`
  width: 100%;
  height: 36px;
  display: flex;
  font-size: 15px;
  font-family: 'Righteous', cursive;
  letter-spacing: 1px;
  background-color: transparent;
  border: none;
`;

const Input = ({ ...props }) => <InputField {...props} />;

export default Input;