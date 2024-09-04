'use client';
import React from 'react';
import { LinearProgress } from '@mui/material';

interface IProgressBarProps {
  testID?: string;
}

const ProgressBar: React.FC<IProgressBarProps> = ({
  testID = 'ProgressBar',
}): JSX.Element => {
  return <LinearProgress data-testid={testID} />;
};

export default ProgressBar;
