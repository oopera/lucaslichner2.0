import styles from './App.css';
import {useEffect, useRef, useState, useCallback} from "react";
import React from "react";
import AboutMe from "./Components/AboutMe";
import InvoiceMain from './Images/UI/InvoiceMain.jpg'
import InvoiceSecondary from './Images/UI/InvoiceSecondary.jpg'
import InvoiceTertiary from './Images/UI/InvoiceTertiary.jpg'
import CrowdiesMain from './Images/UI/CrowdiesMain.jpg'
import CrowdiesSecondary from './Images/UI/CrowdiesSecondary.jpg'
import CrowdiesTertiary from './Images/UI/CrowdiesTertiary.jpg'
import LLVideo from './Videos/LUCASLICHNERSEITE.mp4'
import IEVideo from './Videos/IMAGEEDITOR.mp4'
import MOCKVIDEO from './Videos/MOCKWEBSHOP.mp4'
import {ImageContent, VideoContent} from './Components/Content';
import Footer from './Components/Footer';
import SmallLotusBouquet from './Images/Covers/SmallLotusBouquet.jpg'
import SMALLLOTUSBOUQUET from './Videos/SMALLLOTUSBOUQUET.mp4'
import SCHMOUXWHITE from './Images/StandaloneGraphics/SCHMOUXWHITE.jpg'
import Misato from './Images/Chars/Misato.png'
import Snake from './Images/Chars/Snake.png'
import Tatsumaki from './Images/Chars/Tatsumaki.png'
import Tiger from './Images/Animals/Tiger.png'
import Humpy from './Images/Poster/Humpy.jpg'
import Lucas from './Images/Portraits/LUCAS.png'
import {CSSTransition} from 'react-transition-group'; // ES6


function App() {
    const Frontend = {topic: 'Frontend', projects: ['lucaslichner.de', 'MockWebshop', 'ImageEditor'], color:'#F3Fe39'};
    const UI = {topic: 'Ui', color:'black', projects: ['Kinvoize', 'Crowdies'], color:'#6DA8E2'}
    const Illustration = {topic: 'Illustrations', color:'black', projects: ['Characters', 'Animals', 'Portraits'], color:'#FF8F50'}
    const Graphics = {topic: 'Graphics', color:'black', projects: ['Covers', 'Posters', 'Standalone Graphics'], color:'#9FA5EF'}

    const Kinvoize = {type: 'images', name: 'Kinvoize', text: 'UI Prototype for a Banking Website. The goal was limiting visual noise and pollution.', images: [InvoiceMain, InvoiceSecondary, InvoiceTertiary]}
    const Crowdies = {type: 'images',name: 'Crowdies', text: 'UI Prototype for a Crowdfunding Website. The goal was a focus on individual donors, and effective rerouting to other Campaigns.', images: [CrowdiesMain, CrowdiesSecondary, CrowdiesTertiary]}
    const Lucaslichner = {type: 'videos', name: 'lucaslichner.de', text: 'lucaslichner.de 1.0 - My first own Website. Retired due to it being hard to maintain, having bad modularity, no real content management, and no way to display large work well.', link: 'https://lucaslichnertwopointo.netlify.app/', video: LLVideo}
    const ImageEditor = {type: 'videos', name: 'ImageEditor', text: 'Image Editor - A lightweight Image Editor with off-the-wall styling', link: 'https://lucaslichner-image-editor.netlify.app/', video: IEVideo}
    const MockWebshop = {type: 'videos', name: 'MockWebshop', text: 'Mock Webshop - built in React with fully functioning Product and User Management', link: 'https://lucaslichner-web2022.netlify.app/', video: MOCKVIDEO}
    const Covers = {type: 'mixed', name: 'Covers', text: 'A cover, Vinyl Design and Animation for a Song i made in 2021.', images: [SmallLotusBouquet], video: [SMALLLOTUSBOUQUET]}
    const StandaloneGraphics = {type: 'images', name: 'Standalone Graphics', text: 'Some standalone Graphics, not tied to any Theme or goal.', images: [SCHMOUXWHITE]}
    const Characters = {type: 'images', name: 'Characters', text: 'Some Characters i have illustrated.', images: [Misato, Snake, Tatsumaki]}
    const Animals = {type: 'images', name: 'Animals', text: 'Some Animals i have illustrated.', images: [Tiger]}
    const Posters = {type: 'images', name: 'Posters', text: 'Some Posters i have designed', images: [Humpy] }
    const Portraits = {type: 'images', name: 'Portraits', text: 'Some Portraits i have painted', images: [Lucas]}

    const allProjects = [Kinvoize, Crowdies, Lucaslichner, ImageEditor, MockWebshop, Covers, StandaloneGraphics, Characters, Animals, Posters, Portraits]
    const topics  = [Frontend, UI, Illustration, Graphics];
    const [selectedTopic, setSelectedTopic] = useState('Ui')
    const [projects, setProjects] = useState(UI.projects);
    const [selectedProject, setSelectedProject] = useState('Kinvoize');
    const [TransitionTrigger, setTransitionTrigger] = useState(false);

    useEffect(() => {
        console.log('WITH ' + String.fromCodePoint(0x2764) + ' FROM LUCAS')
    },[]);
    const myRef = useRef(null)

    const balls =  topics.map((topic) => 
        <SelectBall setTransitionTrigger={setTransitionTrigger} key={topic.name} setProjects={setProjects} setSelectedProject={setSelectedProject} projects={projects} selectedTopic={selectedTopic} setSelectedTopic={setSelectedTopic} topic={topic} />
    )

    const oblates =  projects.map((project) => 
        <SelectOblate  key={project.name} selectedProject={selectedProject} executeScroll={executeScroll} setSelectedProject={setSelectedProject} project={project} />
    ) 
   
    
    const selProj = allProjects.map((project) => {
    if(project.type === 'images' && project.name === selectedProject){
    return <div key={project.name} ref={myRef}>
        <ImageContent text={project.text} images={project.images}/>
    </div>
    }else if(project.type === 'videos' && project.name === selectedProject){
    return    <div key={project.name} ref={myRef}>
        <VideoContent link= {project.link} title={project.text} video={project.video}/>
    </div>  
    }else if(project.type === 'mixed' && project.name === selectedProject){
    return    <div key={project.name} ref={myRef}>
        <ImageContent text={project.text} images={project.images}/>
        <VideoContent link= {''} title={''} video={project.video}/>
        </div>
    }}
    )
    
    function executeScroll(){
        setTimeout(() => {
        myRef.current.scrollIntoView({behavior: "smooth"})   
    }, 500)}
    const konsti = document.getElementById('root')
    const shtickies = Array.from(document.getElementsByClassName('stickyStuff'))
    console.log(shtickies)
    const [ypos, setYpos] = useState(konsti.scrollTop)
    document.getElementById('root').addEventListener("scroll", function () {
        myFunc();
    }, false);
    
    function myFunc() {
        if(konsti.scrollTop){
            console.log('down')
            setYpos(konsti.scrollTop)
            shtickies.map((element) => {
                element.classList.remove('sticky')
            })
        }else{
            console.log('up')
            setYpos(konsti.scrollTop)
            shtickies.map((element) => {
                element.classList.add('sticky')
            })
        }
    }

    /* 
    Cool Stuff to do: 
    Animted Blobs anstatt circles 
    REACT CSS ANINMATIONS 
    
      <CSSTransition 
                                in={TransitionTrigger} 
                                timeout={200} 
                                classNames="alert"
                                onEnter={() => setTransitionTrigger(false)}
                                >
           </CSSTransition>
    */ 


    const [inProp, setInProp] = useState(true);
    return (
                            <div className="marginContainer">
                                <div>
                                <a className="hoverPar sticky" id='hbutton' href = "https://github.com/oopera.html" target="_blank"> GitHub </a>
                                <a className="right sticky" id='hbutton' href = "https://www.linkedin.com/in/lucaslichner/" target="_blank2"> LinkedIn </a>    
                                </div>
                            <DividerLine/>

                                <p style={{fontSize: '600%', marginLeft:'0px', whiteSpace: 'nowrap',  lineHeight: "0.8"}}  className='scrolly' id='aboutMe'>Lucas<br></br> Lichner</p>

                            <DividerLine/>
                            <AboutMe
                            />
                            <DividerLine/>
                                <div className="centerClass sideScroll">
                                    {balls}
                                </div>
                            <DividerLine/>
                                <p>{selectedTopic}</p>
                             
                                <div className="centerClass sideScroll">
                                    {oblates}
                                </div>
                             
                            {projects.length !== 0 && 
                            <DividerLine/>
                            }  
                            {selProj}
                            <ScrollToTop/>
                            <Footer/>
                            </div>
            )
}

function DividerLine(props){
    return(
        <div className="dividerLine"></div> 
    )
}

function ScrollToTop(){
    const aboutMe = document.getElementById('aboutMe');
    
    return(
        <a className="hoverPar"  onClick={() => aboutMe.scrollIntoView({behavior: 'smooth'})}> Back to Top </a>
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
        props.setTransitionTrigger(true);
        }
    
    return(
        <div style={{background: props.topic.color}}onClick={() => doStuff()} className={styles}>
            <p style={styles2}>{props.topic.topic}</p>
        </div>

    )
}

function SelectOblate(props){
    let styles = "";
    let styles2;

    if(props.selectedProject === props.project){
        styles = 'lightblur'
       styles2={
           color:'#000000'
       }
       }else{
           styles2={
               color:'#000000'
           }
       }
    return(
        <div  onClick={()=>{props.selectedProject === props.project ? props.setSelectedProject([]) : props.setSelectedProject(props.project); props.executeScroll()}} className={"selectOblate selectors centerClass "+ styles}>
        <p style={styles2}>{props.project}</p>
</div>
    )
}

export default App;

//{{background: 'radial-gradient(circle, #ffffff 0%, '+props.topic.color+' 100%)'}}