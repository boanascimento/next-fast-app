'use client';

import { EColor } from '@/utils/styles';
import styled from 'styled-components';

export const PagesManagerContainer = styled.div`
  padding: 0.5rem 2rem;
  width: 82%;
`;

// Header
export const HeaderContainer = styled.div`
  padding: 1rem 0 1rem 4rem;
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

// Card to present Dashboard Pages
export const DashCardContainer = styled.section`
  background-color: ${EColor.grayScale_950};
  width: 100%;
  height: 85%;
  border-radius: 3rem;
  -webkit-box-shadow: 0px 0px 3px 0px ${EColor.grayScale_950};
  -moz-box-shadow: 0px 0px 3px 0px ${EColor.grayScale_950};
  box-shadow: 0px 0px 3px 0px ${EColor.grayScale_950};
`;
