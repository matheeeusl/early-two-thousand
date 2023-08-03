export interface PostProps {
  id: string;
  titulo: string;
  subtitulo: string;
  descricao: string;
  autor: Autor;
  data: string;
  respostas: Resposta[];
}

export interface Resposta {
  id: string;
  autor: Autor;
  data: string;
  comentario: string;
}

export interface Autor {
  id: string;
  foto: string;
  nome: string;
  nick: string;
}
