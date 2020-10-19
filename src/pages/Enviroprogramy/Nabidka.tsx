import React from 'react';
import Zaklad from '../../components/Zaklad';
import Layout from '../../components/Layout';
import FotoCont from '../../components/FotoCont';
import ContentImportSmall from '../../components/ContentImportSmall';

const Nabidka = () => {
  return (
    <Layout title='Aktuální nabídka enviroprogramů'>
      <div className='mainTextCont'>
        <div className='mainText'>
          <Zaklad nazev='Aktuální nabídka' />
          <ContentImportSmall nazev='Nabídka1' />
          <FotoCont name='E1.jpg' alt='E1' />
          <ContentImportSmall nazev='Nabídka2' />
          <FotoCont name='E2.jpg' alt='E2' />
          <ContentImportSmall nazev='Nabídka3' />
          <FotoCont name='E4.jpg' alt='E4' />
          <ContentImportSmall nazev='Nabídka4' />
          <FotoCont name='E3.jpg' alt='E3' />
        </div>
      </div>
    </Layout>
  );
};

export default Nabidka;
