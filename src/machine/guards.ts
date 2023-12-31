import { currentPlayer, freePosition, freePositionY, winingPositions } from "../funct/game";
import { GameContext, GameEvent, GameGuard, PlayerColor } from "../types";

export const canJoinGuard: GameGuard<"join"> = (context, event) => {
    return context.players.length < 2 && context.players.find(p => p.id === event.playerId) === undefined
}

export const canLeaveGuard: GameGuard<"join"> = (context, event) => {
    return !!context.players.find(p => p.id === event.playerId)
}

export const canChooseColorGuard: GameGuard<"chooseColor"> = (context, event) => {
    return [PlayerColor.RED, PlayerColor.YELLOW].includes(event.color)
        && context.players.find(p => p.id === event.playerId) !== undefined
        && context.players.find(p => p.id === event.playerId) === undefined
}

export const canStartGameGuard: GameGuard<"start"> = (context, event) => {
    return context.players.filter(p => p.color).length === 2
}

export const canDropGuard: GameGuard<"dropToken"> = (context, event) => {
    console.log();
    
    return event.x < context.grid[0].length
        && event.x >= 0
        && context.currentPlayer === event.playerId
        && freePositionY(context.grid, event.x) >= 0
}

export const isWiningMoveGuard: GameGuard<"dropToken"> = (context, event) => {
    return canDropGuard(context, event) && winingPositions(
        context.grid,
        currentPlayer(context).color,
        event.x,
        context.rowLength
        ).length > 0
}

