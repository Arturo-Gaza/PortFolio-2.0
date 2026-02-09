import React from 'react';
import {
    AppBar,
    Toolbar,
    Box,
    Typography,
    IconButton,
    Link,
} from '@mui/material';
import Logo from '../../assets/img_hero.svg';

// Puedes usar íconos de react-icons o mantener los de Bootstrap como tú usas.
export const Navbar = () => {
    const navbarLinks = [
        { id: 1, title: 'Home', link: '#home' },
    ];

    const navRedes = [
        {
            id: 1,
            title: 'Linkedin',
            link: 'https://www.linkedin.com/in/arturo-gabriel-186970304/',
            icon: 'bi bi-linkedin',
        },
        {
            id: 2,
            title: 'GitHub',
            link: 'https://github.com/Arturo-Gaza',
            icon: 'bi bi-github',
        },
    ];

    return (
        <AppBar
            position="fixed"
            sx={{
                backgroundColor: "rgba(128, 128, 128, 0.4)",
                color: 'white',
                height: '60px',
                zIndex: 1300,
            }}
        >
            <Toolbar
                sx={{
                    justifyContent: 'space-between',
                    px: { xs: 2, sm: 6 },
                }}
            >

                {/* Menú de navegación */}
                <Box
                    component="nav"
                    sx={{
                        display: 'flex',
                        gap: { xs: 2, sm: 4 },
                        alignItems: 'center',
                    }}
                >
                    {navbarLinks.map((link) => (
                        <Link
                            key={link.id}
                            href={link.link}
                            underline="none"
                            sx={{
                                color: 'white',
                                fontSize: { xs: '0.9rem', sm: '1.1rem' },
                                fontWeight: 500,
                                transition: '0.3s',
                                '&:hover': {
                                    color: 'skyblue',
                                    transform: 'scale(1.05)',
                                },
                            }}
                        >
                            {link.title}
                        </Link>
                    ))}
                </Box>

                {/* Íconos sociales */}
                <Box sx={{ display: 'flex', gap: 2 }}>
                    {navRedes.map((link) => (
                        <IconButton
                            key={link.id}
                            href={link.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                                color: 'white',
                                '&:hover': {
                                    color: 'skyblue',
                                    transform: 'scale(1.2)',
                                    transition: '0.3s',
                                },
                            }}
                        >
                            <i className={link.icon} />
                        </IconButton>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
