import React, { useState } from 'react';
import {
    Box, Button, Card, CardContent, CardMedia, Container,
    Typography, Dialog, DialogTitle, DialogContent,
    IconButton, Grid
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import ReactLogo from '../../assets/React.png';
import Inventario1 from '../../assets/Proyectos/inventario_1.png';
import Inventario2 from '../../assets/Proyectos/inventario_2.png';
import Inventario3 from '../../assets/Proyectos/inventario_3.png';
import Inventario4 from '../../assets/Proyectos/inventario_4.png';
import Inventario5 from '../../assets/Proyectos/inventario_5.png';
import RG_1 from '../../assets/Proyectos/PantallasRG/Login.jpg';
import RG_2 from '../../assets/Proyectos/PantallasRG/Registrarse.jpg';
import RG_3 from '../../assets/Proyectos/PantallasRG/Codigo de verificacion.jpg'
import RG_4 from '../../assets/Proyectos/PantallasRG/Datos Personales.jpg'
import RG_5 from '../../assets/Proyectos/PantallasRG/Registro completado.jpg'
import RG_6 from '../../assets/Proyectos/PantallasRG/Dashboard.jpg'
import RG_7 from '../../assets/Proyectos/PantallasRG/Recargar saldo.jpg'
import RG_8 from '../../assets/Proyectos/PantallasRG/Registro Fiscal.jpg'
import RG_9 from '../../assets/Proyectos/PantallasRG/Administrar Usuarios.jpg'


const fallbackImg = ReactLogo;

const misProyectos = [

    {
        title: "Sistema conteo de Inventario",
        desc: "Sistema de gestión de inventarios que permite cargar archivos CSV para registrar productos de forma masiva. Al importar el archivo, el sistema actualiza automáticamente los catálogos y genera un conteo de inventario, el cual puede ser asignado a un usuario responsable para su captura y validación.",
        stack: {
            frontend: "React",
            backend: "Laravel",
            db: "PostgreSQL"
        },
        year: "2024",
        img: Inventario1,
        galeria: [Inventario1, Inventario2, Inventario3, Inventario4, Inventario5]
    },
    {
        title: "Sistema Recupera Gastos",
        desc: "Sistema de facturación de tickets donde el usuario carga una imagen del comprobante de compra. La imagen es procesada mediante un servicio de OCR para extraer automáticamente los datos fiscales, los cuales se validan y se utilizan para generar la factura correspondiente al usuario.",
        stack: {
            frontend: "React",
            backend: "Laravel",
            db: "PostgreSQL"
        },
        year: "2025",
        img: RG_1,
        galeria: [RG_1, RG_2, RG_3, RG_4, RG_5, RG_6, RG_7, RG_8, RG_9]
    },
];

const Proyectos = () => {
    const [open, setOpen] = useState(false);
    const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);

    const handleOpen = (proyecto) => {
        setProyectoSeleccionado(proyecto);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setProyectoSeleccionado(null);
    };

    return (
        <Box id="proyectos" sx={{ py: 10, backgroundColor: '#000', color: 'white' }}>
            <Container maxWidth="lg">
                <Typography
                    variant="h2"
                    component="div"
                    sx={{
                        fontWeight: 'bold',
                        mb: 8,
                        textAlign: 'center',
                        color: '#fcbe05',
                        fontFamily: 'Poppins'
                    }}
                >
                    MIS PROYECTOS
                </Typography>

                <Swiper
                    effect="coverflow"
                    grabCursor
                    centeredSlides
                    slidesPerView="auto"
                    pagination={{ clickable: true }}
                    navigation
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    style={{ padding: '50px 0' }}
                >
                    {misProyectos.map((proy, index) => (
                        <SwiperSlide key={index} style={{ width: '300px' }}>
                            <Card
                                sx={{
                                    backgroundColor: '#1a1a1a',
                                    color: 'white',
                                    borderRadius: 4,
                                    border: '1px solid rgba(252, 190, 5, 0.3)'
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={proy.img || fallbackImg}
                                    alt={proy.title}
                                />

                                <CardContent sx={{ textAlign: 'center' }}>
                                    <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                                        {proy.title}
                                    </Typography>

                                    <Typography
                                        variant="body2"
                                        sx={{ my: 2, color: 'rgba(255,255,255,0.7)' }}
                                    >
                                        {proy.desc}
                                    </Typography>

                                    <Button
                                        variant="outlined"
                                        onClick={() => handleOpen(proy)}
                                        sx={{ color: '#fcbe05', borderColor: '#fcbe05' }}
                                    >
                                        Ver Detalles
                                    </Button>
                                </CardContent>
                            </Card>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>

            {/* DIALOG */}
            <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth >
                {proyectoSeleccionado && (
                    <>
                        <DialogTitle sx={{ textAlign: 'center', position: 'relative', background: '#29292a' }}>
                            <Typography sx={{ fontWeight: 'bold', color: '#ffffff', fontSize: '24px' }}>
                                {proyectoSeleccionado.title}
                            </Typography>

                            <IconButton
                                onClick={handleClose}
                                sx={{ position: 'absolute', right: 8, top: 8, color: 'white' }}
                            >
                                <CloseIcon />
                            </IconButton>
                        </DialogTitle>

                        <DialogContent sx={{ background: '#000000', border: '1px solid rgba(252, 190, 5, 0.3)' }}>
                            <Typography variant="subtitle1" sx={{ color: '#fcbe05', fontWeight: 'bold' }}>
                                Descripcion del proyecto:
                            </Typography>
                            <Typography sx={{ mb: 3, color: 'white' }}>
                                {proyectoSeleccionado.desc}
                            </Typography>

                            <Box sx={{ mb: 3 }}>
                                <Typography variant="subtitle1" sx={{ color: '#fcbe05', fontWeight: 'bold' }}>
                                    Stack tecnológico utilizado
                                </Typography>

                                <Typography variant="body2" sx={{ color: '#ffffff', fontWeight: 'bold' }}>
                                    Frontend: {proyectoSeleccionado.stack.frontend}
                                </Typography>

                                <Typography variant="body2" sx={{ color: '#ffffff', fontWeight: 'bold' }}>
                                    Backend: {proyectoSeleccionado.stack.backend}
                                </Typography>

                                <Typography variant="body2" sx={{ color: '#ffffff', fontWeight: 'bold' }}>
                                    Base de datos: {proyectoSeleccionado.stack.db}
                                </Typography>

                                <Typography variant="body2" sx={{ color: '#ffffff', fontWeight: 'bold' }}>
                                    Fecha de creacion: {proyectoSeleccionado.year}
                                </Typography>
                            </Box>

                            <Grid container spacing={2}>
                                {proyectoSeleccionado.galeria.map((foto, i) => (
                                    <Grid item xs={12} sm={6} key={i}>
                                        <Box
                                            component="img"
                                            src={foto || fallbackImg}
                                            sx={{ width: '100%', borderRadius: 2, border: '1px solid rgba(252, 190, 5, 0.3)' }}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        </DialogContent>
                    </>
                )}
            </Dialog>
        </Box>
    );
};

export default Proyectos;