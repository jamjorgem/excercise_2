import React, { useState, useEffect } from 'react'

export default function Clockf() {

    const state =
    {
        // Se genera una fecha como estado inicial del componente
        fecha: new Date(),
        edad: 0,
        nombre: 'Martín',
        apellidos: 'San José'
    };


    useEffect(() => {
        const timerID = setInterval(
            () => tick(), 1000
        );
        return () => {
            clearInterval(timerID);
        };
    }, []);

    const [statem, setStatem] = useState(state);
    function tick() {
        setStatem(
            {
                fecha: new Date(),
                edad: state.edad++,
                nombre: 'Martín',
                apellidos: 'San José'
            }
        );
    }

    return (
        <div>
            <h2>
                Hora Actual:
                {statem.fecha.toLocaleTimeString()}
            </h2>
            <h3>{statem.nombre} {statem.apellidos}</h3>
            <h1>Edad: {statem.edad}</h1>
        </div>
    )
}
