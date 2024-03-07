import "./style.css";
import { reservas } from "./model";
import { ClienteParticular, TourOperador } from "./class";

const ejemplo = new ClienteParticular(reservas);

const subtotal = ejemplo.calcularSubtotal(reservas);
const total = ejemplo.calcularTotal(subtotal);

console.log("El precio sin IVA es: " + subtotal);
console.log("El precio con IVA es: " + total);

const ejemplo2 = new TourOperador(reservas);

const subtotal2 = ejemplo2.calcularSubtotal(reservas);
const total2 = ejemplo2.calcularTotal(subtotal);

console.log("El precio sin IVA es: " + subtotal2);
console.log("El precio con IVA es: " + total2);
