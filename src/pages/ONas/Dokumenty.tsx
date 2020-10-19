import React from 'react';
import Layout from '../../components/Layout';
import FotoCont from '../../components/FotoCont';
import ContentImport from '../../components/ContentImport';

const Dokumenty = () => {
  return (
    <Layout title='Dokumenty'>
      <div className='mainTextCont'>
        <div className='mainText'>
          <ContentImport nazev='Dokumenty' />
          <FotoCont name='DA_TVORENI.jpg' alt='Dokumenty' />
        </div>
      </div>
    </Layout>
  );
};

export default Dokumenty;
