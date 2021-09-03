import React from 'react';

const GroupIcon = () => {
  // axios call get group from id
  // set icon to the the group banner

  const groupPic = 'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-group-512.png';

  return (
    <img
      src={groupPic}
      alt=''
      style={{
        position: 'relative',
        height: '75px',
        width: '75px',
        background: '#C4C4C4',
        marginRight: '20px',
        borderRadius: '50%',
      }}
    />
  )
};

export default GroupIcon;
