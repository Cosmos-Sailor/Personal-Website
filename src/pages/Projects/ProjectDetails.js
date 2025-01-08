import React, {useState, useEffect} from 'react'
import { useParams} from "react-router-dom";
import { Box } from '@mui/material';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs';
import projectConfig from '../../assets/configs/projectDetailsConfigs'
import "./ProjectDetails.css"

const ProjectDetails = () => {
    const { projectId } = useParams();
    const [project, setProject] = useState("")
    const [currentIndex, setCurrentIndex] = useState(0)
    const [projectDescription, setProjectDescription] = useState("")
    const [methodology, setMethodology] = useState("")
    const [reflection, setReflection] = useState("")

    useEffect(() => {
        setProject(projectConfig.find((item) => item.id === projectId))
      }, [projectId])
    
    useEffect(() => {
        async function getText(fileName, type) {
            try {
                const response = await fetch(fileName)
                const text = await response.text()
                
                if(type === "description") setProjectDescription(text)
                if(type === "methodology") setMethodology(text)
                if(type === "reflection") setReflection(text)
            } catch (error) {
                console.error("error fetching text:", error)
            }
        }

        if(project) {
            getText(project.description, "description")
            getText(project.methodology, "methodology")
            getText(project.reflection, "reflection")
        }

    }, [project])


    if (!project) {
        return <p>Project not found!</p>;
    }

    const handleNext = () => {
        setCurrentIndex(currentIndex === project.images.length - 1 ? 0: currentIndex + 1)
      }

    const handlePrev = () => {
        setCurrentIndex(currentIndex === 0 ? project.images.length - 1: currentIndex -1)
    }
    

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
                <h3 style={{fontSize: 46, padding: '15px', marginBottom: '10px'}}>Project Visuals</h3>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <BsArrowLeftCircleFill onClick={handlePrev} style={{display: 'flex', padding: '15px', width: '2rem', height: '2rem', color: 'rgba(76, 80, 79, 0.42)', cursor: 'pointer'}}/>
                    {project.images.map((image, index) => (
                        <div style={{borderRadius: '0.5rem', boxShadow: '0px 0px 7px #666', maxWidth: '60%', maxHeight: '400px'}}>
                        {image.media === 'image' ? ( 
                            <img className={currentIndex === index ? "slide" : "slide-hidden"} src={image.link} alt={image.name} key={index} style={{maxWidth: '100%'}}></img>) :
                            <video className={currentIndex === index ? "slide" : "slide-hidden"} src={image.link} alt={image.name} controls key={index} style={{maxWidth: '100%'}}></video>}
                        </div>
                    ))}
                    <BsArrowRightCircleFill onClick={handleNext} style={{display: 'flex', padding: '15px', width: '2rem', height: '2rem', color: 'rgba(76, 80, 79, 0.42)', cursor: 'pointer'}}/>
                </div>
                <h3 style={{display: 'flex',  justifyContent: 'center', fontSize: 20}}>{project.images[currentIndex].name}</h3>
                <span style={{display: 'flex', position: 'relative', justifyContent: 'center', padding: '0px 0px 20px 0px'}}>
                    {project.images.map((__, idx) => {
                        return <button style={{backgroundColor: 'rgba(76, 80, 79, 0.42)', height: 15, width: 15, borderRadius: '100%', margin: ' 0 0.2rem', padding: '0px'}} key={idx} onClick={() => setCurrentIndex(idx)}></button>
                    })}
                </span>
            </Box>

            <Box sx={{textAlign: 'center', backgroundColor: '#f0f0f0', borderRadius: '15px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
            <h3 style={{fontSize: 46, padding: '10px', marginBottom: '10px'}}>Project Overview</h3>
                <div style={{marginTop:"-50px", display: 'flex', flexDirection: 'column', gap: '0px', textAlign: 'left', paddingLeft: 0, padding: '1.25rem'}}>
                    <h3 style={{fontSize: 22, marginBottom: '0px'}}>Project Description</h3>
                    <h3 style={{fontSize: 16, marginBottom: '0px', fontWeight: 'normal', whiteSpace: 'pre-wrap'}}>{projectDescription}</h3>
                    <h3 style={{fontSize: 22, marginBottom: '0px'}}>Methodology</h3>
                    <h3 style={{fontSize: 16, marginBottom: '0px', fontWeight: 'normal', whiteSpace: 'pre-wrap'}}>{methodology}</h3>
                    <h3 style={{fontSize: 22, marginBottom: '0px'}}>Reflection</h3>
                    <h3 style={{fontSize: 16, marginBottom: '0px', fontWeight: 'normal', whiteSpace: 'pre-wrap'}}>{reflection}</h3>
                </div>
            </Box>
        </section>
    );
};

export default ProjectDetails;