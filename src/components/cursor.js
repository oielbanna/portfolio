import React, { useEffect, useState } from 'react';
import '../styles/cursor.scss';

export default () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    function setCoords(x,y){
        setTimeout(()=>{
            setX(x);
            setY(y);
        }, 160)
    }


    useEffect(() => {
        document.onmousemove = (event) => {
            var e = event;
            setCoords(e.clientX, e.clientY)
        };
    })

    return (
        <div className="follow" style={{top: y, left: x}}/>
    );
}
