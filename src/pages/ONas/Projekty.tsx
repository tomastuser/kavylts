import React from 'react';
import Layout from '../../components/Layout';
import ContentImport from '../../components/ContentImport';
import FotoCont from '../../components/FotoCont';
import ContentImportSmall from '../../components/ContentImportSmall';

const Projekty = () => {
  return (
    <Layout title='Projekty'>
      <div className='mainTextCont'>
        <div className='mainText'>
          <ContentImport nazev='Projekty' />
          <FotoCont name='sfzp_evvo.jpeg' alt='sfzp_evvo' />
          <ContentImportSmall nazev='Projekty 2' />
          <div
            style={{
              display: 'flex',
              gap: '24px',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
            }}
          >
            <img
              style={{ height: '10vh', gridColumn: '1/4' }}
              alt='MŠMT VVV'
              src='https://lesnikavyl.cz/images/loga/MSMTVVV.jpg'
            />
            <a href='https://www.mas-slavkovskebojiste.cz/'>
              <img
                style={{ height: '10vh' }}
                alt='Slavkovské bojiště logo'
                src='https://lesnikavyl.cz/images/loga/bojiste.png'
              />
            </a>
          </div>
          <ContentImportSmall nazev='Projekty 3' />
          <FotoCont name='JAH.jpg' alt='Jahody' />
        </div>
      </div>
    </Layout>
  );
};

export default Projekty;
