// src/data/teamData.ts
export interface TeamMember {
  name: string;
  role: string;
  img: string;
  phrase: string;
  description: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Malena Ruiz",
    role: "Fundadora & Pastelera",
    img: "/image/malene3.png",
    phrase: "Cada receta es un abrazo dulce para el alma.",
    description:
      "Con más de una década amasando sueños, Malena lleva la tradición arraigada en cada torta." +
      " Siempre dispuesta a innovar, combina sabores clásicos con un toque bien criollo para sorprender a todos en cada encuentro.",
  },
  {
    name: "Ana Torres",
    role: "Decoradora",
    img: "/image/malene3.png",
    phrase: "Ponéle onda y color a tu día.",
    description:
      "Ana transforma cada pastel en una fiesta visual: flores, guirnaldas y detalles que parecen salidos de un cuento de hadas porteño." +
      " Su chispa creativa le pone la frutilla al postre.",
  },
  {
    name: "Luis Martínez",
    role: "Barista",
    img: "/image/malene3.png",
    phrase: "Un mateo no alcanza, ¡pasá al café!",
    description:
      "Luis, cafetero de alma, prepara cada expreso con ritmo de tango: concentrado, apasionado y con mucho carácter." +
      " Sus recetas caseras de cortado y flat white te harán sentir en una esquina de Buenos Aires.",
  },
];

export default teamMembers;
