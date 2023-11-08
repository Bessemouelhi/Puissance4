import { GridState, PlayerColor } from "../types";

export function freePositionY(grid: GridState, x: number): number {
    for (let y = grid.length - 1 ; y >= 0 ; y--) {
        if(grid[y][x] === 'E') {
            return y;
        }
    }
    return -1;
}

export function winingPositions(grid: GridState, color: PlayerColor, x: number, size: number){
    const directions = [
        [1,0],
        [0,1],
        [1,1],
        [1,-1]
    ]

    const position = {
        y: freePositionY(grid, x),
        x: x
    }

    for(let direction of directions) {
        let items = [position]
        for(let i = 1 ; i < size ; i++) {
            const x = position.x + (i * direction[1])
            const y = position.y + (i * direction[1])
        }
    }
}