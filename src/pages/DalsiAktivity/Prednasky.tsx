import React from 'react';
import Zaklad from '../../components/Zaklad';
import Layout from '../../components/Layout';
import FotoCont from '../../components/FotoCont';
import ContentImportSmall from '../../components/ContentImportSmall';

const Prednasky = () => {
  return (
    <Layout title='Přednášky a semináře'>
      <div className='mainTextCont'>
        <div className='mainText'>
          <Zaklad nazev='Přednášky a semináře' />
          <ContentImportSmall nazev='Přednášky1' />
          <FotoCont name='PRED.jpg' alt='Prednasky' />
          <ContentImportSmall nazev='Přednášky2' />
          <FotoCont name='PRED_EKO.jpg' alt='Prednasky Eko' />
          <ContentImportSmall nazev='Přednášky3' />
          <FotoCont name='PRED_REM.jpg' alt='Prednasky remesla' />
        </div>
      </div>
    </Layout>
  );
};

export default Prednasky;
