import React from 'react';
import styled from 'styled-components';
import color from '../../global/styles/color';
import fontsize from '../../global/styles/fontsize';
import { SiProbot } from 'react-icons/si';
import { FaRegUser } from 'react-icons/fa';
import loadingImg from '../../global/images/loading.gif';

const { dark, light } = color;
const { medium } = fontsize;

const Wrapper = styled.ul`
  flex-grow: 1;
  background: ${light};
  font-size: ${medium};
  color: ${dark};
  border: 3px solid ${dark};

  img{
    max-width: 50px;
    
  }

  li {
    padding: 10px 20px;
    span {
      padding: 0 10px;
    }
  }
  .user {
    text-align: right;
  }

  .system {
    text-align: left;
  }
`;
const ChatLog = ({ items, loading }) => {
  return (
    <Wrapper>
      {items.map((item, i) => (
        <ChatItem key={item.type + '-' + i} item={item} />
      ))}
      {loading && <img src={loadingImg} alt="loading" />}
    </Wrapper>
  );
};

const ChatItem = ({ item }) => {
  const { type, message } = item;
  return (
    <>
      <li className={type}>
        {type === 'system' ? (
          <>
            <SiProbot />
            <span>{message}</span>
          </>
        ) : (
          <>
            <span>{message}</span> <FaRegUser />
          </>
        )}
      </li>
    </>
  );
};
export default React.memo(ChatLog);
