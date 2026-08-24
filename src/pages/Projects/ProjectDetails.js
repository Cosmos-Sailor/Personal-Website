import React, {useState, useEffect} from 'react'
import { useParams} from "react-router-dom";
import { Box } from '@mui/material';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs';
import projectConfig from '../../assets/configs/projectDetailsConfigs'
import "./ProjectDetails.css"
import ZeroMd from 'https://cdn.jsdelivr.net/npm/zero-md@3'
import { Grid2 } from '@mui/material';

customElements.define('zero-md', ZeroMd)

const ProjectDetails = () => {
    const { projectId } = useParams();
    const [project, setProject] = useState("")
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [currentBlurbIndex, setCurrentBlurbIndex] = useState(0)
    //const [currentCarouselText, setCurrentCarouselText] = useState("")

    useEffect(() => {
        setProject(projectConfig.find((item) => item.id === projectId))
      }, [projectId])

    if (!project) {
        return <p>Project not found!</p>;
    }

    
    // async function getText(fileName) {
    //     try {
    //         const response = await fetch(fileName)
    //         const text = await response.text()

    //         setCurrentCarouselText(text)
    //     } catch (error) {
    //         console.error("error fetching text:", error)
    //     }
    // }

    //getText(project.blurbs[currentBlurbIndex].link)


    const handleNextImage = () => {
        setCurrentImageIndex(currentImageIndex === project.images.length - 1 ? 0: currentImageIndex + 1)
      }

    const handlePrevImage = () => {
        setCurrentImageIndex(currentImageIndex === 0 ? project.images.length - 1: currentImageIndex -1)
    }

    const handleNextBlurb = () => {
        setCurrentBlurbIndex(currentBlurbIndex === project.blurbs.length - 1 ? 0: currentBlurbIndex + 1)
        //getText(project.blurbs[currentBlurbIndex].link)
      }

    const handlePrevBlurb = () => {
        setCurrentBlurbIndex(currentBlurbIndex === 0 ? project.blurbs.length - 1: currentBlurbIndex -1)
        //getText(project.blurbs[currentBlurbIndex].link)
    }

    //<p className={currentBlurbIndex === index ? "slide" : "slide-hidden"} style={{ textAlign: 'left', fontSize:18, lineHeight: 1.6, maxWidth: '80%'}}>{currentCarouselText}</p>
    

    return (
        <section id='project-details'>
            <Box sx={{ textAlign: 'center', py: 4, backgroundColor: '#f0f0f0', marginTop: '10px', borderRadius: '15px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', mb: 6 }}>
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
            
        <Box sx={{textAlign: 'center', backgroundColor: '#f0f0f0', borderRadius: '15px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', mb: 6 }}>
                <h3 style={{fontSize: 46, padding: '15px', marginBottom: '10px'}}>{project.blurbs[currentBlurbIndex].name}</h3>
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

            <Box sx={{textAlign: 'center', backgroundColor: '#f0f0f0', borderRadius: '15px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', mb: 6 }}>
                <h3 style={{fontSize: 46, padding: '15px', marginBottom: '10px'}}>Additional Project Visuals</h3>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <BsArrowLeftCircleFill onClick={handlePrevImage} style={{display: 'flex', padding: '15px', width: '2rem', height: '2rem', color: 'rgba(76, 80, 79, 0.42)', cursor: 'pointer'}}/>
                    {project.images.map((image, index) => (
                        <div style={{borderRadius: '0.5rem', boxShadow: '0px 0px 7px #666', maxWidth: '60%', maxHeight: '400px'}}>
                            {image.media === 'image' ? ( 
                                <img className={currentImageIndex === index ? "slide" : "slide-hidden"} src={image.link} alt={image.name} key={index} style={{maxWidth: '100%'}}></img>) :
                                <video className={currentImageIndex === index ? "slide" : "slide-hidden"} src={image.link} alt={image.name} controls key={index} style={{maxWidth: '100%'}}></video>
                            }
                        </div>
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

            <Box sx={{textAlign: 'center', backgroundColor: '#f0f0f0', borderRadius: '15px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', mb: 6 }}>
                <h3 style={{fontSize: 46, padding: '15px', marginBottom: '10px'}}>{"Want to Learn More? Click here!"}</h3>
                <Grid2 container spacing={30} justifyContent="center">
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>                
                        {project.resources.map((resource, index) => (
                                <p style={{textAlign: 'center', padding: '15px', fontSize:18, lineHeight: 1.6, maxWidth: '80%'}}>{resource.description}</p>
                        ))}
                    </div>
                </Grid2>
            </Box>
                        
        </section>
    );
};

export default ProjectDetails;