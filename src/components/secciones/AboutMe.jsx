import {
    Box,
    Container,
    Grid,
    Typography
} from "@mui/material";
import Perfil from '../../assets/perfil.webp';

const AboutMe = () => {
    return (
        <Box
            component="section"
            id="acerca"
            sx={{
                scrollMarginTop: "80px",
                minHeight: "100vh",
                backgroundColor: "#000",
                color: "white",
                display: "flex",
                alignItems: "center",
                py: { xs: 8, md: 12 },
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center">
                    
                    {/* Columna de Texto */}
                    <Grid item xs={12} md={7} order={{ xs: 2, md: 1 }}>
                        <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                            <Typography
                                variant="overline"
                                sx={{
                                    color: '#fcbe05',
                                    letterSpacing: "0.2em",
                                    fontWeight: 'bold',
                                    fontSize: "1rem"
                                }}
                            >
                                arturogabriel560@gmail.com
                            </Typography>
                            
                            <Typography
                                variant="h2"
                                sx={{
                                    fontWeight: "bold",
                                    fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" },
                                    fontFamily: "Poppins",
                                    mb: 2,
                                    lineHeight: 1.1
                                }}
                            >
                                ABOUT ME
                            </Typography>

                            <Typography
                                variant="h4"
                                sx={{
                                    fontSize: { xs: "1.5rem", md: "2rem" },
                                    fontFamily: 'Montserrat',
                                    mb: 3,
                                    color: '#eee'
                                }}
                            >
                                Hello! I'm <br />
                                <span style={{ color: '#fcbe05' }}>Arturo Gabriel Zamora</span>
                            </Typography>

                            <Typography 
                                variant="body1" 
                                sx={{ 
                                    textAlign: 'justify',
                                    fontSize: "1.1rem",
                                    lineHeight: 1.8,
                                    maxWidth: "600px",
                                    mx: { xs: 'auto', md: 0 },
                                    color: "#ccc"
                                }}
                            >
                                Ingeniero en Sistemas con enfoque en desarrollo de software, APIs y arquitectura de aplicaciones web.
                                Experiencia trabajando con Laravel, React y bases de datos relacionales en la construcción de sistemas 
                                administrativos y plataformas web.
                                Interesado en la integración entre desarrollo de software, infraestructura y monitoreo de sistemas.
                            </Typography>
                        </Box>
                    </Grid>

                    {/* Columna de Imagen */}
                    <Grid item xs={12} md={5} order={{ xs: 1, md: 2 }}>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Box
                                component="img"
                                src={Perfil}
                                alt="Arturo Gabriel"
                                sx={{
                                    width: { xs: "250px", sm: "300px", md: "100%" },
                                    maxWidth: "400px",
                                    aspectRatio: "1/1",
                                    borderRadius: "50%",
                                    objectFit: "cover",
                                    border: "4px solid #fcbe05",
                                    boxShadow: "0px 0px 30px rgba(252, 190, 5, 0.2)",
                                    backgroundColor: "white"
                                }}
                            />
                        </Box>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
};

export default AboutMe;