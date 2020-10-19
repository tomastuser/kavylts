import React, { useState } from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFrog,
  faKiwiBird,
  faCat,
  faFish,
  faCrow,
} from '@fortawesome/free-solid-svg-icons';
import Layout from '../components/Layout';

const PageNotFound = () => {
  const [randomAnimal] = useState(Math.floor(Math.random() * 5 + 1));
  const zvirata = [faFrog, faCat, faFish, faKiwiBird, faCrow];

  return (
    <Layout title='Stránka nenalezena'>
      <div className='mainTextCont'>
        <div className='mainText'>
          <h1>404 - STRÁNKA NENALEZENA</h1>
          <div>
            <h1>
              {zvirata.map(
                (icon: IconDefinition, index: number) =>
                  index === randomAnimal && (
                    <FontAwesomeIcon
                      key={icon.iconName}
                      icon={icon}
                      size='3x'
                      fixedWidth
                    />
                  )
              )}
            </h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PageNotFound;
