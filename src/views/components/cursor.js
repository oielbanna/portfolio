import React, { useEffect, useState } from 'react';
import '../../styles/cursor.scss';

export const Cursor = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    function setCoords(x, y) {
        setX(x);
        setY(y);
    }

    useEffect(() => {
        document.onmousemove = (event) => {
            var e = event;
            setCoords(e.clientX, e.clientY)
        };

        // return () => {
        //     document.removeEventListener('mousemove', () => { }, false);
        // }
    }, [x, y])

    return (
        <div className="follow" style={{ top: y, left: x }} />
    );
}
