import React from 'react';

import Dekorace from './Dekorace';
import Dekorace2 from './Dekorace2';
import Dekorace3 from './Dekorace3';

const Zaklad = ({ nazev }: { nazev: string }) => {
  const random = Math.floor(Math.random() * 3);
  return (
    <div>
      <h1 className='nazev'>{nazev}</h1>
      <img
        className='caraNadpis'
        alt='caraNadpis'
        src='https://res.cloudinary.com/tomastuser/image/upload/v1594799803/cara_nadpis_wtzq3b.png'
      />
      <div>
        {random === 0 ? (
          <Dekorace />
        ) : random === 1 ? (
          <Dekorace2 />
        ) : (
          <Dekorace3 />
        )}
      </div>
    </div>
  );
};

export default Zaklad;
