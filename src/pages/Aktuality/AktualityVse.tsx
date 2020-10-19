import React, { useState, useContext } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import Pagination from '../../components/Pagination';
import AktualitaZastupce from '../../components/AktualitaZastupce';
import Layout from '../../components/Layout';
import { dbContext } from '../../utils/dbContext';
import { AktualitaIF } from '../../utils/dbInterfaces';

const Aktuality = ({ match }: RouteComponentProps<{ id: string }>) => {
  const { aktuality } = useContext(dbContext);
  const [currentPage, setCurrentPage] = useState(
    match.params.id ? Number(match.params.id) : 1
  );
  const postsPerPage: number = 6;

  const serazeniOdNejvyssiho = () => {
    return [].slice.call(aktuality).sort((a: AktualitaIF, b: AktualitaIF) => {
      return Number(b.id) - Number(a.id);
    });
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const aktualityZde = serazeniOdNejvyssiho().slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <Layout title='Aktuality'>
      <div className='mainOstatni'>
        {aktuality ? (
          <div className='aktualityContainer'>
            <h1>Aktuality</h1>
            <br />
            <div className='aktuality'>
              {aktualityZde.map((aktualita: AktualitaIF, index: number) => (
                <AktualitaZastupce
                  key={aktualita.id}
                  aktualita={aktualita}
                  pozadi={`aktualitaPozadi${index + 1}`}
                />
              ))}
            </div>
            <br />
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={aktuality.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          </div>
        ) : (
          <div className='loading'>
            <h3>NAHRÁVÁM...</h3>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Aktuality;
