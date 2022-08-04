export default function ImageContent(props){

    const images = props.images.map((image) => 
    <img src={image} alt='an image'/>
    )

    return(
    <div ref={props.myRef} className="marginContainer middleContainer">
    <p>{props.text}</p>
        {images}
    </div>
    )

}