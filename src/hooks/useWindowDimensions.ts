'use client';

import { useCallback, useEffect, useState } from 'react';

export const useWindowDimensions = () => {
  const checkWindow = typeof window !== 'undefined';
  const getDimensions = () => {
    return {
      innerHeight: checkWindow ? window.innerHeight : null,
      innerWidth: checkWindow ? window.innerWidth : null,
    };
  };
  const [height, setHeight] = useState<number | null>(null);
  const [width, setWidth] = useState<number | null>(null);

  const setSizingInitialValues = useCallback(() => {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
  }, []);

  const resizing = () => {
    setHeight(getDimensions().innerHeight);
    setWidth(getDimensions().innerWidth);
  };

  useEffect(() => {
    setSizingInitialValues();

    window.addEventListener('resize', resizing);

    return () => window.removeEventListener('resize', resizing);
  }, []);

  return {
    width,
    height,
  };
};
