import React from "react";
import { Link } from 'react-router-dom';

export const StockComponent = () => {
        return(
            <>
                <header class="relative py-10 w-full  mx-auto bg-teal-300 flex flex-row">
                    <Link to="/" class="h-20 w-20">
                        <svg fill="#000000" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><title/><path d="M100,15a85,85,0,1,0,85,85A84.93,84.93,0,0,0,100,15Zm0,150a65,65,0,1,1,65-65A64.87,64.87,0,0,1,100,165ZM116.5,57.5a9.67,9.67,0,0,0-14,0L74,86a19.92,19.92,0,0,0,0,28.5L102.5,143a9.9,9.9,0,0,0,14-14l-28-29L117,71.5C120.5,68,120.5,61.5,116.5,57.5Z"/></svg>
                    </Link> 
                    <div class="relative w-2/4 h-10 max-w-xl mx-auto bg-white rounded-full lg:max-w-none">
                        <input type="search" placeholder="Busqueda de productos"  class="rounded-full w-full h-10 bg-transparent  text-center outline-none border-2 border-gray-100 shadow-md hover:outline-none focus:ring-cool-indigo-200 focus:border-cool-indigo-200" >
                    
                        </input>
                        <button type="" class="absolute inline-flex items-center h-8  
                        text-sm text-black transition duration-150 duration-300 ease-in-out rounded-full 
                        outline-none right-1 top-1 bg-teal-400 sm:px-6 sm:text-base sm:font-medium
                        hover:bg-cool-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cool-indigo-500">
                                <svg class=" max-sm:w-10 mr-2 w-4 h-4 sm:h-5 sm:w-5 items-center" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                        </button>
                    </div>   
                </header>

                <main class="relative w-full h-screen flex flex-row max-md:flex-col  bg-teal-300	">
                    <aside class=" w-1/4  max-md:w-full ml-2">
                        <div class="flex flex-col space-evenly rounded bg-stone-500	 ">
                            <button class="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm py-2.5 text-center mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900">Añadir inventario</button>
                            <button class="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm py-2.5 text-center mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900">Modificar</button>
                            <button class="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm py-2.5 text-center mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900">Eliminar</button>
                            <button class="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm py-2.5 text-center mb-1 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900">Historial</button>
                        </div>    

                    </aside>
                    <section class="flex flex-col w-3/4 hidden">
                    
                    </section>
                    <section class="flex flex-col w-3/4 max-md:w-full ">
                        <table class="w-full">
                            <tr class="flex justify-evenly max-md:space-between h-10">
                                <th class="w-10 max-md:w-auto">Nombre</th>
                                <th class="w-10 max-md:w-auto">Cantidad/Peso</th>
                                <th class="w-10 max-md:w-auto">Marca</th>
                                <th class="w-10">Precio</th>
                            </tr>
        
                            <tr class="flex justify-evenly max-md:space-between h-10">
                                <td class="w-10 max-md:w-auto">Destornillador</td>
                                <td class="w-10 max-md:w-auto">37</td>
                                <td>Bahco</td>
                                <td>6700</td>
                            </tr>
                        </table>
                    </section>
                </main>
            </>
        )

}

