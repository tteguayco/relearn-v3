import { Button } from "@mui/material";
import { ReactNode } from "react";
import { styled } from '@mui/material/styles';

interface StyledButtonProps {
  children: ReactNode,
  startIcon: JSX.Element
};

const StyledButton = styled((props: StyledButtonProps) => (
  <Button {...props} />
))(({ theme }) => ({
  color: theme.palette.common.dark,
  backgroundColor: theme.palette.common.grey1,
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: theme.palette.common.grey1,
  },
}));

interface Props {
  children: ReactNode,
  startIcon: JSX.Element
};

export const SecondaryButton = ({ children, ...props }: Props) => {
  return (
    <StyledButton
      {...props}
    >
      {children}
    </StyledButton>
  );
}