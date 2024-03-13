import React from "react";


export const ClientComponent = () => {

    return (
        <>
            <header>
                <p>filter / hacer filtro</p>
                <input placeholder="Escriba aquí para buscar...">

                </input>
            </header>
            <main>
                <section>

                </section>
                <aside>
                    <form>
                        <fieldset>
                            <legend> Nuevo Cliente</legend>
                            <input type="text" placeholder="Nombre"/>
                            <input type="number" placeholder="Cuit"/>
                            <input type="text" placeholder="Tipo contribuyente"/>
                            <input type="text"placeholder="Alicuota" />
                        </fieldset>
                    </form>
                </aside>
            </main>
        
        </>
    )

}

