import React from 'react';
import Layout from '../../components/Layout';
import FotoCont from '../../components/FotoCont';
import ContentImport from '../../components/ContentImport';

const DokumentyKlub = () => {
  return (
    <Layout title='Dokumenty'>
      <div className='mainTextCont'>
        <div className='mainText'>
          <ContentImport nazev='Dokumenty klubu' />
          <FotoCont name='PODZ.jpg' alt='Lesní školky' />
        </div>
      </div>
    </Layout>
  );
};

export default DokumentyKlub;
