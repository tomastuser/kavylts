import React from 'react';
import Zaklad from '../../components/Zaklad';
import Layout from '../../components/Layout';
import FotoCont from '../../components/FotoCont';
import ContentImportSmall from '../../components/ContentImportSmall';

const Volnocas = () => {
  return (
    <Layout title='Volnočasové aktivity'>
      <div className='mainTextCont'>
        <div className='mainText'>
          <Zaklad nazev='Volnočasové aktivity' />

          <ContentImportSmall nazev='Volnočasové aktivity1' />
          <FotoCont name='VC1.jpg' alt='VC1' />
          <ContentImportSmall nazev='Volnočasové aktivity2' />
          <FotoCont name='VC2.jpg' alt='VC2' />
        </div>
      </div>
    </Layout>
  );
};

export default Volnocas;
