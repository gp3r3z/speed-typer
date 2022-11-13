import { Player } from "./Models/Player.js"
import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', [Value])

  /** @type {import('./Models/Player').Player[]} */
  players = [
    new Player({ name: 'Gillardo' }),
    new Player({ name: 'Jannette' }),
    new Player({ name: 'Lilu' })
  ]
  /** @type {import('./Models/Player').Player|null} */
  activePlayer = null

  fruits = ['pear', 'apple', 'banana']

  activeFruit = null

  // NOTE loading from state
  // ...........where they are stored..| what they will be when loaded
  /** @type {import('./Models/Player').Player[]} */
  newPlayers = loadState('newPlayers', [Player])
}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
