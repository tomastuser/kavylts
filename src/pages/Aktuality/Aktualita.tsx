import React, { useContext } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import Layout from '../../components/Layout';
import { dbContext } from '../../utils/dbContext';
import { AktualitaIF } from '../../utils/dbInterfaces';
import Loading from '../../components/Loading';

const Aktualita = ({ match, history }: RouteComponentProps<{ id: string }>) => {
  const { aktuality } = useContext(dbContext);
  let aktualita: AktualitaIF | undefined = aktuality?.find((akt) => {
    return String(akt.id) === match.params.id;
  });
  return (
    <Layout title={aktualita ? aktualita.Nazev : 'loading'}>
      <div className='mainOstatni'>
        {aktuality && aktuality.length > 0 && aktualita ? (
          <div className='aktualityContainer'>
            <div
              className={`aktualita aktualitaPozadi${Math.floor(
                Math.random() * 6 + 1
              )}`}
            >
              <h2 className='aktualitaNadpis'>{aktualita.Nazev}</h2>
              <div className='aktualitaTelo'>
                <div className='aktualitaImg'>
                  {aktualita.Image && (
                    <Link to={`/onas/aktualita/${aktualita.id}/foto`}>
                      <div>
                        <img src={aktualita.Image.url} alt={aktualita.Nazev} />
                      </div>
                    </Link>
                  )}
                </div>
                <div
                  dangerouslySetInnerHTML={{ __html: aktualita.Text }}
                  className='aktualitaText'
                />
              </div>
              <button
                className='aktualitaButton button'
                onClick={history.goBack}
                onKeyDown={history.goBack}
              >
                Zpět
              </button>
            </div>
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </Layout>
  );
};

export default Aktualita;
