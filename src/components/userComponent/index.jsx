import React from "react";
import { Link } from 'react-router-dom'

export const UserComponent = () => {

return(
    <>
        <header class="justify-center mx-auto bg-white w-full flex flex-col bg-yellow-200">
                <Link to="/" class="h-10 w-20">
                    <svg fill="#000000" viewBox="5 5 200 300" xmlns="http://www.w3.org/2000/svg"><title/><path d="M100,15a85,85,0,1,0,85,85A84.93,84.93,0,0,0,100,15Zm0,150a65,65,0,1,1,65-65A64.87,64.87,0,0,1,100,165ZM116.5,57.5a9.67,9.67,0,0,0-14,0L74,86a19.92,19.92,0,0,0,0,28.5L102.5,143a9.9,9.9,0,0,0,14-14l-28-29L117,71.5C120.5,68,120.5,61.5,116.5,57.5Z"/></svg>
                </Link>
                <h1 class="py-10 flex justify-center">Accesos</h1>
        </header>
        <main class="justify-center h-screen w-full mx-auto bg-white flex flex-row bg-yellow-200">
                <fieldset class=" h-3/4 mx-auto bg-white flex flex-row bg-yellow-200 border-solid border-2 border-indigo-600">      
                    <section class="flex flex-col border-solid border-2 border-indigo-600">
                        <h2 class="py-10 flex justify-center ">Gestion de usuario</h2>
                        <div>
                            <h2 class="py-5 flex justify-center">Nombre de Usuario</h2>
                            <label htmlFor="dataOne"> < input type="text"/></label>
                        </div>
                        <div>
                            <h2 class="py-5 flex justify-center">Contraseña</h2> 
                            <label htmlFor="dataTwo">
                                <input type="password"/>
                                </label>
                        </div>
                        
                        <div>
                            <h2 class="py-5 flex justify-center">Repetir Contraseña</h2>
                            <label htmlFor="dataThree">
                            <input type="password"/> 
                            </label>
                        </div>
                    </section>
                    <section class="grid mx-auto gap-x-6 max-sm:gap-y-10  md:grid-cols-3 xl:gap-x-8">
                        <div class="flex flex-col py-10">
                            <h2 class="flex justify-center">Facturación</h2>
                            <input class="flex justify-center" type="checkbox"/> 
                            <label htmlFor="dataFour"></label>
                            
                        </div>
                        <div class="flex flex-col py-10">
                            <h2 class="flex justify-center">Stock</h2>
                            <input type="checkbox"/>
                            <label htmlFor="dataFive"></label>
                        </div>
                        <div class=" flex flex-col py-10">
                            <h2 class="flex justify-center">Otros</h2>
                            <input type="checkbox"/> 
                            <label htmlFor="dataSix"></label>
                            
                        </div>
                        <div class="flex flex-col">
                            <h2 class="flex justify-center" >Remito</h2>
                            <input type="checkbox"/>
                            <label htmlFor="dataSeven"></label>
                        </div>
                        <div class="flex flex-col">
                            <h2 class="flex justify-center" >Clientes</h2>
                            <input type="checkbox"/>
                            <label htmlFor="dataEight"/> 
                        </div>
                        <div class="flex flex-col">
                            <h2 class="flex justify-center" >Otros</h2>
                            <input type="checkbox"/>
                            <label htmlFor="dataNine"></label> 
                        </div>
                        <button class="col-span-3 border-solid border-2 border-indigo-600">
                            <h3>Guardar Cambios</h3>
                        </button>
                    </section>  
                </fieldset>
            </main>
    </>
)
}