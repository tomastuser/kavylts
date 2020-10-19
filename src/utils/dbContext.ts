import { createContext } from 'react';
import { AktualitaIF, ClenIF, StrankaIF } from './dbInterfaces';

let aktuality: AktualitaIF[] | undefined;
let clenove: ClenIF[] | undefined;
let stranky: StrankaIF[] | undefined;

export const dbContext = createContext({ aktuality, clenove, stranky });
