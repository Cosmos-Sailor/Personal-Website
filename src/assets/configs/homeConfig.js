import React from 'react'
//import {BsClipboardData} from "react-icons/bs";
import {DiCodeigniter} from "react-icons/di";
import {GiCommercialAirplane} from "react-icons/gi";
import {FaMobileAlt} from "react-icons/fa";
import { BiRocket } from "react-icons/bi";

const homeConfig = {

    greeting:
        <h1 className="heading">
            <strong className="main-name">Hi! I'm Zephyr Conley</strong>
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
        start: "I am a recent graduate from Worcester Polytechnic Institute with a Bachelor's Degree in Mechanical and Robotics Engineering." +
                " My specialties lie in manipulator design, robotic controls, aerial manipulators, and machine leaning for computer vision." +
                " I am a jack-of-all-trades and I love working on multiple aspects of a project, especially when they involve robotic design, control systems, or aerial robotics.",
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
            description: "Worked in a team of 6 to build a proof-of-concept aerial manipulator for trash detection and collection on highway medians.",
            date: "April 2024 - May 2025",
            icon: <BiRocket/>,
            tags: ["Deep Learning", "Autonomous Aerial Vehicle", "Aerial Controls", "CAD", "Manipulator Design", "Prototyping"]
        },
        {
            id: "work-2",
            title: "Advanced Manufacturing Engineering Intern",
            company: "TPI Composites/Senvias",
            description:
                    <ul>
                        <li>Assembled design specifications consisting of engineering drawings, safety analysis, and proposed solutions for complex industrial automation processes, such as a rotisserie system designed to raise and rotate composite molds weighing up to 2,000 lbs</li>
                        <li>Developed and improved SOPs for industrial processes such as operation of the industrial oven and safe use of the CNC machines</li>
                    </ul>,

            date: "May 2024 - August 2024",
            icon: <FaMobileAlt/>,
            tags: ["CAD", "Mechanical Design", "Design Specification", "Prototyping", "Engineering Research", "SOP Writing", "Soldering"]
        },
        {
            id: "work-1",
            title: "Instrumentation and Controls Intern",
            company: "Framatome",
            description: "- Implemented full-stack development of a user-friendly application coded in VBA that automatically extracts information from AutoCAD drawings, generates new drawings based on a template, and modifies existing drawing using data from an Access database" + "\n" +
                        "- Documented the development, suggested future improvements, and wrote a step-by-step guide on how to use the tool for new users",
            date: "May 2023 - August 2023",
            icon: <DiCodeigniter/>,
            tags: ["AutoCAD", "Microsoft Access", "VBA", "Database Design and Management", "UI design", "System documentation"]
        },
        {
            id: "work-0",
            title: "Peer Tutor",
            company: "WPI Academic Resource Center",
            description: "-	Tutored groups of 1-15 students in subjects such as mechanics, electricity and magnetism, integral calculus, and multivariable calculus" + "\n" +
                        "- Collaborated with professors, TAs, and other ARC staff to help students achieve maximal understanding of subject material",
            date: "April 2021 - May 2024",
            icon: <GiCommercialAirplane/>,
            tags: ["Collaboration", "Calculus", "Physics", "Social Skills"]
        }
    ]
}


export default homeConfig