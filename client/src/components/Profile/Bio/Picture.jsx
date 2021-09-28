import React from 'react';

const Picture = ({profile}) => {
  if (!profile) {
    return (<></>);
  }

  let pictureSource = profile[0].profile_pic_url || 'https://isobarscience.com/wp-content/uploads/2020/09/default-profile-picture1.jpg';

  if (profile[0].username === 'jackwu') {
    pictureSource = 'https://media-exp1.licdn.com/dms/image/C5603AQECKx8uYB7oQA/profile-displayphoto-shrink_800_800/0/1622615030744?e=1635984000&v=beta&t=kpEsNkPPR4MtiwD5hOEUrNe3arDF9lVgT7YiqncPRdY';
  }

  return (
    <>
      <img
        src={pictureSource}
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
