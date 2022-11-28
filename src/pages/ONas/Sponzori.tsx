import React from 'react';
import Zaklad from '../../components/Zaklad';
import Layout from '../../components/Layout';

const Sponzori = () => {
  return (
    <Layout title='Podporují nás'>
      <div className='mainTextCont'>
        <div className='mainText'>
          <Zaklad nazev='Podporují nás' />
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',

              marginBottom: '8vh',
            }}
          >
            <img
              style={{ height: '10vh', gridColumn: '1/4' }}
              alt='MŠMT VVV'
              src='https://lesnikavyl.cz/images/loga/MSMTVVV.jpg'
            />
          </div>
          <div className='sponzoriCont'>
            <div>
              <a href='https://www.mas-slavkovskebojiste.cz/'>
                <img
                  style={{ height: '10vh' }}
                  alt='Slavkovské bojiště logo'
                  src='https://lesnikavyl.cz/images/loga/bojiste.png'
                />
              </a>
            </div>
            <div>
              <a href='http://www.pozorice.cz/'>
                <img
                  alt='Pozořice logo'
                  src='https://res.cloudinary.com/marianka/image/upload/v1598469422/logo_pozorice_e54e4199ee.jpg'
                />
                <h3>Pozořice</h3>
              </a>
            </div>
            <div>
              <a href='http://www.brno-lisen.cz/'>
                <img
                  alt='Brno Líšeň logo'
                  src='https://res.cloudinary.com/tomastuser/image/upload/v1587221222/Brno-L%C3%AD%C5%A1e%C5%88_znak.svg_bdbwus.png'
                />
                <h3>Brno-Líšeň</h3>
              </a>
            </div>
            <div>
              <a href='https://www.vinicne-sumice.cz/'>
                <img
                  alt='Viničné Šumice logo'
                  src='https://res.cloudinary.com/marianka/image/upload/v1598469422/vinicne_sumice_1f319f3ac7.png'
                />
                <h3>Viničné Šumice</h3>
              </a>
            </div>
            <div>
              <a href='https://www.livebox.cz/'>
                <img
                  style={{ padding: '1.8vh' }}
                  alt='Livebox logo'
                  src='https://res.cloudinary.com/marianka/image/upload/v1658733602/livebox_3cf08dc656_y9udv9.gif'
                />
              </a>
            </div>
            <div>
              <a href='https://foundation.avast.com/'>
                <img
                  alt='Avast logo'
                  src='https://www.lesnikavyl.cz/images/loga/avastlogo.png'
                />
              </a>
            </div>
            <div>
              <a href='https://www.brno.cz/'>
                <img
                  style={{ padding: '2vh' }}
                  alt='Brno logo'
                  src='https://upload.wikimedia.org/wikipedia/commons/a/a9/Logo_Brno.svg'
                />
              </a>
            </div>

            <div>
              <a href='https://www.suez.cz/'>
                <img
                  style={{ height: '5vh' }}
                  alt=''
                  src='https://www.lesnikavyl.cz/images/loga/suez.png'
                />
              </a>
            </div>
            <div>
              <a href='https://www.kr-jihomoravsky.cz/'>
                <img
                  style={{ height: '10vh', padding: '1vh' }}
                  alt=''
                  src='https://www.lesnikavyl.cz/images/loga/jmk.png'
                />
              </a>
            </div>
            <div>
              <a href='https://www.nalontu.cz/'>
                <img
                  style={{ height: '12vh', padding: '2vh' }}
                  alt=''
                  src='https://www.lesnikavyl.cz/images/loga/lont.jpg'
                />
              </a>
            </div>
          </div>
          <p>
            Děkujeme všem partnerům a sponzorům za jejich příspěvky a
            vstřícnost. Hluboké poděkování patří také všem rodičům, přátelům a
            příznivcům za jejich obětavou spolupráci při našich aktivitách.
          </p>
          <div
            style={{
              display: 'flex',
              width: '100%',
              justifyContent: 'center',
            }}
          >
            <iframe
              src='https://givt.cz/services/widget/widget.php?id=3728'
              style={{
                width: '480px',
                maxWidth: '100%',
                height: '370px',
                border: 'none',
                overflow: 'hidden',
              }}
            ></iframe>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Sponzori;
