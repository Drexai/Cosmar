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
                <fieldset>
                    <legend>
                        Gestion de usuario
                    </legend>
                    <div>
                        <h2></h2>
                        
                        <label htmlFor="dataOne"> < input type="text"/></label>
                        
                    </div>
                    <div>
                        <h2>Contraseña</h2>
                        
                        <label htmlFor="dataTwo">
                            <input type="password"/>
                            </label>
                    </div>
                    
                    <div>
                        <h2>Repetir Contraseña</h2>
                        
                        <label htmlFor="dataThree">
                        <input type="password"/> 
                        </label>
                    </div>
                    <div>
                        <h2>Facturación</h2>
                        <input type="checkbox"/> 
                        <label htmlFor="dataFour"></label>
                        
                    </div>
                    <div>
                        <h2>Stock</h2>
                        <input type="checkbox"/>
                        <label htmlFor="dataFive"></label>
                    </div>
                    <div>
                        <h2>Otros</h2>
                        <input type="checkbox"/> 
                        <label htmlFor="dataSix"></label>
                        
                    </div>
                    <div>
                        <h2>Remito</h2>
                        <input type="checkbox"/>
                        <label htmlFor="dataSeven"></label>
                    </div>
                    <div>
                        <h2>Clientes</h2>
                        <input type="checkbox"/>
                        <label htmlFor="dataEight"/> 
                    </div>
                    <div>
                        <h2>Otros</h2>
                        <input type="checkbox"/>
                        <label htmlFor="dataNine"></label> 
                    </div>
                </fieldset>
            </main>
        </body>
    </>
)
}