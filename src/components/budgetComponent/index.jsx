import React from "react";
import { Link } from 'react-router-dom';

// realizar 3 visualizaciones dentro de la de vista 1. Facturación 2. Remito 3. Presupuesto

export const BudgetComponent = () => {

    return (
        <>
            <header class="relative w-full  mx-auto bg-orange-200 flex flex-col">
                <nav class="relative py-5  w-full h-full bg-orange-200 flex justify-around">
                    <Link to="/" class="h-20 w-20">
                        <svg fill="#000000" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><title/><path d="M100,15a85,85,0,1,0,85,85A84.93,84.93,0,0,0,100,15Zm0,150a65,65,0,1,1,65-65A64.87,64.87,0,0,1,100,165ZM116.5,57.5a9.67,9.67,0,0,0-14,0L74,86a19.92,19.92,0,0,0,0,28.5L102.5,143a9.9,9.9,0,0,0,14-14l-28-29L117,71.5C120.5,68,120.5,61.5,116.5,57.5Z"/></svg>
                    </Link> 
                    <aside class="flex flex-col">
                        <button>
                            <h2>Generar Factura A</h2>
                        </button>
                        <button>
                            <h2>Generar Factura B</h2>
                        </button>
                        <button>
                            <h2>Presupuesto</h2>
                        </button>
                        <button>
                            <h2>Clientes Registrados</h2>
                        </button>
                    </aside>
                    <form action="relative h-screen bg-orange-200 flex flex-row ">
                        <ul>
                            <li><label htmlFor=""></label>
                                <input type="text" placeholder="Señores/señoras:" />
                            </li>
                            <li><label htmlFor="">
                                </label><input placeholder="Cuenta N°:" type="text" />
                            </li>
                            <li><label htmlFor="">
                                </label><input placeholder="N° Remito:" type="text" />
                            </li>
                            <li><label htmlFor="">
                                </label><input placeholder="Domicilio" type="text" />
                            </li>
                            <li><label htmlFor="">
                                </label><input input placeholder="Localidad" type="text" />
                            </li>
                            <li><label  placeholder="empleado" htmlFor="">
                                    <input  type="text" />
                                </label>
                            </li>
                            <li><label placeholder="Iva" htmlFor="">
                                    <input placeholder="Iva" type="checkbox"/>
                                </label>
                            </li>
                            <li></li>
                            <li></li>
                        </ul>
                    </form>
                </nav>
                <div class="relative w-2/4 h-10 max-w-xl mx-auto bg-white rounded-full lg:max-w-none">
                        <input type="search" placeholder="Busqueda de productos"  class="rounded-full w-full h-10 bg-transparent  text-center outline-none border-2 border-gray-100 shadow-md hover:outline-none focus:ring-cool-indigo-200 focus:border-cool-indigo-200" >
                    
                        </input>
                        <button type="" class="absolute inline-flex items-center h-8  
                        text-sm text-black transition duration-150 duration-300 ease-in-out rounded-full 
                        outline-none right-1 top-1 bg-indigo-600 sm:px-6 sm:text-base sm:font-medium
                        hover:bg-cool-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cool-indigo-500">
                                <svg class=" max-sm:w-10 mr-2 w-4 h-4 sm:h-5 sm:w-5 items-center" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                        </button>
                </div>
            </header>
            <section class="relative  h-screen w-full     bg-orange-200  flex flex-row flex justify-center md:space-x-20">
                <div class="flex flex-col">
                    <h2>Código</h2>
                </div>
                <div class="flex flex-col">
                    <h2>Cantidad</h2>
                </div>
                <div class="flex flex-col">
                    <h2>Descripción</h2>
                </div>
                <div class="flex flex-col">
                    <h2>Precio Unitario</h2>
                </div>
                <div class="flex flex-col">
                    <h2>Precio Total</h2>
                </div>
            </section>

        </>
    )
}

