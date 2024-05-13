
import React from 'react';
import Card from './services-card';

const cardData = [
    {
        id: 0, title: "Instalaciones", icon: "", img: "", bgColor: "#FEA700", service_detail:
            "Instalación y mantenimiento y cambio de: Torres de telecomunicaciones. Equipos y enlaces en altura. Equipos de estudio. Transmisores", link: ""
    },
    { id: 1, title: "Mantenimiento de plantas trasmisoras FM", icon: "", img: "", bgColor: "#A30DFC", service_detail: "Nuestros técnicos realizan las tareas de mantenimiento de punta a punta: desde los equipos del estudio hasta la baliza de la torre, garantizando el buen funcionamiento de tu planta transmisora, realizando tareas como:  Cambio de antenas y enlaces. Mantenimiento de torres. Asesoría para la compra equipos de estudio y planta transmisora.    ", link: "?" },
    { id: 2, title: "Desmonte", icon: "", img: "", bgColor: "#2A00BF", service_detail: "El trabajo profesional de nuestras cuadrillas de técnicos, con capacitación en seguridad laboral para el trabajo en altura, resuelven situaciones de potencial peligro para un inmueble.", link: "?" },
    { id: 3, title: "Eficiencia energética", icon: "", img: "", bgColor: "#ED0000", service_detail: "Nuestra misión es asesorar, reformar, re acondicionar instalaciones energéticas con el enfoque en ahorro y efectividad en el uso que se le de en cada establecimiento. Analizamos las demandas y las necesidades del cliente a fin de realizar el proyecto y buscar las oportunidades de ahorro en las tarifas de electricidad y gas. Nos manejamos en las áreas domiciliarias, comerciales e industriales.", link: "?" },
    //#5C0092 violeta oscuro

];

function ServiceSection(params) {

    return <div id="serviviios">
        {cardData.map((item) => <Card {...item} key={item.id} />)}
    </div>
}
export default ServiceSection