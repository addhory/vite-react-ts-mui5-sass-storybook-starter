import { Button } from '@mui/material';
import * as React from 'react';

type Props = {
  variant?: 'text' | 'contained' | 'outlined' | 'dashed' | undefined;
  children: React.ReactNode;
};

const MuIButton = (props: Props) => {
  return <Button variant={props.variant}>{props.children}</Button>;
};

export default MuIButton;
