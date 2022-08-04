export default function VideoContent(props){
    return(
        <div className="marginContainer ">
             <a className='hoverPar' href = {props.link} target="_blank2">{props.title}</a>
             <video ref={props.ref} autoplay='autoplay' name="Video Name">
             <source src={props.video}/>
             </video>
        </div>
    )
}