import React from "react";

export const HomeComponent = () => {

return (
    <> 
        <header class="relative py-10 mx-auto  sm:px-6 bg-orange-200">
            <nav class="relative w-full max-w-xl mx-auto bg-white rounded-full h-10 lg:max-w-90">
                <div class="relative w-full h-10 max-w-xl mx-auto bg-white rounded-full lg:max-w-none">
                    <input type="search" placeholder="Busqueda de productos"  class="rounded-full w-full h-10 bg-transparent  text-center outline-none border-2 border-gray-100 shadow-md hover:outline-none focus:ring-cool-indigo-200 focus:border-cool-indigo-200" >
                
                    </input>
                    <button type="" class="absolute inline-flex items-center h-8  
                    text-sm text-black transition duration-150 duration-300 ease-in-out rounded-full 
                    outline-none right-1 top-1 bg-indigo-600 sm:px-6 sm:text-base sm:font-medium
                     hover:bg-cool-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cool-indigo-500">
                            <svg class=" max-sm:w-10 mr-2 w-4 h-4 sm:h-5 sm:w-5 items-center" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                    </button>
                </div>    
            </nav>    
        </header>
        <main class="flex justify-around  w-full min-h-screen  bg-orange-200">
            <section class=" h-full grid mx-auto gap-x-6 max-sm:gap-y-12   md:grid-cols-3 md:gap-y-8 xl:gap-x-8 ">
                <button class="flex flex-col items-center pt-4 overflow-hidden bg-gray-100 rounded-2xl h-48 w-48">
                    <h2 class="flex  text-xl font-bold leading-7 text-gray-900 group-hover:text-cool-indigo-600">
                        Facturación
                    </h2>
                </button>
                <button class="flex flex-col items-center pt-4 overflow-hidden bg-gray-100 rounded-2xl h-48 w-48">
                    <h2 class="flex text-xl font-bold leading-7 text-gray-900 group-hover:text-cool-indigo-600">
                        Stock
                    </h2>
                    <svg  class="fill-indigo-600 h-20 pt-3" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 484.185 484.185" xml:space="preserve">
                        <path d="M429.255,0v149.74h-39.904V69.878h-149.74v-39.93H84.854V149.74H49.94V0H0.001v484.185h49.938v-89.844h379.315v89.844
                        h54.931V0H429.255z M239.611,84.878h134.74v64.861h-134.74V84.878z M149.767,44.948h24.931v44.896h-24.931V44.948z
                        M99.854,44.948h34.913v59.896h54.931V44.948h34.913V149.74H99.854V44.948z M429.255,164.74v14.948H49.94V164.74H429.255z
                        M244.576,229.601v39.931H94.836v79.861H49.94V194.688h379.315v154.705h-29.922V229.601H244.576z M259.576,244.601h34.913v59.896
                        h54.931v-59.896h34.913v104.792H259.576V244.601z M309.49,289.497v-44.896h24.931v44.896H309.49z M244.576,284.532v64.861
                        h-134.74v-64.861H244.576z M34.94,469.185H15.001V15h19.938L34.94,469.185L34.94,469.185z M49.94,379.341v-14.948h379.315v14.948
                        H49.94z M469.185,469.185h-24.931V15h24.931V469.185z"/>
                    </svg>
                </button>
                <button class="flex flex-col overflow-hidden items-center pt-4 bg-gray-100 rounded-2xl h-48 w-48">
                    <h2 class="flex items-center text-xl font-bold leading-7 text-gray-900 group-hover:text-cool-indigo-600">
                        Clientes
                    </h2>
                </button>
                <button class="flex flex-col overflow-hidden items-center pt-4 bg-gray-100 rounded-2xl h-48 w-48">
                    <h2 class="flex items-center text-xl font-bold leading-7 text-gray-900 group-hover:text-cool-indigo-600">
                        Remito
                    </h2>
                </button>
                <button class="flex flex-col overflow-hidden items-center pt-4 bg-gray-100 rounded-2xl h-48 w-48">
                    <h2 class="flex items-center text-xl font-bold leading-7 text-gray-900 group-hover:text-cool-indigo-600">
                        Usuarios
                    </h2>
                </button>
                <button class="flex flex-col overflow-hidden items-center pt-4 bg-gray-100 rounded-2xl h-48 w-48">
                    <h2 class="flex items-center text-xl font-bold leading-7 text-gray-900 group-hover:text-cool-indigo-600">
                        Presupuesto
                    </h2>
                </button>
            </section>
        </main>            
                   
    </>
)
}