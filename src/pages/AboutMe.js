import React from 'react';
import { Grid2 } from '@mui/material';
import CardItem from '../components/Cards/CardItem';
import AboutMeConfig from '../assets/configs/AboutMeConfig';
import { Box, Typography } from '@mui/material';
import SkillsItems from './Skills/SkillsItems';
import skillsConfig from '../assets/configs/skillsConfig';

const AboutMe = () => {
    // return (
    //     <Grid2 container spacing={6} justifyContent="center">
    //         {AboutMeConfig.map((item, index) => (
    //             <Grid2 item key={index} xs={12} sm={6} md={4}>
    //                 <CardItem item={item} />
    //             </Grid2>
    //         ))}
    //     </Grid2>
    // );
    return (
        <section id="skills">
            <Box sx={{ textAlign: 'center', py: 4, backgroundColor: '#f0f0f0', borderRadius: '15px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', mb: 6 }}>
                <Typography variant="h3" component="h1" sx={{ color: '#263238', py: 2 }}>
                    <strong>Zephyr Conley</strong>
                </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                        <SkillsItems config={skillsConfig.mainSkills} />
                    </Box>

            </Box>

            <Box sx={{ textAlign: 'center', py: 4, backgroundColor: '#f0f0f0', borderRadius: '15px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
                <Grid2 container spacing={6} justifyContent="center">
                    {AboutMeConfig.map((item, index) => (
                        <Grid2 item key={index} xs={12} sm={6} md={4}>
                            <CardItem item={item} />
                        </Grid2>
                    ))}
                </Grid2>
            </Box>
        </section>
    );
}

export default AboutMe;
