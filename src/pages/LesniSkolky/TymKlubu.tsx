import React, { useContext } from 'react';
import Layout from '../../components/Layout';
import Loading from '../../components/Loading';
import ClenTymu from '../../components/Tym/ClenTymu';
import caraNadpis from '../../public/cara_nadpis.png';
import { dbContext } from '../../utils/dbContext';
import { ClenKlubuIF } from '../../utils/dbInterfaces';

const TymKlubu = () => {
  const { clenoveKlubu } = useContext(dbContext);

  const serazeniOdNejvyssiho = () => {
    return [].slice
      .call(clenoveKlubu)
      .sort((a: ClenKlubuIF, b: ClenKlubuIF) => {
        return b.Poradi - a.Poradi;
      });
  };
  return (
    <Layout title='Tým klubu'>
      <div className='mainOstatni'>
        <div className='nasTym'>
          <div className='mainOstatniNadpis'>
            <div className='mainText' style={{ paddingBottom: '5vh' }}>
              <h1 className='nazev'>Tým klubu</h1>
              <img className='caraNadpis' alt='caraNadpis' src={caraNadpis} />
            </div>
          </div>
          {clenoveKlubu && clenoveKlubu.length > 0 ? (
            <div className='tymContainer'>
              <div className='tym'>
                {serazeniOdNejvyssiho()
                  .reverse()
                  .map((clen: ClenKlubuIF) => (
                    <ClenTymu key={clen.id} clen={clen} />
                  ))}
              </div>
            </div>
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default TymKlubu;
