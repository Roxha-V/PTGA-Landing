import React from "react";

function ClientsCarousel() {

    return (


        < div className="grid grid-cols-2 bg-blue-500" >
            <div className="bg-gray-300 flex relative w-2/3">
                <h1 className="uppercase lg:text-7xl  font-sans absolute translate-x-1/4 translate-y-2/4">Confian en <br />ptga</h1>
            </div>

            <div className="flex-col w-full ">

                <h1 className="flex justify-start">marcas</h1>

                <div className="carousel rounded-box w-3/4">
                    <div className="carousel-item w-full">
                        <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" className="rounded-box" />
                    </div>
                    <div className="carousel-item w-full">
                        <img src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" className="rounded-box" />
                    </div>
                    <div className="carousel-item w-full">
                        <img src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" className="rounded-box" />
                    </div>
                    <div className="carousel-item w-full">
                        <img src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" className="rounded-box" />
                    </div>
                    <div className="carousel-item w-full">
                        <img src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" className="rounded-box" />
                    </div>
                    <div className="carousel-item w-full">
                        <img src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" className="rounded-box" />
                    </div>
                </div>

                <div className="btn-container flex-end ">
                    <button >Prev</button>
                    <button >Next</button>
                </div>

            </div>

            <div className="flex justify-center col-span-2 ">
                <div className="carousel rounded-box h-6/6 w-2/4 mt-12 r-2">
                    <div className="carousel-item w-1/6">
                        <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" className="w-full" />
                    </div>
                    <div className="carousel-item w-1/6">
                        <img src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" className="w-full" />
                    </div>
                    <div className="carousel-item w-1/6">
                        <img src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" className="w-full" />
                    </div>
                    <div className="carousel-item w-1/6">
                        <img src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" className="w-full" />
                    </div>
                    <div className="carousel-item w-1/6">
                        <img src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" className="w-full" />
                    </div>
                    <div className="carousel-item w-1/6">
                        <img src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" className="w-full" />
                    </div>
                    <div className="carousel-item w-1/6">
                        <img src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" className="w-full" />
                    </div>
                </div>
            </div>

        </div>


    )
}

export default ClientsCarousel;