//images

//terrawarden
import droneRender from "../images/Drone.png"
import droneReal from "../images/drone_real.png"
import terrawardenArm from "../images/terrawarden_arm.png"
import drone from "../images/Drone.png"

//deep learning
import segmentation from "../images/segmentation.png"
import modelout from "../images/modelout.png"
import trainloss from "../images/trainloss.png"
import transformed from "../images/transformed.png"

//3001
import arm from "../images/arm.png"

//3002
import amcl from "../images/AMCL.png"

//mark-down files

//terrawarden
import terrawardenDefinition from "../projectDescriptions/MQP_Definition.md"
import terrawardenDrone from "../projectDescriptions/terrawardenDrone.md"
import terrawardenRole from "../projectDescriptions/Terrawarden_Role.md"
import terrawardenResults from "../projectDescriptions/MQP_Results_and_Reflections.md"

//deep learning
import ssDefinition from "../projectDescriptions/Semantic_Segmentation_Definition.md"
import ssRole from "../projectDescriptions/Semantic_Segmentation_Role.md"
import ssResults from "../projectDescriptions/Semantic_Segmentation_Results_and_Reflections.md"

//3001
import armOverview from "../projectDescriptions/Object_Sorting_Project_Overview.md"
import armRole from "../projectDescriptions/Object_Sorting_Role.md"
import armResults from "../projectDescriptions/Object_Sorting_Results_and_Reflections.md"

//3002
import turtleBotDefinition from "../projectDescriptions/3002_Definition.md"
import turtleBotOverview from "../projectDescriptions/3002_Overview.md"
import turtleBotRole from "../projectDescriptions/3002_Role.md"
import turtleBotResults from "../projectDescriptions/3002_Results_and_Reflections.md"

//videos

//terrawarden
import terrawardenVideo from "../videos/terrawarden.mp4"

//deep learning
import segmentationVideo from "../videos/segmentation.mp4"

//pdfs

//terrawarden
import terrawardenPaper from "../PDFs/Terrawarden_Paper.pdf"
import terrawardenPoster from "../PDFs/Terrawarden_Poster.pdf"

//deep learning
import semanticSegmentationPaper from "../PDFs/Semantic_Segmentation_Paper.pdf"

const projectConfig = [
    {
        id: "Terrawarden",
        title: "Terrawarden Drone Cleanup",
        projectType: "Aerial Manipulator",
        myRoles: "Manipulator Design and Controls",
        teamSize:"6",
        timeline:"April 2024 - May 2025",
        blurbs: [
            {name: "What Does MQP Stand For?", link: terrawardenDefinition},
            {name: "The Terrawarden Drone", link: terrawardenDrone},
            {name: "My Role", link: terrawardenRole},
            {name: "Results and Reflections", link: terrawardenResults}
        ],
        images: [
            {name: "Final Project Video", link: terrawardenVideo, media: "video"},
            {name: "Full Drone CAD Render", link: droneRender, media: "image"}, 
            {name: "Drone Flying Indoors", link: droneReal, media: "image"},
            {name: "Arm Render", link: terrawardenArm, media: "image"}
        ],
        resources: [
            {description: "Click here to read our paper!", preview: terrawardenPaper, media: "iframe", link: "https://digital.wpi.edu/concern/student_works/8c97kw15v"},
            {description: "Click here to view our award-winning poster!", preview: terrawardenPoster, media: "iframe", link: "https://digital.wpi.edu/concern/student_works/8c97kw15v"},
            {description: "Click here to view our open-source codebase!", preview: droneRender, media: "img", link: "https://github.com/Terrawarden-MQP"},
            {description: "Click here to watch our final project video!", preview: terrawardenVideo, media: "video", link: "https://www.youtube.com/watch?v=JgRSZfa9o8A"}
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
            {name: "What is Semantic Segmentation?", link: ssDefinition},
            {name: "My Role", link: ssRole},
            {name: "Results and Reflections", link: ssResults}],
        images: [
            {name: "Frame from segmented video", link: segmentation, media: "image"},
            {name: "Semantic Segmentation Mask Applied to Video", link: segmentationVideo, media: "video"},  
            {name: "Model Output from Validation Set (Left: Model Output, Center: Mask from Dataset, Right: Original Image)", link: modelout, media: "image"},
            {name: "Graph of Training Loss over Epochs", link: trainloss, media: "image"},
            {name: "Sample image augmented in Pytorch", link: transformed, media: "image"}
        ],
        resources: [
            {description: "Click here to read our paper!", preview: semanticSegmentationPaper, media: "iframe", link: "../PDFs/HW_2_Dramatic_Data.pdf"},
            {description: "Click here to view our open-source codebase!", preview: segmentation, media: "img", link: "https://github.com/KalticCodes/DL_Perception/tree/main/project2"},
            {description: "Click here to watch our final project video!", preview: segmentationVideo, media: "video", link: "https://youtu.be/ha5nsYFRuVE?si=3O1DKC3qyt0l02Ch"}
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
            {name: "Project Overview", link: armOverview},
            {name: "My Role", link: armRole},
            {name: "Results and Reflections", link: armResults}],
        images: [
            {name: "3DOF arm identifying yellow ball using computer vision", link: arm, media: "image"}],
        resources: [
            {description: "Click here to read our paper!", preview: terrawardenPaper, media: "iframe", link: "https://digital.wpi.edu/concern/student_works/8c97kw15v"},
            {description: "Click here to view our open-source codebase!", preview: droneRender, media: "img", link: "/projects/SemanticSegmentation"},
            {description: "Click here to watch our final project video!", preview: terrawardenVideo, media: "video", link: "https://youtu.be/GJRbmashmVY?si=753soNPXz7Uqlnlg"}
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
            {name: "What is SLAM and AMCL", link: turtleBotDefinition},
            {name: "Project Overview", link: turtleBotOverview},
            {name: "My Role", link: turtleBotRole},
            {name: "Results and Reflections", link: turtleBotResults}],
        images: [
            {name: "TurtleBot exploring a maze and navagating to a frontier (the purple line marking unexplored territory)", link: amcl}],
        resources: [
            {description: "Click here to read our paper!", preview: terrawardenPaper, media: "iframe", link: "https://digital.wpi.edu/concern/student_works/8c97kw15v"},
            {description: "Click here to view our award-winning poster!", preview: terrawardenPoster, media: "iframe", link: "https://digital.wpi.edu/concern/student_works/8c97kw15v"},
            {description: "Click here to view our open-source codebase!", preview: droneRender, media: "img", link: "https://github.com/Terrawarden-MQP"},
            {description: "Click here to watch our final project video!", preview: terrawardenVideo, media: "video", link: "https://www.youtube.com/watch?v=JgRSZfa9o8A"}
        ],
    },
];

export default projectConfig;
