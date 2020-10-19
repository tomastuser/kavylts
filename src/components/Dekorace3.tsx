import React from 'react';
import kytka3 from '../public/kytka3.png';
import bourka from '../public/bourka.png';
import drevo from '../public/drevo.png';
import kreskvit2 from '../public/kreskvit2.png';
import kvitek1 from '../public/kvitek1.png';
import jetel2 from '../public/jetel2.png';
import kytka1 from '../public/kytka1.png';
import kreslist from '../public/kreslist.png';
import siska1 from '../public/siska1.png';
import rohac from '../public/rohac.png';

const Dekorace3 = () => {
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
          className='kytka3'
          alt='kytka3'
          src={kytka3}
          style={{
            top: '75%',
            left: '16%',
            width: '8vw',
          }}
        />
        <img
          className='bourka'
          alt='bourka'
          src={bourka}
          style={{
            top: '28%',
            left: '6%',
            width: '6vw',
            transform: 'scaleX(-1)',
          }}
        />
        <img
          className='drevo'
          alt='drevo'
          src={drevo}
          style={{
            top: '68%',
            right: '5%',
            width: '8vw',
          }}
        />
        <img
          className='jetel2'
          alt='jetel2'
          src={jetel2}
          style={{
            top: '50%',
            right: '18%',
            width: '7vw',
          }}
        />
        <img
          className='lisejnik1'
          alt='lisejnik1'
          src={kvitek1}
          style={{
            top: '30%',
            right: '3%',
            width: '7vw',
            transform: 'scaleX(-1)',
          }}
        />
        <img
          className='kreskvit2'
          alt='kreskvit2'
          src={kreskvit2}
          style={{
            top: '22%',
            right: '24%',
            width: '4vw',
          }}
        />
        <img
          className='kreslist'
          alt='kreslist'
          src={kreslist}
          style={{
            top: '45%',
            left: '15%',
            width: '5vw',
          }}
        />
        <img
          className='siska1'
          alt='siska1'
          src={siska1}
          style={{
            top: '65%',
            left: '5%',
            width: '5vw',
          }}
        />
        <img
          className='rohac'
          alt='rohac'
          src={rohac}
          style={{
            top: '80%',
            right: '20%',
            width: '7vw',
          }}
        />
      </div>
    </div>
  );
};

export default Dekorace3;
