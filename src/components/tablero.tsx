import Cruz from './cruz'
import Circulo from './Circulo'
import { useEffect } from 'react';
export default function Tablero() {
    const celdas = [1,2,0,0,0,0,0,0,0];

    useEffect(() => {

    }, [])


    return (
        <div className="bg-[#e45858] w-[500px] h-[500px] grid gap-5 grid-cols-3">
            {celdas.map((i, id) => (
                <div className="bg-light p-4 min-h-[153px]" key={id}>
                    {i === 1 && <Cruz/>}
                    {i === 2 && <Circulo/>}
                </div>
            ))}
        </div>
    )
}