import React from 'react';
import styled from 'styled-components';

const CommitWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  align-items: center;
  justify-content: space-between;
`;

const Username = styled.h1`
  font-size: 16px;
  line-height: 22px;
  color: #333333;
  font-family: 'Righteous', cursive;
  font-weight: 400;
  margin-bottom: 8px;
  margin-left: 8px;
  letter-spacing: 1px;
`;

const Message = styled.p`
  color: #777777;
  font-family: 'Roboto';
  margin-left: 8px;
  font-size: 13px;
  line-height: 1.4;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: ${p => p.size || '50%'};
`;

const Date = styled.div`
  font-family: 'Righteous', cursive;
  font-size: 13px;
  color: #afafaf;
  display: block;
`;

const Picture = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: block;
`;

const Commit = ({ username, message, date, img }) => (
  <CommitWrapper>
    <Column size={'10%'}>
      <Picture src={`${img}`} />
    </Column>
    <Column size={'70%'}>
      <Username> {username} </Username>
      <Message> {message} </Message>
    </Column>
    <Column size={'20%'}>
      <Date> {date} </Date>
    </Column>
  </CommitWrapper>
);

export default Commit;
