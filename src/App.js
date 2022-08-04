import './App.css';
import {useRef, useState} from "react";
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

function App() {

    const Frontend = {topic: 'FRONTEND', color:'black', projects: ['lucaslichner.de', 'Mock webshop', 'Image Editor']};
    const UI = {topic: 'UI', color:'black', projects: ['Kinvoize', 'Crowdies']}
    const Illustration = {topic: 'ILLUSTRATIONS', color:'black', projects: ['Characters', 'Animals', 'Portraits']}
    const Graphics = {topic: 'GRAPHICS', color:'black', projects: ['Covers', 'Posters', 'Standalone Graphics']}

    const [topics, setTopics] = useState([Frontend, UI, Illustration, Graphics]);
    const [selectedTopic, setSelectedTopic] = useState([])
    const [projects, setProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState([]);
    const [color, setColor] = useState('#000000')


    const balls =  topics.map((topic) => 
        <SelectBall setProjects={setProjects} projects={projects} selectedTopic={selectedTopic} setSelectedTopic={setSelectedTopic} topic={topic} />
    )

    const oblates =  projects.map((project) => 
    <SelectOblate   selectedProject={selectedProject} executeScroll={executeScroll} setSelectedProject={setSelectedProject} project={project} />
    ) 

    const myRef = useRef(null)

    function executeScroll(){
        myRef.current.scrollIntoView({behavior: "smooth"})    
    }
            return (
                            <div className="marginContainer">
                
                                <p> HI THERE</p>
                            <DividerLine color={color}/>
                                <p style={{fontSize: '800%',   lineHeight: "0.8"}} id='aboutMe'>Lucas Lichner</p>
                                                  <DividerLine color={color}/>
                            <AboutMe />
                            <DividerLine color={color}/>
                                <p>Topics</p>
                                <div className="centerClass sideScroll">
                                    
                            {balls}
                                </div>
                            <DividerLine color={color}/>
                                    <p>Projects</p>
                                <div className="centerClass sideScroll">
                            {oblates }
                            </div>
                            {projects.length !== 0 && 
                            <DividerLine color={color}/>
                            }  
                            {selectedProject === 'Kinvoize' &&
                                <div ref={myRef} className="marginContainer">
                                    <p>UI Prototype for a Banking Website. The goal was reduction of noise and visual pollution. </p>
                                    <img src={InvoiceMain} alt='huh'/>
                                    <img src={InvoiceSecondary} alt='huh'/>
                                    <img src={InvoiceTertiary} alt='huh'/>
                                </div>
                                
                                }
                            {selectedProject === 'Crowdies' &&
                                <div className="marginContainer middleContainer">
                                    <p>UI Prototype for a Crowdfunding Website. The goal was a focus on individual donors, and effective rerouting to other Campaigns. </p>
                                    <img ref={myRef}  src={CrowdiesMain} alt='huh'/>
                                    <img src={CrowdiesSecondary} alt='huh'/>
                                    <img src={CrowdiesTertiary} alt='huh'/>
                                </div>
                                }
                            {selectedProject === 'lucaslichner.de' &&
                                <div className="marginContainer">
                                    <a href = "https://lucaslichner.de/" target="_blank2">OLD PORTFOLIO PAGE</a>
                                    <video ref={myRef} autoplay='autoplay' name="Video Name">
                                    <source src={LLVideo}/>
                                    </video>
                                </div>
                                }
                                        {selectedProject ===  'Image Editor' &&
                                <div className="marginContainer">
                                    <a href = "https://lucaslichner-image-editor.netlify.app/" target="_blank3">IMAGE EDITOR</a>
                                    <video ref={myRef} autoplay='autoplay' name="Video Name">
                                    <source src={IEVideo}/>
                                    </video>
                                </div>
                                }

                            {selectedProject === 'Mock webshop' &&
                                <div className="marginContainer">
                                    <a href = "https://lucaslichner-web2022.netlify.app/" target="_blank2">MOCK WEBSHOP</a>
                                    <video ref={myRef} autoplay='autoplay' name="Video Name">
                                    <source src={LLVideo}/>
                                    </video>
                                </div>
                                }
                            <ScrollToTop/>
                            <Footer/>
                            </div>
            )
}

function Content(){


}

function DividerLine(props){
    return(
        <div style={{backgroundColor:props.color}} className="dividerLine"></div> 
    )
}

function ScrollToTop(){
    const aboutMe = document.getElementById('aboutMe');
    
    return(
        <div onClick={() => aboutMe.scrollIntoView({behavior: 'smooth'})}> Back to Top </div>
    )
}

function Footer(){

    return(
        <>
        <table className="footer">
        <tr>
            <td>Brought to you by Lucas Lichner 2022</td>
        </tr>
        <tr>
            <td>Made in React {'<3'} </td>
        </tr>
        <tr>
            <td>You can reach me here: ll@lucaslichner.de</td>
        </tr>
        </table>
    </>

    )


}


function SelectBall(props){
    let styles;
    let styles2;
    if(props.selectedTopic === props.topic.topic){
         styles = 'selectBall blur centerClass'
        styles2={
            color:'#FFFFFF',

        }
        }else{
            styles = 'selectBall centerClass'
            styles2={
                color:'#000000',
 
            }
        }
    
    
    return(
        <div className='centerClass'>
        <div onClick={() =>{props.selectedTopic === props.topic.topic ? props.setSelectedTopic([]) : props.setSelectedTopic(props.topic.topic); props.selectedTopic === props.topic.topic ? props.setProjects([]) : props.setProjects(props.topic.projects)}} className={styles}>

            </div>
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
               color:'#000000'
           }
       }
    return(
        <div>
            <p style={styles2}>{props.project}</p>
    <div  onClick={()=>{props.setSelectedProject(props.project); props.executeScroll()}} style={{styles}} className="selectBall centerClass">
</div>
<p style={styles2}>{props.project}</p>
</div>
    )
}


export default App;

