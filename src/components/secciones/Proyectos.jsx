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

const fallbackImg = ReactLogo;

const misProyectos = [
  {
    title: "Proyecto 1",
    desc: "Descripción del proyecto 1",
    img: ReactLogo,
    galeria: [ReactLogo, ReactLogo]
  },
  {
    title: "Proyecto 2",
    desc: "Descripción del proyecto 2",
    img: ReactLogo,
    galeria: []
  },
  {
    title: "Proyecto 3",
    desc: "Descripción del proyecto 3",
    img: ReactLogo,
    galeria: [ReactLogo, ReactLogo]
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
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        {proyectoSeleccionado && (
          <>
            <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontWeight: 'bold', color: '#fcbe05' }}>
                {proyectoSeleccionado.title}
              </span>

              <IconButton onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </DialogTitle>

            <DialogContent>
              <Typography sx={{ mb: 3 }}>
                {proyectoSeleccionado.desc}
              </Typography>

              <Grid container spacing={2}>
                {proyectoSeleccionado.galeria.map((foto, i) => (
                  <Grid item xs={12} sm={6} key={i}>
                    <Box
                      component="img"
                      src={foto || fallbackImg}
                      sx={{ width: '100%', borderRadius: 2 }}
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