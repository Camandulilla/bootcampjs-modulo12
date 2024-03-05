const regex = /<img\ssrc=(?<url>"[^">]+")[^>]+>/gm;

export const urlImagenes = (texto: string) => {
  const listaUrl: string[] = [];
  let resultadoRegex;

  while ((resultadoRegex = regex.exec(texto)) !== null) {
    const { url } = resultadoRegex.groups as any;
    listaUrl.push(url);
  }

  return listaUrl;
};
