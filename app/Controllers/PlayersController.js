import { appState } from "../AppState.js"
import { setHTML, setText } from "../Utils/Writer.js"
import { getFormData } from "../Utils/FormHandler.js"
import { playersService } from "../Services/PlayersService.js"

function _drawPlayers() {
    let template = ''
    // let players = appState.players
    let newPlayers = appState.newPlayers
    // players.forEach(player => template += player.ListTemplate)
    newPlayers.forEach(np => template += np.ListTemplate)
    setHTML('list-template', template)

    // console.log('%cLOG: ', 'color:green;', template)
}
function _drawActivePlayer() {
    let player = appState.activePlayer
    setHTML('active-player', player.ActivePlayerTemplate)


    // console.log('%cLOG: ', 'color:green;', template)
}

function _endGame() {
    window.alert('GAME OVER')
}




export class PlayersController {
    constructor() {
        console.log('%cLOG: ', 'color:green;', 'Player controller connected')
        _drawPlayers()
        // appState.on('players', _drawPlayers)
        appState.on('activePlayer', _drawActivePlayer)
        appState.on('newPlayers', _drawPlayers)


    }
    addPlayer() {
        console.log('%cLOG: ', 'color:yellow;', 'AddPlayer Triggered')
        window.event.preventDefault()
        let form = window.event.target
        let formData = getFormData(form)
        playersService.addPlayer(formData)
        form.reset()
    }
    setActivePlayer(playerID) {
        console.log('%cLOG: ', 'color:green;', 'Getting Active Player', playerID)
        playersService.setActivePlayer(playerID)
        // this.startGame()
        this.getRandomFruit()

    }
    playerInput() {
        console.log('%cLOG: ', 'color:green;', 'PlayerInput Triggered')
        window.event.preventDefault()
        let form = window.event.target
        let formData = getFormData(form)

        playersService.playerInput(formData)
        form.reset()
        _drawActivePlayer()
        _drawPlayers()


    }
    getRandomFruit() {
        const randomFruit = appState.fruits[Math.floor(Math.random() * appState.fruits.length)]
        console.log('%cLOG: ', 'color:yellow;', randomFruit)
        setText('current-word', randomFruit)
        playersService.setActiveFruit(randomFruit)
    }
    startGame() {
        document.getElementById('fruit-input').focus()
        setTimeout(_endGame, 5000)

    }


}