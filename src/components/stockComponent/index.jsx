import React from "react";
import { Link } from 'react-router-dom';

export const StockComponent = () => {
        return(
            <>
                <header class="relative py-10 w-full  mx-auto bg-teal-300flex flex-row">
                    <Link to="/" class="h-20 w-20">
                        <svg fill="#000000" viewBox="5 100 1000 5" xmlns="http://www.w3.org/2000/svg"><title/><path d="M100,15a85,85,0,1,0,85,85A84.93,84.93,0,0,0,100,15Zm0,150a65,65,0,1,1,65-65A64.87,64.87,0,0,1,100,165ZM116.5,57.5a9.67,9.67,0,0,0-14,0L74,86a19.92,19.92,0,0,0,0,28.5L102.5,143a9.9,9.9,0,0,0,14-14l-28-29L117,71.5C120.5,68,120.5,61.5,116.5,57.5Z"/></svg>
                    </Link> 
                </header>

                <main class="relative w-full h-screen flex flex-row max-md:flex-col  bg-teal-300	">
                    <aside class="flex flex-col w-1/4  max-md:w-full ">
                    </aside>
                    <section class="flex flex-col w-3/4  ">
                        <table class="w-full">
                            <tr class="flex justify-evenly h-10">
                                <th class="w-10">Nombre</th>
                                <th class="w-10">Cantidad/Peso</th>
                                <th class="w-10">Marca</th>
                                <th class="w-10">Precio</th>
                            </tr>
                            <tr class="flex justify-evenly h-10">
                                <td>Destornillador</td>
                                <td>37</td>
                                <td>Bahco</td>
                                <td>6700</td>
                            </tr>
                        </table>
                    </section>
                </main>
            </>
        )

}

