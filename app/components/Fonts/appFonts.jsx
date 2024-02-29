
import { Bebas_Neue, Montserrat } from 'next/font/google';


export const bebasNeue = Bebas_Neue({
    subsets: ['latin'],
    weight: ['400'],
});

export const montserrat = Montserrat({ subsets: ['latin'] })

function appFonts({ Component, Props }) {  //dos props  - 

    console.log('cheuqedo que funciona', appFonts)

    return (

        <div>
            <style jsx> {
                `font-family: ${bebasNeue.name}, ${montserrat.name};}`}
            </style>

        </div>
    )

}
