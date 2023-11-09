import React from 'react';

function OdrazkyUvod() {
  return (
    <div className='odrazkyUvodContainer'>
      <h1>Kavyl z.s.</h1>
      <div className='odrazkyGrid1'>
        <h3>Lesní školky</h3>
        <ul>
          <li>Lesní klub Jezerka (Pozořice)</li>
          <li>LMŠ Stromík (Pozořice)</li>
          <li>
            <a href='www.stromik.cz'>www.stromik.cz</a>
          </li>
          <li>LMŠ Mariánka (Brno-Líšeň)</li>
          <li>
            <a href='www.lesnimarianka.cz'>www.lesnimarianka.cz</a>
          </li>
        </ul>
      </div>
      <div className='odrazkyGrid2'>
        <h3>Kroužky</h3>
        <ul>
          <li>Výletníček (Pozořice)</li>
          <li>Zvoneček (Brno-Líšeň)</li>
          <li>pro nejmenší děti ve věku 1-3 roky s doprovodem</li>
          <li>Petrklíč (Líšeň) - přírodovědný</li>
          <li>kroužek pro 1. a 2. třídy ZŠ</li>
        </ul>
      </div>
      <div className='caraOdrazky' />
      <div className='odrazkyGrid3'>
        <h3>Ekocentrum Jezerka</h3>
        <ul>
          <li>environmentální vzdělávání</li>
          <li>pro MŠ a 1. stupeň ZŠ</li>
          <li>v areálu a okolí pozořické</li>
          <li>hájenky Na Jezerách</li>
          <li>
            <a href='evo@lesnikavyl.cz'>evvo@lesnikavyl.cz</a>
          </li>
        </ul>
      </div>
      <div className='odrazkyGrid4'>
        <h3>Tábory</h3>
        <ul>
          <li>týdenní příměstské tábory</li>
          <li>po celé léto pro MŠ</li>
          <li>a 1. stupeň ZŠ</li>
          <li>se zázemím v našich</li>
          <li>lesních školkách</li>
        </ul>
      </div>
      <div className='odrazkyZaver'>
        <h3>Další aktivity</h3>
        <ul>
          <li>
            přednášky a semináře o výchově, vzdělávání a přírodě kolem nás,
          </li>
          <li>kulturní a společenské akce</li>
        </ul>
      </div>
    </div>
  );
}

export default OdrazkyUvod;
