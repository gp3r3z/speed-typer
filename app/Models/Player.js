import { generateId } from "../Utils/generateId.js"

export class Player {
  constructor(data) {
    this.id = generateId()
    this.name = data.name
    this.score = 0
  }

  get ListTemplate() {
    return /*html*/`
           <ul class="list-group d-flex mt-3">
                <li
                onclick="app.playersController.setActivePlayer('${this.id}')"
                  class="list-group-item d-flex justify-content-between align-items-center"
                >
                 ${this.name}
                  <span class="badge bg-primary rounded-pill">${this.score}</span>
                </li>
              </ul>
             
            
        `
  }
  get ActivePlayerTemplate() {
    return /*html*/`
           <h3>${this.name}</h3>
              <h3>${this.score}</h3>
            
        `
  }
}