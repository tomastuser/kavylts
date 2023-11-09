import React, { useContext } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Layout from '../../components/Layout';
import { dbContext } from '../../utils/dbContext';
import { AktualitaIF } from '../../utils/dbInterfaces';

import Loading from '../../components/Loading';

const Foto = ({ match, history }: RouteComponentProps<{ id: string }>) => {
  const { aktuality } = useContext(dbContext);
  let aktualita: AktualitaIF | undefined = aktuality?.find((akt) => {
    return String(akt.id) === match.params.id;
  });
  return (
    <Layout title={`Foto č. ${aktualita && aktualita.id}`}>
      <div className='mainOstatni'>
        {aktualita ? (
          <div className='fotoContainer'>
            <div className='foto'>
              {aktualita.Image?.data || aktualita.ImageUrl ? (
                <div className='fotoImgCont'>
                  <img
                    src={
                      aktualita.Image?.data
                        ? aktualita.Image.data.attributes.url
                        : aktualita.ImageUrl
                    }
                    alt={aktualita.Nazev}
                    onClick={history.goBack}
                    onKeyDown={history.goBack}
                    role='presentation'
                  />
                </div>
              ) : (
                <h1>Foto neexistuje</h1>
              )}
              <div
                className='button'
                style={{
                  width: '35%',
                  marginRight: 'auto',
                  marginLeft: 'auto',
                }}
                onClick={history.goBack}
                onKeyDown={history.goBack}
                role='button'
                tabIndex={0}
              >
                Zpět
              </div>
            </div>
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </Layout>
  );
};

export default Foto;
