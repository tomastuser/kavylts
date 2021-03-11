import React from 'react';
import Layout from '../../components/Layout';
import FotoCont from '../../components/FotoCont';
import ContentImport from '../../components/ContentImport';
import ContentImportSmall from '../../components/ContentImportSmall';

const PraktickeInfoKlub = () => {
  return (
    <Layout title='Praktické informace'>
      <div className='mainTextCont'>
        <div className='mainText'>
          <ContentImport nazev='Ceník a stravování' />
          <FotoCont name='babovicky.jpg' alt='Lesní školky' />
          <ContentImportSmall nazev='Ceník a stravování 2' />
          <br />
          <ContentImportSmall nazev='Praktické informace klubu' />
          <FotoCont name='coSSebou.jpg' alt='Lesní školky' />
          <ContentImportSmall nazev='Praktické informace klubu 2' />
          <FotoCont name='satky.jpg' alt='Lesní školky' />
        </div>
      </div>
    </Layout>
  );
};

export default PraktickeInfoKlub;
