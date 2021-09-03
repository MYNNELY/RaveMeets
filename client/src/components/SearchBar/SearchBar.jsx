import React, {useState, useRef, useEffect} from 'react';
import InputBase from '@material-ui/core/InputBase';
import {alpha, makeStyles} from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import axios from 'axios';
import styled from 'styled-components';

const StyledSearchContainer = styled.div`
width: 307px;
height: 50px;
background: #014d7a;
border-radius: 25px;
color: black;
z-index: 1000;
`;


const StyledSearchInputs = styled.div`
margin-bottom: 25px;
display: flex;
justify-content: center;
align-items: center;
align-content: center;
flex-wrap: nowrap;
`;

const StyledSearchCardContainerDiv = styled.div`
cursor:pointer;
display: flex;
    width: 90%;
    height: 60px;
    border-radius: 10px;
    color: black;
    background: #C4C4C4;
    margin-top: 10px;
    align-items: center;
    flex-wrap: nowrap;
    justify-content: space-between;
`;
const StyledInput = styled.input`
height: 50px;
background: #014d7a;
color: black;
font-size: 18px;
border: none;
`;
const StyledSearchIconContainer = styled.div`
color: black;
`;

const StyledDataContainer = styled.div`
display: flex;
margin: 10px;
width: 100%;
border-radius: 10px;
background-color: #01387A;
position: absolute;
left: -10px;
flex-direction: column;
flex-wrap: nowrap;
align-content: center;
align-items: center;

`;


const StyledEventContainer = styled.div`
`;

const StyledEventDateContainer = styled.div`
`;

const StyledEventInformation = styled.div`
display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: stretch;
    justify-content: space-evenly;
    align-items: flex-start;
    margin-left: 5px;
`;

const StyledEventPicture = styled.div`
height: 50px;
width: 50px;
`;

const StyledEventImg = styled.img`
margin-right: 8px;
height: 50px;
width: 50px;
border-radius: 2px;
`;

const StyledTitle = styled.span`
font-size: 17px;
font-style: italic;
margin-left: 5px;
`;

const StyledDate = styled.span`
margin-left: 5px;
font-size: 12px;
`;

const dumbyData = [{}, {}];


const SearchBar = ({placeholder}) =>{
  const classes = useStyles();
  const [display, setDisplay] = useState(false);
  const [search, setSearch] = useState('');
  const [peopleData, setPeopleData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const wrapperRef = useRef(null);
  const placeHolderRef = useRef(null);


  // useEffect(() => {
  //   document.addEventListener('mousedown', handleClickOutside);
  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   };
  // }, []);
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
    }


    // if (search.length < 3) {
    //   setDisplay(true);
    // } else {
    //   setDisplay(false);
    // }
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


      {/* <StyledInput
          type={'text'}
          placeholder={'Search...'}
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        /> */}
      {/* <StyledSearchIconContainer>
        <SearchIcon cololr='black'/>
      </StyledSearchIconContainer> */}


      <StyledDataContainer>
        {peopleData.map((user, key ) => (
          <StyledSearchCardContainerDiv key={key}
            onClick={(e) => {
              e.preventDefault();
              window.location.href=`http://localhost:3000/u/${user.username}`;
            }}>
            <StyledEventInformation>
              <StyledTitle>{user.name}</StyledTitle>

            </StyledEventInformation>
            <StyledEventImg src={'https://isobarscience.com/wp-content/uploads/2020/09/default-profile-picture1.jpg'}></StyledEventImg>
          </StyledSearchCardContainerDiv>

        ))}

        {searchData.map((event, key) => (
          <StyledSearchCardContainerDiv key={key}
            onClick={(e) => {
              e.preventDefault();
              window.location.href=`http://localhost:3000/eventpage/${event._id}`;
            }}>
            <StyledEventInformation>
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
