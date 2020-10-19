import React from 'react';
import Layout from '../../components/Layout';
import FotoCont from '../../components/FotoCont';
import ContentImport from '../../components/ContentImport';

const DalsiAktivityUvod = () => {
  return (
    <Layout title='Další aktivity'>
      <div className='mainTextCont'>
        <div className='mainText'>
          <ContentImport nazev='Další aktivity' />
          <FotoCont name='DA.jpg' alt='DA' />
        </div>
      </div>
    </Layout>
  );
};

export default DalsiAktivityUvod;
