import { Button } from '@mui/material';
import { ReactNode } from 'react';
import { styled } from '@mui/material/styles';

interface StyledButtonProps {
  children: ReactNode;
  startIcon: JSX.Element;
}

const StyledButton = styled((props: StyledButtonProps) => (
  <Button {...props} />
))(({ theme }) => ({
  color: theme.palette.common.dark,
  backgroundColor: theme.palette.common.grey1,
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: theme.palette.common.grey1,
    color: 'grey',
  },
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  marginTop: theme.spacing(0.2),
  marginBottom: theme.spacing(0.2),
  fontSize: 12,
}));

interface Props {
  children: ReactNode;
  startIcon: JSX.Element;
  size?: string;
}

export const SecondaryButton = ({ children, ...props }: Props) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};
