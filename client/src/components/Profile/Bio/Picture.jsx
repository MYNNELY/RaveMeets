import React from 'react';

const Picture = ({ profile }) => {
  if (!profile) {
    return (<></>);
  }
  console.log(profile);
  return (
    <>
      <img
        src="https://isobarscience.com/wp-content/uploads/2020/09/default-profile-picture1.jpg"
        alt=''
        style={{
          width: '200px',
          height: '200px',
          left: '124px',
          top: '213px',
          border: '5px solid #999999',
          borderRadius: '100px',
        }}>
      </img>
      <div
        style={{
          margin: '10px',
          fontWeight: '600',
          fontSize: '36px',
        }}
      >
        {profile[0].name}
      </div>
    </>
  );
};

export default Picture;
