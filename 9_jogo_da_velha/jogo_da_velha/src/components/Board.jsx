import React from 'react'
import { useState, useEffect } from 'react'
import Square from './Square'

const Board = () => {
    const [isNext, setIsNext] = useState(true);
    const winner = false;

    return (
        <div>
            <div className="status">
                Status:{" "}
                {winner ? (
                    <p className="winner">O vencedor é: {winner}!</p>
                ) : (
                    `Próximo a jogar: ${isNext ? "X" : "O"}`

                )}
            </div>
            <Square />
        </div>
    )
}

export default Board
