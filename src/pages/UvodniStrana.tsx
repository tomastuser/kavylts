import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import OdrazkyUvod from '../components/Uvod/OdrazkyUvod';
import Uvod from '../components/Uvod/Uvod';
import AktualitaZastupce from '../components/AktualitaZastupce';
import Layout from '../components/Layout';
import { dbContext } from '../utils/dbContext';
import { AktualitaIF } from '../utils/dbInterfaces';

const UvodniStrana = () => {
  const { aktuality } = useContext(dbContext);

  const serazeniOdNejvyssiho = () => {
    return [].slice.call(aktuality).sort((a: AktualitaIF, b: AktualitaIF) => {
      return Number(b.id) - Number(a.id);
    });
  };

  return (
    <Layout title='Úvodní strana'>
      <div className='Uvod'>
        <div className='pozadiFixed'>
          <img
            src='https://lesnikavyl.cz/images/uvodpozadi.jpg'
            alt='Úvod pozadí'
          />
        </div>
        <div className='uvodAktuality'>
          <Uvod />

          <h1>Co je u nás nového?</h1>
          {aktuality ? (
            <div
              style={{
                marginBottom: '4vh',
              }}
            >
              <div className='aktuality'>
                {serazeniOdNejvyssiho()
                  .slice(0, 3)
                  .map((aktualita: AktualitaIF, index: number) => (
                    <AktualitaZastupce
                      key={aktualita.id}
                      aktualita={aktualita}
                      pozadi={`aktualitaPozadi${index + 1}`}
                    />
                  ))}
              </div>
              <Link
                className='button'
                style={{
                  width: '15%',
                  padding: '0.8rem 1.8rem 0.8rem 1.8rem',
                  minWidth: '260px',
                }}
                to='/onas/aktuality'
              >
                Všechny příspěvky
              </Link>
            </div>
          ) : (
            <div className='loading'>
              <h3>NAHRÁVÁNÍ...</h3>
            </div>
          )}
        </div>
        <div className='pozadiPrazdneContainer'>
          <div className='pozadiPrazdne'>
            <OdrazkyUvod />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UvodniStrana;
