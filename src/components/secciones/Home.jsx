import React, { Component } from 'react'
import {
    Container,
    Grid,
    Card,
    CardMedia,
    CardContent,
    Typography,
    Box,
    Button,
} from "@mui/material";
import Fondo from '../../assets/fondo.jpg'
import Logo from '../../assets/arturo_logo.jpg'

export class Home extends Component {
    render() {
        return (
            <section  >
                <Box
                    id="home"
                    sx={{
                        scrollMarginTop: "100px",
                        mt: "80px",
                        minHeight: "calc(100vh - 80px)",
                        px: { xs: 2, sm: 4, md: 8 },
                        py: { xs: 4, sm: 6 },
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#000",
                        color: "white",
                        position: "relative",
                    }}
                >
                    {/* Fondo con imagen */}
                    <Box
                        component="img"
                        src={Fondo}
                        alt="Fondo"
                        sx={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            zIndex: 1,
                            minHeight: "calc(100vh - 108px)",
                        }}
                    />

                    <Grid
                        container
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        spacing={2}
                        sx={{
                            zIndex: 3,
                            position: "relative",
                            mb: 4,
                            left: { xs: -70, sm: -120, md: -350 },
                            top: { xs: -20, sm: -100, md: -50 },
                        }}
                    >
                        <Grid item>
                            <Typography
                                variant="h2"
                                align="center"
                                sx={{
                                    fontWeight: "bold",
                                    fontSize: { xs: "2rem", sm: "4rem", md: "5rem" },
                                    letterSpacing: "0.1em",
                                    textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                                    fontFamily: "Poppins",
                                }}
                            >
                                ARTURO
                            </Typography>
                        </Grid>

                        <Grid item>
                            <Typography
                                variant="h2"
                                align="center"
                                sx={{
                                    fontSize: { xs: "2rem", sm: "4rem", md: "3rem" },
                                    letterSpacing: "0.1em",
                                    textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                                    fontFamily: "Poppins",
                                    mt: -3
                                }}
                            >
                                GABRIEL
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Grid container spacing={2} justifyContent="center">
                                <Grid item>
                                    <Button 
                                    className="btn-1"
                                    href="#acerca"
                                    >ABOUT ME</Button>
                                </Grid>
                                <Grid item>
                                    <Button 
                                    className="btn-1"
                                    href='#skills'
                                    >SKILLS</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>


                </Box>


            </section>

        )
    }
}

export default Home