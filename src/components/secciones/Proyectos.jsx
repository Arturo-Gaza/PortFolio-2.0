import React from 'react';
import { Box, Typography, Container, Card, CardContent, CardMedia, Button } from '@mui/material';
// Importamos Swiper y sus estilos
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const misProyectos = [
    { title: "Proyecto 1", desc: "Descripción breve", img: "url_imagen" },
    { title: "Proyecto 2", desc: "Descripción breve", img: "url_imagen" },
    { title: "Proyecto 3", desc: "Descripción breve", img: "url_imagen" },
    // Añade más proyectos...
];

const Proyectos = () => {
    return (
        <Box id="proyectos" sx={{ py: 10, backgroundColor: '#000', color: 'white' }}>
            <Container maxWidth="lg">
                <Typography variant="h2" sx={{ 
                    fontWeight: 'bold', mb: 8, textAlign: 'center', color: '#fcbe05',
                    fontFamily: 'Poppins'
                }}>
                    MIS PROYECTOS
                </Typography>

                <Swiper
                    effect={'coverflow'} // Efecto de profundidad
                    grabCursor={true}
                    centeredSlides={true} // El proyecto activo siempre al centro
                    slidesPerView={'auto'} // Ajusta cuántos se ven según el tamaño
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={{ clickable: true }}
                    navigation={true}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className="mySwiper"
                    style={{ padding: '50px 0' }}
                >
                    {misProyectos.map((proy, index) => (
                        <SwiperSlide key={index} style={{ width: '300px' }}>
                            <Card sx={{ 
                                backgroundColor: '#1a1a1a', 
                                color: 'white',
                                borderRadius: 4,
                                border: '1px solid rgba(252, 190, 5, 0.3)'
                            }}>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={proy.img}
                                    alt={proy.title}
                                />
                                <CardContent sx={{ textAlign: 'center' }}>
                                    <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                                        {proy.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{ my: 2, color: 'rgba(255,255,255,0.7)' }}>
                                        {proy.desc}
                                    </Typography>
                                    <Button variant="outlined" sx={{ 
                                        color: '#fcbe05', borderColor: '#fcbe05',
                                        '&:hover': { backgroundColor: '#fcbe05', color: '#000' }
                                    }}>
                                        Ver Proyecto
                                    </Button>
                                </CardContent>
                            </Card>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>

            {/* Estilos CSS para personalizar las flechas y puntos de Swiper */}
            <style dangerouslySetInnerHTML={{ __html: `
                .swiper-button-next, .swiper-button-prev { color: #fcbe05 !important; }
                .swiper-pagination-bullet { background: #fff !important; }
                .swiper-pagination-bullet-active { background: #fcbe05 !important; }
            `}} />
        </Box>
    );
};

export default Proyectos;