import React from 'react';
import { Link } from 'react-router-dom';
import { AktualitaIF } from '../utils/dbInterfaces';

interface Props {
  aktualita: AktualitaIF;
  pozadi: string;
}

const AktualitaZastupce = ({ aktualita, pozadi }: Props) => (
  <div className={`aktualitaZastupce ${pozadi}`}>
    <Link to={`/onas/aktualita/${aktualita.id}`}>
      <h4 className='aktualitaZastupceNadpis'>{aktualita.Nazev}</h4>
    </Link>
    <div className='aktualitaZastupceText'>
      {aktualita.Text && (
        <div
          className='aktualitaZastupceTeloTextu'
          dangerouslySetInnerHTML={{
            __html:
              aktualita.Text.substr(0, 280) +
              (aktualita.Text.length > 300 ? ' ...' : ''),
          }}
        />
      )}
    </div>
    <Link className='button' to={`/onas/aktualita/${aktualita.id}`}>
      Celý příspěvek
    </Link>
  </div>
);

export default AktualitaZastupce;
