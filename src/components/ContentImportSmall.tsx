import React, { useContext } from 'react';
import { dbContext } from '../utils/dbContext';
import Loading from './Loading';

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
          <Loading />
        </div>
      )}
    </>
  );
};

export default ContentImportSmall;
