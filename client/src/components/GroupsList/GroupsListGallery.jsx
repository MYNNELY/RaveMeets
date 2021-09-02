import React from 'react';
import {ImageList, ImageListItem} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  imageList: {
    // position: 'fixed',
    width: '871px',
    maxHeight: '480px',
    overflow: 'auto',
  },
}));

const GroupsListGallery = () => {
  const classes = useStyles();
  const itemData = [{
    img: 'https://material-ui.com/static/images/image-list/breakfast.jpg',
    title: 'Breakfast',
  },
  {
    img: 'https://material-ui.com/static/images/image-list/camera.jpg',
    title: 'Camera',
  },
  {
    img: 'https://material-ui.com/static/images/image-list/olive.jpg',
    title: 'Olive oil',
  },
  {
    img: 'https://material-ui.com/static/images/image-list/breakfast.jpg',
    title: 'Breakfast',
  },
  {
    img: 'https://material-ui.com/static/images/image-list/camera.jpg',
    title: 'Camera',
  },
  {
    img: 'https://material-ui.com/static/images/image-list/olive.jpg',
    title: 'Olive oil',
  },
  {
    img: 'https://material-ui.com/static/images/image-list/breakfast.jpg',
    title: 'Breakfast',
  },
  {
    img: 'https://material-ui.com/static/images/image-list/camera.jpg',
    title: 'Camera',
  },
  {
    img: 'https://material-ui.com/static/images/image-list/olive.jpg',
    title: 'Olive oil',
  },
  {
    img: 'https://material-ui.com/static/images/image-list/breakfast.jpg',
    title: 'Breakfast',
  },
  {
    img: 'https://material-ui.com/static/images/image-list/camera.jpg',
    title: 'Camera',
  },
  {
    img: 'https://material-ui.com/static/images/image-list/olive.jpg',
    title: 'Olive oil',
  },
  {
    img: 'https://material-ui.com/static/images/image-list/breakfast.jpg',
    title: 'Breakfast',
  },
  {
    img: 'https://material-ui.com/static/images/image-list/camera.jpg',
    title: 'Camera',
  },
  {
    img: 'https://material-ui.com/static/images/image-list/olive.jpg',
    title: 'Olive oil',
  },
  {
    img: 'https://material-ui.com/static/images/image-list/breakfast.jpg',
    title: 'Breakfast',
  }];
  return (
    <ImageList rowHeight={240} className={classes.imageList} cols={3}>
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1}>
          <img src={item.img} alt={item.title} />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default GroupsListGallery;
