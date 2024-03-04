import React from "react";


export const HomeComponent = () => {

return (
    <> 
        <header class="relative py-10 mx-auto  sm:px-6 bg-orange-200">
            <nav class="relative w-full max-w-xl mx-auto bg-white rounded-full h-10 lg:max-w-90">
                <div class="relative w-full h-10 max-w-xl mx-auto bg-white rounded-full lg:max-w-none">
                    <imput type="search" placeholder="Busqueda de productos" class="rounded-full w-full h-10  bg-transparent  outline-none border-2 border-gray-100 shadow-md hover:outline-none focus:ring-cool-indigo-200 focus:border-cool-indigo-200" >
                        <button type="" class="absolute inline-flex items-center h-10  text-sm text-black transition duration-150 duration-300 ease-in-out rounded-full outline-none right-2 top-1 bg-cool-indigo-600 sm:px-6 sm:text-base sm:font-medium hover:bg-cool-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cool-indigo-500">
                            <svg class="-ml-0.5 sm:-ml-1 mr-2 w-4 h-4 sm:h-5 sm:w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                        </button>
                    </imput>
                </div>    
            </nav>    
        </header>
        <main class="flex justify-around  w-full min-lg:dvh  px-4  mx-auto  bg-orange-200">
            <section class=" h-full grid mx-auto gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 ">
                <div class="flex flex-col overflow-hidden bg-gray-100 rounded-2xl h-48 w-48">
                    <h2 class="flex items-center text-xl font-bold leading-7 text-gray-900 group-hover:text-cool-indigo-600">
                        Facturación
                    </h2>
                </div>
                <div class="flex flex-col overflow-hidden bg-gray-100 rounded-2xl h-48 w-48">
                    <h2 class="flex items-center text-xl font-bold leading-7 text-gray-900 group-hover:text-cool-indigo-600">
                        Stock
                    </h2>
                </div>
                <div class="flex flex-col overflow-hidden bg-gray-100 rounded-2xl h-48 w-48">
                    <h2 class="flex items-center text-xl font-bold leading-7 text-gray-900 group-hover:text-cool-indigo-600">
                        Clientes
                    </h2>
                </div>
                <div class="flex flex-col overflow-hidden bg-gray-100 rounded-2xl h-48 w-48">
                    <h2 class="flex items-center text-xl font-bold leading-7 text-gray-900 group-hover:text-cool-indigo-600">
                        Remito
                    </h2>
                </div>
                <div class="flex flex-col overflow-hidden bg-gray-100 rounded-2xl h-48 w-48">
                    <h2 class="flex items-center text-xl font-bold leading-7 text-gray-900 group-hover:text-cool-indigo-600">
                        Usuarios
                    </h2>
                </div>
                <div class="flex flex-col overflow-hidden bg-gray-100 rounded-2xl h-48 w-48">
                    <h2 class="flex items-center text-xl font-bold leading-7 text-gray-900 group-hover:text-cool-indigo-600">
                        Presupuestos
                    </h2>
                </div>
            </section>
        </main>            
                   
    </>
)
}