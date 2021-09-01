import React from 'react';

const Picture = () => {
  const picture = '../../../../assets/jackwu.png';

  return (
    <>
      <img
        src=""
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
          width: '274px',
          height: '56px',
          left: '87px',
          top: '426px',
          fontStyle: 'normal',
          fontWeight: '600',
          fontSize: '24px',
          lineHeight: '36px',
          textAlign: 'center',
          letterSpacing: '0.05em',
        }}
      >
        Jack Wu
      </div>
    </>
  );
};

export default Picture;
