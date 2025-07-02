import drone from "../images/Drone.png"
import amcl from "../images/AMCL.png"
import arm from "../images/arm.png"

import segmentation from "../images/segmentation.png"
import modelout from "../images/modelout.png"
import trainloss from "../images/trainloss.png"
import transformed from "../images/transformed.png"

import semanticDescription from "../projectDescriptions/semanticDescription.txt"
import semanticMethodology from "../projectDescriptions/semanticMethodology.txt"
import semanticReflection from "../projectDescriptions/semanticReflection.txt"

import terrawardenDescription from "../projectDescriptions/terrawardenDescription.txt"
import terrawardenMethodology from "../projectDescriptions/terrawardenMethodology.txt"
import terrawardenReflection from "../projectDescriptions/terrawardenReflection.txt"

import segmentationVideo from "../videos/segmentation.mp4"

const projectConfig = [
    {
        id: "Terrawarden",
        title: "Terrawarden Drone Cleanup",
        projectType: "Drone",
        myRoles: "Manipulator Design and Controls",
        teamSize:"6",
        timeline:"April 2024 - Present",
        description: terrawardenDescription,
        methodology: terrawardenMethodology,
        reflection: terrawardenReflection,
        images: [
            {name: "Full drone CAD", link: drone}, {name: "pic2", link: amcl}, {name: "pic3", link: arm}],
        links: [
            { name: "GitHub", url: "https://github.com/example/project1" },
        ],
    },
    {
        id: "SemanticSegmentation",
        title: "Semantic Segmentation Using Deep Learning",
        projectType: "Convolutional Neural Network",
        myRoles: "Dataset Augmentation and Network Design",
        teamSize:"3",
        timeline:"October 2024",
        description: semanticDescription,
        methodology: semanticMethodology,
        reflection: semanticReflection,
        images: [
            {name: "Semantic Segmentation Mask Applied to Video", link: segmentationVideo, media: "video"}, 
            {name: "Frame from segmented video", link: segmentation, media: "image"}, 
            {name: "Model Output from Validation Set (Left: Model Output, Center: Mask from Dataset, Right: Original Image)", link: modelout, media: "image"},
            {name: "Graph of Training Loss over Epochs", link: trainloss, media: "image"},
            {name: "Sample image augmented in Pytorch", link: transformed, media: "image"}
        ]
    },
    {
        id: "4DOF",
        title: "Terrawarden Drone Cleanup",
        projectType: "Drone",
        myRoles: "Manipulator Design and Controls",
        teamSize:"6",
        timeline:"April 2024 - Present",
        description: "This is the first project.",
        methodology: "This is what we did for the project",
        reflection: "This is what I wish I could have done differently",
        images: [
            {name: "Full drone CAD", link: drone}, {name: "pic2", link: amcl}, {name: "pic3", link: arm}],
        links: [
            { name: "GitHub", url: "https://github.com/example/project1" },
        ],
    },
    {
        id: "SLAM",
        title: "Project Two",
        description: "This is the second project.",
        image: "/path/to/image2.jpg",
        links: [
            { name: "Live Demo", url: "https://example.com/project2" },
        ],
    },
    // Add more projects as needed
];

export default projectConfig;