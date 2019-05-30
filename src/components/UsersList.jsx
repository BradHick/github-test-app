import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';
import ChevronRight from '../assets/icons/chevron-right.svg';

const UserContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;

const Description = styled.p`
  font-size: 13px;
  color: #555555;
  margin-bottom: 8px;
  line-height: 1.2;
  font-family: 'Roboto', sans-serif;
`;

const Title = styled.h1`
  font-size: 16px;
  line-height: 22px;
  color: #333333;
  font-family: 'Righteous', cursive;
  font-weight: 400;
`;

const InfoUser = styled.section`
  display: flex;
  flex-direction: column;
  width: 71%;
  position: relative;
`;

const PhotoSection = styled.section`
  width: 20%;
  display: block;
`;

const Photo = styled.img`
  margin: auto;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  display: block;
  @media (max-width: 800px) {
    width: 50px;
    height: 50px;
  }
`;

const Id = styled.div`
  font-size: 12px;
  margin-bottom: 10px;
  letter-spacing: 1px;
  color: #afafaf;
  font-family: 'Righteous', cursive;
`;

const UserList = ({ name, img, bio, location, id }) => {
  return (
    <UserContainer>
      <PhotoSection>
        <Photo src={`${img}`} />
      </PhotoSection>
      <InfoUser>
        <Title>{name}</Title>
        <Id>{`#${id}`}</Id>
        <Description>{bio}</Description>
        <Description>{location}</Description>
      </InfoUser>
      <Icon src={ChevronRight} alt='' />
    </UserContainer>
  );
};

export default UserList;