'use client'
import { Bebas_Neue, Montserrat } from 'next/font/google';


export const bebasNeue = Bebas_Neue({
    subsets: ['latin'],
    weight: ['400'],
});

export const montserrat = Montserrat({ subsets: ['latin'] })

function appFonts({ Component, Props }) {  //dos props  - 

    return (
        <>
            <style jsx> {
                'font-family: ${bebasNeue.name}, ${montserrat.name};}'}
            </style>

        </>
    )
}

export default appFonts;
console.log('cheuqedo que funciona', appFonts)