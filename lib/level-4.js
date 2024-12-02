import { drawer } from "../drawer.js";

// Level 4

/**
 * Returns true if it is possible to make the target amount out of the cash in the drawer
 * Returns false if it is not possible
 * @param {number} target - the amount of money to try and make
 * @param {object[]} drawer
 * @returns {boolean} whether it is possible to make the amount from the drawer
 */
export function canMakeAmount(target, drawer) {
  for (let index = 0; index < drawer.length; index++) {
    let { value, quantity } = drawer[index];

    while (quantity > 0 && target >= value) {
      target -= value;
      quantity--;
    }

    if (target === 0) {
      return true;
    }
  }

  return target === 0;
}
