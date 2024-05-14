import React from "react";

export const UserComponent = () => {

return(
    <>
        <header class="justify-center mx-auto bg-white flex flex-row bg-yellow-200">
                <h1 class="py-10">Accesos</h1>
        </header>
        <main class="justify-center h-screen w-full mx-auto bg-white flex flex-row bg-yellow-200">
                <fieldset class=" h-3/4 mx-auto bg-white flex flex-col bg-yellow-200">   
                       <h2 class="py-10 flex justify-center">Gestion de usuario</h2>   
                    <section class="flex flex-col ">
                        <div >
                            <h2 class="flex justify-center">Nombre de Usuario</h2>
                            <label htmlFor="dataOne"> < input type="text"/></label>
                        </div>
                        <div>
                            <h2 class="flex justify-center">Contraseña</h2>
                            
                            <label htmlFor="dataTwo">
                                <input type="password"/>
                                </label>
                        </div>
                        
                        <div>
                            <h2 class="flex justify-center">Repetir Contraseña</h2>
                            
                            <label htmlFor="dataThree">
                            <input type="password"/> 
                            </label>
                        </div>
                    </section>
                    <section class="flex flex-col">
                        <div>
                            <h2 class="flex justify-center">Facturación</h2>
                            <input class="flex justify-center" type="checkbox"/> 
                            <label htmlFor="dataFour"></label>
                            
                        </div>
                        <div>
                            <h2 class="flex justify-center">Stock</h2>
                            <input type="checkbox"/>
                            <label htmlFor="dataFive"></label>
                        </div>
                        <div>
                            <h2 class="flex justify-center">Otros</h2>
                            <input type="checkbox"/> 
                            <label htmlFor="dataSix"></label>
                            
                        </div>
                        <div>
                            <h2 class="flex justify-center" >Remito</h2>
                            <input type="checkbox"/>
                            <label htmlFor="dataSeven"></label>
                        </div>
                        <div>
                            <h2 class="flex justify-center" >Clientes</h2>
                            <input type="checkbox"/>
                            <label htmlFor="dataEight"/> 
                        </div>
                        <div>
                            <h2 class="flex justify-center" >Otros</h2>
                            <input type="checkbox"/>
                            <label htmlFor="dataNine"></label> 
                        </div>
                    </section>  
                </fieldset>
            </main>
    </>
)
}