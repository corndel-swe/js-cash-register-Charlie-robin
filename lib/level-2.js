import { drawer } from "../drawer.js";

// Level 2

/**
 * Goes through the given drawer and counts how many *coins* there are in total
 * N.b. just the number of coins, not the total value of them
 * N.b. $1 is a note, not a coin
 * @param {object[]} drawer
 * @returns {number} How many coins are in the drawer
 */
export function countCoins(drawer) {
  const count = drawer.reduce((total, item) => {
    console.log("Total " + total);
    if (item.value < 100) {
      return total + item.quantity;
    } else {
      return total;
    }
  }, 0);

  // code here
  return count;
}

countCoins(drawer)

/**
 * Same as count coins but for *notes* instead
 * @param {object[]} drawer
 * @returns {number} How many notes are in the drawer
 */
export function countNotes(drawer) {
  return drawer.reduce((total, item) => {
    if (item.value > 100) {
      return total + item.quantity;
    } else {
      return total;
    }
  }, 0);
}
