import React from 'react';
import Layout from '../../components/Layout';
import FotoCont from '../../components/FotoCont';
import ContentImport from '../../components/ContentImport';
import ContentImportSmall from '../../components/ContentImportSmall';

const ProgramKlubu = () => {
  return (
    <Layout title='Program klubu'>
      <div className='mainTextCont'>
        <div className='mainText'>
          <ContentImport nazev='Program klubu' />
          <FotoCont name='sona.jpg' alt='Lesní školky' />
          <ContentImportSmall nazev='Program klubu 2' />
        </div>
      </div>
    </Layout>
  );
};

export default ProgramKlubu;
