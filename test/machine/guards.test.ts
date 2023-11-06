import { beforeEach, describe , expect, it} from 'vitest'
import { interpret, InterpreterFrom } from 'xstate'
import { GameMachine, GameModel, GameStates, makeGame } from '../../src/machine/GameMachine'
import { PlayerColor } from '../../src/types'

describe("machine/guards", ()=> {
    describe("canJoinGame", () => {

        let machine: InterpreterFrom<typeof GameMachine>

        beforeEach(()=>{
            machine = interpret(GameMachine).start()
        })

        it('should let a player join', () => {
            expect(machine.send(GameModel.events.join("1","1")).changed).toBe(true)
        })

        it('should not let me join a game twice', () => {
            expect(machine.send(GameModel.events.join("1","1")).changed).toBe(true)
            expect(machine.send(GameModel.events.join("1","1")).changed).toBe(false)
        })
    })

    describe("dropToken", () => {
        const machine = makeGame(GameStates.PLAY, {
            players: [{
                id: '1',
                name: '1',
                color: PlayerColor.RED
            }, {
                id: '2',
                name: '2',
                color: PlayerColor.YELLOW
            }],
            currentPlayer: '1',
            grid: [
                ["E","E","E","E","E","E","R"],
                ["E","E","E","E","E","R","Y"],
                ["E","E","E","E","E","R","R"],
                ["E","E","E","E","E","R","Y"],
                ["E","E","E","E","E","Y","R"],
                ["E","E","E","E","E","Y","Y"]
            ]
        })

        it('should let me drop a token', () => {

        })
    }
})