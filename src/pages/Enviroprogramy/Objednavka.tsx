import React from 'react';
import Layout from '../../components/Layout';
import FotoCont from '../../components/FotoCont';
import ContentImport from '../../components/ContentImport';

const Objednavka = () => {
  return (
    <Layout title='Objednávka programu'>
      <div className='mainTextCont'>
        <div className='mainText'>
          <ContentImport nazev='Objednávka programu' />
          <FotoCont name='INFO.jpg' alt='Objednavka' />
        </div>
      </div>
    </Layout>
  );
};

export default Objednavka;
