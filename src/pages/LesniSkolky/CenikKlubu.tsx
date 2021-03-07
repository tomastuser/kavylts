import React from 'react';
import Layout from '../../components/Layout';
import FotoCont from '../../components/FotoCont';
import ContentImport from '../../components/ContentImport';
import ContentImportSmall from '../../components/ContentImportSmall';

const CenikKlubu = () => {
  return (
    <Layout title='Ceník a stravování'>
      <div className='mainTextCont'>
        <div className='mainText'>
          <ContentImport nazev='Ceník a stravování' />
          <FotoCont name='babovicky.jpg' alt='Lesní školky' />
          <ContentImportSmall nazev='Ceník a stravování 2' />
        </div>
      </div>
    </Layout>
  );
};

export default CenikKlubu;
