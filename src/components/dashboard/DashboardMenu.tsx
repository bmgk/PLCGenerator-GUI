import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';
import { TFunction } from 'i18next';

import { useDashboardStore } from './context';

import { DashboardMenuProps } from 'types';

const options = (t: TFunction) => [
  {
    value: 'SUBMIT_STRUCTURE',
    display: t('dashboard.menu.SUBMIT_STRUCTURE'),
  },
  { value: 'SAVE_DRAFT', display: t('dashboard.menu.SAVE_DRAFT') },
  {
    value: 'IMPORT_DRAFT',
    display: t('dashboard.menu.IMPORT_DRAFT'),
  },
  { value: 'SETTINGS', display: t('dashboard.menu.SETTINGS') },
];

const ITEM_HEIGHT = 48;

export const DashboardMenu: React.FC<DashboardMenuProps> = (
  props,
) => {
  const {
    submitStructure,
    saveDraft,
    showSettings,
    importDraft,
  } = props;
  const { t } = useTranslation();
  const { newAvaliableValues } = useDashboardStore();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(
    null,
  );

  const handleMenuClick = (value: string) => {
    if (value === 'SUBMIT_STRUCTURE') submitStructure();
    if (value === 'SAVE_DRAFT') {
      if (newAvaliableValues.length === 0) {
        saveDraft();
      } else {
        setOpen(true);
      }
    }
    if (value === 'IMPORT_DRAFT') importDraft();
    if (value === 'SETTINGS') showSettings();
    setAnchorEl(null);
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const handleAcceptDialog = () => {
    saveDraft();
    setOpen(false);
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleCloseDialog}
        aria-labelledby="save-drat-confirmation"
        aria-describedby="save-drat-confirmation-details"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {t('dashboard.menu.SAVE_DRAFT.confirmation.title')}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="save-drat-confirmation-details">
            {t('dashboard.menu.SAVE_DRAFT.confirmation.description')}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAcceptDialog} color="primary">
            {t('dashboard.menu.SAVE_DRAFT.confirmation.accept')}
          </Button>
          <Button onClick={handleCloseDialog} color="primary">
            {t('dashboard.menu.SAVE_DRAFT.confirmation.reject')}
          </Button>
        </DialogActions>
      </Dialog>
      <div>
        <IconButton
          aria-label="menu"
          aria-controls="dashboard-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="dashboard-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: '30ch',
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
    </>
  );
};
