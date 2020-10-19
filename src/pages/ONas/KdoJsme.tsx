import React from 'react';
import Layout from '../../components/Layout';
import FotoCont from '../../components/FotoCont';
import ContentImport from '../../components/ContentImport';

function KdoJsme() {
  return (
    <Layout title='Kdo jsme'>
      <div className='mainTextCont'>
        <div className='mainText'>
          <ContentImport nazev='Kdo jsme' />
          <FotoCont name='KDOJSME.jpg' alt='Kdo jsme' />
        </div>
      </div>
    </Layout>
  );
}

export default KdoJsme;
