import React from 'react';
import sipka from '../public/sipka.png';

const Footer2 = () => {
  const d = new Date();
  return (
    <>
      <div className='Footer2'>
        <div className='copyright'>
          <h3>
            ©&nbsp;Kavyl z.s.
            {d.getFullYear()}
          </h3>
        </div>
        <div className='upCont'>
          <div
            className='up'
            onClick={() => window.scrollTo(0, 0)}
            onKeyDown={() => window.scrollTo(0, 0)}
            role='button'
            tabIndex={0}
          >
            <img alt='sipka' src={sipka} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer2;
