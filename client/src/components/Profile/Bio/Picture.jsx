import React from 'react';

const Picture = () => {
  const picture = '../../../../assets/jackwu.png';

  return (
    <>
      <img
        src="https://media-exp1.licdn.com/dms/image/C5603AQECKx8uYB7oQA/profile-displayphoto-shrink_800_800/0/1622615030744?e=1635984000&v=beta&t=kpEsNkPPR4MtiwD5hOEUrNe3arDF9lVgT7YiqncPRdY"
        alt=''
        style={{
          width: '200px',
          height: '200px',
          left: '124px',
          top: '213px',
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
        Jack Wu
      </div>
    </>
  );
};

export default Picture;
