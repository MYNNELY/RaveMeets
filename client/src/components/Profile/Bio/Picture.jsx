import React from 'react';

const Picture = () => {
  const picture = '../../../../assets/jackwu.png';

  return (
    <>
      <img
        src="./client/assets/jackwu.png"
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
