import React, {useState, useEffect} from 'react';
import InputBase from '@material-ui/core/InputBase';
import {alpha, makeStyles} from '@material-ui/core/styles';
import {useHistory} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import axios from 'axios';
import styled from 'styled-components';


const StyledSearchCardContainerDiv = styled.div`
cursor:pointer;
display: flex;
    width: 90%;
    height: 70px;
    border-radius: 10px;
    color: black;
    background: #C4C4C4;
    margin-top: 5px;
    margin-bottom: 5px;
    align-items: center;
    flex-wrap: nowrap;
    justify-content: space-between;
`;


const StyledDataContainer = styled.div`
display: flex;
margin: 10px;
margin-top: 2px;
width: 100%;
border-radius: 10px;
background-color: white;
position: absolute;
left: -10px;
flex-direction: column;
flex-wrap: nowrap;
align-content: center;
align-items: center;

`;


const StyledEventInformation = styled.div`
height: fit-content;
display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: stretch;
    justify-content: space-evenly;
    align-items: flex-start;
    margin-left: 5px;
`;


const StyledEventImg = styled.img`
margin-right: 8px;
height: 55px;
width: 55px;
border-radius: 3px;
`;

const StyledTitle = styled.span`
color: black;
font-size: 17px;
font-style: italic;
margin-left: 5px;
`;

const StyledDate = styled.span`
color: black;
margin-left: 5px;
font-size: 12px;
`;

const StyledUserTag = styled.div`
color: black;
position: relative;
font-size: 10px;
margin-bottom:2px
`;
const StyledEventTag = styled.div`
color: black;
position: relative;
font-size: 10px;
margin-bottom:2px
`;


const SearchBar = ({placeholder}) =>{
  const classes = useStyles();
  const history = useHistory();
  const [search, setSearch] = useState('');
  const [peopleData, setPeopleData] = useState([]);
  const [searchData, setSearchData] = useState([]);


  useEffect(() => {
    console.log(search.length, 'testing');
    if (search.length >= 2) {
      axios.get('http://54.176.43.199:3000/search', {params: {q: search}} )
          .then((response ) => {
            setSearchData(response.data.Events);
            setPeopleData(response.data.Users);
          })
          .catch((err) => console.log(err));
    }
    if (search.length < 2) {
      setSearchData([]);
      setPeopleData([]);
    }
  }, [search]);


  return (
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
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />


      <StyledDataContainer>
        {peopleData.map((user, key ) => (
          <StyledSearchCardContainerDiv key={key}
            onClick={(e) => {
              e.preventDefault();
              setSearch('');
              history.push(`/u/${user.username}`);
            }}>
            <StyledEventInformation>
              <StyledUserTag>User</StyledUserTag>
              <StyledTitle>{user.name}</StyledTitle>

            </StyledEventInformation>
            <StyledEventImg src={'https://isobarscience.com/wp-content/uploads/2020/09/default-profile-picture1.jpg'}></StyledEventImg>
          </StyledSearchCardContainerDiv>

        ))}

        {searchData.map((event, key) => (
          <StyledSearchCardContainerDiv key={key}
            onClick={(e) => {
              e.preventDefault();
              setSearch('');
              history.push(`/events/${event._id}`);
            }}>

            <StyledEventInformation>
              <StyledEventTag> Event </StyledEventTag>
              <StyledTitle>{event.name}</StyledTitle>
              <StyledDate>{event.start_date.slice(0, 10)}</StyledDate>

            </StyledEventInformation>
            <StyledEventImg src={event.event_banner_url}></StyledEventImg>
          </StyledSearchCardContainerDiv>
        ))}


      </StyledDataContainer>


    </div>


  );
};


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
    'zIndex': '1000',
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


export default SearchBar;
