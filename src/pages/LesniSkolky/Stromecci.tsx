import React from 'react';
import Layout from '../../components/Layout';
import FotoCont from '../../components/FotoCont';
import ContentImport from '../../components/ContentImport';
import ContentImportSmall from '../../components/ContentImportSmall';

const Stromecci = () => {
  return (
    <Layout title='Lesní klub Stromečci'>
      <div className='mainTextCont'>
        <div className='mainText'>
          <ContentImport nazev='Stromečci' />
          <FotoCont name='repa.jpg' alt='Lesní školky' />
          <ContentImportSmall nazev='Stromečci 2' />
        </div>
      </div>
    </Layout>
  );
};

export default Stromecci;
