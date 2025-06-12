import React, { Component } from 'react'
import Fondo from '../../assets/fondo.jpg'
import Logo from '../../assets/arturo_logo.jpg'

export class Seccion1 extends Component {
    render() {
        return (
            <section id='home' >
                <div className="h-full flex border border-white">
                    <img
                        src={Fondo}
                        alt="Descripción de la imagen"
                        className="w-full h-full object-cover"
                    />

                </div>
                {/* Div encima de la imagen */}
                <div className="absolute top-60 left-15 h-50 w-80 bord">
                    <img
                        src={Logo}
                        alt="Logo "
                        className='w-full h-full object-cover'
                    />
                </div>
            </section>

        )
    }
}

export default Seccion1