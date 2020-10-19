import React from 'react';
import Layout from '../../components/Layout';
import FotoCont from '../../components/FotoCont';
import ContentImport from '../../components/ContentImport';

const Ohlasy = () => {
  return (
    <Layout title='Ohlasy'>
      <div className='mainTextCont'>
        <div className='mainText'>
          <ContentImport nazev='Ohlasy' />
          <FotoCont name='OHLASY.jpg' alt='Ohlasy' />
        </div>
      </div>
    </Layout>
  );
};

export default Ohlasy;
