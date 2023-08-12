import { store } from "@/store";

export const getAutorDataById = (id: string) => {
  const autores = store.getState().autores.autores;
  const autor = autores.find((autor) => autor.id === id);

  return autor;
};
