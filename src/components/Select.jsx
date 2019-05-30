import React from 'react';
import styled from 'styled-components';

const SelectContainer = styled.div`
  width: 100%;
  background-color: #fff;
  border-radius: 15px;
`;

const SelectField = styled.select`
  width: 100%;
  height: 50px;
  margin: 0;
  font-family: 'Righteous', cursive;
  text-align: center;
  letter-spacing: 1px;
  border: none;
`;

const Select = ({ ...props }) => (
  <SelectContainer>
    <SelectField {...props} />
  </SelectContainer>
);

export default Select;