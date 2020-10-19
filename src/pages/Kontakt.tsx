import React from 'react';
import Zaklad from '../components/Zaklad';
import Layout from '../components/Layout';
import ContentImportSmall from '../components/ContentImportSmall';

function Kontakt() {
  return (
    <Layout title='Kontakt'>
      <div className='mainTextCont'>
        <div className='mainText'>
          <Zaklad nazev='Kontakt' />
          <div className='kontaktContD'>
            <div className='kontaktA'>
              <ContentImportSmall nazev='Kontakt1' />
              <div className='mapouterD'>
                <div className='gmap_canvas'>
                  <iframe
                    id='gmap_canvas'
                    src='https://maps.google.com/maps?q=Host%C4%9Bnick%C3%A1%20626&t=&z=13&ie=UTF8&iwloc=&output=embed'
                    scrolling='no'
                    marginHeight={0}
                    marginWidth={0}
                    width={320}
                    height={320}
                    frameBorder={0}
                    title='gmap_canvas'
                  />
                  <a href='https://putlocker-is.org'>putlocker</a>
                </div>
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      '.mapouter{position:relative;text-align:right;height:320px;width:320px;}.gmap_canvas {overflow:hidden;background:none!important;height:320px;width:320px;}',
                  }}
                />
              </div>
            </div>
            <div className='kontaktB'>
              <ContentImportSmall nazev='Kontakt2' />
            </div>
          </div>

          <div className='kontaktContM'>
            <div className='kontaktA'>
              <ContentImportSmall nazev='Kontakt1' />
              <div className='mapouterM'>
                <div className='gmap_canvas'>
                  <iframe
                    id='gmap_canvas'
                    src='https://maps.google.com/maps?q=Host%C4%9Bnick%C3%A1%20626&t=&z=13&ie=UTF8&iwloc=&output=embed'
                    scrolling='no'
                    marginHeight={0}
                    marginWidth={0}
                    width={320}
                    height={320}
                    frameBorder={0}
                    title='gmap_canvas'
                  />
                  <a href='https://putlocker-is.org'>putlocker</a>
                </div>
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      '.mapouter{position:relative;text-align:right;height:320px;width:320px;}.gmap_canvas {overflow:hidden;background:none!important;height:320px;width:320px;}',
                  }}
                />
              </div>
            </div>
            <div className='kontaktB'>
              <ContentImportSmall nazev='Kontakt2' />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Kontakt;
