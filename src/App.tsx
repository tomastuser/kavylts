import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import UvodniStrana from './pages/UvodniStrana';

import KdoJsme from './pages/ONas/KdoJsme';
import Aktualita from './pages/Aktuality/Aktualita';
import AktualityVse from './pages/Aktuality/AktualityVse';
import NasiLide from './pages/ONas/NasiLide';
import Ohlasy from './pages/ONas/Ohlasy';
import Projekty from './pages/ONas/Projekty';
import Sponzori from './pages/ONas/Sponzori';
import Dokumenty from './pages/ONas/Dokumenty';

import LesniSkolky from './pages/LesniSkolky/LesniSkolky';
import Tabory from './pages/Tabory/Tabory';

import Nabidka from './pages/Enviroprogramy/Nabidka';
import Informace from './pages/Enviroprogramy/Informace';

import DalsiAktivityUvod from './pages/DalsiAktivity/DalsiAktivityUvod';
import Jurta from './pages/DalsiAktivity/Jurta';
import Akce from './pages/DalsiAktivity/Akce';
import Volnocas from './pages/DalsiAktivity/Volnocas';
import Prednasky from './pages/DalsiAktivity/Prednasky';

import Kontakt from './pages/Kontakt';

import Foto from './pages/Aktuality/Foto';
import ScrollToTop from './utils/ScrollToTop';
import useFetch from './utils/useFetch';
import PageNotFound from './pages/404';

import { AktualitaIF, ClenIF, StrankaIF } from './utils/dbInterfaces';
import { dbContext } from './utils/dbContext';

const App = () => {
  let aktuality: AktualitaIF[] | undefined = useFetch(
    'https://kavyl.herokuapp.com/aktuality/'
  );
  let clenove: ClenIF[] | undefined = useFetch(
    'https://kavyl.herokuapp.com/lide'
  );
  let stranky: StrankaIF[] | undefined = useFetch(
    'https://kavyl.herokuapp.com/stranky'
  );

  return (
    <Router>
      <ScrollToTop />
      <div className='App'>
        <dbContext.Provider value={{ aktuality, clenove, stranky }}>
          <Switch>
            <Route path='/' exact component={UvodniStrana} />
            <Route path='/onas' exact component={KdoJsme} />
            <Route path='/onas/KdoJsme' exact component={KdoJsme} />
            <Route path='/onas/aktuality' exact component={AktualityVse} />
            <Route exact path='/onas/aktualita/:id' component={Aktualita} />
            <Route
              exact
              path='/onas/aktuality/strana/:id'
              component={AktualityVse}
            />
            <Route path='/onas/nasilide' exact component={NasiLide} />
            <Route path='/onas/projekty' exact component={Projekty} />
            <Route path='/onas/ohlasy' exact component={Ohlasy} />
            <Route path='/onas/dokumenty' exact component={Dokumenty} />
            <Route path='/onas/sponzori' exact component={Sponzori} />

            <Route exact path='/lesniskolky' component={LesniSkolky} />
            <Route exact path='/tabory' component={Tabory} />

            <Route exact path='/enviroprogramy/' component={Nabidka} />
            <Route exact path='/enviroprogramy/nabidka' component={Nabidka} />
            <Route
              exact
              path='/enviroprogramy/informace'
              component={Informace}
            />

            <Route exact path='/dalsiaktivity/' component={DalsiAktivityUvod} />
            <Route
              exact
              path='/dalsiaktivity/prednasky'
              component={Prednasky}
            />
            <Route exact path='/dalsiaktivity/akce' component={Akce} />
            <Route exact path='/dalsiaktivity/volnocas' component={Volnocas} />
            <Route exact path='/dalsiaktivity/jurta' component={Jurta} />

            <Route path='/kontakt' exact component={Kontakt} />

            <Route exact path='/onas/aktualita/:id/foto' component={Foto} />
            <Route path='*' exact component={PageNotFound} />
          </Switch>
        </dbContext.Provider>
      </div>
    </Router>
  );
};

export default App;
