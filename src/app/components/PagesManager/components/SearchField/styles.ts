'use client';

import MenuButton from '@/app/components/common/MenuButton';
import { EColor } from '@/utils/styles';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  background-color: ${EColor.grayScale_950};
  padding: 0rem 1rem 0 0;
  border-radius: 5rem;
  width: 15rem;
  height: 3rem;
`;

export const SearchFieldIcon = styled(MenuButton)`
  width: 10%;
  height: auto;
  border: none;
  padding-right: 0.6rem;
  color: ${EColor.grayScale_300};
  display: flex;
  align-items: center;
  background-color: transparent;
  padding: 0;

  &:hover {
    cursor: pointer;
  }
`;

export const SearchFieldInput = styled.input`
  border: none;
  height: 100%;
  width: 85%;
  background-color: transparent;
  color: ${EColor.grayScale_400};
  outline: none;
  font-size: 0.8rem;

  &::placeholder {
    color: ${EColor.grayScale_400};
  }
  &:active {
    border: none;
  }
`;
