import React from "react";


export const ClientComponent = () => {

    return (
        <>
            <header class="relative py-10 w-full max-w-xl mx-auto bg-white flex flex-row">
               <h2>filter / hacer filtro</h2>
                <input placeholder="Escriba aquí para buscar...">
                </input>
            </header>
            <main class="relative w-full max-w-xl mx-auto bg-white flex flex-row">
                
                <section class="flex flex-col w-2/4">
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
                        <fieldset>
                            <legend> Nuevo Cliente</legend>
                            <input type="text" placeholder="Nombre"/>
                            <input type="number" placeholder="Cuit"/>
                            <input type="text" placeholder="Tipo contribuyente"/>
                            <input type="text"placeholder="Alicuota" />
                        </fieldset>
                        <button for="post"> Poner una imagen para enviar o sumar</button>
                    </form>
                </aside>
            </main>
        
        </>
    )

}

