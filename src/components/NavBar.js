import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import HomeIcon from '@material-ui/icons/Home';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import PeopleIcon from '@material-ui/icons/People';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

import { Link } from "react-router-dom";
import UserButtonContainer from '../containers/UserButtonContainer';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  flex: {
    flex: 1,
    textDecoration: 'none'
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0, // So the Typography noWrap works
  },
  toolbar: theme.mixins.toolbar,
  primary: {},
  icon: {},
});

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="absolute" className={classes.appBar}>
          <Toolbar>
            <Typography variant="title" color="inherit" className={classes.flex} noWrap component={Link} to="/">
              {this.props.title}
            </Typography>
  
            <div>
              <UserButtonContainer/>
            </div>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.toolbar} />
          <MenuList nav>
            <MenuItem button component={Link} to="/" className={classes.menuItem}>
              <ListItemIcon className={classes.icon}>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText inset primary="Home" classes={{ primary: classes.primary }}/>
            </MenuItem>
            <MenuItem button component={Link} to="/install" className={classes.menuItem}>
              <ListItemIcon className={classes.icon}>
                <CloudDownloadIcon />
              </ListItemIcon>
              <ListItemText inset primary="Install" classes={{ primary: classes.primary }}/>
            </MenuItem>
            <MenuItem button component={Link} to="/users" className={classes.menuItem}>
              <ListItemIcon className={classes.icon}>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText inset primary="Users" classes={{ primary: classes.primary }}/>
            </MenuItem>
          </MenuList>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {this.props.children}
        </main>
      </div>
    );
  }
}


export default withStyles(styles)(NavBar);