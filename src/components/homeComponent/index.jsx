import React from "react";


export const HomeComponent = () => {

return (
    <> 
        <header class="w-full h-5">
            <nav>
                <div class="relative w-full max-w-xl mx-auto bg-white rounded-full h-full lg:max-w-none">
                    <imput type="search" placeholder="Busqueda de productos" class="rounded-full w-full h-18 bg-transparent py-0 pl-8 pr-32 outline-none border-2 border-gray-100 shadow-md hover:outline-none focus:ring-cool-indigo-200 focus:border-cool-indigo-200" />
                </div>    
            </nav>    
        </header>
        <main className="flex flex-row w-full h-10">
            <section >
                <div>
                    <h2 >
                        Facturación
                    </h2>
                </div>
                <div className="flex flex-col w-full overflow-hidden bg-gray-100 rounded-2xl h-72 sm:h-80 md:h-72 lg:h-64 xl:h-80">
                    <h2 className="flex items-center text-xl font-bold leading-7 text-gray-900 group-hover:text-cool-indigo-600">
                        Stock
                    </h2>
                </div>
                <div class="flex flex-col w-full overflow-hidden bg-gray-100 rounded-2xl h-72 sm:h-80 md:h-72 lg:h-64 xl:h-80">
                    <h2 class="flex items-center text-xl font-bold leading-7 text-gray-900 group-hover:text-cool-indigo-600">
                        Clientes
                    </h2>
                </div>
                <div class="flex flex-col w-full overflow-hidden bg-gray-100 rounded-2xl h-72 sm:h-80 md:h-72 lg:h-64 xl:h-80">
                    <h2 class="flex items-center text-xl font-bold leading-7 text-gray-900 group-hover:text-cool-indigo-600">
                        Remito
                    </h2>
                </div>
                <div class="flex flex-col w-full overflow-hidden bg-gray-100 rounded-2xl h-72 sm:h-80 md:h-72 lg:h-64 xl:h-80">
                    <h2 class="flex items-center text-xl font-bold leading-7 text-gray-900 group-hover:text-cool-indigo-600">
                        Usuarios
                    </h2>
                </div>
                <div class="flex flex-col w-full overflow-hidden bg-gray-100 rounded-2xl h-72 sm:h-80 md:h-72 lg:h-64 xl:h-80">
                    <h2 class="flex items-center text-xl font-bold leading-7 text-gray-900 group-hover:text-cool-indigo-600">
                        Presupuestos
                    </h2>
                </div>
            </section>
        </main>            
                   
    </>
)
}