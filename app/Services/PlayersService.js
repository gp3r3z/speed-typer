import { appState } from "../AppState.js"
import { Player } from "../Models/Player.js"
import { saveState } from "../Utils/Store.js"


class PlayersService {
    addPlayer(formData) {
        console.log('%cLOG: ', 'color:green;', 'Player adding ...', formData)
        let newPlayer = new Player(formData)
        appState.newPlayers = [...appState.newPlayers, newPlayer]
        console.log('%cLOG: ', 'color:yellow;', 'Player Added', appState.newPlayers)
        saveState('newPlayers', appState.newPlayers)
    }
    setActivePlayer(playerID) {

        let selectedPlayer = appState.newPlayers.find(player => player.id == playerID)
        console.log('%cLOG: ', 'color:yellow;', selectedPlayer)
        appState.activePlayer = selectedPlayer

    }
    playerInput(formData) {
        console.log('%cLOG: ', 'color:green;', 'Checking input...', formData.playerInput)
        console.log('%cLOG: ', 'color:yellow;', 'Data', appState.activeFruit, formData.playerInput)


        if (appState.activeFruit == formData.playerInput) {
            console.log('%cLOG: ', 'color:green;', 'Correct')
            appState.activePlayer.score++
            appState.emit('active-player')
            console.log('%cLOG: ', 'color:yellow;', 'Player Result ', appState.activePlayer)


        } else {
            console.log('%cLOG: ', 'color:green;', 'False')
        }
    }
    setActiveFruit(activeFruit) {
        console.log('%cLOG: ', 'color:green;', 'Updating active fruit', activeFruit)
        appState.activeFruit = activeFruit
        console.log('%cLOG: ', 'color:yellow;', 'Active fruit updated', appState.activeFruit)

    }
}



export const playersService = new PlayersService()