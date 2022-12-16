import { Button } from "@mui/material";
import { ReactNode } from "react";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
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
  // padding: theme. spacing(2),  
  // paddingBottom: theme.spacing(1),
  // textTransform: 'none',
  // fontWeight: theme.typography.fontWeightRegular,
  // fontSize: theme.typography.pxToRem(15),
  // marginRight: theme.spacing(1),
  // '&.Mui-selected': {
  //   // color: 'rgba(100, 95, 228, 0.32)',
  // },
  // '&.Mui-focusVisible': {
  //   color: theme.palette.primary,
  //   backgroundColor: theme.palette.primary,
  // },
}));

interface Props {
  children: ReactNode
};

export const PrimaryButton = ({ children, ...props }: Props) => {
  return (
    <StyledButton startIcon={<PlayArrowIcon />}>
      {children}
    </StyledButton>
  );
}
