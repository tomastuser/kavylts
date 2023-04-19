import React from 'react';
import Layout from '../../components/Layout';
import ContentImport from '../../components/ContentImport';

function NabidkaPrace() {
  return (
    <Layout title='Nabídka spolupráce'>
      <div className='mainTextCont'>
        <div className='mainText'>
          <ContentImport nazev='Nabídka spolupráce' />
        </div>
      </div>
    </Layout>
  );
}

export default NabidkaPrace;
