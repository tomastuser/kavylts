import React from 'react';
import Layout from '../../components/Layout';
import FotoCont from '../../components/FotoCont';
import ContentImport from '../../components/ContentImport';

const Zapis = () => {
  return (
    <Layout title='Zápis'>
      <div className='mainTextCont'>
        <div className='mainText'>
          <ContentImport nazev='Zápis' />
          <FotoCont name='malovaniNaStromy.jpg' alt='Lesní školky' />
        </div>
      </div>
    </Layout>
  );
};

export default Zapis;
