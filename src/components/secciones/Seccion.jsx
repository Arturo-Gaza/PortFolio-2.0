import React, { Component } from 'react'


export class Seccion extends Component {
    render() {
        return (
            <section id="acerca" >
                <div className="h-full flex border border-white">

                    <div className=' h-139 w-1/2' style={{ marginTop: '80px' }}>
                        <h1 className='ml-[200px]'>
                            Arturo Gabriel!
                        </h1>
                        <p className="relative text-sm leading-relaxed text-white text-center top-10 sm:text-left sm:top-50">
                            Desarrollador web junior apasionado por la creación de aplicaciones modernas.
                            <br />
                            Desde 2023 he participado en diversos proyectos del sector tecnológico,
                            <br />
                            desempeñándome tanto en el desarrollo back-end como en el front-end.

                        </p>
                    </div>

                    <div className=' w-1/2 h-139' style={{ marginTop: '80px' }}>
                        <h1>
                            Hi!
                        </h1>
                    
                    </div>

                </div>
            </section>
        )
    }
}

export default Seccion