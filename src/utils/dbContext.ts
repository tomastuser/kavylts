import { createContext } from 'react';
import { AktualitaIF, ClenIF, ClenKlubuIF, StrankaIF } from './dbInterfaces';

let aktuality: AktualitaIF[] | undefined;
let clenove: ClenIF[] | undefined;
let clenoveKlubu: ClenKlubuIF[] | undefined;
let stranky: StrankaIF[] | undefined;

export const dbContext = createContext({
  aktuality,
  clenove,
  clenoveKlubu,
  stranky,
});
