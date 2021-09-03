import React, {useState, useRef, useEffect} from 'react';
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
width: 280px;
height: 60px;
border-radius: 10px;
color: black;
background: #C4C4C4;
margin-bottom: 10px;
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
border-radius: 10px;
background: white;
`;

const dumbyData = [{}, {}];


const SearchBar = ({placeholder}) =>{
  const [display, setDisplay] = useState(false);
  const [search, setSearch] = useState('');
  const [searchData, setSearchData] = useState([]);
  const wrapperRef = useRef(null);
  const placeHolderRef = useRef(null);


  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  useEffect(() => {
    axios.get('http://54.176.43.199:3000/search', {params: {q: search}} )
        .then((response ) => console.log(response, 'looking here'))
        .catch((err) => console.log(err));
  }, [search]);

  const handleClickOutside = (event) => {
    const {current: wrap} = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      setDisplay(false);
    }
  };

  return (
    <StyledSearchContainer ref={wrapperRef}>

      <StyledSearchInputs>

        <StyledInput
          ref={placeHolderRef}
          type={'text'}
          placeholder={'Search...'}
          value={search}
          onChange={(e) => {
            // if (search.length = 3) {
            //   setDisplay(true);
            // } else if (search ==='' && display) {
            //   setDisplay(false);
            // }
            setSearch(e.target.value);
          }}
          onClick={() => {
            setDisplay(!display);
          }}/>
        <StyledSearchIconContainer>
          <SearchIcon cololr='black'/>
        </StyledSearchIconContainer>


      </ StyledSearchInputs>

      {display && ( <StyledDataContainer>
        {searchData.map((value, key) => {
          return <div> hey</div>;
        })}
        {/* <StyledSearchCardContainerDiv tabIndex="0">
          testing
        </StyledSearchCardContainerDiv>
        <StyledSearchCardContainerDiv tabIndex="0">
          testing
        </StyledSearchCardContainerDiv>
        <StyledSearchCardContainerDiv tabIndex="0">
          testing
        </StyledSearchCardContainerDiv>
        <StyledSearchCardContainerDiv tabIndex="0">
          testing
        </StyledSearchCardContainerDiv> */}

      </StyledDataContainer>


      )}

    </StyledSearchContainer>

  );
};


export default SearchBar;
