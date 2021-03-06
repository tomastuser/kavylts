import React from 'react';
import Layout from '../../components/Layout';
import FotoCont from '../../components/FotoCont';
import ContentImport from '../../components/ContentImport';

const ProgramKlubu = () => {
  return (
    <Layout title='Program klubu'>
      <div className='mainTextCont'>
        <div className='mainText'>
          <ContentImport nazev='Program klubu' />
          <FotoCont name='PODZ.jpg' alt='Lesní školky' />
        </div>
      </div>
    </Layout>
  );
};

export default ProgramKlubu;
