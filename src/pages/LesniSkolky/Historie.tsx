import React from 'react';
import Layout from '../../components/Layout';
import FotoCont from '../../components/FotoCont';
import ContentImport from '../../components/ContentImport';
import ContentImportSmall from '../../components/ContentImportSmall';

const Historie = () => {
  return (
    <Layout title='Historie a současnost'>
      <div className='mainTextCont'>
        <div className='mainText'>
          <ContentImport nazev='Historie a současnost' />
          <FotoCont name='predskolaci.jpg' alt='Lesní školky' />
          <ContentImportSmall nazev='Historie a současnost 2' />
          <FotoCont name='zimniTvoreni.jpg' alt='Lesní školky' />
        </div>
      </div>
    </Layout>
  );
};

export default Historie;
