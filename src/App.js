import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import './App.css';
import {useRef, useState} from "react";
import React from "react";
import AboutMe from "./Components/AboutMe";
import InvoiceMain from './Images/InvoiceMain.png'
import InvoiceSecondary from './Images/InvoiceSecondary.png'
import InvoiceTertiary from './Images/InvoiceTertiary.png'
import CrowdiesMain from './Images/CrowdiesMain.png'
import CrowdiesSecondary from './Images/CrowdiesSecondary.png'
import CrowdiesTertiary from './Images/CrowdiesTertiary.png'
import LLVideo from './Images/LUCASLICHNERSEITE.mov'

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
    <SelectOblate   executeScroll={executeScroll}setSelectedProject={setSelectedProject} project={project} />
    ) 

    const myRef = useRef(null)

    function executeScroll(){
        myRef.current.scrollIntoView({behavior: "smooth"})    
    }
            return (
                            <div className="marginContainer">
                
                                <p> HI THERE</p>
                            <DividerLine color={color}/>
                                <p style={{fontSize: '800%'}} id='aboutMe'>Lucas Lichner</p>
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
                                    <img src={InvoiceMain} alt='huh'/>
                                    <img src={InvoiceSecondary} alt='huh'/>
                                    <img src={InvoiceTertiary} alt='huh'/>
                                </div>
                                
                                }
                            {selectedProject === 'Crowdies' &&
                                <div className="marginContainer">
                                    <img ref={myRef}  src={CrowdiesMain} alt='huh'/>
                                    <img src={CrowdiesSecondary} alt='huh'/>
                                    <img src={CrowdiesTertiary} alt='huh'/>
                                </div>
                                }
                            {selectedProject === 'lucaslichner.de' &&
                                <div className="marginContainer">
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
            color:'#FFFFFF'
        }
        }else{
            styles = 'selectBall centerClass'
            styles2={
                color:'#000000'
            }
        }
    
    console.log(props.projects)
    
    return(
        <div onClick={() =>{props.selectedTopic === props.topic.topic ? props.setSelectedTopic([]) : props.setSelectedTopic(props.topic.topic); props.selectedTopic === props.topic.topic ? props.setProjects([]) : props.setProjects(props.topic.projects)}} style={{styles}} className={styles}>
            <p style={styles2}>{props.topic.topic}</p>
        </div>

    )
}

function SelectOblate(props){
    const styles = {
        backgroundColor:props.color,
        border: '1px solid ' + props.color 
    }
    return(
    <div  onClick={()=>{props.setSelectedProject(props.project); props.executeScroll()}} style={{styles}} className="selectBall centerClass">
    {props.project}
</div>
    )
}


export default App;

/*



                                        {types.map((type) => {
                                            if(selectedTypes.includes(type)){
                                                return(
                                                    <div onClick={()=> {
                                                        selectedTypes.splice(selectedTypes.findIndex(element => element === type), 1); setRerender(!render)
                                                    }} className={'border border-black m-2 h-fit w-32 text-2xl bg-white text-black hover:bg-slate-600 hover:text-white'}>{type}</div>
                                                )
                                            }else{
                                                return(
                                                    <div onClick={()=> {
                                                        selectedTypes.push(type); setRerender(!render)
                                                    }} className={'m-2 h-fit w-32 bg-black text-white hover:bg-slate-600 hover:text-white'}>{type}</div>
                                                )
                                            }




                    <div className={'grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 mt-28  self-center items-center justify-center'}>

                        {openedItem !== true && (
                            <>
                        <div onClick={()=> addProduct()} className={'rounded-full h-40 w-80 bg-black text-white p-10 text-center self-center text-9xl'}>+</div>
                            {kleidung.map((kleid) => {
                                if ((openedItem === kleid._id && selectedTypes.includes(kleid.Type)) || (openedItem === kleid._id &&  selectedTypes.length === 0)) {
                                    return (
                                        <div onClick={(e)=>openItem(kleid._id, e)} key={kleid._id}
                                             className={'w-full h-full bg-white text-black border border-black self-center p-10'}>
                                            <p>{kleid.Name}</p>
                                            <p>{kleid.Color}</p>
                                            <p>{kleid.Size}</p>
                                            <p>{kleid.Type}</p>
                                            <p>{kleid.Description}</p>
                                            <p>{kleid.Brand}</p>
                                            <p>{kleid.Price}</p>
                                            <ImageSlider images={kleid.Img}/>

                                        </div>
                                    )
                                } else if(selectedTypes.includes(kleid.Type) || selectedTypes.length === 0) {
                                    return (
                                        <div onClick={(e)=>openItem(kleid._id, e)} key={kleid._id}
                                             className={'w-3/4 h-3/4 bg-white text-black border border-black self-center justify-self-center p-10'}>
                                            <p>Name: {kleid.Name}</p>
                                            <p>Color: {kleid.Color}</p>
                                            <p>Size: {kleid.Size}</p>
                                            <p>Type: {kleid.Type}</p>
                                            <p>Description: {kleid.Description}</p>
                                            <p>Brand: {kleid.Brand}</p>
                                            <p>Price: {kleid.Price}€</p>
                                            <ImageSlider images={kleid.Img}/>

                                        </div>
                                    )}else{
                                return
                        }
                            })}
                    </>
                        )}
                        {openedItem === true && (
                        <>
                            <div onClick={setOpenedItem}></div>
                        </>
                        */