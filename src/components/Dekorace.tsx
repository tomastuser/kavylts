import React from 'react';
import sykorka from '../public/kres_sykorka.png';
import jetel from '../public/jetel.png';
import siska2 from '../public/siska2.png';
import kvitek1 from '../public/kvitek1.png';
import lisejnik from '../public/lisejnik1.png';
import kytka3 from '../public/kytka3.png';
import kytka1 from '../public/kytka1.png';
import vetvicka from '../public/vetvicka.png';
import kvitky from '../public/kvitky1.png';
import kreskv1 from '../public/kreskv1.png';

const Dekorace = () => {
  return (
    <div className='pointerNone'>
      <div className='dekorace'>
        <img
          className='kytka1'
          alt='kytka1'
          src={kytka1}
          style={{
            top: '21%',
            left: '23%',
            width: '7vw',
          }}
        />
        <img
          className='sykorka'
          alt='sykorka'
          src={sykorka}
          style={{
            top: '75%',
            left: '16%',
            width: '8vw',
          }}
        />
        <img
          className='jetel'
          alt='jetel'
          src={jetel}
          style={{
            top: '28%',
            left: '6%',
            width: '6vw',
          }}
        />
        <img
          className='siska2'
          alt='siska2'
          src={siska2}
          style={{
            top: '68%',
            right: '5%',
            width: '8vw',
          }}
        />
        <img
          className='kytka3'
          alt='kytka3'
          src={kytka3}
          style={{
            top: '50%',
            right: '18%',
            width: '7vw',
          }}
        />
        <img
          className='lisejnik1'
          alt='lisejnik1'
          src={lisejnik}
          style={{
            top: '30%',
            right: '3%',
            width: '10vw',
          }}
        />
        <img
          className='kvitek1'
          alt='kvitek1'
          src={kvitek1}
          style={{
            top: '22%',
            right: '24%',
            width: '5vw',
            transform: 'scaleX(-1)',
          }}
        />
        <img
          className='vetvicka'
          alt='vetvicka'
          src={vetvicka}
          style={{
            top: '45%',
            left: '15%',
            width: '8vw',
          }}
        />
        <img
          className='kvitky'
          alt='kvitky'
          src={kvitky}
          style={{
            top: '65%',
            left: '5%',
            width: '4vw',
          }}
        />
        <img
          className='kreskv1'
          alt='kreskv1'
          src={kreskv1}
          style={{
            top: '85%',
            right: '20%',
            width: '4vw',
          }}
        />
      </div>
    </div>
  );
};

export default Dekorace;
