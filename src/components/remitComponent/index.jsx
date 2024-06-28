import React from "react";
import { Link } from 'react-router-dom';

export const RemitComponent = () => {

    return (
        <>
            <header class="relative w-full  mx-auto bg-green-300 flex flex-row max-md:flex-col">
                    <Link to="/" class="h-20 w-20">
                        <svg fill="#000000" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><title/><path d="M100,15a85,85,0,1,0,85,85A84.93,84.93,0,0,0,100,15Zm0,150a65,65,0,1,1,65-65A64.87,64.87,0,0,1,100,165ZM116.5,57.5a9.67,9.67,0,0,0-14,0L74,86a19.92,19.92,0,0,0,0,28.5L102.5,143a9.9,9.9,0,0,0,14-14l-28-29L117,71.5C120.5,68,120.5,61.5,116.5,57.5Z"/></svg>
                    </Link> 
                <nav class="relative py-5  w-full h-full bg-green-300 max-md:flex flex-col">
                    <form class="w-full flex flex-row flex justify-evenly max-md:flex-col">
                            <div class="grid grid-cols-2 gap-7 bg-zinc-500	py-2 rounded max-md:flex flex-col justify-center " >
                                <label htmlFor="" class="max-md:flex justify-center">
                                    <input class="rounded-full" type="text" placeholder="Señores/señoras:" />
                                </label>
                                    
                                <label htmlFor="" class="max-md:flex justify-center">
                                    <input class="rounded-full" placeholder="Cuenta N°:" type="text" />
                                </label>
                                
                                <label htmlFor="" class="max-md:flex justify-center">
                                    <input class="rounded-full" placeholder="Domicilio:" type="text" />
                                </label>
                                
                                <label htmlFor="" class="max-md:flex justify-center">
                                     <input class="rounded-full" placeholder="Localidad" type="text" />
                                </label>
                                
                                <label htmlFor="" class="max-md:flex justify-center">
                                    <input class="rounded-full" placeholder="Localidad" type="text" />
                                </label>
                            </div>
                            <div class="grid grid-cols-4 gap-4 place-content-center bg-zinc-500	 rounded">
                                <label  placeholder="Iva" htmlFor=""> IVA1 <input placeholder="Iva" type="checkbox"/></label>
                                <label htmlFor=""> IVA 2 <input placeholder="Iva" type="checkbox"/> </label> 
                                <label htmlFor=""> IVA 3 <input placeholder="Iva" type="checkbox"/> </label> 
                                <label htmlFor=""> IVA 4 <input placeholder="Iva" type="checkbox"/> </label> 
                                <label htmlFor=""> IVA 5 <input placeholder="Iva" type="checkbox"/> </label> 
                                <label htmlFor=""> IVA 6 <input placeholder="Iva" type="checkbox"/> </label> 
                                <label htmlFor=""> IVA 7 <input placeholder="Iva" type="checkbox"/> </label> 
                                <label htmlFor=""> IVA 8 <input placeholder="Iva" type="checkbox"/> </label>     
                            </div>
                            <div  class="flex flex-col justify-evenly bg-zinc-500 rounded"  >
                                    <h2>Condiciones de venta:</h2>
                                <label htmlFor="" class="flex justify-end max-md:justify-center">
                                    Contado
                                    <input placeholder="Iva" type="checkbox"/>
                                </label>
                                <label htmlFor="" class="flex justify-end max-md:justify-center">
                                    Cheque
                                   <input placeholder="Iva" type="checkbox"/>
                                </label>
                                <label htmlFor="" class="flex justify-end max-md:justify-center">
                                    Tarj Crédito
                                    <input placeholder="Iva" type="checkbox"/>
                                </label>
                            </div>
                            <div  class="flex flex-col justify-evenly bg-zinc-500 rounded"  >
                                <label htmlFor="" class="flex justify-end max-md:justify-center">
                                    Reparto
                                    <input placeholder="Iva" type="checkbox"/>
                                </label>
                                <label htmlFor="" class="flex justify-end max-md:justify-center">
                                    A retirar Personalmente
                                    <input placeholder="Iva" type="checkbox"/>
                                </label>
                            </div>
                            <div class="border flex flex-col justify-around rounded bg-zinc-500	">
                                <h2 class=" text black">Factura Nro</h2>
                                <p class="text black">Insertar dato</p>
                            </div>
                    </form>
                </nav>
                
            </header>
            
            <main class="flex flex-col bg-green-300 ">
                <div class="relative w-2/4 h-10 max-w-xl mx-auto bg-white rounded-full lg:max-w-none">
                    <input type="search" placeholder="Busqueda de productos"  class="rounded-full w-full lg:w-90 h-10 bg-transparent  text-center outline-none border-2 border-gray-100 shadow-md hover:outline-none focus:ring-cool-indigo-200 focus:border-cool-indigo-200" >
                        
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
                <section class="h-screen w-full bg-green-300 md:space-x-20 ">
                    <table class="h-full w-full ">
                        <tr class="w-full flex justify-evenly ">
                            <th>Código</th> 
                            <th>Cantidad</th> 
                            <th>Descripción</th>
                            <th>Precio Unitario</th>
                            <th>Precio Total</th> 
                        </tr>
                    </table>   
                
            
                </section>

            </main>
        </>
    )
}




