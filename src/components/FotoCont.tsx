import React from 'react';

const FotoCont = ({ name, alt }: { name: string; alt: string }) => {
  return (
    <div className='fotoCont'>
      <div className='fotoContImg'>
        <img alt={alt} src={`https://lesnikavyl.cz/images/${name}`} />
      </div>
    </div>
  );
};

export default FotoCont;
