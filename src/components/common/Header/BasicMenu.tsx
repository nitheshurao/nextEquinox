// eslint-disable-next-line import/no-extraneous-dependencies
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// eslint-disable-next-line import/no-extraneous-dependencies
import Button from '@mui/material/Button';
// eslint-disable-next-line import/no-extraneous-dependencies
import Menu from '@mui/material/Menu';
// eslint-disable-next-line import/no-extraneous-dependencies
import MenuItem from '@mui/material/MenuItem';
import * as React from 'react';

export default function BasicMenu() {
  function AboutMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: any) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
      <div>
        <Button
          variant="text"
          onClick={handleClick}
          sx={{ my: '8px', color: 'common.white', fontWeight: 400, fontSize: '16px', width: 'auto' }}
          endIcon={
            <KeyboardArrowDownIcon
              sx={{ my: '8px', color: 'common.white', display: 'block', fontWeight: 400, fontSize: '16px' }}
            />
          }
        >
          About us
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </div>
    );
  }
  function MarketsMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: any) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
      <div>
        <Button
          variant="text"
          onClick={handleClick}
          sx={{ my: '8px', color: 'common.white', fontWeight: 400, fontSize: '16px', width: 'auto' }}
          endIcon={
            <KeyboardArrowDownIcon
              sx={{ my: '8px', color: 'common.white', display: 'block', fontWeight: 400, fontSize: '16px' }}
            />
          }
        >
          Markets
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </div>
    );
  }
  function AccountsMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: any) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
      <div>
        <Button
          variant="text"
          onClick={handleClick}
          sx={{ my: '8px', color: 'common.white', fontWeight: 400, fontSize: '16px', width: 'auto' }}
          endIcon={
            <KeyboardArrowDownIcon
              sx={{ my: '8px', color: 'common.white', display: 'block', fontWeight: 400, fontSize: '16px' }}
            />
          }
        >
          Accounts us
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </div>
    );
  }
  //   Educational Materials
  function EducationalMaterialsMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: any) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
      <div>
        <Button
          variant="text"
          onClick={handleClick}
          sx={{ my: '8px', color: 'common.white', fontWeight: 400, fontSize: '16px', width: 'auto' }}
          endIcon={
            <KeyboardArrowDownIcon
              sx={{ my: '8px', color: 'common.white', display: 'block', fontWeight: 400, fontSize: '16px' }}
            />
          }
        >
          Educational Materials
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </div>
    );
  }
  return { AboutMenu, AccountsMenu, EducationalMaterialsMenu, MarketsMenu };
}
