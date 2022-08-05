import './App.css';
import {forwardRef, useRef, useState} from "react";
import React from "react";
import AboutMe from "./Components/AboutMe";
import InvoiceMain from './Images/InvoiceMain.jpg'
import InvoiceSecondary from './Images/InvoiceSecondary.jpg'
import InvoiceTertiary from './Images/InvoiceTertiary.jpg'
import CrowdiesMain from './Images/CrowdiesMain.jpg'
import CrowdiesSecondary from './Images/CrowdiesSecondary.jpg'
import CrowdiesTertiary from './Images/CrowdiesTertiary.jpg'
import LLVideo from './Images/LUCASLICHNERSEITE.mov'
import IEVideo from './Images/IMAGEEDITOR.mp4'
import ImageContent from './Components/ImageContent';
import VideoContent from './Components/VideoContent';
import Footer from './Components/Footer';

function App() {

    const Frontend = {topic: 'FRONTEND', projects: ['lucaslichner.de', 'MockWebshop', 'ImageEditor'], color:'#F3Fe39'};
    const UI = {topic: 'UI', color:'black', projects: ['Kinvoize', 'Crowdies'], color:'#6DA8E2'}
    const Illustration = {topic: 'ILLUSTRATIONS', color:'black', projects: ['Characters', 'Animals', 'Portraits'], color:'#FF8F50'}
    const Graphics = {topic: 'GRAPHICS', color:'black', projects: ['Covers', 'Posters', 'Standalone Graphics'], color:'#9FA5EF'}

    const Kinvoize = {type: 'images', name: 'Kinvoize', text: 'UI Prototype for a Banking Website. The goal was reduction of noise and visual pollution.', images: [InvoiceMain, InvoiceSecondary, InvoiceTertiary]}
    const Crowdies = {type: 'images',name: 'Crowdies', text: 'UI Prototype for a Crowdfunding Website. The goal was a focus on individual donors, and effective rerouting to other Campaigns.', images: [CrowdiesMain, CrowdiesSecondary, CrowdiesTertiary]}
    const Lucaslichner = {type: 'videos', name: 'lucaslichner.de', text: 'lucaslichner.de - My first own Website. Retired due to it being hard to maintain, bad modularity, and no way to display UI work well.', link: 'https://lucaslichner.de/', video: LLVideo}
    const ImageEditor = {type: 'videos', name: 'ImageEditor', text: 'Image Editor - A lightweight Image Editor with off-the-wall styling', link: 'https://lucaslichner-image-editor.netlify.app/', video: IEVideo}
    const MockWebshop = {type: 'videos', name: 'MockWebshop', text: 'Mock Webshop - built in React with fully functioning Product and User Management', link: 'https://lucaslichner-web2022.netlify.app/', video: LLVideo}
    
    
    const allProjects = [Kinvoize, Crowdies, Lucaslichner, ImageEditor, MockWebshop]
    const topics  = [Frontend, UI, Illustration, Graphics];
    const [selectedTopic, setSelectedTopic] = useState([])
    const [projects, setProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState([]);
    const [color, setColor] = useState('#000000')

    const myRef = useRef(null)

    const balls =  topics.map((topic) => 
        <SelectBall setProjects={setProjects} setSelectedProject={setSelectedProject} projects={projects} selectedTopic={selectedTopic} setSelectedTopic={setSelectedTopic} topic={topic} />
    )

    const oblates =  projects.map((project) => 
    <SelectOblate   selectedProject={selectedProject} executeScroll={executeScroll} setSelectedProject={setSelectedProject} project={project} />
    ) 
   


    
    const selProj = allProjects.map((project) => {
    if(project.type === 'images' && project.name === selectedProject){
    return <div ref={myRef}>
    <ImageContent text={project.text} images={project.images}/>
    </div>
    }else if(project.type === 'videos' && project.name === selectedProject){
    return    <div ref={myRef}>
    <VideoContent link= {project.link} title={project.text} video={project.video}/>
    </div>  
    }})
    

    console.log(selProj)
    
    function executeScroll(){
        setTimeout(() => {
        myRef.current.scrollIntoView({behavior: "smooth"})   
    }, 500) 
    }
            return (
                            <div className="marginContainer">
                
                                <a className="hoverPar" id='hbutton' href = "https://github.com/oopera.html" target="_blank"> GitHub </a>
                                <a className="right" id='hbutton' href = "https://www.linkedin.com/in/lucaslichner/" target="_blank2"> LinkedIn </a>    
                            
                            <DividerLine color={color}/>
                                <p style={{fontSize: '600%',   lineHeight: "0.8"}} id='aboutMe'>Lucas Lichner</p>
                                                  <DividerLine color={color}/>
                            <AboutMe
                            />
                            <DividerLine color={color}/>
                                <div className="centerClass sideScroll">
                                    {balls}
                                </div>
                            <DividerLine color={color}/>
                                <p>{selectedTopic}</p>
                                    <div className="centerClass sideScroll">
                                        {oblates }
                                    </div>
                            {projects.length !== 0 && 
                            <DividerLine color={color}/>
                            }  
                            {selProj}
                            <ScrollToTop/>
                            <Footer/>
                            </div>
            )
}


function DividerLine(props){
    return(
        <div style={{backgroundColor:props.color}} className="dividerLine"></div> 
    )
}

function ScrollToTop(){
    const aboutMe = document.getElementById('aboutMe');
    
    return(
        <div className="hoverPar"  onClick={() => aboutMe.scrollIntoView({behavior: 'smooth'})}> Back to Top </div>
    )
}




function SelectBall(props){
    let styles;
    let styles2;
    if(props.selectedTopic === props.topic.topic){
         styles = 'selectBall blur centerClass'
        styles2={
            opacity:'0',

        }
        }else{
            styles = 'selectBall centerClass'
            styles2={
                color:'#000000',
 
            }
        }

    function clearStuff(){
        props.setSelectedProject([])
        props.setSelectedTopic([])
    }
    function doStuff(){
        props.selectedTopic === props.topic.topic ? clearStuff() : props.setSelectedTopic(props.topic.topic); 
        props.selectedTopic === props.topic.topic ? props.setProjects([]) : props.setProjects(props.topic.projects)
    }
    
    return(
        <div style={{background: props.topic.color}}onClick={() => doStuff()} className={styles}>
            <p style={styles2}>{props.topic.topic}</p>
        </div>

    )
}

function SelectOblate(props){
    let styles;
    let styles2;

    if(props.selectedProject === props.project){
        styles = 'selectBall blur centerClass'
       styles2={
           color:'#FFFFFF'
       }
       }else{
           styles = 'selectBall centerClass'
           styles2={
               color:'#FFFFFF'
           }
       }
    return(
 
    <div  onClick={()=>{props.selectedProject === props.project ? props.setSelectedProject([]) : props.setSelectedProject(props.project); props.executeScroll()}} style={{styles}} className="selectOblate selectors centerClass">

        <p style={styles2}>{props.project}</p>
</div>
    )
}


export default App;

//{{background: 'radial-gradient(circle, #ffffff 0%, '+props.topic.color+' 100%)'}}