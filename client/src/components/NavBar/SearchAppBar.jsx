/* eslint-disable quote-props */
/* eslint-disable require-jsdoc */
import React, {useState, useContext, useEffect} from 'react';
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
import SearchBar from '../SearchBar/SearchBar.jsx';
import SingleGroupPage from '../SingleGroupPage/SingleGroupPage.jsx';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolBar: {
    backgroundColor: '#021F3C',
    borderBottom: '2px solid',
    minHeight: '100px',
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
  logo: {
    color: '#FFF',
    textDecoration: 'none',
    fontWeight: 'bolder',
    fontSize: '40px',
  },
  links: {
    maxWidth: '70%',
    // borderBottom: '1px solid',
    // fontWeight: '500',
  },
  directories: {
    fontSize: '19px',
    textDecoration: 'none',
    color: '#FFF',
    borderBottom: '1px solid',
    transition: ['padding', 'fontWeight'],
    transitionDuration: 300,
    paddingBottom: '5px',
    '&:hover': {
      paddingLeft: '15px',
      paddingRight: '15px',
      fontWeight: 'bolder',
      textDecoration: 'none',
    },
  },
  directoriesActive: {
    fontSize: '19px',
    textDecoration: 'none',
    color: '#FFF',
    borderBottom: '1px solid',
    paddingLeft: '15px',
    paddingRight: '15px',
    paddingBottom: '5px',
    fontWeight: 'bolder',
    '&:hover': {
      textDecoration: 'none',
    },
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

function SearchAppBar(props) {
  const classes = useStyles();
  const {userInfo} = useContext(UserContext);
  const [user, setUser] = useState('login');
  const [tag, setTag] = useState('Login');
  const [location, setLocation] = useState(window.location.pathname);

  useEffect(() => {
    let u;
    if (!userInfo) {
      u = 'Login';
    } else {
      u = `u/${userInfo.username}`;
      setTag(userInfo.username);
    }
    setUser(u);
  }, [user, userInfo, location]);

  const handleDirectoryChange = (directory) => {
    setLocation(directory);
  };

  return (
    <div className={classes.root}>
      {console.log(location.includes('/events'))}
      <Router>
        <AppBar position="static" style={{boxShadow: 'none'}}>
          <Toolbar className={classes.toolBar}>
            <Typography className={classes.title} variant="h6" noWrap>
              <Link to="/events" className={classes.logo}>
                RAVEmeets
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
                { location === '/events' || location.includes('/events')
                  ? (<MaterialUILink component={Link}
                    onClick={() => handleDirectoryChange('/events')}
                    to="/events" className={classes.directoriesActive}>
                        Events
                  </MaterialUILink>)
                  : (<MaterialUILink component={Link}
                    onClick={() => handleDirectoryChange('/events')}
                    to="/events" className={classes.directories}>
                    Events
                  </MaterialUILink>)
                }
              </Grid>
              <Grid container item xs={1} spacing={0} justifyContent="center">
                { location === '/groups' || location.includes('/groups')
                  ? <MaterialUILink component={Link}
                    onClick={() => handleDirectoryChange('/groups')}
                    to="/groups" className={classes.directoriesActive}>
                      Groups
                  </MaterialUILink>
                  : <MaterialUILink component={Link}
                    onClick={() => handleDirectoryChange('/groups')}
                    to="/groups" className={classes.directories}>
                    Groups
                  </MaterialUILink>
                }
              </Grid>
              <Grid container item xs={1} spacing={0} justifyContent="center">
                { location === '/profile'
                  ? <MaterialUILink component={Link}
                    onClick={() => handleDirectoryChange('/profile')}
                    to={{pathname: `/${user}`}}
                    className={classes.directoriesActive}>
                      Profile
                  </MaterialUILink>
                  : <MaterialUILink component={Link}
                    onClick={() => handleDirectoryChange('/profile')}
                    to={{pathname: `/${user}`}} className={classes.directories}>
                      Profile
                  </MaterialUILink>
                }
              </Grid>
            </Grid>
            <SearchBar />
          </Toolbar>
        </AppBar>
        <main>
          <Switch>
            <Route exact path="/events">
              <EventsList />
            </Route>
            <Route path="/events/:id">
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
            <Route path="/u/:username" exact>
              <Profile />
            </Route>

            <Route path="/grouppage/:id">
              <SingleGroupPage />
            </Route>

          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default SearchAppBar;
