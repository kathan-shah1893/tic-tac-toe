import React, { useState } from 'react';
import Squre from './Squre';
import '../App.css';

export default function Bord() {
    const [state, setState] = useState(Array(9).fill(null));
    const [isX, setX] = useState(true);

    const checkWinner = () => {
        const winnerLogic = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let logic of winnerLogic) {
            const [a, b, c] = logic;
            if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
                return state[a];
            }
        }

        return false;
    };

    const isWinner = checkWinner();

    const handleClick = (index) => {
        if (state[index] || isWinner) {
            return;
        }

        const copyState = [...state];
        copyState[index] = isX ? 'X' : 'O';
        setState(copyState);
        setX(!isX);
    };

    const setNew = () => {
        setState(Array(9).fill(null));
    };

    return (
        <div className='board-container'>
            {isWinner ? (
                <>
                    <div style={{color:"whitesmoke"}}>{isWinner} won the game</div>
                    <button className='play-again' onClick={setNew}>Play again</button>
                </>
            ) : (
                <>
                    <div className='board-row'>
                        <Squre value={state[0]} onClick={() => handleClick(0)} />
                        <Squre value={state[1]} onClick={() => handleClick(1)} />
                        <Squre value={state[2]} onClick={() => handleClick(2)} />
                    </div>
                    <div className='board-row'>
                        <Squre value={state[3]} onClick={() => handleClick(3)} />
                        <Squre value={state[4]} onClick={() => handleClick(4)} />
                        <Squre value={state[5]} onClick={() => handleClick(5)} />
                    </div>
                    <div className='board-row'>
                        <Squre value={state[6]} onClick={() => handleClick(6)} />
                        <Squre value={state[7]} onClick={() => handleClick(7)} />
                        <Squre value={state[8]} onClick={() => handleClick(8)} />
                    </div>
                </>
            )}
        </div>
    );
}
