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
                    <svg class="fill-indigo-600 h-20 pt-3" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <path d="M2.84375 13C1.285156 13 0 14.285156 0 15.84375L0 42C0 43.660156 1.339844 45 3 45L7.09375 45C7.570313 47.835938 10.035156 50 13 50C15.964844 50 18.429688 47.835938 18.90625 45L28.15625 45C28.894531 45 29.554688 44.6875 30.0625 44.21875C30.582031 44.675781 31.246094 44.992188 32 45L33.09375 45C33.570313 47.835938 36.035156 50 39 50C42.300781 50 45 47.300781 45 44C45 40.699219 42.300781 38 39 38C36.035156 38 33.570313 40.164063 33.09375 43L32 43C31.8125 43 31.527344 42.871094 31.3125 42.65625C31.097656 42.441406 31 42.183594 31 42L31 23C31 22.625 31.625 22 32 22L40 22C40.785156 22 41.890625 22.839844 42.65625 23.75C42.664063 23.761719 42.679688 23.769531 42.6875 23.78125L42.84375 24L38 24C36.40625 24 35 25.289063 35 27L35 31C35 31.832031 35.375 32.5625 35.90625 33.09375C36.4375 33.625 37.167969 34 38 34L48 34L48 42C48 42.375 47.375 43 47 43L45 43L45 45L47 45C48.660156 45 50 43.660156 50 42L50 32.375C50 30.085938 48.40625 28.0625 48.40625 28.0625L48.375 28.0625L44.25 22.5625L44.25 22.53125L44.21875 22.5C43.296875 21.386719 41.914063 20 40 20L32 20C31.644531 20 31.316406 20.074219 31 20.1875L31 15.90625C31 14.371094 29.789063 13 28.1875 13 Z M 2.84375 15L28.1875 15C28.617188 15 29 15.414063 29 15.90625L29 42.15625C29 42.625 28.628906 43 28.15625 43L18.90625 43C18.429688 40.164063 15.964844 38 13 38C10.035156 38 7.570313 40.164063 7.09375 43L3 43C2.625 43 2 42.371094 2 42L2 15.84375C2 15.375 2.367188 15 2.84375 15 Z M 38 26L44.34375 26L46.78125 29.25C46.78125 29.25 47.6875 30.800781 47.875 32L38 32C37.832031 32 37.5625 31.875 37.34375 31.65625C37.125 31.4375 37 31.167969 37 31L37 27C37 26.496094 37.59375 26 38 26 Z M 13 40C15.222656 40 17 41.777344 17 44C17 46.222656 15.222656 48 13 48C10.777344 48 9 46.222656 9 44C9 41.777344 10.777344 40 13 40 Z M 39 40C41.222656 40 43 41.777344 43 44C43 46.222656 41.222656 48 39 48C36.777344 48 35 46.222656 35 44C35 41.777344 36.777344 40 39 40Z"/>
                    </svg>
                </button>
                <button class="flex flex-col overflow-hidden items-center pt-4 bg-gray-100 rounded-2xl h-48 w-48">
                    <h2 class="flex items-center text-xl font-bold leading-7 text-gray-900 group-hover:text-cool-indigo-600">
                        Usuarios
                    </h2>
                    <svg class="fill-indigo-600 h-20 pt-3" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve">
                    <path d="M256,0c-42.351,0-76.8,34.449-76.8,76.8c0,42.351,34.449,76.8,76.8,76.8c42.351,0,76.8-34.449,76.8-76.8
                    C332.8,34.449,298.351,0,256,0z M256,128c-28.279,0-51.2-22.921-51.2-51.2s22.921-51.2,51.2-51.2c28.279,0,51.2,22.921,51.2,51.2
                    S284.279,128,256,128z M332.39,174.626c-2.219-12.177-12.817-21.026-25.19-21.026H256h-51.2c-12.373,0-22.972,8.849-25.182,21.026L169.472,230.4
                    h26.018l9.31-51.2h38.4v51.2h25.6v-51.2h38.4l9.31,51.2h26.018L332.39,174.626z M86.528,281.6c-42.351,0-76.8,34.449-76.8,76.8s34.449,76.8,76.8,76.8s76.8-34.449,76.8-76.8S128.879,281.6,86.528,281.6z
                    M86.528,409.6c-28.279,0-51.2-22.921-51.2-51.2s22.921-51.2,51.2-51.2s51.2,22.921,51.2,51.2S114.807,409.6,86.528,409.6z M162.918,456.226c-2.219-12.177-12.817-21.026-25.19-21.026h-51.2h-51.2c-12.373,0-22.972,8.849-25.19,21.026L0,512
                    h26.018l9.31-51.2h38.4V512h25.6v-51.2h38.4l9.31,51.2h26.018L162.918,456.226z M425.472,281.6c-42.351,0-76.8,34.449-76.8,76.8s34.449,76.8,76.8,76.8s76.8-34.449,76.8-76.8
                    S467.823,281.6,425.472,281.6z M425.472,409.6c-28.279,0-51.2-22.921-51.2-51.2s22.921-51.2,51.2-51.2
                    c28.279,0,51.2,22.921,51.2,51.2S453.751,409.6,425.472,409.6z M501.862,456.226c-2.219-12.177-12.817-21.026-25.19-21.026h-51.2h-51.2c-12.373,0-22.972,8.849-25.19,21.026L338.944,512
                    h26.018l9.31-51.2h38.4V512h25.6v-51.2h38.4l9.31,51.2H512L501.862,456.226z M328.909,372.924L268.8,338.219V268.8c0-7.074-5.726-12.8-12.8-12.8c-7.074,0-12.8,5.726-12.8,12.8v69.419l-60.109,34.705
                    c-6.127,3.524-8.226,11.349-4.685,17.476c2.372,4.096,6.673,6.4,11.102,6.4c2.176,0,4.378-0.546,6.391-1.724l60.1-34.705
                    l60.109,34.705c2.014,1.178,4.215,1.724,6.391,1.724c4.429,0,8.721-2.304,11.102-6.4
                    C337.135,384.273,335.036,376.448,328.909,372.924z"/>
                    </svg>
                </button>
                <button class="flex flex-col overflow-hidden items-center pt-4 bg-gray-100 rounded-2xl h-48 w-48">
                    <h2 class="flex items-center text-xl font-bold leading-7 text-gray-900 group-hover:text-cool-indigo-600">
                        Presupuesto
                    </h2>
                    <svg class="fill-indigo-600 h-20 pt-3" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                    viewBox="0 0 60 60" xml:space="preserve">
                        <path d="M31.5,36v24h24V36H31.5z M53.5,58h-20V38h9v12.586l-4.293-4.293l-1.414,1.414l6.707,6.707l6.707-6.707l-1.414-1.414
                        L44.5,50.586V38h9V58z M11.333,46c-0.552,0-1,0.447-1,1s0.448,1,1,1h11c0.552,0,1-0.447,1-1s-0.448-1-1-1H11.333z M40.333,22h-29c-0.552,0-1,0.447-1,1s0.448,1,1,1h29c0.552,0,1-0.447,1-1S40.886,22,40.333,22z M28.333,34h-17c-0.552,0-1,0.447-1,1s0.448,1,1,1h17c0.552,0,1-0.447,1-1S28.886,34,28.333,34z M26.333,41c0-0.553-0.448-1-1-1h-14c-0.552,0-1,0.447-1,1s0.448,1,1,1h14C25.886,42,26.333,41.553,26.333,41z M11.333,28c-0.552,0-1,0.447-1,1s0.448,1,1,1h14c0.552,0,1-0.447,1-1s-0.448-1-1-1H11.333z M40.333,28h-7c-0.552,0-1,0.447-1,1s0.448,1,1,1h7c0.552,0,1-0.447,1-1S40.886,28,40.333,28z M28.63,28.29c-0.19,0.189-0.3,0.449-0.3,0.71c0,0.26,0.11,0.52,0.3,0.71c0.18,0.18,0.44,0.29,0.7,0.29
                        c0.27,0,0.53-0.11,0.71-0.29c0.19-0.19,0.29-0.45,0.29-0.71c0-0.261-0.1-0.521-0.29-0.71C29.67,27.92,29,27.92,28.63,28.29z
                        M27.5,56h-21V8h7v2c0,0.553,0.448,1,1,1h23c0.552,0,1-0.447,1-1V8h7v23c0,0.553,0.448,1,1,1s1-0.447,1-1V7
                        c0-0.553-0.448-1-1-1h-8V4c0-0.553-0.448-1-1-1h-6V1c0-0.553-0.448-1-1-1h-9c-0.552,0-1,0.447-1,1v2h-6c-0.552,0-1,0.447-1,1v2h-8
                        c-0.552,0-1,0.447-1,1v50c0,0.553,0.448,1,1,1h22c0.552,0,1-0.447,1-1S28.052,56,27.5,56z M22.5,2h7v2v2h-7V4V2z M15.5,5h5v2
                        c0,0.553,0.448,1,1,1h9c0.552,0,1-0.447,1-1V5h5v2v2h-21V7V5z M11.333,18h13c0.552,0,1-0.447,1-1s-0.448-1-1-1h-13c-0.552,0-1,0.447-1,1S10.781,18,11.333,18z"/>
                    </svg>
                </button>
            </section>
        </main>            
                   
    </>
)
}