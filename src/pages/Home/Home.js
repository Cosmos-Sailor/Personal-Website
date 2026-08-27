import React from 'react';
import { Container, Grid2, Box, Typography } from '@mui/material';
import DynamicTyping from '../../components/DynamicTyping';
import About from '../../components/About';
import Timeline from '../../components/Timeline/Timeline';
import homeConfig from '../../assets/configs/homeConfig';

const Home = () => {
    return (
        <section>
            <Container maxWidth="xl" className="home-content" id="home">
                <Grid2 container justifyContent="center" alignItems="center" className="home-header">
                    <Grid2 item xs={12} style={{ textAlign: 'center' }}>
                        <Typography variant="h1" sx={{fontSize: '3em'}}>
                            {homeConfig.greeting}
                        </Typography>
                        <Box sx={{ textAlign: 'center', mt: 2 }}>
                            <DynamicTyping titles={homeConfig.titles} />
                        </Box>
                        <Box sx={{ mt: 4 }}>
                            <About about={homeConfig.about} />
                        </Box>
                    </Grid2>
                </Grid2>
            </Container>
            <Container maxWidth="85vw" className="break-content" id="break">
                <Grid2 container justifyContent="center" alignItems="center" className="home-header">
                    <Grid2 item xs={12} style={{ textAlign: 'center' }}>
                        <Typography variant="h1" sx={{ color: '#f5f5f5', fontSize: '3em' }}>
                            {homeConfig.break}
                        </Typography>
                    </Grid2>
                </Grid2>          
            </Container>
            <Container className="resume-content" id="resume" sx={{ mt: 6, minWidth: '85vw', maxWidth: '85vw', justifyContent: 'center', justifySelf: 'center' }}>
                <Box sx={{ width: '100%', maxWidth: '85vw', mx: 'auto' }}>
                    <Timeline items={homeConfig.workTimeline} />
                </Box>
            </Container>
        </section>
    );
}

export default Home;
