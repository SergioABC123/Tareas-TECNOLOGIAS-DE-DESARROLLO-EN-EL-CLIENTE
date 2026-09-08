import type { Proyecto, Tecnologia, Educacion, Hobby } from '../types';

export const nombreCompleto = "Sergio Lavin Orozco Miranda";
export const rolProfesional = "Desarrollador"; 
export const acercaDeMi = `Estudiante del ITESO en 6to semestre con interes en bases de datos`;

export const proyectos: Proyecto[] = [
  { id: 1, nombre: "PlayNSeek", descripcion: "Red social tipo Tinder orientada a videojuegos" },
  { id: 2, nombre: "Aplicación fisica", descripcion: "Programa tipo red social orientada a los deportes" },
  { id: 3, nombre: "Calendario", descripcion: "Aplicacion tipo calendario" },
];

export const tecnologias: Tecnologia[] = [
  { id: 1, nombre: "C" },
  { id: 2, nombre: "TypeScript" },
  { id: 3, nombre: "JavaScript" },
  { id: 4, nombre: "Dgraph" },
  { id: 5, nombre: "SQL" },
];

export const educacion: Educacion[] = [
  { id: 1, grado: "licenciatura", nombre: "ITESO"},
];

export const hobbies: Hobby[] = [
  { id: 1, nombre: "Ejercicio" },
  { id: 2, nombre: "Videojuegos" },
  { id: 3, nombre: "Cocina" },
];