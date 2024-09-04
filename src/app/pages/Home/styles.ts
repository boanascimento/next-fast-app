'use client';
import styled from 'styled-components';

interface IHomeContainerProps {
  height: number;
}
export const HomeContainer = styled.div<IHomeContainerProps>`
  width: 100%;
  min-height: 800px;
  height: ${(props) => props.height}px;
`;

export const HomeContent = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  flex: 1;
`;
