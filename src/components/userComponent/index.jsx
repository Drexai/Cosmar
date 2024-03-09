import React from "react";





export const UserComponent = () => {

return(
    <>
        <header>
            <nav>
                <h1>Accesos</h1>
            </nav>
        </header>
        <body>
            <main>
                <aside>
                    <div>
                        <h2>Crear nuevo usaurio</h2>
                        <input type="text">
                        </input>
                    </div>
                    <div>
                        <h2>Contraseña</h2>
                        <input type="password">
                        </input>
                    </div>
                    
                    <div>
                        <h2>Repetir Contraseña</h2>
                        <input type="password"> 

                        </input>
                    </div>
                </aside>
                <section>
                    <div>
                        <h2>Facturación</h2>
                        <input type="checkbox"> 

                        </input>
                    </div>
                    <div>
                        <h2>Stock</h2>
                        <input type="checkbox"> 

                        </input>
                    </div>
                    <div>
                        <h2>Otros</h2>
                        <input type="checkbox"> 

                        </input>
                    </div>
                    <div>
                        <h2>Remito</h2>
                        <input type="checkbox"> 

                        </input>
                    </div>
                    <div>
                        <h2>Clientes</h2>
                        <input type="checkbox"> 

                        </input>
                    </div>
                    <div>
                        <h2>Otros</h2>
                        <input type="checkbox"> 
                            
                        </input>
                    </div>
                </section>
            </main>
        </body>
    </>
)
}