import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { BiConversation } from 'react-icons/bi';
import color from '../styles/color';
import fontsize from '../styles/fontsize';

import { HiOutlineViewfinderCircle } from "react-icons/hi2";

const { primary, light, dark } = color;
const { big, extraBig, normal } = fontsize;

const StyledHeader = styled.header`
  min-height: 80px;
  display: flex;
  background: ${primary};
  color: ${light};
  align-items: center;
  padding: 0 20px;
  justify-content: space-between;

  .left,  .right {
    display: flex;
    flex-grow: 1;
  }

  .right {
    justify-content: right;
  }

  a {
    font-size: ${big};
    color: ${light};
    display: flex;
    align-items: center;

    svg {
      font-size: ${extraBig};
    }
  }

  a + a {
    margin-left: 25px;
  }

  span {
    margin-left: 10px;
  }

  .producer{
    font-size: ${normal}
  }
`;

const Header = () => {
  return (
    <StyledHeader className="layout-width">
      <div className="left">
        <NavLink to="/" className={({ isActive }) => classNames({ on: isActive })}>
          <BiConversation />
          <span>AI랑 나누는 이야기</span>
        </NavLink>
      </div>
      <div className='right'>
        <HiOutlineViewfinderCircle />
        <a href='https://github.com/KimMarinet' className='producer'>
          Producer
        </a>
      </div>
    </StyledHeader>
  );
};

export default React.memo(Header);
