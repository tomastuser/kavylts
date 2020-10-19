import React, { useContext } from 'react';
import { dbContext } from '../utils/dbContext';
import Zaklad from './Zaklad';

const ContentImport = ({ nazev }: { nazev: string }) => {
  const { stranky } = useContext(dbContext);
  return (
    <>
      {stranky ? (
        stranky.map((stranka) =>
          stranka.Nazev === nazev ? (
            <>
              <Zaklad nazev={stranka.Nazev} />
              <div dangerouslySetInnerHTML={{ __html: stranka.Text }} />
            </>
          ) : null
        )
      ) : (
        <div className='mainOstatni'>
          <div className='loading'>
            <h3>NAHRÁVÁNÍ...</h3>
          </div>
        </div>
      )}
    </>
  );
};

export default ContentImport;
