import React from 'react'
import ResumePDF from '../../assets/images/resume.pdf'

const Resume = () => {
    return (
        <iframe src={ResumePDF} target="_blank" title="This is my resume" style={{width: '100%', height: '1000px'}} />
    );
}

export default Resume;