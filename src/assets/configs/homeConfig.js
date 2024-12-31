import React from 'react'
//import {BsClipboardData} from "react-icons/bs";
import {DiCodeigniter} from "react-icons/di";
import {GiCommercialAirplane} from "react-icons/gi";
import {FaMobileAlt} from "react-icons/fa";
import { BiRocket } from "react-icons/bi";

const homeConfig = {

    greeting:
        <h1 className="heading">
            Hi! I'm <strong className="main-name"> Zephyr Conley</strong>
        </h1>,
    titles: [
        "A Roboticist",
        "A Controls Engineer",
        "A Mechanical Engineer",
        "An Eternally Curious Person",
        "A Writer",
        "A Flutist"
    ],
    about: {
        start: "I am a senior at Worcester Polytechnic Institute double majoring in Mechanical Engineering and Robotics Engineering." + 
                " My specialties lie in manipulator design, aerial manipulators, and machine leaning for computer vision." +
                " I am a jack-of-all-trades and I love working on multiple aspects of a project, especially when they involve design, robotic controls, or aerial robotics.",
        exit: "I am experienced in programming and engineering design and I am proficient in many softwares and programming languages" + 
              " such as Solidworks, Github, ROS, ROS2, Ubuntu, Python, Matlab, Java, Javascript, and HTML."
    },
    break: 
        <h1 className="heading">
            <strong className="main-name"> My Recent Experience</strong>
        </h1>,
    workTimeline: [
        {
            id: "work-3",
            title: "TerraWarden Drone Cleanup MQP",
            company: "WPI Senior Project",
            description: "Working in a team of 6 to build an aerial manipulator capable of cleaning up trash from highway medians.",
            date: "April 2024 - Present",
            icon: <BiRocket/>,
            tags: ["Deep Learning", "Autonomous Aerial Vehicle", "Aerial Controls", "CAD", "Design", "Prototyping"]
        },
        {
            id: "work-2",
            title: "Advanced Manufacturing Engineering Intern",
            company: "TPI Composites/Senvias",
            description: "Performed safety analysis on a rotisserie system designed to raise and rotate composite molds weighing up to 2,000 lbs." +
                        " Generated engineering drawings of the system and produced a comprehensive report detailing current safety concerns and possible solutions",
            date: "May 2024 - August 2024",
            icon: <FaMobileAlt/>,
            tags: ["CAD", "Mechanical Design", "Prototyping", "Research", "Soldering", "Collaboration"]
        },
        {
            id: "work-1",
            title: "Instrumentation and Controls Intern",
            company: "Framatome",
            description: "Coded an app in VBA with a user-friendly UI that allowed engineers to automatically extract information from multiple AutoCAD drawings, " + 
                        "generate new drawings, and input data from a database into an existing drawing along with other useful functions.",
            date: "May 2023 - August 2023",
            icon: <DiCodeigniter/>,
            tags: ["AutoCAD", "Microsoft Access", "VBA", "Database Design and Management", "UI design"]
        },
        {
            id: "work-0",
            title: "Peer Tutor",
            company: "WPI Academic Resource Center",
            description: "Tutored groups of 1-15 students in subjects such as physics (mechanical and electricity and magnetism), integral calculus and multivariable calculus.",
            date: "April 2021 - May 2024",
            icon: <GiCommercialAirplane/>,
            tags: ["Collaboration", "Calculus", "Physics", "Social Skills"]
        }
    ]
}


export default homeConfig