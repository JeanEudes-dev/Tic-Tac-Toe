import React, { useState, useEffect } from 'react';
import { Button, Typography, Card } from 'antd';
import Board from './Board';

const { Title } = Typography;

const Game: React.FC = () => {
    const [squares, setSquares] = useState<(string | null)[]>(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);

    useEffect(() => {
        if (!isXNext && !calculateWinner(squares)) {
            const timer = setTimeout(makeAIMove, 500); // AI makes a move after 500ms
            return () => clearTimeout(timer);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [squares, isXNext]);

    const handleClick = (i: number) => {
        if (calculateWinner(squares) || squares[i]) return;
        const newSquares = squares.slice();
        newSquares[i] = isXNext ? 'X' : 'O';
        setSquares(newSquares);
        setIsXNext(!isXNext);
    };

    const makeAIMove = () => {
        const emptySquares = squares
            .map((value, index) => (value === null ? index : null))
            .filter(value => value !== null) as number[];
        if (emptySquares.length > 0) {
            const randomIndex = emptySquares[Math.floor(Math.random() * emptySquares.length)];
            const newSquares = squares.slice();
            newSquares[randomIndex] = 'O';
            setSquares(newSquares);
            setIsXNext(true);
        }
    };

    const winner = calculateWinner(squares);
    const status = winner ? `Winner: ${winner}` : `Next player: ${isXNext ? 'X' : 'O'}`;

    return (
        <Card style={{ width: 400, textAlign: 'center' }}>
            <Title level={2}>Tic-Tac-Toe</Title>
            <Board squares={squares} onClick={handleClick} />
            <div style={{ marginTop: '20px' }}>
                <Title level={4}>{status}</Title>
                <Button onClick={() => {
                    setSquares(Array(9).fill(null));
                    setIsXNext(true);
                }}>Restart</Button>
            </div>
        </Card>
    );
};

// Helper function to calculate the winner
const calculateWinner = (squares: (string | null)[]) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
};

export default Game;