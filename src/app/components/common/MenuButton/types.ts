import { ExtendButtonBase } from '@mui/material';
import { OverridableTypeMap } from '@mui/material/OverridableComponent';
import { ExecutionContext } from 'styled-components';

interface ICustomButtonProps {
  backgroundColor?: string;
}

export type CustomButtonProps = ICustomButtonProps &
  ExtendButtonBase<OverridableTypeMap>;
export type IconButtonCustomProps = ExecutionContext & ICustomButtonProps;
