export interface PostProps {
  id: string;
  titulo: string;
  subtitulo: string;
  descricao: string;
  autor: string;
  data: string;
  respostas: Resposta[];
}

export interface Resposta {
  id: string;
  autor: string;
  data: string;
  comentario: string;
}
