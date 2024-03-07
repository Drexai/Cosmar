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
                    <svg version="1.1" id="Uploaded to svgrepo.com" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                     viewBox="0 0 35 50" xml:space="preserve">
                        <path class="fill-indigo-600 h-20 pt-3" d="M14,27.5c0-0.276,0.224-0.5,0.5-0.5h5c0.276,0,0.5,0.224,0.5,0.5S19.776,28,19.5,28h-5
	C14.224,28,14,27.776,14,27.5z M14,19c-0.552,0-1,0.448-1,1c0,0.552,0.448,1,1,1s1-0.448,1-1C15,19.448,14.552,19,14,19z M17,19
	c-0.552,0-1,0.448-1,1c0,0.552,0.448,1,1,1s1-0.448,1-1C18,19.448,17.552,19,17,19z M20,19c-0.552,0-1,0.448-1,1
	c0,0.552,0.448,1,1,1s1-0.448,1-1C21,19.448,20.552,19,20,19z M20,16c-0.552,0-1,0.448-1,1c0,0.552,0.448,1,1,1s1-0.448,1-1
	C21,16.448,20.552,16,20,16z M17,16c-0.552,0-1,0.448-1,1c0,0.552,0.448,1,1,1s1-0.448,1-1C18,16.448,17.552,16,17,16z M14,16
	c-0.552,0-1,0.448-1,1c0,0.552,0.448,1,1,1s1-0.448,1-1C15,16.448,14.552,16,14,16z M14,13c-0.552,0-1,0.448-1,1
	c0,0.552,0.448,1,1,1s1-0.448,1-1C15,13.448,14.552,13,14,13z M17,13c-0.552,0-1,0.448-1,1c0,0.552,0.448,1,1,1s1-0.448,1-1
	C18,13.448,17.552,13,17,13z M20,13c-0.552,0-1,0.448-1,1c0,0.552,0.448,1,1,1s1-0.448,1-1C21,13.448,20.552,13,20,13z M18.5,4h-3
	C15.224,4,15,4.224,15,4.5S15.224,5,15.5,5h3C18.776,5,19,4.776,19,4.5S18.776,4,18.5,4z M18.5,6h-3C15.224,6,15,6.224,15,6.5
	S15.224,7,15.5,7h3C18.776,7,19,6.776,19,6.5S18.776,6,18.5,6z M28,24v1v3c0,1.657-1.343,3-3,3H9c-1.657,0-3-1.343-3-3v-3v-1
	L7.688,9.649C7.866,8.139,9.146,7,10.668,7H13V2c0-0.552,0.448-1,1-1h6c0.552,0,1,0.448,1,1v5h2.332
	c1.521,0,2.802,1.139,2.979,2.649L28,24z M14,9h6V2h-6V9z M7.007,24h19.986L25.319,9.766C25.2,8.759,24.346,8,23.332,8H21v1h0.5
	C21.776,9,22,9.224,22,9.5S21.776,10,21.5,10h-9C12.224,10,12,9.776,12,9.5S12.224,9,12.5,9H13V8h-2.332
	C9.654,8,8.8,8.759,8.681,9.766L7.007,24z M27,25H7v3c0,1.103,0.897,2,2,2h16c1.103,0,2-0.897,2-2V25z"/>
                    </svg>
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
                <button class="flex flex-col items-center pt-4 overflow-hidden bg-gray-100 rounded-2xl h-48 w-48">
                    <h2 class="flex items-center text-xl font-bold leading-7 text-gray-900 group-hover:text-cool-indigo-600">
                        Clientes
                    </h2>
                    <svg class="fill-indigo-600 h-20 pt-3" viewBox="0 0 960 900"  version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <path d=" M767.9 763.4l-147-77.7-25.6 48.5 172.6 91.2 171.9-90.8-25.6-48.5z M767.9 851.4l-147-77.6-25.6 48.4 172.6 91.3 171.3-90.6-25.6-48.5z M670.5 471.7c-7.1-3.1-14.2-5.9-21.4-8.5 49.8-40.3 81.6-101.8 81.6-170.6 0-121-98.4-219.4-219.4-219.4s-219.4 98.4-219.4 219.4c0 68.9 31.9 130.5 81.7 170.7C219.4 519.6 109 667.8 109 841.3h73.1c0-181.5 147.7-329.1 329.1-329.1 45.3 0 89.1 9 130.2 26.7l29.1-67.2zM511.3 146.3c80.7 0 146.3 65.6 146.3 146.3S592 438.9 511.3 438.9 365 373.2 365 292.6s65.6-146.3 146.3-146.3zM612.5 636.5c0 10.2 5.6 19.5 14.6 24.2l128 67.6c4 2.1 8.4 3.2 12.8 3.2s8.8-1.1 12.8-3.2l128-67.6c9-4.8 14.6-14.1 14.6-24.2s-5.6-19.5-14.6-24.2l-128-67.7c-8-4.2-17.6-4.2-25.6 0l-128 67.7c-9 4.7-14.6 14-14.6 24.2z m155.4-36.6l69.3 36.6-69.3 36.6-69.3-36.6 69.3-36.6z" />
                    </svg>
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