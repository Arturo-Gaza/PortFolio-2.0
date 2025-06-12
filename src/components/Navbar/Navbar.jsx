import React from 'react'
import Logo from '../../assets/img_hero.svg'

export const Navbar = () => {

    const navbarLinks = [
        {
            id: 1,
            title: "Home",
            link: "#home"
        },
        {
            id: 2,
            title: "Acerca de",
            link: "#acerca"
        },
        {
            id: 3,
            title: "Proyectos",
            link: "#"
        },
        {
            id: 4,
            title: "Redes",
            link: "#"
        },
    ]

    const navRedes = [
        {
            id: 1,
            title: 'Linkedin',
            link: 'https://www.linkedin.com/in/arturo-gabriel-186970304/',
            icon: 'bi bi-linkedin'
        },
        {
            id: 2,
            title: 'GitHub',
            link: 'https://github.com/Arturo-Gaza',
            icon: 'bi bi-github'
        }
    ]
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-black text-white h-20">
            <div className='flex justify-between items-center sm:px-12 sm:py-6 px-4 p-3'>
                <div className="flex w-90 h-20">
                    <ul className='flex items-center sm:px-12 sm:py-6 px-4 py-6 gap-x-6 ml-auto'>
                        {navbarLinks.map((link) => (
                            <li key={link.id}>
                                <a
                                    className='text-white sm:text-lg text-sm hover:text-sky-400 transition-transform hover:scale-110 transform inline-block duration-300'
                                    href={link.link}>{link.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="w-20">
                    <ul className='flex justify-start gap-x-4 pr-8'>
                        {navRedes.map((link) => (
                            <li key={link.id}>
                                <a
                                    className='text-white sm:text-lg text-sm hover:text-sky-400 transition-transform hover:scale-110 transform inline-block duration-300'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    href={link.link}
                                >
                                    <i className={`${link.icon} text-white text-lg sm:text-2xl hover:text-sky-200 transition-all duration-300`} />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>


        </nav>
    )
}
