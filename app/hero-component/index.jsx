import React from "react";
import Image from "next/image";
import imgH from './bannerhero.jpg'

function HeroComponent() {



    return (
        <>
            <div className="h-screen w-screen">
                <div className="hero h-1/3 drop-shadow-lg">


                    <div className="hero-overlay bg-gradient-to-r from-blue-300 to-cyan-600 opacity-15 mix-blend-multiply "></div>
                    <div className="hero-content text-center justify-center">
                        <div className="w-max">
                            <h1 className={"px-2 text-5xl mb-5 text-center text-white tracking-[.25em] relative z-20 drop-shadow-lg"}> PTGA </h1>
                            <h2 className={"leading-loose text-sm text-white text-justify relative z-10 drop-shadow-lg"}>
                                Producción Tecnológica, Gráfica <br />
                                y Audiovisual LTDA
                            </h2>

                        </div>
                    </div>
                </div>
                <div className="h-screen relative block w-full py-10 bg-cyan-900">
                    <h1 className=" font-sans p-10 mb-2 text-5xl uppercase leading-8 tracking-widest font-bold text-center text-white">Sobre PTGA</h1>
                    <p className=" font-sans px-40 text-2xl uppercase text-center block mt-4 tracking-wider text-white">Lorem ipsum dolor sit amet. Et quibusdam optio ea facere suscipit in ducimus dolorum ut commodi dolorum est doloribus magni et dolorem corporis? Ex error praesentium qui voluptatem dolorem et eaque culpa et perferendis totam est voluptas alias est inventore molestiae ex accusantium sint. Et praesentium velit et quos dolores ut voluptas voluptas ut omnis perferendis.

                        Qui atque quod aut inventore obcaecati cum corporis voluptatem in neque iste. Vel excepturi natus qui quia molestiae id iure asperiores ut libero sunt quo atque quibusdam sed dolores mollitia. Et aliquam quisquam aut distinctio internos aut porro rerum qui porro placeat. Et doloremque autem aut inventore mollitia ut itaque repellat.

                        Sit quis incidunt in odit rerum et officia aliquid qui totam voluptatem sit sequi maiores aut corrupti nulla! Non voluptatem cupiditate et quia nulla et consequatur fugit non ipsum rerum.</p>

                    {/* <button className="btn">Sobre PTGA</button> */}
                </div>
            </div>
        </>



    )
}

export default HeroComponent;


{/* <div className="h-full w-full">   //esta es otra forma de poner un imagen con next pero el problema aqui es que no las hace resposive
<Image
className=""
    src={imgH.src}
    alt="fondo hero"
    fill
/> */}