import React from 'react';
import Layout from '../../components/Layout';
import FotoCont from '../../components/FotoCont';
import ContentImport from '../../components/ContentImport';

const Jurta = () => {
  return (
    <Layout title='Jurta'>
      <div className='mainTextCont'>
        <div className='mainText'>
          <ContentImport nazev='Pronájem jurty' />
          <FotoCont name='JUR.jpg' alt='Jurta' />
        </div>
      </div>
    </Layout>
  );
};

export default Jurta;
