import React from "react";
import { Link } from 'react-router-dom';

// realizar 3 visualizaciones dentro de la de vista 1. Facturación 2. Remito 3. Presupuesto

export const BudgetComponent = () => {

    return (
        <>
            <header class="relative w-full  mx-auto bg-orange-200 flex flex-row">
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
            </header>
            <section class="relative  h-screen w-full  bg-orange-200  flex flex-row flex justify-center md:space-x-20">
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

