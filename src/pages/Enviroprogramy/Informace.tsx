import React from 'react';
import Layout from '../../components/Layout';
import FotoCont from '../../components/FotoCont';
import ContentImport from '../../components/ContentImport';

const Informace = () => {
  return (
    <Layout title='Praktické informace'>
      <div className='mainTextCont'>
        <div className='mainText'>
          <ContentImport nazev='Praktické informace' />
          <FotoCont name='INFO.jpg' alt='Informace' />
        </div>
      </div>
    </Layout>
  );
};

export default Informace;
