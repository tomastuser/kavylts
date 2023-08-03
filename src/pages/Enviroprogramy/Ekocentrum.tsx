import React from 'react';
import Zaklad from '../../components/Zaklad';
import Layout from '../../components/Layout';
import FotoCont from '../../components/FotoCont';
import ContentImportSmall from '../../components/ContentImportSmall';

const Ekocentrum = () => {
  return (
    <Layout title='Ekocentrum Jezerka'>
      <div className='mainTextCont'>
        <div className='mainText'>
          <Zaklad nazev='Ekocentrum Jezerka' />
          <ContentImportSmall nazev='Ekocentrum' />
          <FotoCont name='E1.jpg' alt='E1' />
        </div>
      </div>
    </Layout>
  );
};

export default Ekocentrum;
