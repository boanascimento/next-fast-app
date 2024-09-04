'use client';

import styled from 'styled-components';

export const HTML = styled.html`
  margin: 0px;
`;

const fontFamily = "'Poppins', sans-serif";

export const Body = styled.body`
  margin: 0px;
  background: rgb(2, 0, 36);
  background: #0c0b0f;
  background-repeat: no-repeat;

  font-size: 16px;

  font-family: ${fontFamily};

  input,
  ::placeholder {
    font-family: ${fontFamily};
  }
  ::-webkit-input-placeholder {
    font-family: ${fontFamily};
  }
  :-ms-input-placeholder {
    font-family: ${fontFamily};
  }
  :-moz-placeholder {
    font-family: ${fontFamily};
  }
  ::-moz-placeholder {
    font-family: ${fontFamily};
  }
`;
