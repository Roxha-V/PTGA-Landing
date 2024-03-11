import React from "react";

function Servicios() {
    return (
        <section class="w-5/6 h-screen mx-auto px-4 sm:px-6 lg:px-4 py-12">
            <div className="container mx-auto xl:w-full px-4 bg-slate-500 h-full w-full flex flex-wrap ">

                <div className="text-justify w-2/6">
                    <h1 className="text-2xl leading-normal mb-2 font-bold text-black ">SERVICIOS</h1>
                    <p className="m-4 text-justify align-text-top text-wrap break-normal">Descricion servicio -retyu
                        dasuygfergqiergewqrgewqygrewqrghewqjrgwqhjgrhjqewgrkqjw
                        hgerkjqhewgrqwgrkjqgewrjqwrqghewqkjrhgqhjewgrqwegrkwqgr
                        jhwqgrqwgrqew</p>
                </div >
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 ml-4 w-3/6 justify-end">
                    <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                        <div class="mb-8">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                            </svg>
                        </div>
                        <div class="text-center">
                            <p class="text-xl text-gray-700 font-bold mb-2">Dany Bailey</p>
                            <p class="text-base text-gray-400 font-normal">Software Engineer</p>
                        </div>
                    </div>
                    <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                        <div class="mb-8">
                        </div>
                        <div class="text-center">
                            <p class="text-xl text-gray-700 font-bold mb-2">Lucy Carter</p>
                            <p class="text-base text-gray-400 font-normal">Graphic Designer</p>
                        </div>
                    </div>
                    <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                        <div class="mb-8">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                            </svg>
                        </div>
                        <div class="text-center">
                            <p class="text-xl text-gray-700 font-bold mb-2">Jade Bradley</p>
                            <p class="text-base text-gray-400 font-normal">Dev Ops</p>
                        </div>
                    </div>
                    <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                        <div class="mb-8">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                            </svg>
                        </div>
                        <div class="text-center">
                            <p class="text-xl text-gray-700 font-bold mb-2">Dany Bailey</p>
                            <p class="text-base text-gray-400 font-normal">Software Engineer</p>
                        </div>
                    </div>
                </div>
            </div>


            {/* <!-- service block --> */}
            <div class="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                <div class="inline-block text-gray-900 mb-4">
                    {/* <!-- icon --> */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                    </svg>
                </div>
                <h3 class="text-lg leading-normal mb-2 font-semibold text-black">SEO Services</h3>
                <p class="text-gray-500">This is a wider card with supporting text below as a natural content.</p>
            </div>
            {/* <!-- end service block --> */}

        </section >



    )

}

export default Servicios