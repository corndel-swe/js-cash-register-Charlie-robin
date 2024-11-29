import { drawer } from '../drawer.js'

// Level 2

/**
 * Goes through the given drawer and counts how many *coins* there are in total
 * N.b. just the number of coins, not the total value of them
 * N.b. $1 is a note, not a coin
 * @param {object[]} drawer
 * @returns {number} How many coins are in the drawer
 */
export function countCoins(drawer) {
  // code herequarter
  return drawer.reduce((acc, cur) => cur.value < 100 ? acc + cur.quantity : acc, 0)
}

/**
 * Same as count coins but for *notes* instead
 * @param {object[]} drawer
 * @returns {number} How many notes are in the drawer
 */
export function countNotes(drawer) {
  // code here
  return drawer.reduce((acc, cur) => cur.value >= 100 ? acc + cur.quantity : acc, 0)

}
