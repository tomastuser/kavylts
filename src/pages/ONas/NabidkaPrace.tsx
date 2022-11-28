import React from 'react';
import Layout from '../../components/Layout';
import ContentImport from '../../components/ContentImport';

function NabidkaPrace() {
  return (
    <Layout title='Nabídka práce'>
      <div className='mainTextCont'>
        <div className='mainText'>
          <ContentImport nazev='Nabídka práce' />
        </div>
      </div>
    </Layout>
  );
}

export default NabidkaPrace;
