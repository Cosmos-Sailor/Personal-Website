import drone from "../images/Drone.png"
import segmentation from "../images/segmentation.png"
import amcl from "../images/AMCL.png"
import arm from "../images/arm.png"

const projectConfig = [
    {
        id: "project-5",
        title: "Terrawarden Drone Cleanup",
        links: [
            {
                name: "read more",
                url: "/projects/Terrawarden",
                icon: "Read More",
            },
        ],
        image: drone,
        description: "Aerial manipulator designed to clean up trash on highway medians.",
        target: "_blank"
    },
    {
        id: "project-3",
        title: "Semantic Segmentation Using Deep Learning",
        links: [
            {
                name: "read more",
                url: "/projects/SemanticSegmentation",
                icon: "Read More",
            },
        ],
        image: segmentation,
        description: "Neural network for detecting racing drone gates",
        target: "_blank"
    },
    {
        id: "project-2",
        title: "Robot Navigation Using SLAM and AMCL",
        links: [
            {
                name: "read more",
                url: "/projects/SLAM",
                icon: "Read More",
            },
        ],
        image: amcl,
        description: "TurtleBot capable of exploring and mapping its environment and locating itself after mapping.",
        target: "_blank"
    },
    {
        id: "project-1",
        title: "Object Sorting Using 4-DOF Arm",
        links: [
            {
                name: "read more",
                url: "/projects/4DOF",
                icon: "Read More",
            },
        ],
        image: arm,
        description: "4-DOF arm capable of identifying small, plastic balls and sorting them based on color.",
        target: "_blank"
    }
]

export default projectConfig