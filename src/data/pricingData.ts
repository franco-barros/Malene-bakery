export interface Item {
  name: string;
  detail?: string;
  price?: string;
}

export interface Section {
  title: string;
  image?: string;
  items: Item[];
}

const pricingSections: Section[] = [
  {
    title: "Tortas de Cumpleaños",
    image: "/image/malene.png",
    items: [
      {
        name: "Precio por kg",
        detail: "Chocolate o merengue",
        price: "$ 22.000",
      },
      { name: "Buttercream", price: "$ 23.000" },
    ],
  },
  {
    title: "Otras Tortas",
    image: "/image/malene8.png",
    items: [
      { name: "Pistacho", detail: "Ganache y frutas", price: "$ 25.000" },
      { name: "Carrot Cake", price: "$ 20.000" },
      { name: "Matilda", price: "$ 22.000" },
      { name: "Selva Negra", price: "$ 22.000" },
    ],
  },
  {
    title: "Tamaños de Tortas",
    image: "/image/malene9.png",
    items: [
      { name: "Chicas", price: "$ 38.500" },
      { name: "Medianas", price: "$ 42.000" },
      { name: "Grandes", price: "$ 45.000" },
    ],
  },
  {
    title: "Postres",
    image: "/image/malene10.png",
    items: [
      { name: "Porción chica", price: "$ 40.000" },
      { name: "Porción mediana", price: "$ 43.000" },
      { name: "Porción grande", price: "$ 47.000" },
      { name: "Cheesecake", detail: "Clásica o Purple", price: "varía" },
      { name: "Tiramisú", price: "varía" },
      { name: "Chocotorta", price: "varía" },
    ],
  },
  {
    title: "Alfajores",
    image: "/image/malene11.png",
    items: [
      { name: "Pistacho", price: "$ 3.500" },
      { name: "Chocolate", price: "$ 2.800" },
      { name: "Macarons", price: "$ 2.000" },
    ],
  },
  {
    title: "Cookies",
    image: "/image/malene14.png",
    items: [
      { name: "Clásica" },
      { name: "Flora" },
      { name: "Purple" },
      { name: "Bomba" },
      { name: "Pistacchio" },
    ],
  },
  {
    title: "Cajas Surtidas",
    image: "/image/malene16.png",
    items: [
      { name: "25 Mini Tartitas", price: "$ 60.000" },
      { name: "50 Mini Cremas", price: "$ 52.000" },
      { name: "25 Shots", price: "$ 43.000" },
      { name: "50 Alfajores de Chocolate", price: "$ 32.000" },
    ],
  },
];

export default pricingSections;
