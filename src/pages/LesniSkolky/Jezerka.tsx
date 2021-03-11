import React from 'react';
import Layout from '../../components/Layout';
import FotoCont from '../../components/FotoCont';
import ContentImport from '../../components/ContentImport';
import ContentImportSmall from '../../components/ContentImportSmall';

const Jezerka = () => {
  return (
    <Layout title='Lesní klub Jezerka'>
      <div className='mainTextCont'>
        <div className='mainText'>
          <ContentImport nazev='Jezerka' />
          <FotoCont name='repa.jpg' alt='Lesní školky' />
          <ContentImportSmall nazev='Jezerka 2' />
        </div>
      </div>
    </Layout>
  );
};

export default Jezerka;
