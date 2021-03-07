import React from 'react';
import Layout from '../../components/Layout';
import FotoCont from '../../components/FotoCont';
import ContentImport from '../../components/ContentImport';

const Stromecci = () => {
  return (
    <Layout title='Lesní klub Stromečci'>
      <div className='mainTextCont'>
        <div className='mainText'>
          <ContentImport nazev='Stromečci' />
          <FotoCont name='repa.jpg' alt='Lesní školky' />
        </div>
      </div>
    </Layout>
  );
};

export default Stromecci;
