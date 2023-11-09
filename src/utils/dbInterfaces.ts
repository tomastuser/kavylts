interface AktualitaIF {
  Nazev: string;
  id: number;
  Image: { url: string } | null;
  ImageUrl: string;
  Text: string;
}
interface ClenIF {
  Jmeno: string;
  Pozice: string;
  Image: { data: { attributes: { url: string } } } | null;
  Popis: string;
  ImageUrl: string;
  id: number;
}
interface ClenKlubuIF {
  Jmeno: string;
  Pozice: string;
  Image: { data: { attributes: { url: string } } } | null;
  Popis: string;
  ImageUrl: string;
  id: number;
  Poradi: number;
}
interface StrankaIF {
  Nazev: string;
  Text: string;
}

export { AktualitaIF, ClenIF, ClenKlubuIF, StrankaIF };
