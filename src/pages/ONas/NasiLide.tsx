import React, { useContext } from 'react';
import Layout from '../../components/Layout';
import ClenTymu from '../../components/Tym/ClenTymu';
import { dbContext } from '../../utils/dbContext';
import { ClenIF } from '../../utils/dbInterfaces';

import Loading from '../../components/Loading';
import Zaklad from '../../components/Zaklad';

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
        <Zaklad nazev='Naši lidé' />
        {clenove && clenove.length > 0 ? (
          <div className='nasTym'>
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
          <Loading />
        )}
      </div>
    </Layout>
  );
};

export default NasiLide;
