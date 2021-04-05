import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useTranslation } from 'react-i18next';
import { TFunction } from 'i18next';

import DashboardSaveDraftDialog from 'components/dashboard/DashboardSaveDraftDialog';
import { useDashboardStore } from '../dashboard/context';

type RouteMenuProps = {
  submitStructure: () => void;
  saveDraft: () => void;
  showSettings: () => void;
  importDraft: () => void;
};

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

const RouteMenu: React.FC<RouteMenuProps> = (props) => {
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
    if (value === 'SUBMIT_STRUCTURE') {
      submitStructure();
    }
    if (value === 'SAVE_DRAFT') {
      if (newAvaliableValues.length === 0) {
        saveDraft();
      } else {
        setOpen(true);
      }
    }
    if (value === 'IMPORT_DRAFT') {
      importDraft();
    }
    if (value === 'SETTINGS') {
      showSettings();
    }
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
      <DashboardSaveDraftDialog
        open={open}
        onClose={handleCloseDialog}
        onSubmit={handleAcceptDialog}
      />
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

export default RouteMenu;
