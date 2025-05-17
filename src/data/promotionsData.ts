export interface Promotion {
  title: string;
  desc: string;
  img: string;
  prices: Record<string, string>;
}

const promotions: Promotion[] = [
  {
    title: "Box Clásico",
    desc: "Torta 2 kg + 10 minitartitas + 10 alfajores",
    img: "/image/malene15.png",
    prices: {
      Chico: "$ 60 000",
      Mediano: "$ 87 000",
      Grande: "$ 130 000",
    },
  },
  {
    title: "Box Premium",
    desc: "Torta 3 kg + 20 minitartitas + 20 alfajores",
    img: "/image/malene17.png",
    prices: {
      Chico: "$ 70 000",
      Mediano: "$ 96 000",
      Grande: "$ 160 000",
    },
  },
  {
    title: "Promos de Eventos",
    desc: "Descuentos por compras de cajas de minitartitas o alfajores",
    img: "/image/malene16.png",
    prices: {
      "3 cajas": "10 % OFF",
      "4 cajas": "15 % OFF",
      "5 cajas": "20 % OFF",
    },
  },
];

export default promotions;
