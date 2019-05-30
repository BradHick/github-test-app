import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { SECONDARY_COLOR } from '../const';

const BackPageStyled = styled(Link)`
  width: 60px;
  height: 40px;
  border-radius: 15px;
  background-color: ${SECONDARY_COLOR};
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  opacity: 1;
  transition: 0.8s opacity;
  &:hover {
    opacity: 0.8;
  }
  border: none;
  margin: 10px auto;
  color: #333;
  text-transform: uppercase;
  font-weight: 600;
  font-family: 'Righteous', cursive;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  position: fixed;
  bottom: 0;
  z-index: 99;
  left: 19px;
`;

const BackPage = ({ to }) => <BackPageStyled to={to}>Back</BackPageStyled>;

export default BackPage;
