import React from 'react';
import Zaklad from '../../components/Zaklad';
import Layout from '../../components/Layout';
import FotoCont from '../../components/FotoCont';
import ContentImportSmall from '../../components/ContentImportSmall';

const Akce = () => {
  return (
    <Layout title='Akce'>
      <div className='mainTextCont'>
        <div className='mainText'>
          <Zaklad nazev='Akce pro veřejnost' />
          <ContentImportSmall nazev='Akce1' />
          <FotoCont name='AKCE_RDO' alt='RDO' />
          <ContentImportSmall nazev='Akce2' />
          <FotoCont name='AKCE_DEN' alt='Den' />
          <ContentImportSmall nazev='Akce3' />
          <FotoCont name='AKCE_SLAV1' alt='Slavnosti' />
          <ContentImportSmall nazev='Akce4' />
          <FotoCont name='AKCE_UKLID' alt='Les' />
        </div>
      </div>
    </Layout>
  );
};

export default Akce;
