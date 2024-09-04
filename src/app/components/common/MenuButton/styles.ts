import { EColor } from '@/utils/styles';
import { IconButton } from '@mui/material';
import styled from 'styled-components';
import { CustomButtonProps, IconButtonCustomProps } from './types';

export const CustomButton: CustomButtonProps = styled(IconButton).attrs(
  ({ backgroundColor = EColor.grayScale_950 }: IconButtonCustomProps) => {
    return {
      style: {
        background: backgroundColor,
        width: '3rem',
        height: '3rem',
        color: EColor.grayScale_300,
      },
    };
  }
)``;
