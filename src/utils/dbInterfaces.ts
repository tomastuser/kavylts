interface AktualitaIF {
  Nazev: string;
  id: string;
  Image: { url: string };
  Text: string;
}
interface ClenIF {
  Jmeno: string;
  Pozice: string;
  Image: { url: string };
  Popis: string;
  id: string;
}
interface StrankaIF {
  Nazev: string;
  Text: string;
}

export { AktualitaIF, ClenIF, StrankaIF };
