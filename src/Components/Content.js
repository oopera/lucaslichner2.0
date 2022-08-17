export function ImageContent(props){
    const images = props.images.map((image) => 
    <img key={image} src={image} alt='an image'/>
    )

    return(
    <div ref={props.myRef} className="marginContainer">
    <p className='sticky'>{props.text}</p>
        {images}
    </div>
    )

}

export function VideoContent(props){
    return(
        <div className="marginContainer">
             <a href = {props.link} target="_blank2">{props.title}</a>
             <video ref={props.ref} muted='muted' autoplay='autoPlay' name="Video Name">
             <source src={props.video}/>
             </video>
        </div>
    )
}