import { urlImagenes } from "./motor";

const areaTexto = document.getElementById("espacioTexto");
const bExtraerTexto = document.getElementById("boton");
const contenedorResultado = document.getElementById("contenedorResultado");

export function initUI() {
  if (bExtraerTexto && bExtraerTexto instanceof HTMLButtonElement) {
    bExtraerTexto.addEventListener("click", () => {
      if (areaTexto && areaTexto instanceof HTMLTextAreaElement) {
        const textoUsuario = areaTexto.value;
        const resultado = urlImagenes(textoUsuario);
        pintarResultado(resultado);
      }
    });
  }
}

const pintarResultado = (texto: string[]) => {
  if (contenedorResultado && contenedorResultado instanceof HTMLElement) {
    texto.forEach((url: string) => {
      const hUrl = document.createElement("h3");
      hUrl.classList.add("url");
      hUrl.innerHTML = url;

      contenedorResultado?.appendChild(hUrl);
    });
  }
};
