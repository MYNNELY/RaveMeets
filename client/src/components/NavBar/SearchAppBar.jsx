/* eslint-disable require-jsdoc */
import React, {useContext} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import {alpha, makeStyles} from '@material-ui/core/styles';
// import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import {Grid, Link as MaterialUILink} from '@material-ui/core';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import EventsList from '../EventsList/EventsList.jsx';
import EventPage from '../EventPage/EventPage.jsx';
import GroupsList from '../GroupsList/GroupsList.jsx';
import Profile from '../Profile/Profile.jsx';
import Login from '../Login/Login.jsx';
import Signup from '../Signup/Signup.jsx';
import UserContext from '../userContext.jsx';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolBar: {
    backgroundColor: '#01387A',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  links: {
    maxWidth: '70%',
    color: '#FFF',
    textDecoration: 'none',
  },
  search: {
    'position': 'relative',
    'borderRadius': theme.shape.borderRadius,
    'backgroundColor': alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    'marginLeft': 0,
    'width': '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      'width': '15ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar() {
  const classes = useStyles();
  const {userInfo} = useContext(UserContext);
  const user = userInfo || 'Login';

  return (
    <div className={classes.root}>
      <Router>
        <AppBar position="static">
          <Toolbar className={classes.toolBar}>
            {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton> */}
            <Typography className={classes.title} variant="h6" noWrap>
              <Link to="/events" className={classes.links}>
                <img style={{height: 40}}
                  src={'./RaveMeetsLogo-01.png'}/>
              </Link>
            </Typography>
            <Grid
              className={classes.links}
              container
              item
              xs={9}
              spacing={0}
              direction="row"
              justifyContent="space-around"
              alignItems="center"
            >
              <Grid container item xs={1} spacing={0} justifyContent="center">
                <MaterialUILink component={Link}
                  to="/events" className={classes.links}>
              Events
                </MaterialUILink>
              </Grid>
              <Grid container item xs={1} spacing={0} justifyContent="center">
                <MaterialUILink component={Link}
                  to="/groups" className={classes.links}>
              Groups
                </MaterialUILink>
              </Grid>
              <Grid container item xs={1} spacing={0} justifyContent="center">
                <MaterialUILink component={Link}
                  to={{pathname: `/${user}`}} className={classes.links}>
                  {user}
                </MaterialUILink>
              </Grid>
            </Grid>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{'aria-label': 'search'}}
              />
            </div>
          </Toolbar>
        </AppBar>
        <main>
          <Switch>
            <Route path="/events">
              <EventsList />
            </Route>
            <Route path="/eventpage/:id">
              <EventPage />
            </Route>
            <Route path="/groups">
              <GroupsList />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/:username">
              <Profile />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}
