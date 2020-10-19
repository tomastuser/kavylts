import React from 'react';
import FotoCont from '../../components/FotoCont';
import Layout from '../../components/Layout';
import ContentImport from '../../components/ContentImport';

const Tabory = () => {
  return (
    <Layout title='Tábory'>
      <div className='mainTextCont'>
        <div className='mainText'>
          <ContentImport nazev='Tábory' />
          <FotoCont name='TABORY.jpg' alt='Tábory' />
        </div>
      </div>
    </Layout>
  );
};

export default Tabory;
