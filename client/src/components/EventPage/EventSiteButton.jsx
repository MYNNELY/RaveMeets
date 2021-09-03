import React from 'react';
import {Button} from '@material-ui/core';
import WebIcon from '@mui/icons-material/Web';

const EventSiteButton = () => {
    return (
        <Button
            variant='contained'
            startIcon={<WebIcon />}
        >
            Official site
        </Button>
    );
};

export default EventSiteButton;