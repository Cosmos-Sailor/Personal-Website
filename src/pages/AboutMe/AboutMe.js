import React from 'react';
import { Grid2 } from '@mui/material';
import ResumeItem from '../../components/Resume/ResumeItem';
import AboutMeConfig from '../../assets/configs/AboutMeConfig';
import { Box } from '@mui/material';
import { FaQuestionCircle } from 'react-icons/fa';
import selfie from '../../assets/images/me.jpg'

const AboutMe = () => {
    return (
        <section id='about-me'>
            <Box sx={{ textAlign: 'center', py: 4, backgroundColor: '#f0f0f0', marginTop: '100px', borderRadius: '15px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', mb: 6}}>
                <div style={{display: 'flex', flexDirection: 'column', marginTop: '-50px', gap: '8rem'}}>
                    <div style={{width: 60, display: 'flex', flexDirection: 'column', gap: '1rem',}}>
                        <img  src={selfie} style={{width: 150, height: 150, borderRadius: '50%', backgroundColor: 'white', border: '2px solid white', marginLeft: 20, display: 'block'}} title="It's me!" alt="Selfie" />
                    </div>
                    <div style={{marginTop: '-300px', display: 'flex', flexDirection: 'column', gap: '0px', textAlign: 'left', marginLeft: 175, padding: '1.25rem'}}>
                        <h3 style={{fontSize: 36, marginBottom: '-8px'}}>Zephyr Conley</h3>
                        <h3 style={{display: 'flex', flexDirection: 'row', width: '100%', fontSize: 22}}><span>(they/them)</span> 
                        <a style={{marginLeft: 6, color: 'gray'}} href='https://en.wikipedia.org/wiki/Preferred_gender_pronoun' target='_blank' rel="noreferrer"><FaQuestionCircle /></a></h3>
                    </div>
                </div>
                <div style={{textAlign: 'left', marginLeft: 20, marginRight: 20, marginTop: '-20px'}}>
                    <p style={{marginBottom: '-10px', fontSize: 18}}>Nice to meet you! I'm a Senior at WPI studying Robotics and Mechanical Engineering! 
                                I specialize in robotics navigation, robotics controls, and mechanical design, but I have a vested interest in Reinforcement Learning and AI, particularly for computer vision in robotics. 
                                My hobbies include sailing, playing the flute, and creative writing. If you are interested in my creative work, you can read my latest collection of short stories, Playground Tales on my Projects Page.</p>
                    <br />
                    <p style={{fontSize: 18}}>I am looking for a full-time position beginning after my graduation in May 2025. 
                    I am interested in finding work that matches my experience while leaving room for my skills to develop over time.</p>
                </div>
            </Box>

            <Box sx={{ textAlign: 'center', py: 4, backgroundColor: '#f0f0f0', borderRadius: '15px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)'}}>
                <Grid2 container spacing={6} justifyContent='center'>
                    {AboutMeConfig.map((item, index) => (
                        <Grid2 item="true" key={index} xs={12} sm={6} md={4}>
                            <ResumeItem item={item} />
                        </Grid2>
                    ))}
                </Grid2>
            </Box>
        </section>
    );
}

export default AboutMe;
