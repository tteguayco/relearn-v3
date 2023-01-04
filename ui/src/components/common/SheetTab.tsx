import { useMemo } from 'react';
import { IconButton, Tab } from '@mui/material';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import CloseIcon from '@mui/icons-material/Close';

interface SheetTabProps {
  title: string;
  index: number;
  selectedIndex: number;
}

const SheetTab = (props: SheetTabProps) => {
  const {
    title,
    index,
    selectedIndex
  } = props;
  const activeTextColor = 'black';
  const inactiveTextColor = '#808080';
  
  const isSelected = useMemo(() => index === selectedIndex, [index, selectedIndex]);
  const textColor = useMemo(() => isSelected ? activeTextColor : inactiveTextColor, [isSelected]);

  return (
    <Tab
      {...props}
      icon={
        <HistoryEduIcon
          style={{
            color: textColor,
            fontSize: 16,
            paddingLeft: 10
          }}
        />
      }
      iconPosition="start"
      label={
        <span
          style={{
            display: 'contents',
            color: textColor,
            fontWeight: 'bold',
            fontSize: 11
          }}
        >
          {title}
          <IconButton
            sx={{
              marginLeft: 1,
              marginRight: 1,
              width: 12,
              height: 12,
            }}
            // onClick={}
          >
            <CloseIcon style={{ fontSize: 11 }} />
          </IconButton>
        </span>
      }
      sx={{
        padding: 0,
        width: 120,
        height: 40,
        minHeight: 40,
        backgroundColor: '#F3F4F6',
        '&.Mui-selected': {
          backgroundColor: '#FFFFFF'
        },
      }}
    />
  );
};

export default SheetTab;
