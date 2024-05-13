import React from "react";

export const BudgetComponent = () => {

    return (
        <>
            <header class="relative py-10 mx-auto">
                <nav class="relative w-full max-w-xl mx-auto bg-white flex flex-row">
                    <aside class="flex flex-col w-40">
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
                    <form action="relative w-full max-w-xl mx-auto bg-white flex flex-row">
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
                                    <input type="checkbox"/>
                                    <input type="checkbox"/>
                                    <input type="checkbox"/>
                        
                            </li>
                            <li></li>
                            <li></li>
                        </ul>
                    </form>
                </nav>
            </header>
            <section class="relative w-full max-w-xl mx-auto bg-white flex flex-row flex space-x-20">
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

