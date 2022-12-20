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
  color: 'white',
  backgroundColor: theme.palette.primary.main,
  '&:hover': {
    backgroundColor: theme.palette.secondary.main,
    color: 'white',
  },
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  fontSize: 13
}));

interface Props {
  children: ReactNode,
  startIcon: JSX.Element
};

export const PrimaryButton = ({ children, ...props }: Props) => {
  return (
    <StyledButton
      {...props}
    >
      {children}
    </StyledButton>
  );
}
