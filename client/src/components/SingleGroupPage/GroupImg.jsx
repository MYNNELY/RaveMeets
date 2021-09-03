import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import theme from './theme.js';
import Hook from './Hook.jsx';
import Dropzone from 'react-dropzone'
import { useDropzone } from 'react-dropzone';
import styled from 'styled-components';

//why can't i just put hook in here?

const GroupImg = (props) => {


  const [file, setFile] = useState(null);


  function previewFile() {
    const preview = document.querySelector('#groupPhoto');
    const file = document.querySelector('input[type=file]').files[0];
    const reader = new FileReader();

    reader.addEventListener("load", function () {
      // convert image file to base64 string
      preview.src = reader.result;
    }, false);

    if (file) {
      console.log(file, 'file');
      console.log(typeof(file), 'what type is this');
      reader.readAsDataURL(file);

    }
  }

  console.log(file, 'file');
  const fileUpload = () => {
    console.log('hello');
  };
  // const fileSelectedEvent = (event) => {
  //   event.preventDefault();
  //   console.log(event.target.files[0]);
  //   console.log(event.target.files[0].webkitRelativePath);
  //   setFile(event.target.files[0]);



  // }


  return (
    <>
      <div style={{paddingTop: '20px'}}>
        <input type="file" onChange={previewFile} />
        <button onClick={fileUpload}>Upload</button>
      </div>
      <img id="groupPhoto" src="" height="150" alt="Image preview..." />
    </>
  )



};


export default GroupImg;
