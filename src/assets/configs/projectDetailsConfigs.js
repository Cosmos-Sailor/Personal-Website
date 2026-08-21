import droneRender from "../images/Drone.png"
import droneReal from "../images/drone_real.png"
import terrawardenArm from "../images/terrawarden_arm.png"
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

import MQP_Definition from "../projectDescriptions/MQP Definition.txt"
import MQP_Definition from "../projectDescriptions/terrawardenDrone.txt"
import terrawardenDescription from "../projectDescriptions/terrawardenDescription.txt"
import terrawardenMethodology from "../projectDescriptions/terrawardenMethodology.txt"
import terrawardenReflection from "../projectDescriptions/terrawardenReflection.txt"

import underConstruction from "../projectDescriptions/UnderConstruction.txt"

import segmentationVideo from "../videos/segmentation.mp4"
import terrawardenVideo from "../videos/terrawarden.mp4"

const projectConfig = [
    {
        id: "Terrawarden",
        title: "Terrawarden Drone Cleanup",
        projectType: "Aerial Manipulator",
        myRoles: "Manipulator Design and Controls",
        teamSize:"6",
        timeline:"April 2024 - May 2025",
        blurbs: [
            {name: "What Does MQP Stand For?", link: MQP_Definition},
            {name: "The Terrawarden Drone", link: terrawardenMethodology},
            {name: "My Role", link: terrawardenReflection},
            {name: "Results and Reflections", link: terrawardenMethodology}],
        images: [
            {name: "Final Project Video", link: terrawardenVideo, media: "video"},
            {name: "Full Drone CAD Render", link: droneRender, media: "image"}, 
            {name: "Drone Flying Indoors", link: droneReal, media: "image"},
            {name: "Arm Render", link: terrawardenArm, media: "image"}],
        resources: [
            {description: "paper", link: terrawardenDescription},
            {description: "poster", link: terrawardenDescription},
            {description: "codebase", link: terrawardenDescription},
        ],
    },
    {
        id: "SemanticSegmentation",
        title: "Semantic Segmentation Using Deep Learning",
        projectType: "Convolutional Neural Network",
        myRoles: "Dataset Augmentation and Network Design",
        teamSize:"3",
        timeline:"October 2024",
        blurbs: [
            {name: "What is Semantic Segmentation?", link: terrawardenDescription},
            {name: "My Role", link: terrawardenDescription},
            {name: "Results and Reflections", link: terrawardenDescription}],
        images: [
            {name: "Frame from segmented video", link: segmentation, media: "image"},
            {name: "Semantic Segmentation Mask Applied to Video", link: segmentationVideo, media: "video"},  
            {name: "Model Output from Validation Set (Left: Model Output, Center: Mask from Dataset, Right: Original Image)", link: modelout, media: "image"},
            {name: "Graph of Training Loss over Epochs", link: trainloss, media: "image"},
            {name: "Sample image augmented in Pytorch", link: transformed, media: "image"}
        ],
        resources: [
            {description: "paper", link: terrawardenDescription},
            {description: "codebase", link: terrawardenDescription},
        ],
    },
    {
        id: "4DOF",
        title: "Object Sorting Using 4DOF Arm",
        projectType: "Computer Vision and Robotic Manipulator",
        myRoles: "Lead Programmer",
        teamSize:"3",
        timeline:"January 2024 - March 2024",
        blurbs: [
            {name: "Project Overview", link: terrawardenDescription},
            {name: "My Role", link: terrawardenDescription},
            {name: "Results and Reflections", link: terrawardenDescription}],
        images: [
            {name: "Full drone CAD", link: drone}, {name: "pic2", link: amcl}, {name: "pic3", link: arm}],
        resources: [
            {description: "paper", link: terrawardenDescription},
            {description: "video", link: terrawardenDescription},
            {description: "codebase", link: terrawardenDescription},
        ],
    },
    {
        id: "SLAM",
        title: "Autonomous Robot Navigation Using SLAM and AMCL",
        projectType: "Autonomous Robotic Navigation",
        myRoles: "Lead Programmer",
        teamSize:"3",
        timeline:"March 2024 - May 2024",
        blurbs: [
            {name: "What is SLAM and AMCL", link: terrawardenDescription},
            {name: "Project Overview", link: terrawardenDescription},
            {name: "My Role", link: terrawardenDescription},
            {name: "Results and Reflections", link: terrawardenDescription}],
        images: [
            {name: "Full drone CAD", link: drone}, 
            {name: "pic2", link: amcl}, 
            {name: "pic3", link: arm}],
        resources: [
            {description: "paper", link: terrawardenDescription},
            {description: "codebase", link: terrawardenDescription},
        ],
    },
];

export default projectConfig;
