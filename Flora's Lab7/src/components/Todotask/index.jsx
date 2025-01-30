import "./style.css"

export default function Todotask(props) {
    return(
        <>
        <div className="colorblock" style={{ background: props.category }}>
        <h3>{props.name}</h3>
        <p>Due Date: {props.date}</p>
        </div>
        </>
    )
    }