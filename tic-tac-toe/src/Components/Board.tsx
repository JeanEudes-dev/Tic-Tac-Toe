import React from 'react';
import { Row, Col } from 'antd';
import Square from './Square';

type BoardProps = {
    squares: (string | null)[];
    onClick: (i: number) => void;
};

const Board: React.FC<BoardProps> = ({ squares, onClick }) => {
    const renderSquare = (i: number) => {
        return <Square value={squares[i]} onClick={() => onClick(i)} />;
    };

    return (
        <div>
            {[0, 1, 2].map(row => (
                <Row key={row} gutter={[8, 8]}>
                    {[0, 1, 2].map(col => (
                        <Col key={col} span={8}>
                            {renderSquare(row * 3 + col)}
                        </Col>
                    ))}
                </Row>
            ))}
        </div>
    );
};

export default Board;
