import React from 'react';
import Layout from '../../components/Layout';
import FotoCont from '../../components/FotoCont';
import ContentImport from '../../components/ContentImport';

const LesniSkolky = () => {
  return (
    <Layout title='Lesní kluby a lesní mateřské školy'>
      <div className='mainTextCont'>
        <div className='mainText'>
          <ContentImport nazev='Lesní kluby a lesní mateřské školy' />
          <FotoCont name='PODZ.jpg' alt='Lesní školky' />
          <ContentImport nazev='Lesní kluby a lesní mateřské školy 2' />
          <FotoCont name='JUR.jpg' alt='Jurta' />
        </div>
      </div>
    </Layout>
  );
};

export default LesniSkolky;
