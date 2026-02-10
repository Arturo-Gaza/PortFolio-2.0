import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Container,
    Grid,
    Typography,
} from "@mui/material";
import { Component } from "react";

// Importación de imágenes (activos) para los logos de las tecnologías
import DjangoLogo from '../../assets/django.png';
import GitHubLogo from '../../assets/github-mark-white.png';
import JavaLogo from '../../assets/java.png';
import LaravelLogo from '../../assets/Laravel.png';
import PostLogo from '../../assets/Post.png';
import PostmanLogo from '../../assets/Postman.png';
import ReactNativeLogo from '../../assets/react-native-1.svg';
import ReactLogo from '../../assets/React.png';

/**
 * Arreglo de objetos que centraliza la información de las habilidades.
 * Esto permite que el diseño sea dinámico: si añades una habilidad aquí, 
 * se dibujará automáticamente en la interfaz.
 */
const herramientas = [
    { name: "Laravel", image: LaravelLogo },
    { name: "React", image: ReactLogo },
    { name: "PostgreSQL", image: PostLogo },
    { name: "Postman", image: PostmanLogo },
    { name: "GitHub", image: GitHubLogo },
    { name: "Java", image: JavaLogo },
    { name: "Django", image: DjangoLogo },
    { name: "React Native", image: ReactNativeLogo }
];

export class Skills extends Component {
    render() {
        return (
            // Etiqueta semántica para indicar que es una sección de la página
            <section>
                {/* Box funciona como un div inteligente de MUI. 
                  Se usa como contenedor principal con fondo negro y centrado.
                */}
                <Box
                    id="skills" // ID para anclaje de navegación (Scroll)
                    sx={{
                        scrollMarginTop: "100px", // Evita que el menú tape el título al navegar
                        mt: "80px", // Margen superior
                        minHeight: "calc(100vh - 80px)", // Ocupa casi toda la altura de la pantalla
                        px: { xs: 2, sm: 4, md: 8 }, // Relleno horizontal responsivo
                        py: { xs: 4, sm: 6 }, // Relleno vertical responsivo
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#000", // Fondo negro
                        color: "white",
                    }}
                >
                    <Container maxWidth="lg" sx={{ mt: 1 }}>
                        {/* Título de la sección */}
                        <Typography
                            className="labelTitulo"
                            variant="h2" // Tamaño semántico h2
                            align="center"
                            sx={{
                                fontWeight: "bold",
                                fontSize: { xs: "2rem", sm: "3rem", md: "3rem" }, // Tamaño de fuente adaptable
                                letterSpacing: "0.1em",
                                textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                                mb: 4, // Margen inferior
                                position: "relative",
                                fontFamily: "Poppins",
                                color: '#fcbe05 !important', // Color amarillo/dorado forzado
                                textAlign: { xs: "center", md: "left" }, // Centrado en móvil, izquierda en PC
                                
                            }}
                        >
                            Tecnologías y Frameworks
                        </Typography>

                        {/* Grid Container: El sistema de rejilla de MUI para organizar las tarjetas.
                        spacing={4} crea separación entre los elementos.
                        */}
                        <Grid container spacing={4} justifyContent="center"
                            sx={{ mt: { xs: 2, sm: 2, md: 0 } }}>

                            {/* .map() recorre el arreglo de herramientas y genera una
                            tarjeta por cada una.
                            */}
                            {herramientas.map((skill, index) => (
                                // Grid item define cuántas tarjetas caben por fila según el tamaño de pantalla
                                <Grid item xs={12} sm={6} md={4} key={index}>
                                    <Card
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            padding: 2,
                                            backgroundColor: "transparent", // Tarjeta transparente para lucir el borde
                                            borderRadius: 2,
                                            border: "2px solid white", // Borde blanco constante
                                            boxShadow: "0 4px 20px rgba(255, 255, 255, 0.2)",
                                            transition: "box-shadow 0.3s ease", // Transición suave para el hover
                                            "&:hover": {
                                                // Efecto de brillo intenso al pasar el mouse
                                                boxShadow: "0 16px 30px rgba(255, 255, 255, 0.7)",
                                            },
                                        }}
                                    >
                                        {/* Componente para mostrar la imagen del logo */}
                                        <CardMedia
                                            component="img"
                                            image={skill.image}
                                            alt={skill.name}
                                            sx={{
                                                width: 220,
                                                height: 100,
                                                objectFit: "contain", // Ajusta la imagen sin recortarla
                                                marginBottom: 2,
                                                background: "transparent",
                                                borderRadius: 2,
                                                padding: 1,
                                            }}
                                        />
                                        {/* Contenedor para el texto de la tarjeta */}
                                        <CardContent>
                                            <Typography variant="h6" color="white" align="center">
                                                {skill.name} {/* Muestra el nombre desde el objeto */}
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

export default Skills;