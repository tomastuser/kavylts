import React from 'react';
import { ClenIF } from '../../utils/dbInterfaces';

const ClenTymu = ({ clen }: { clen: ClenIF }) => (
  <div className='clenTymu'>
    <img src={clen.Image.url} alt={clen.Jmeno} />
    <h1>{clen.Jmeno}</h1>
    <h3>{clen.Pozice}</h3>
    <div className='clenTymuText'>
      <div dangerouslySetInnerHTML={{ __html: clen.Popis }} />
    </div>
  </div>
);

export default ClenTymu;
