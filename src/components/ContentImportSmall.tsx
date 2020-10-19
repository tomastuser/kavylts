import React, { useContext } from 'react';
import { dbContext } from '../utils/dbContext';

const ContentImportSmall = ({ nazev }: { nazev: string }) => {
  const { stranky } = useContext(dbContext);
  return (
    <>
      {stranky ? (
        stranky.map((stranka) =>
          stranka.Nazev === nazev ? (
            <div
              dangerouslySetInnerHTML={{ __html: stranka.Text }}
              key={stranka.Nazev}
            />
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

export default ContentImportSmall;
