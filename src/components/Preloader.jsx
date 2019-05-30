import React from 'react';
import styled, { keyframes } from 'styled-components';
import { PRIMARY_COLOR } from '../const';

const bounce = keyframes`
  0%, 75%, 100% {
    transform: translateY(0px)
  } 
  25% {
    transform: translateY(-30px)
  }
`;

const BounceLoader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 800;
  width: 100%;
  height: 100%;
  span {
    margin: 10px;
    display: block;
    width: 20px;
    height: 20px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.6), 0 4px 8px rgba(0, 0, 0, 0.6);
    border-radius: 50%;
    background: #d9d9d9;
    &:nth-child(1) {
      animation: ${bounce} 1s ease-in-out infinite;
    }
    &:nth-child(2) {
      animation: ${bounce} 1s ease-in-out 0.33s infinite;
    }
    &:nth-child(3) {
      animation: ${bounce} 1s ease-in-out 0.66s infinite;
    }
    &:nth-child(4) {
      animation: ${bounce} 1s ease-in-out 0.66s infinite;
    }
  }
`;

const BounceyLoader = () => (
  <BounceLoader>
    <span />
    <span />
    <span />
  </BounceLoader>
);
export default BounceyLoader;