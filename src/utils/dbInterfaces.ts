interface AktualitaIF {
  Nazev: string;
  id: number;
  Image: { url: string } | null;
  Text: string;
}
interface ClenIF {
  Jmeno: string;
  Pozice: string;
  Image: { url: string } | null;
  Popis: string;
  id: number;
}
interface ClenKlubuIF {
  Jmeno: string;
  Pozice: string;
  Image: { url: string } | null;
  Popis: string;
  id: number;
  Poradi: number;
}
interface StrankaIF {
  Nazev: string;
  Text: string;
}

export { AktualitaIF, ClenIF, ClenKlubuIF, StrankaIF };
