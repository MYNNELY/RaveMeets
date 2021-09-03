/* eslint-disable react/prop-types */
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

const GroupsListGallery = ({groupPhotos}) => {
  const classes = useStyles();

  return (
    <div>
      {groupPhotos &&
        <ImageList rowHeight={240} className={classes.imageList} cols={3}>
          {groupPhotos.map((groupPhoto) => (
            <ImageListItem key={groupPhoto._id} cols={1}>
              <img src={groupPhoto.url} alt={groupPhoto.caption} />
            </ImageListItem>
          ))}
        </ImageList>
      }
    </div>
  );
};

export default GroupsListGallery;
