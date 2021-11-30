import * as React from 'react';
import { Link } from "react-router-dom";
import { ListItem, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';

import './Dashboard.css';


export const mainListItems = (
  <div>
    <ListItem className='listItem' button component={Link} to="/dashboard" >
      <ListItemIcon>
        <DashboardOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem className='listItem' button component={Link} to="/recipes-table" >
      <ListItemIcon>
        <RestaurantOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Recipes" />
    </ListItem>
    <ListItem className='listItem' button component={Link} to="/users-table" >
      <ListItemIcon>
        <PeopleOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Users" />
    </ListItem> 
    <ListItem button>
      <ListItemIcon>
        <BarChartOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
);