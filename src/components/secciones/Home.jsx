import React from 'react';
import {
    Grid,
    Typography,
    Box,
    Button,
} from "@mui/material";
import Fondo from '../../assets/fondo.jpg';

const Home = () => {
    return (
        <Box
            component="section"
            id="home"
            sx={{
                position: "relative",
                mt: "80px",
                minHeight: "calc(100vh - 80px)",
                display: "flex",
                alignItems: "center", // Centra verticalmente
                justifyContent: { xs: "center", md: "flex-start" }, // Centro en móvil, izquierda en desktop
                px: { xs: 2, sm: 6, md: 12 },
                overflow: "hidden",
                scrollMarginTop: "100px",
            }}
        >
            {/* Imagen de Fondo con Overlay */}
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: 1,
                    "&::after": { // Capa oscura para legibilidad
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0, 0, 0, 0.4)", 
                    }
                }}
            >
                <Box
                    component="img"
                    src={Fondo}
                    alt="Fondo"
                    sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }}
                />
            </Box>

            {/* Contenido Principal */}
            <Grid
                container
                direction="column"
                sx={{
                    zIndex: 3,
                    position: "relative",
                    maxWidth: "800px",
                    textAlign: { xs: "center", md: "left" }, // Alineación de texto responsiva
                }}
            >
                <Grid item>
                    <Typography
                        variant="h1"
                        sx={{
                            fontWeight: "bold",
                            fontSize: { xs: "3rem", sm: "5rem", md: "7rem" },
                            lineHeight: 1,
                            letterSpacing: "0.05em",
                            textShadow: "3px 3px 10px rgba(0,0,0,0.8)",
                            fontFamily: "Poppins, sans-serif",
                            color: '#fcbe05'
                        }}
                    >
                        ARTURO
                    </Typography>
                    <Typography
                        variant="h2"
                        sx={{
                            fontWeight: "bold",
                            fontSize: { xs: "2rem", sm: "4rem", md: "5rem" },
                            lineHeight: 1,
                            letterSpacing: "0.05em",
                            textShadow: "3px 3px 10px rgba(0,0,0,0.8)",
                            fontFamily: "Poppins, sans-serif",
                            color: '#fcbe05',
                            mb: 4
                        }}
                    >
                        GABRIEL
                    </Typography>
                </Grid>

                <Grid item>
                    <Box 
                        sx={{ 
                            display: "flex", 
                            gap: 2, 
                            justifyContent: { xs: "center", md: "flex-start" } 
                        }}
                    >
                        <Button 
                            variant="contained"
                            size="large"
                            href="#acerca"
                            sx={{ 
                                bgcolor: '#fcbe05', 
                                color: '#000',
                                '&:hover': { bgcolor: '#e6ac00' }
                            }}
                        >
                            ABOUT ME
                        </Button>
                        <Button 
                            variant="outlined"
                            size="large"
                            href='#skills'
                            sx={{ 
                                color: '#fcbe05', 
                                borderColor: '#fcbe05',
                                '&:hover': { borderColor: '#fff', color: '#fff' }
                            }}
                        >
                            SKILLS
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Home;