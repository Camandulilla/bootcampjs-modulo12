import { Reserva } from "./model";

//Clase padre:
export class General {
  precioStandard: number = 100;
  precioSuite: number = 150;
  iva: number = 21;
  desayuno: number = 15;
  precioPersona: number = 40;

  calculoPorPersona = (pax: number): number => {
    let resultado = 0;
    if (pax >= 1) {
      resultado = pax * this.precioPersona;
    }
    return resultado;
  };

  calcularSubtotal(reservas: Reserva[]): number {
    let subtotal = 0;

    reservas.forEach((reserva) => {
      if (reserva.tipoHabitacion === "standard") {
        subtotal += this.precioStandard * reserva.noches;
      } else if (reserva.tipoHabitacion === "suite") {
        subtotal += this.precioSuite * reserva.noches;
      }

      if (reserva.desayuno) {
        subtotal += this.desayuno * reserva.noches * reserva.pax;
      }

      subtotal += this.calculoPorPersona(reserva.pax - 1) * reserva.noches;
    });

    return subtotal;
  }

  calcularTotal(subtotal: number): number {
    let iva = (subtotal * this.iva) / 100;
    return subtotal + iva;
  }
}

//Clase Particular
export class ClienteParticular extends General {
  listaReservas: Reserva[];

  constructor(listaReservas: Reserva[]) {
    super();
    this.listaReservas = listaReservas;
  }
}

//Clase Tour Operador
export class TourOperador extends General {
  precioStandard: number = 100;
  precioSuite: number = 100;
  descuento: number = 15;
  listaReservas: Reserva[];

  constructor(listaReservas: Reserva[]) {
    super();
    this.listaReservas = listaReservas;
  }

  calcularTotal(subtotal: number): number {
    const iva = (subtotal * this.iva) / 100;
    const total = subtotal + iva;
    const descuento = (total * 15) / 100;
    return total - descuento;
  }
}
