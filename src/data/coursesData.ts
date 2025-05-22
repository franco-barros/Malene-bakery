export interface Course {
  name: string;
  schedule: string;
  img: string;
  description: string;
}

const courses: Course[] = [
  {
    name: "Decoración de Tortas",
    schedule: "Próximo: 12 de Junio",
    img: "/image/malene3.png",
    description: "ventas de un dia",
  },
  {
    name: "Panificación Artesanal",
    schedule: "Próximo: 19 de Junio",
    img: "/image/malene3.png",
    description: "ventas de dos dias ",
  },
  {
    name: "Postres Sin Horno",
    schedule: "Próximo: 26 de Junio",
    img: "/image/malene3.png",
    description: "ventas un tercer dia ",
  },
];

export default courses;
