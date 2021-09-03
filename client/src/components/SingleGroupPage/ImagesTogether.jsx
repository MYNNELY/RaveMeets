import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import theme from './theme.js';
import { makeStyles } from '@material-ui/core/styles';
import SingleImage from './SingleImage.jsx';
import axios from 'axios';
// import useStorage from '../../hooks/useStorage.js'


const useStyles = makeStyles({
  imagesTogether: {
    border: 10,
    borderRadius: 3,
    width: '95%',
    height: 150,
    padding: '0 20px',
  },
});


//why can't i just put hook in here?





//why can't i just put hook in here?

const ImagesTogether = ({ data }) => {
  const { event_details } = data;
  const classes = useStyles();
  const [caption, setCaption] = useState('');
  const [ImgURL, setImgURL] = useState('');


  const submitPhoto = () => {

    console.log({
      photos: [{
        "url": ImgURL,
        "caption": caption
      }],
    }

    )

    console.log('hello');
    axios.post(`http://54.176.43.199:3000/groups/${data._id}/photos`, {
      photos: [{
        "url": ImgURL,
        "caption": caption,
      }],
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  const handleChangeURL = (event) => {
    console.log(event.target.files[0], 'the file?');
    setImgURL(event.target.value);
  }

  const handleChangeCaption = (event) => {
    setCaption(event.target.value);
  }


  const imageArray = data.group_photos.map((singlePhoto) => {
    console.log(singlePhoto, "inside the map, should have images now");
    return (
        <SingleImage singlePhoto={singlePhoto} />
      )

  })
  console.log(data._id, 'data needs to have photos');

  console.log(event_details, 'this is all the event details')
  return (
    <div >Our Images

      {imageArray}
      <button onClick={submitPhoto}>Add Image</button>

      <form style={{color: "black"}} onSubmit={console.log('nope')}>
        <label>
          ImgURL:
          <input style={{color: "black"}} type="text" id="uploads" onChange={handleChangeURL} />
        </label>


        <label>
          Caption:
          <input style={{color: "black"}} type="text" value={caption} onChange={handleChangeCaption} />
        </label>

      </form>



    </div>

  );
};


export default ImagesTogether;
