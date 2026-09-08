export interface Proyecto {
  id: number;
  nombre: string;
  descripcion: string;
}

export interface Tecnologia {
  id: number;
  nombre: string;
}

export interface Educacion {
  id: number;
  grado: string;
  nombre: string;
}

export interface Hobby {
  id: number;
  nombre: string;
}

export interface DatosContacto {
  nombre: string;
  email: string;
  mensaje: string;
}