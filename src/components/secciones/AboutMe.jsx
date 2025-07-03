import React, { Component } from 'react'
import {
    Container,
    Grid,
    Card,
    CardMedia,
    CardContent,
    Typography,
    Box,
} from "@mui/material";
import Perfil from '../../assets/perfil.webp'


export class AboutMe extends Component {
    render() {
        return (
            <section  >
                <Box
                    id="acerca"
                    sx={{
                        scrollMarginTop: "100px",
                        mt: "80px",
                        minHeight: "calc(120vh - 80px)",
                        px: { xs: 2, sm: 4, md: 8 },
                        py: { xs: 4, sm: 6 },
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#000",
                        color: "white",
                        overflow: "hidden",
                    }}
                >
                    <Typography
                        variant="h2"
                        align="left"
                        sx={{
                            fontWeight: "bold",
                            fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
                            letterSpacing: "0.1em",
                            textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                            mb: { xs: 3, sm: 4 },
                            fontFamily: "Poppins",
                            ml: { xs: 1, sm: 0, md: -100 },
                            mt: { xs: 7, sm: -10, md: 5 }
                        }}
                    >
                        ABOUT ME
                    </Typography>
                    <Typography
                        variant="h6"
                        align="left"
                        sx={{
                            fontWeight: "bold",
                            fontSize: { xs: "0.5rem", sm: "1rem", md: "1rem" },
                            letterSpacing: "0.1em",
                            textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                            mb: { xs: 3, sm: 4 },
                            fontFamily: "Poppins",
                            ml: { xs: 1, sm: 0, md: -106 },
                            mt: { xs: -4, sm: -5, md: -4}
                        }}
                    >
                    arturogabriel560@gmail.com
                    </Typography>

                    <Grid
                        container
                        spacing={10}
                        justifyContent="center"
                        alignItems="center"
                        sx={{ mt: { xs: 10, sm: 10, md: 1 }, p: 1 }}
                    >
                        <Grid item xs={12} sm={6} md={5}>
                            <Typography
                            variant="h3"
                            sx={{
                                mt:-10,
                                fontSize: { xs: "2rem", sm: "3rem", md: "3rem" },
                                fontFamily: 'Montserrat',
                            }}
                            >
                                Hello!<br/>
                                I´m <br/> 
                                Arturo Gabriel Zamora
                            </Typography>
                            <Typography variant="body1" sx={{ textAlign: 'justify' }}>
                                Desarrollador web junior apasionado por la creación de aplicaciones.<br />
                                Desde 2023 he participado en diversos proyectos del sector tecnológico,<br />
                                desempeñándome tanto en el desarrollo back-end como en el front-end.<br />
                                Con conocimientos en el framework Laravel en lado del back-end y React<br />
                                en el lado del front-end.
                            </Typography>
                        </Grid>

                        <Grid item
                            xs={12} sm={6} md={5}
                            sx={{
                                width: "350px",
                                height: "350px"
                            }}

                        >
                            <Grid
                                component="img"
                                src={Perfil}
                                alt="Perfil"
                                sx={{
                                    background: "white",
                                    borderRadius: "50%",
                                    width: "100%",
                                    height: "100%",
                                }}
                            >

                            </Grid>

                        </Grid>
                    </Grid>
                </Box>


            </section>
        )
    }
}

export default AboutMe