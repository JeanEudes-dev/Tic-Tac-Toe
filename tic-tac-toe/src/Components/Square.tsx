import React from 'react';
import { Button } from 'antd';

type SquareProps = {
    value: string | null;
    onClick: () => void;
};

const Square: React.FC<SquareProps> = ({ value, onClick }) => {
    return (
        <Button type="primary" className='btn' onClick={onClick} style={{ height: '90px', width: '90px', fontSize: '24px' }}>
            {value}
        </Button>
    );
};

export default Square;
