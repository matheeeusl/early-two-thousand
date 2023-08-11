import React from "react";

export interface IPost {
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
  assinatura?: string;
}

export interface AdProps {
  id: string;
  size: Size;
  src: string;
  alt: string;
  link?: string;
}

export interface Size {
  height: string;
  width: string;
}

export interface IAssinatura {
  assinatura: string;
}

export interface IBasicModal {
  onClose: () => void;
  show: boolean;
}

export interface IMultiInput {
  length: number;
  onComplete: (code: string) => void;
}

export interface IRegistro {
  data: string;
  conteudo: string;
}
