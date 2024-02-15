'use client'


import { Bebas_Neue } from 'next/font/google';
import { Montserrat } from 'next/font/google';

export const bebasNeue = Bebas_Neue({
    subsets: ['latin'], // Add any other subsets you need
    weight: ['400'], // Specify the font weights you want to use
});

export const montserrat = Montserrat({ subsets: ['latin'] })

function appFonts({ Component, Props }) {  //dos props  - 
    return (
        <>
            <style jsx> {
                'font-family: bebasNeue; Montserrat;'}
            </style>
            <Component {...Props} />
        </>
    )
}

export default appFonts;