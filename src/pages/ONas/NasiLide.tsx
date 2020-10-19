import React, { useContext } from 'react';
import Layout from '../../components/Layout';
import ClenTymu from '../../components/Tym/ClenTymu';
import { dbContext } from '../../utils/dbContext';
import { ClenIF } from '../../utils/dbInterfaces';

const NasiLide = () => {
  const { clenove } = useContext(dbContext);

  const serazeniOdNejvyssiho = () => {
    return [].slice.call(clenove).sort((a: ClenIF, b: ClenIF) => {
      return Number(b.id) - Number(a.id);
    });
  };
  return (
    <Layout title='Naši lidé'>
      <div className='mainOstatni'>
        {clenove ? (
          <div className='nasTym'>
            <h1>Naši lidé</h1>
            <div className='tymContainer'>
              <div className='tym'>
                {serazeniOdNejvyssiho()
                  .reverse()
                  .map((clen: ClenIF) => (
                    <ClenTymu key={clen.id} clen={clen} />
                  ))}
              </div>
            </div>
          </div>
        ) : (
          <div className='loading'>
            <h3>NAHRÁVÁNÍ...</h3>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default NasiLide;
