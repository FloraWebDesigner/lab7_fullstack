import "./style.css"
export default function Taskreason(props) {
    return(
        <>
        <div className="gallery">
        <img src={props.url} alt={props.title}></img>
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
        </div>
        </>
    )
    }