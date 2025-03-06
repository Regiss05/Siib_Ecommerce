import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar } from '@mui/material';
import {
  Dashboard as DashboardIcon,
  ShoppingCart as ShoppingCartIcon,
  AccountBalance as AccountBalanceIcon,
  Assessment as AssessmentIcon,
  Store as StoreIcon,
  Brush as BrushIcon,
  Campaign as CampaignIcon,
  Functions as FunctionsIcon,
} from '@mui/icons-material';

const drawerWidth = 240;

function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
    >
      <Toolbar />
      <List>
        {['Dashboard', 'Orders', 'Accounting', 'Reporting', 'Stores', 'Artwork', 'Marketing', 'Functions', 'Shopping Cart'].map(
          (text, index) => (
            <ListItem  key={text}>
              <ListItemIcon>
                {index === 0 && <DashboardIcon />}
                {index === 1 && <ShoppingCartIcon />}
                {index === 2 && <AccountBalanceIcon />}
                {index === 3 && <AssessmentIcon />}
                {index === 4 && <StoreIcon />}
                {index === 5 && <BrushIcon />}
                {index === 6 && <CampaignIcon />}
                {index === 7 && <FunctionsIcon />}
                {index === 8 && <ShoppingCartIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          )
        )}
      </List>
    </Drawer>
  );
}

export default Sidebar;