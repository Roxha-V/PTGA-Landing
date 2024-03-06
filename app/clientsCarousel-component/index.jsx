import React from "react";


let a = 2
let b = 3

function ClientsCarousel() {
    a * b
    console.log(ClientsCarousel)


    return (

        <div className="carousel-container">
            < div className="grid grid-cols-2 grid-rows-2 gap-0 h-full w-full" >
                <div className="bg-gray-300">1</div>


                <div className="carousel rounded-box flex-col justify-center h-3/4">
                    <h1 className="text-center h-1/3"> marcas</h1>


                    <div className="carousel carousel-center p-4 space-x-4 rounded-box h-2/3">
                        <div className="carousel-item">
                            <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" className="rounded-box" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" className="rounded-box" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" className="rounded-box" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" className="rounded-box" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" className="rounded-box" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" className="rounded-box" />
                        </div>

                    </div>

                    <div className="btn-container flex justify-end h-1/3 m-8">
                        <button >Prev</button>
                        <button >Next</button>
                    </div>

                </div>

                <div className="bg-black col-start-1 col-end-5 h-1/4 ">3zsdxfcgvhbjnkm

                </div>
            </div>
        </div >


    )
}

export default ClientsCarousel;