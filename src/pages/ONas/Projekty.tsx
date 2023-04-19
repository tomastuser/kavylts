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
          <FotoCont name='JAH.jpg' alt='Jahody' />
        </div>
      </div>
    </Layout>
  );
};

export default Projekty;
