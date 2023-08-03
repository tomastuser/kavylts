import React from 'react';
import Zaklad from '../../components/Zaklad';
import Layout from '../../components/Layout';
import FotoCont from '../../components/FotoCont';
import ContentImportSmall from '../../components/ContentImportSmall';

const AktualniProjekty = () => {
  return (
    <Layout title='Aktuální projekty'>
      <div className='mainTextCont'>
        <div className='mainText'>
          <Zaklad nazev='Aktuální projekty' />
          <ContentImportSmall nazev='Aktuální projekty' />
          <FotoCont name='sfzp_evvo.jpeg' alt='sfzp_evvo' />
        </div>
      </div>
    </Layout>
  );
};

export default AktualniProjekty;
