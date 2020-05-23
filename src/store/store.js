import { writable } from "svelte/store";

let carrito = writable([]);
let sumQty = writable(0);
let sumPrice = writable(0);

export { carrito, sumQty, sumPrice };
