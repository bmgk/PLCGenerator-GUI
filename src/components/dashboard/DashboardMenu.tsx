import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useTranslation } from 'react-i18next';
import { TFunction } from 'i18next';

import { DashboardMenuProps } from 'types';

const options = (t: TFunction) => [
  {
    value: 'SUBMIT_STRUCTURE',
    display: t('dashboard.menu.SUBMIT_STRUCTURE'),
  },
  { value: 'SAVE_DRAFT', display: t('dashboard.menu.SAVE_DRAFT') },
  { value: 'SETTINGS', display: t('dashboard.menu.SETTINGS') },
];

const ITEM_HEIGHT = 48;

export const DashboardMenu: React.FC<DashboardMenuProps> = (
  props,
) => {
  const { submitStructure, saveDraft, showSettings } = props;
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(
    null,
  );

  const handleMenuClick = (value: string) => {
    if (value === 'SUBMIT_STRUCTURE') submitStructure();
    if (value === 'SAVE_DRAFT') saveDraft();
    if (value === 'SETTINGS') showSettings();
    setAnchorEl(null);
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options(t).map((option) => (
          <MenuItem
            key={option.value}
            onClick={() => handleMenuClick(option.value)}
          >
            {option.display}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};
