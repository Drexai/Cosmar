import React from "react";
import { Link } from 'react-router-dom'

export const UserComponent = () => {

return(
    <>
        <header class="justify-center min-w-[364px] mx-auto bg-white w-full flex flex-col bg-yellow-200">
                <Link to="/" class="h-20 w-20">
                    <svg fill="#000000" viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg"><title/><path d="M100,15a85,85,0,1,0,85,85A84.93,84.93,0,0,0,100,15Zm0,150a65,65,0,1,1,65-65A64.87,64.87,0,0,1,100,165ZM116.5,57.5a9.67,9.67,0,0,0-14,0L74,86a19.92,19.92,0,0,0,0,28.5L102.5,143a9.9,9.9,0,0,0,14-14l-28-29L117,71.5C120.5,68,120.5,61.5,116.5,57.5Z"/></svg>
                </Link>
                <h1 class=" flex justify-center">Accesos</h1>
        </header>
        <main class="justify-center min-w-[364px] h-screen w-full  mx-auto bg-white flex flex-row bg-yellow-200 ">
                <fieldset class=" h-3/4 w-3/4 2xl:w-2/4  bg-white flex flex-row max-md:flex-col bg-yellow-200 border-solid border-2 border-indigo-600 rounded-lg">
                    <section class="flex flex-col  border-solid border-2 border-indigo-600 rounded-lg">
                        <button class="py-9 flex justify-center ">Selecciónar Usuario </button>
                                <div class="relative w-full bg-white min-w-[100px] mb-8 h-10 rounded">
                                    <input class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-blue-500"
                                    placeholder=" " /><label
                                    class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-blue-500 before:border-blue-gray-200 peer-focus:before:!border-blue-500 after:border-blue-gray-200 peer-focus:after:!border-blue-500">
                                    Nombre de Usuario
                                    </label>
                                </div>
                                <div class="relative w-full bg-white min-w-[100px] mb-8 h-10 rounded">
                                    <input class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-blue-500"
                                    placeholder=" " /><label
                                    class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-blue-500 before:border-blue-gray-200 peer-focus:before:!border-blue-500 after:border-blue-gray-200 peer-focus:after:!border-blue-500">
                                   Contraseña
                                    </label>
                                </div>

                                <div class="relative w-full bg-white min-w-[100px] h-10 rounded">
                                    <input class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-blue-500"
                                    placeholder=" " /><label
                                    class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-blue-500 before:border-blue-gray-200 peer-focus:before:!border-blue-500 after:border-blue-gray-200 peer-focus:after:!border-blue-500">
                                    Repetir cotraseña
                                    </label>
                                </div>
                        
                    </section>
                    <section class="grid mx-auto max-[320]:grid-cols-2 sm:gap-x-12 md: xl:gap-x-20 2xl:gap-x-40	">
                        <div class="flex flex-col py-10">
                            <h2 class="flex justify-center">Facturación</h2>
                            <input class="h-5" type="checkbox"/>
                            <label htmlFor="dataFour"></label>

                        </div>
                        <div class="flex flex-col py-10">
                            <h2 class="flex justify-center ">Stock</h2>
                            <input class="h-5" type="checkbox"/>
                            <label htmlFor="dataFive"></label>
                        </div>
                        <div class=" flex flex-col py-10">
                            <h2 class="flex justify-center">Otros</h2>
                            <input class="h-5 rounded-lg" type="checkbox"/>
                            <label htmlFor="dataSix"></label>

                        </div>
                        <div class="flex flex-col">
                            <h2 class="flex justify-center" >Remito</h2>
                            <input class="h-5 rounded-lg" type="checkbox"/>
                            <label htmlFor="dataSeven"></label>
                        </div>
                        <div class="flex flex-col">
                            <h2 class="flex justify-center" >Clientes</h2>
                            <input class="h-5 rounded-lg" type="checkbox"/>
                            <label htmlFor="dataEight"/>
                        </div>
                        <div class="flex flex-col">
                            <h2 class="flex justify-center" >Otros</h2>
                            <input class="h-5 rounded-lg" type="checkbox"/>
                            <label htmlFor="dataNine"></label>
                        </div>
                        <button class="col-span-3 h-12 border-solid rounded-lg border-2 border-indigo-600">
                            <h3>Guardar Cambios</h3>
                        </button>
                    </section>
                </fieldset>
            </main>
    </>
)
}