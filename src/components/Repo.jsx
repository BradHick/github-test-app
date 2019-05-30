import React from 'react';
import styled from 'styled-components';
import { PRIMARY_COLOR } from '../const';

import Icon from './Icon';
import ChevronRight from '../assets/icons/chevron-right.svg';

const BadgeDescription = styled.span`
  font-family: 'Roboto', sans-serif;
  color: #afafaf;
  font-size: 12px;
  margin-bottom: 15px;
  display: block;
`;

const RepositoryWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  position: relative;
`;

const RepositoryCollum = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 18px;
  line-height: 22px;
  color: ${PRIMARY_COLOR};
  font-family: 'Righteous', cursive;
  margin-bottom: 8px;
  letter-spacing: 1px;
`;

const Description = styled.p`
  font-size: 12px;
  color: #555555;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 10px;
  line-height: 16px;
`;

const Repo = ({ name, description, commitStatus, stars, watchers }) => (
  <RepositoryWrapper>
    <RepositoryCollum>
      <Title> {name} </Title>
      <BadgeDescription>{commitStatus.message}</BadgeDescription>
      <Description>{description ? description : 'No description'}</Description>
      <Description>
        &#9733;{`${stars ? stars : 0}`} &#128065;{`${watchers ? watchers : 0}`}
      </Description>
    </RepositoryCollum>
    <Icon src={ChevronRight} />
  </RepositoryWrapper>
);

export default Repo;