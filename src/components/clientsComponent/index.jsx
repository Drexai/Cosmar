import React from "react";
import { Link } from 'react-router-dom';

export const ClientComponent = () => {

    return (
        <>
            <header class="relative py-10 w-full  mx-auto bg-green-200 flex flex-row">
                <Link to="/" class="h-20 w-20">
                    <svg fill="#000000" viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg"><title/><path d="M100,15a85,85,0,1,0,85,85A84.93,84.93,0,0,0,100,15Zm0,150a65,65,0,1,1,65-65A64.87,64.87,0,0,1,100,165ZM116.5,57.5a9.67,9.67,0,0,0-14,0L74,86a19.92,19.92,0,0,0,0,28.5L102.5,143a9.9,9.9,0,0,0,14-14l-28-29L117,71.5C120.5,68,120.5,61.5,116.5,57.5Z"/></svg>
                </Link> 
               <h2>Filter / hacer filtro</h2>
                <input class="h-7 rounded-full text-center border-2 border-green-100  "  placeholder="Escriba aquí para buscar...">
                </input>
            </header>
            <main class="relative w-full h-screen  mx-auto  flex flex-row bg-green-200">
                <section class="flex flex-col w-2/4 ">
                    <h2 class="w-full">
                        Lista de Clientes
                    </h2>   
                    <tr class="w-full">
                        <th class="w-1/3">Nombre</th>
                        <th class="w-1/3">CUIT</th>
                        <th class="w-1/3">Código</th>
                    </tr>
                    <tr>
                        <td>
                            Merce
                        </td>
                        <td>
                            No laburo en su vida
                        </td>
                        <td>
                            Marron clarito
                        </td>        
                    </tr>
                </section>
                <aside class="flex flex-col w-2/4">
                    <form>
                        <fieldset class="flex flex-col space-y-4 ">
                            <legend> Nuevo Cliente</legend>
                            <input class="max-[320px]: w-40" type="text" placeholder="Nombre"/>
                            <input class="max-[320px]: w-40" type="number" placeholder="Cuit"/>
                            <input class="max-[320px]: w-40" type="text" placeholder="Tipo contribuyente"/>
                            <input class="max-[320px]: w-40" type="text"placeholder="Alicuota" />
                        </fieldset>
                        <button for="post"> Poner una imagen para enviar o sumar</button>
                    </form>
                </aside>
            </main>
        
        </>
    )

}

