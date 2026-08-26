import React, {useState, useEffect} from 'react'
import { useParams} from "react-router-dom";
import { Box } from '@mui/material';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs';
import projectConfig from '../../assets/configs/projectDetailsConfigs'
import "./ProjectDetails.css"
import ZeroMd from 'https://cdn.jsdelivr.net/npm/zero-md@3'
import { Grid2 } from '@mui/material';
import MiniCard from '../../components/Cards/MiniCard';


customElements.define('zero-md', ZeroMd)

const ProjectDetails = () => {
    const { projectId } = useParams();
    const [project, setProject] = useState("")
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [currentBlurbIndex, setCurrentBlurbIndex] = useState(0)

    useEffect(() => {
        setProject(projectConfig.find((item) => item.id === projectId))
      }, [projectId])

    if (!project) {
        return <p>Project not found!</p>;
    }

    const handleNextImage = () => {
        setCurrentImageIndex(currentImageIndex === project.images.length - 1 ? 0: currentImageIndex + 1)
      }

    const handlePrevImage = () => {
        setCurrentImageIndex(currentImageIndex === 0 ? project.images.length - 1: currentImageIndex -1)
    }

    const handleNextBlurb = () => {
        setCurrentBlurbIndex(currentBlurbIndex === project.blurbs.length - 1 ? 0: currentBlurbIndex + 1)
      }

    const handlePrevBlurb = () => {
        setCurrentBlurbIndex(currentBlurbIndex === 0 ? project.blurbs.length - 1: currentBlurbIndex -1)
    }
    
    return (
        <section id='project-details' style={{flexDirection: 'column', margin: '0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Box sx={{ minWidth: '90vw', textAlign: 'center', py: 4, backgroundColor: '#f0f0f0', marginTop: '10px', borderRadius: '15px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', mb: 6}}>
                <div style={{marginTop:"-75px", display: 'flex', flexDirection: 'column', gap: '0px', textAlign: 'center', paddingLeft: 0, padding: '1.25rem'}}>
                    <h3 style={{fontSize: 46, marginBottom: '0px'}}>{project.title}</h3>
                    <Box sx={{ borderTop: 1, borderColor: 'divider', my: 1, marginBottom: '-4px', mx: 2}} />
                    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '1rem', marginBottom: '-50px', fontSize: 12, justifyContent: 'center'}}>
                        <h3 style={{marginBottom: '-25px', fontWeight: 'bold'}}>Project Type:</h3>
                        <h3 style={{marginBottom: '-25px', fontWeight: 'bold'}}>My Roles:</h3>
                        <h3 style={{marginBottom: '-25px', fontWeight: 'bold'}}>Team Size:</h3>
                        <h3 style={{marginBottom: '-25px', fontWeight: 'bold'}}>Timeline</h3>
                        <h3 style={{fontWeight: 'normal'}}>{project.projectType}</h3>
                        <h3 style={{fontWeight: 'normal'}}>{project.myRoles}</h3>
                        <h3 style={{fontWeight: 'normal'}}>{project.teamSize}</h3>
                        <h3 style={{fontWeight: 'normal'}}>{project.timeline}</h3>
                    </div>
                </div>
            </Box>
            
        <Box sx={{minWidth: '90vw', textAlign: 'center', backgroundColor: '#f0f0f0', borderRadius: '15px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', mb: 6}}>
                <h3 style={{fontSize: 46, padding: '15px', marginBottom: '0px'}}>{project.blurbs[currentBlurbIndex].name}</h3>
                <Box sx={{ borderTop: 1, borderColor: 'divider', my: 1 }} />
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <BsArrowLeftCircleFill onClick={handlePrevBlurb} style={{display: 'flex', padding: '15px', width: '2rem', height: '2rem', color: 'rgba(76, 80, 79, 0.42)', cursor: 'pointer'}}/>
                    {project.blurbs.map((blurb, index) => (
                        <zero-md class={currentBlurbIndex === index ? "slide" : "slide-hidden"} src={blurb.link} style={{maxWidth:'80%'}}></zero-md>
                    ))}
                    <BsArrowRightCircleFill onClick={handleNextBlurb} style={{display: 'flex', padding: '15px', width: '2rem', height: '2rem', color: 'rgba(76, 80, 79, 0.42)', cursor: 'pointer'}}/>
                </div>
                <span style={{display: 'flex', position: 'relative', justifyContent: 'center', padding: '0px 0px 20px 0px'}}>
                    {project.blurbs.map((__, idx) => {
                        return <button style={{backgroundColor: 'rgba(76, 80, 79, 0.42)', height: 15, width: 15, borderRadius: '100%', margin: ' 0 0.2rem', padding: '0px'}} key={idx} onClick={() => setCurrentBlurbIndex(idx)}></button>
                    })}
                </span> 
            </Box>

            <Box sx={{minWidth: '90vw', textAlign: 'center', backgroundColor: '#f0f0f0', borderRadius: '15px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', mb: 6 }}>
                <h3 style={{fontSize: 46, padding: '15px', marginBottom: '0px'}}>Additional Project Visuals</h3>
                <Box sx={{ borderTop: 1, borderColor: 'divider', my: 1 }} />
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <BsArrowLeftCircleFill onClick={handlePrevImage} style={{display: 'flex', padding: '15px', width: '2rem', height: '2rem', color: 'rgba(76, 80, 79, 0.42)', cursor: 'pointer'}}/>
                    {project.images.map((image, index) => (
                        <Box sx={{borderRadius: '0.5rem', height: '400px', boxShadow: '0px 0px 7px #666', maxHeight: '400px'}}>
                            {image.media === 'image' ? ( 
                                <img className={currentImageIndex === index ? "slide" : "slide-hidden"} src={image.link} alt={image.name} key={index} style={{height:'100%', width: 'auto', borderRadius: '0.5rem', objectFit: 'contain'}}></img>) :
                                <video className={currentImageIndex === index ? "slide" : "slide-hidden"} src={image.link} alt={image.name} controls key={index} style={{height:'100%', width: 'auto', borderRadius: '0.5rem', objectFit: 'contain'}}></video>
                            }
                        </Box>
                    ))}
                    <BsArrowRightCircleFill onClick={handleNextImage} style={{display: 'flex', padding: '15px', width: '2rem', height: '2rem', color: 'rgba(76, 80, 79, 0.42)', cursor: 'pointer'}}/>
                </div>
                <h3 style={{display: 'flex',  justifyContent: 'center', fontSize: 20}}>{project.images[currentImageIndex].name}</h3>
                <span style={{display: 'flex', position: 'relative', justifyContent: 'center', padding: '0px 0px 20px 0px'}}>
                    {project.images.map((__, idx) => {
                        return <button style={{backgroundColor: 'rgba(76, 80, 79, 0.42)', height: 15, width: 15, borderRadius: '100%', margin: ' 0 0.2rem', padding: '0px'}} key={idx} onClick={() => setCurrentImageIndex(idx)}></button>
                    })}
                </span>
            </Box>

            <Box sx={{minWidth: '90vw', textAlign: 'center', backgroundColor: '#f0f0f0', borderRadius: '15px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', mb: 6 }}>
                <h3 style={{fontSize: 46, padding: '15px', marginBottom: '0px'}}>{"Want to Learn More?"}</h3>
                <Box sx={{ borderTop: 1, borderColor: 'divider', my: 1 }} />
                <Grid2 container spacing={6} justifyContent="center">
                        {project.resources.map((resource, index) => (
                            <Grid2 item="true" key={index} xs={12} sm={6} md={4}>
                                <MiniCard item={resource} />
                            </Grid2>
                        ))}
                </Grid2>
            </Box>
                        
        </section>
    );
};

export default ProjectDetails;