export interface Course {
  name: string;
  schedule: string;
  img: string;
}

const courses: Course[] = [
  {
    name: "Decoración de Tortas",
    schedule: "Próximo: 12 de Junio",
    img: "/image/malene3.png",
  },
  {
    name: "Panificación Artesanal",
    schedule: "Próximo: 19 de Junio",
    img: "/image/malene3.png",
  },
  {
    name: "Postres Sin Horno",
    schedule: "Próximo: 26 de Junio",
    img: "/image/malene3.png",
  },
  {
    name: "Postres",
    schedule: "Próximo: 28 de Junio",
    img: "/image/malene3.png",
  },
];

export default courses;
