import { Component } from "react";
import {
    Container,
    Grid,
    Card,
    CardMedia,
    CardContent,
    Typography,
    Box,
} from "@mui/material";
import LaravelLogo from '../../assets/Laravel.png'
import ReactLogo from '../../assets/React.png'
import PostLogo from '../../assets/Post.png'
import PostmanLogo from '../../assets/postman.png'
import GitHubLogo from '../../assets/github-mark-white.png'
import JavaLogo from '../../assets/java.png'
import DjangoLogo from '../../assets/django.png'

const herramientas = [
    {
        name: "Laravel",
        image: LaravelLogo,
    },
    {
        name: "React",
        image: ReactLogo,
    },
    {
        name: "PostgreSQL",
        image: PostLogo,
    },
    {
        name: "Postman",
        image: PostmanLogo,

    },
    {
        name: "GitHub",
        image: GitHubLogo,

    },
    {
        name: "Java",
        image: JavaLogo

    },
    {
        name: "Django",
        image: DjangoLogo
    }
];

export class Skills extends Component {
    render() {
        return (
            <section >
                <Box
                    id="skills"
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
                        
                    }}
                >
                    <Container maxWidth="lg" sx={{ mt: 1 }} >
                        <Typography 
                            className="labelTitulo"
                            variant="h2"
                            align="center"
                            sx={{
                                fontWeight: "bold",
                                fontSize: { xs: "2rem", sm: "3rem", md: "3rem" },
                                letterSpacing: "0.1em",
                                textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                                mb: 4,
                                position: "relative",
                                left: { xs: 10, sm: -10, md: -400 },
                                top: { xs: -50, sm: -20, md: 0 },
                                fontFamily: "Poppins"
                            }}
                        >
                            MY SKILLS
                        </Typography> 

                        <Grid container spacing={4} justifyContent="center" 
                                sx = {{mt: { xs: -5, sm: 2, md: 0 }, 
                                }}>
                            {herramientas.map((skill, index) => (
                                <Grid item xs={12} sm={6} md={4} key={index}>
                                    <Card
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            padding: 2,
                                            backgroundColor: "transparent",
                                            borderRadius: 2,
                                            border: "2px solid white",
                                            boxShadow: "0 4px 20px rgba(255, 255, 255, 0.2)",
                                            transition: "box-shadow 0.3s ease",
                                            "&:hover": {
                                                boxShadow: "0 16px 30px rgba(255, 255, 255, 0.7)",
                                            },
                                        }}
                                    >
                                        <CardMedia
                                            component="img"
                                            image={skill.image}
                                            alt={skill.name}
                                            sx={{
                                                width: 220,
                                                height: 100,
                                                objectFit: "contain",
                                                marginBottom: 2,
                                                background: "transparent",
                                                borderRadius: 2,
                                                padding: 1,
                                            }}
                                        />
                                        <CardContent>
                                            <Typography variant="h6" color="white" align="center">
                                                {skill.name}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </Box>
            </section>

        )
    }

}
export default Skills