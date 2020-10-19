import React from 'react';
import ptacekjetel from '../public/ptacekjetel.png';
import drevo from '../public/drevo.png';
import siska1 from '../public/siska1.png';
import kytka3 from '../public/kytka3.png';
import budka from '../public/budka.png';
import jetel from '../public/jetel.png';
import bourka from '../public/bourka.png';
import kreslist2 from '../public/kreslist2.png';
import siska2 from '../public/siska2.png';
import kreschrpa from '../public/kreschrpa.png';

const Dekorace2 = () => {
  return (
    <div className='pointerNone'>
      <div className='dekorace'>
        <img
          className='bourka'
          alt='bourka'
          src={bourka}
          style={{
            top: '21%',
            left: '23%',
            width: '6vw',
          }}
        />
        <img
          className='ptacekjetel'
          alt='ptacekjetel'
          src={ptacekjetel}
          style={{
            top: '75%',
            left: '16%',
            width: '6vw',
            transform: 'scaleX(-1)',
          }}
        />
        <img
          className='drevo'
          alt='drevo'
          src={drevo}
          style={{
            top: '28%',
            left: '6%',
            width: '7vw',
          }}
        />
        <img
          className='siska1'
          alt='siska1'
          src={siska1}
          style={{
            top: '68%',
            right: '5%',
            width: '6vw',
          }}
        />
        <img
          className='jetel'
          alt='jetel'
          src={jetel}
          style={{
            top: '50%',
            right: '18%',
            width: '6vw',
          }}
        />
        <img
          className='budka'
          alt='budka'
          src={budka}
          style={{
            top: '22%',
            right: '5%',
            width: '7vw',
          }}
        />
        <img
          className='kytka3'
          alt='kytka3'
          src={kytka3}
          style={{
            top: '22%',
            right: '24%',
            width: '7vw',
          }}
        />
        <img
          className='kreslist2'
          alt='kreslist2'
          src={kreslist2}
          style={{
            top: '45%',
            left: '15%',
            width: '7vw',
          }}
        />
        <img
          className='siska2'
          alt='siska2'
          src={siska2}
          style={{
            top: '65%',
            left: '5%',
            width: '6vw',
          }}
        />
        <img
          className='kreschrpa'
          alt='kreschrpa'
          src={kreschrpa}
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

export default Dekorace2;
